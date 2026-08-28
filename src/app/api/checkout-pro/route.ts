import { NextRequest, NextResponse } from "next/server";
import { Preference } from "mercadopago";
import { getMpClient, validateCartItems } from "@/lib/mercadopago";
import { createPendingOrder, validateCustomer, validateShippingAddress } from "@/lib/orders";
import { SITE } from "@/content/site";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const items = validateCartItems(body.items);
    const customer = validateCustomer(body.customer);
    const shippingAddress = validateShippingAddress(body.shippingAddress);
    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    const order = await createPendingOrder({ customer, shippingAddress, items, total });

    const preference = new Preference(getMpClient());
    const result = await preference.create({
      body: {
        items: items.map((item) => ({
          id: item.slug,
          title: item.name,
          quantity: item.qty,
          unit_price: item.price,
          currency_id: "MXN",
        })),
        payer: { name: customer.name, email: customer.email },
        external_reference: order.id,
        notification_url: `${SITE.url}/api/mercadopago/webhook`,
        back_urls: {
          success: `${SITE.url}/pago/exito`,
          failure: `${SITE.url}/pago/error`,
          pending: `${SITE.url}/pago/pendiente`,
        },
        auto_return: "approved",
        statement_descriptor: "YUME",
      },
    });

    return NextResponse.json({ initPoint: result.init_point, orderId: order.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error al crear la preferencia de pago.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
