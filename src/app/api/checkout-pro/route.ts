import { NextRequest, NextResponse } from "next/server";
import { Preference } from "mercadopago";
import { checkoutBaseUrl, getMpClient, notificationUrl, validateCartItems } from "@/lib/mercadopago";
import { createPendingOrder, validateCustomer, validateDelivery, validateDesignFileUrls } from "@/lib/orders";
import { deliverySurcharge } from "@/content/shipping";
import { localizeError } from "@/lib/errors";
import { rateLimited } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  if (rateLimited(req, "checkout", 10)) {
    return NextResponse.json({ error: localizeError("Demasiados intentos. Espera un minuto e intenta de nuevo.", req.headers.get("x-lang")) }, { status: 429 });
  }
  let lang: unknown;
  try {
    const body = await req.json();
    lang = body.lang;
    const backBase = `${checkoutBaseUrl()}${lang === "en" ? "/en/checkout" : "/pago"}`;
    const items = validateCartItems(body.items, { personalization: body.personalization, note: body.note, lang: body.lang });
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
          success: `${backBase}/${lang === "en" ? "success" : "exito"}`,
          failure: `${backBase}/error`,
          pending: `${backBase}/${lang === "en" ? "pending" : "pendiente"}`,
        },
        // MP refuses auto_return with localhost back_urls (local runs).
        ...(notificationUrl() ? { auto_return: "approved" as const } : {}),
        statement_descriptor: "YUME",
        // A pending preference stops being payable after 3 days instead of living forever.
        expires: true,
        expiration_date_to: new Date(Date.now() + 3 * 86400_000).toISOString(),
      },
    });

    return NextResponse.json({ initPoint: result.init_point, orderId: order.id });
  } catch (err) {
    console.error("[checkout-pro] error", err);
    const message = err instanceof Error ? err.message : "Error al crear la preferencia de pago.";
    return NextResponse.json({ error: localizeError(message, lang) }, { status: 400 });
  }
}
