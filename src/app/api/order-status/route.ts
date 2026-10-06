import { NextRequest, NextResponse } from "next/server";
import { getOrderById } from "@/lib/orders";
import { rateLimited } from "@/lib/rate-limit";

// Read-only status for the result pages. The order id is an unguessable UUID
// (it is Mercado Pago's external_reference), and only non-personal fields are
// returned: what the receipt needs and nothing about the buyer.
export const dynamic = "force-dynamic";
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function GET(req: NextRequest) {
  if (rateLimited(req, "order-status", 30)) return NextResponse.json({ error: "rate limited" }, { status: 429 });
  const id = req.nextUrl.searchParams.get("id") ?? "";
  if (!UUID_RE.test(id)) return NextResponse.json({ error: "not found" }, { status: 404 });
  try {
    const order = await getOrderById(id);
    if (!order) return NextResponse.json({ error: "not found" }, { status: 404 });
    const subtotal = order.items.reduce((sum, i) => sum + i.price * i.qty, 0);
    return NextResponse.json({
      status: order.status,
      number: order.id.slice(0, 8),
      total: Number(order.total),
      shipping: Math.max(0, Number(order.total) - subtotal),
    });
  } catch (err) {
    console.error("[order-status] error", err);
    return NextResponse.json({ error: "error" }, { status: 500 });
  }
}
