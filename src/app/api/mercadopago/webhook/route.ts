import { NextRequest, NextResponse } from "next/server";
import { Payment } from "mercadopago";
import { getMpClient } from "@/lib/mercadopago";
import { applyPayment } from "@/lib/payments";
import { verifyMpSignature } from "@/lib/webhook-signature";

// Mercado Pago calls this on every payment status change (approved, an OXXO
// voucher getting paid days later, a rejection, a refund...). The body is
// never trusted: the real payment is re-fetched from MP's API and applied to
// the order by external_reference (forward-only, see lib/payment-state.ts).
// Failures on our side (database, MP API) answer 5xx so MP retries; a
// notification that can never succeed (unknown payment) answers 200.

/** Enforced only once MERCADOPAGO_WEBHOOK_SECRET is set, so deploying this
 * before the owner copies the secret from MP's panel does not break payments. */
function validSignature(req: NextRequest, dataId: string | null): boolean {
  const secret = process.env.MERCADOPAGO_WEBHOOK_SECRET;
  if (!secret) {
    console.warn("[webhook] MERCADOPAGO_WEBHOOK_SECRET no configurado: firma sin verificar.");
    return true;
  }
  return verifyMpSignature(secret, req.headers.get("x-signature") ?? "", req.headers.get("x-request-id") ?? "", dataId);
}

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  let body: { type?: string; data?: { id?: string | number } } = {};
  try {
    body = await req.json();
  } catch {
    // some notifications arrive with no body: query params cover it
  }
  const topic = url.searchParams.get("type") || url.searchParams.get("topic") || body.type;
  const paymentId = url.searchParams.get("data.id") || url.searchParams.get("id") || (body.data?.id != null ? String(body.data.id) : null);

  if (!validSignature(req, url.searchParams.get("data.id") ?? (body.data?.id != null ? String(body.data.id) : null))) {
    return NextResponse.json({ error: "invalid signature" }, { status: 401 });
  }
  if (topic !== "payment" || !paymentId) return NextResponse.json({ received: true });

  try {
    let payment;
    try {
      payment = await new Payment(getMpClient()).get({ id: paymentId });
    } catch (err) {
      if ((err as { status?: number }).status === 404) {
        console.warn(`[webhook] payment ${paymentId} not found at Mercado Pago`);
        return NextResponse.json({ received: true });
      }
      throw err;
    }
    if (!payment.external_reference) {
      console.warn(`[webhook] payment ${paymentId} has no external_reference`);
      return NextResponse.json({ received: true });
    }
    await applyPayment(payment.external_reference, payment);
    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("[webhook] error, MP will retry", err);
    return NextResponse.json({ error: "retry" }, { status: 500 });
  }
}

// Mercado Pago sometimes validates the URL with a GET before sending notifications.
export async function GET() {
  return NextResponse.json({ ok: true });
}
