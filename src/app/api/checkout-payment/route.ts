import { NextRequest, NextResponse } from "next/server";
import { Payment } from "mercadopago";
import { getMpClient, validateCartItems } from "@/lib/mercadopago";
import { createPendingOrder, markOrderAsPaid, markOrderAsFailed, markEmailsAsSent, validateCustomer, validateShippingAddress } from "@/lib/orders";
import { sendOrderEmails } from "@/lib/email";
import { SITE } from "@/content/site";

// Backs the on-site Payment Brick (card entry + OXXO/cash — no redirect).
// `transaction_amount` is always recomputed from `items` server-side; the
// amount inside `formData` is never trusted directly, since it travels
// through the client before reaching us.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const items = validateCartItems(body.items);
    const customer = validateCustomer(body.customer);
    const shippingAddress = validateShippingAddress(body.shippingAddress);
    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const formData = body.formData ?? {};

    if (!formData.payer?.email) {
      return NextResponse.json({ error: "Falta el correo del pagador." }, { status: 400 });
    }

    const order = await createPendingOrder({ customer, shippingAddress, items, total });

    const payment = new Payment(getMpClient());
    const result = await payment.create({
      body: {
        transaction_amount: total,
        token: formData.token,
        description: items.map((i) => `${i.name} x${i.qty}`).join(", "),
        installments: formData.installments ? Number(formData.installments) : 1,
        payment_method_id: formData.payment_method_id,
        issuer_id: formData.issuer_id,
        payer: {
          email: formData.payer.email,
          identification: formData.payer.identification,
        },
        notification_url: `${SITE.url}/api/mercadopago/webhook`,
        external_reference: order.id,
      },
    });

    // The Brick resolves synchronously, so we finalize the order right here
    // instead of waiting for the webhook — the webhook still fires too and
    // is the idempotent source of truth (emails_sent guards against a
    // duplicate send if both paths race).
    if (result.status === "approved" && result.id) {
      const updatedOrder = await markOrderAsPaid(order.id, String(result.id));
      if (!updatedOrder.emails_sent) {
        await sendOrderEmails(updatedOrder);
        await markEmailsAsSent(order.id);
      }
    } else if (result.status === "rejected") {
      await markOrderAsFailed(order.id);
    }
    // "pending" (e.g. an OXXO voucher not yet paid) is left as-is — the
    // webhook finalizes it whenever the customer actually pays at the store.

    return NextResponse.json({
      id: result.id,
      orderId: order.id,
      status: result.status,
      status_detail: result.status_detail,
      point_of_interaction: result.point_of_interaction,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error al procesar el pago.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
