import { Preference } from "mercadopago";
import { checkoutBaseUrl, getMpClient, notificationUrl, validateCartItems } from "@/lib/mercadopago";
import { createPendingOrder, validateCustomer, validateDelivery, validateDesignFileUrls } from "@/lib/orders";
import { deliverySurcharge } from "@/content/shipping";

// Creates the pending order and its Mercado Pago Checkout Pro preference.
// Shared by the site's checkout (/api/checkout-pro) and the MCP create_checkout
// tool, so an agent-started order is priced and recorded exactly like a human one.
// Throws Spanish validation messages (localizeError translates them).
export async function createCheckoutPro(body: Record<string, unknown>): Promise<{ initPoint: string; orderId: string; total: number }> {
  const lang = body.lang;
  const backBase = `${checkoutBaseUrl()}${lang === "en" ? "/en/checkout" : "/pago"}`;
  const items = validateCartItems(body.items, { personalization: body.personalization, note: body.note, lang: body.lang, src: body.src, promoCode: body.promoCode });
  const customer = validateCustomer(body.customer);
  const delivery = validateDelivery(body.delivery);
  const designFileUrls = validateDesignFileUrls(body.designFileUrls);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const listSubtotal = items.reduce((sum, item) => sum + (item.listPrice ?? item.price) * item.qty, 0);
  const surcharge = deliverySurcharge(delivery.method, listSubtotal);
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

  return { initPoint: result.init_point!, orderId: order.id, total };
}
