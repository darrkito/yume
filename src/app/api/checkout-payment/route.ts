import { NextRequest, NextResponse } from "next/server";
import { Payment } from "mercadopago";
import { getMpClient, notificationUrl, validateCartItems } from "@/lib/mercadopago";
import { createPendingOrder, validateCustomer, validateDelivery, validateDesignFileUrls } from "@/lib/orders";
import { applyPayment } from "@/lib/payments";
import { localizeError } from "@/lib/errors";
import { rateLimited } from "@/lib/rate-limit";
import { deliverySurcharge } from "@/content/shipping";

// Backs the on-site Payment Brick (card entry + OXXO/cash — no redirect).
// `transaction_amount` is always recomputed from `items` server-side; the
// amount inside `formData` is never trusted directly, since it travels
// through the client before reaching us.
export async function POST(req: NextRequest) {
  if (rateLimited(req, "checkout", 10)) {
    return NextResponse.json({ error: localizeError("Demasiados intentos. Espera un minuto e intenta de nuevo.", req.headers.get("x-lang")) }, { status: 429 });
  }
  let result;
  let orderId: string;
  let lang: unknown;
  try {
    const body = await req.json();
    lang = body.lang;
    const items = validateCartItems(body.items, { personalization: body.personalization, note: body.note, lang: body.lang, src: body.src });
    const customer = validateCustomer(body.customer);
    const delivery = validateDelivery(body.delivery);
    const designFileUrls = validateDesignFileUrls(body.designFileUrls);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const total = subtotal + deliverySurcharge(delivery.method, subtotal);
    const formData = body.formData ?? {};

    const order = await createPendingOrder({ customer, delivery, items, total, designFileUrls });
    orderId = order.id;

    const payment = new Payment(getMpClient());
    result = await payment.create({
      body: {
        transaction_amount: total,
        token: formData.token,
        description: [
          ...items.map((i) => `${i.name} x${i.qty}`),
          delivery.method === "recoleccion_casablanca" ? "Recolección en sucursal Casa Blanca" : "Envío a domicilio",
        ].join(", "),
        installments: formData.installments ? Number(formData.installments) : 1,
        payment_method_id: formData.payment_method_id,
        issuer_id: formData.issuer_id,
        payer: {
          // The order's email, not whatever the Brick form sent, so the
          // receipt, the order and Mercado Pago all agree.
          email: customer.email,
          identification: formData.payer?.identification,
        },
        notification_url: notificationUrl(),
        external_reference: order.id,
        statement_descriptor: "YUME",
      },
      // One key per order + card token: a network retry of the same attempt
      // returns the same payment instead of charging twice.
      requestOptions: { idempotencyKey: `${order.id}:${formData.token ?? formData.payment_method_id ?? "x"}` },
    });
  } catch (err) {
    console.error("[checkout-payment] error", err);
    const message = err instanceof Error ? err.message : "Error al procesar el pago.";
    return NextResponse.json({ error: localizeError(message, lang) }, { status: 400 });
  }

  // Money may already have moved. From here on, bookkeeping problems are
  // logged for the owner and never shown to the customer as a failed payment
  // (that is how a card gets charged twice). The webhook re-applies the same
  // payment later, so a transient failure here self-heals.
  try {
    await applyPayment(orderId, result);
  } catch (err) {
    console.error(`[ALERT] payment ${result.id} (${result.status}) for order ${orderId} could not be recorded`, err);
  }

  return NextResponse.json({
    id: result.id,
    orderId,
    status: result.status,
    status_detail: result.status_detail,
    point_of_interaction: result.point_of_interaction,
    // For cash vouchers (OXXO...): the voucher link lives in transaction_details
    // (point_of_interaction is empty for them), and the rest is shown on the page.
    ticket_url: result.transaction_details?.external_resource_url ?? result.point_of_interaction?.transaction_data?.ticket_url,
    payment_method_id: result.payment_method_id,
    date_of_expiration: result.date_of_expiration,
    reference: result.transaction_details?.payment_method_reference_id,
    amount: result.transaction_amount,
  });
}
