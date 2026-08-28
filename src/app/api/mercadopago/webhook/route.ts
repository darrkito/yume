import { NextRequest, NextResponse } from "next/server";
import { Payment } from "mercadopago";
import { getMpClient } from "@/lib/mercadopago";

// Mercado Pago calls this on every payment status change (approved, an OXXO
// voucher getting paid at the store days later, a rejection, etc.). There's
// no order database yet — this just logs the confirmed status server-side so
// it shows up in Vercel's function logs; check the Mercado Pago dashboard
// (Actividad) for the source of truth on each payment until an orders table
// exists.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const paymentId = body.data?.id ?? body.id;
    if (body.type === "payment" && paymentId) {
      const payment = new Payment(getMpClient());
      const result = await payment.get({ id: paymentId });
      console.log(
        `[mercadopago webhook] payment ${paymentId}: status=${result.status} detail=${result.status_detail} amount=${result.transaction_amount} ref=${result.external_reference}`
      );
    }
    return NextResponse.json({ received: true });
  } catch (err) {
    // Always 200 — a non-2xx makes Mercado Pago retry the same notification
    // repeatedly. Log and move on; we can't fulfill automatically today.
    console.error("[mercadopago webhook] error", err);
    return NextResponse.json({ received: true });
  }
}
