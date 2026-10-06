import { NextRequest, NextResponse } from "next/server";
import { Preference } from "mercadopago";
import { checkoutBaseUrl, getMpClient, notificationUrl, validateCartItems } from "@/lib/mercadopago";
import { createPendingOrder, validateCustomer, validateDelivery, validateDesignFileUrls } from "@/lib/orders";
import { deliverySurcharge } from "@/content/shipping";
import { rateLimited } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  if (rateLimited(req, "checkout", 10)) {
    return NextResponse.json({ error: "Demasiados intentos. Espera un minuto e intenta de nuevo." }, { status: 429 });
  }
  try {
    const body = await req.json();
    const items = validateCartItems(body.items, { personalization: body.personalization, note: body.note });
    const customer = validateCustomer(body.customer);
    const delivery = validateDelivery(body.delivery);
    const designFileUrls = validateDesignFileUrls(body.designFileUrls);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const surcharge = deliverySurcharge(delivery.method, subtotal);
    const total = subtotal + surcharge;

    const order = await createPendingOrder({ customer, delivery, items, total, designFileUrls });

    const preference = new Preference(getMpClient());
    const result = await preference.create({
      body: {
        items: [
          ...items.map((item) => ({
            id: item.slug,
            title: item.name,
            quantity: item.qty,
            unit_price: item.price,
            currency_id: "MXN",
          })),
          ...(surcharge > 0
            ? [
                {
                  id: delivery.method === "recoleccion_casablanca" ? "recoleccion-casablanca" : "envio-nacional",
                  title: delivery.method === "recoleccion_casablanca" ? "Recolección en sucursal Casa Blanca" : "Envío a domicilio",
                  quantity: 1,
                  unit_price: surcharge,
                  currency_id: "MXN",
                },
              ]
            : []),
        ],
        payer: { name: customer.name, email: customer.email },
        external_reference: order.id,
        notification_url: notificationUrl(),
        back_urls: {
          success: `${checkoutBaseUrl()}/pago/exito`,
          failure: `${checkoutBaseUrl()}/pago/error`,
          pending: `${checkoutBaseUrl()}/pago/pendiente`,
        },
        // MP refuses auto_return with localhost back_urls (local runs).
        ...(notificationUrl() ? { auto_return: "approved" as const } : {}),
        statement_descriptor: "YUME",
      },
    });

    return NextResponse.json({ initPoint: result.init_point, orderId: order.id });
  } catch (err) {
    console.error("[checkout-pro] error", err);
    const message = err instanceof Error ? err.message : "Error al crear la preferencia de pago.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
