import { NextRequest, NextResponse } from "next/server";
import { Payment } from "mercadopago";
import { getMpClient } from "@/lib/mercadopago";
import { getOrderById, markOrderAsPaid, markOrderAsFailed, markEmailsAsSent } from "@/lib/orders";
import { sendOrderEmails } from "@/lib/email";

// Mercado Pago calls this on every payment status change (approved, an OXXO
// voucher getting paid at the store days later, a rejection, etc.). Never
// trusts the status in the notification body — always re-fetches the real
// payment from Mercado Pago's API, then looks up the order by
// external_reference (the order's own id) and updates it. Always returns
// 200 (even on error) so Mercado Pago doesn't retry the same notification
// in a loop; errors are logged for manual follow-up instead.
export async function POST(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const topicFromQuery = url.searchParams.get("type") || url.searchParams.get("topic");
    const idFromQuery = url.searchParams.get("data.id") || url.searchParams.get("id");

    let body: { type?: string; data?: { id?: string } } = {};
    try {
      body = await req.json();
    } catch {
      // some notifications arrive with no body — fine, query params cover it
    }

    const topic = topicFromQuery || body.type;
    const paymentId = idFromQuery || body.data?.id;

    if (topic !== "payment" || !paymentId) {
      return NextResponse.json({ received: true });
    }

    const payment = new Payment(getMpClient());
    const result = await payment.get({ id: paymentId });
    const orderId = result.external_reference;

    if (!orderId) {
      console.warn(`[mercadopago webhook] payment ${paymentId} has no external_reference`);
      return NextResponse.json({ received: true });
    }

    const order = await getOrderById(orderId);
    if (!order) {
      console.warn(`[mercadopago webhook] order not found for external_reference ${orderId}`);
      return NextResponse.json({ received: true });
    }

    if (result.status === "approved") {
      const updatedOrder = await markOrderAsPaid(orderId, String(paymentId));
      if (!order.emails_sent) {
        await sendOrderEmails(updatedOrder);
        await markEmailsAsSent(orderId);
      }
    } else if (result.status === "rejected" || result.status === "cancelled") {
      await markOrderAsFailed(orderId);
    }
    // "pending"/"in_process" -> do nothing yet, wait for the next notification.

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("[mercadopago webhook] error", err);
    return NextResponse.json({ received: true });
  }
}

// Mercado Pago sometimes validates the URL with a GET before sending notifications.
export async function GET() {
  return NextResponse.json({ ok: true });
}
