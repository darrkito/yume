import type { PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";
import { claimEmails, getOrderById, markOrderAfterPaid, markOrderAsFailed, markOrderAsPaid, releaseEmails } from "@/lib/orders";
import { sendOrderEmails } from "@/lib/email";
import { decidePaymentAction, type PaymentAction } from "@/lib/payment-state";

// Shared by the webhook and the on-site Payment Brick so both apply the same
// forward-only rules. Throws only when the database is unreachable (the
// webhook turns that into a 5xx so Mercado Pago retries); email trouble is
// logged and never throws.
export async function applyPayment(orderId: string, payment: PaymentResponse): Promise<PaymentAction> {
  const order = await getOrderById(orderId);
  if (!order) {
    console.warn(`[payments] order not found for external_reference ${orderId}`);
    return "ignore";
  }
  const paymentId = String(payment.id);
  const action = decidePaymentAction({
    orderStatus: order.status,
    orderTotal: Number(order.total),
    orderPaymentId: order.mp_payment_id,
    paymentId,
    mpStatus: payment.status,
    amount: payment.transaction_amount,
    currency: payment.currency_id,
  });

  switch (action) {
    case "pay": {
      const paid = await markOrderAsPaid(orderId, paymentId);
      if (await claimEmails(orderId)) {
        if (!(await sendOrderEmails(paid))) {
          console.error(`[ALERT] order ${orderId} paid (payment ${paymentId}) but confirmation emails failed`);
          await releaseEmails(orderId);
        }
      }
      break;
    }
    case "fail":
      await markOrderAsFailed(orderId);
      break;
    case "refund":
      await markOrderAfterPaid(orderId, "refunded");
      console.error(`[ALERT] order ${orderId} refunded (payment ${paymentId})`);
      break;
    case "chargeback":
      await markOrderAfterPaid(orderId, "charged_back");
      console.error(`[ALERT] order ${orderId} charged back (payment ${paymentId})`);
      break;
    case "alert-amount":
      console.error(
        `[ALERT] order ${orderId}: payment ${paymentId} amount ${payment.transaction_amount} ${payment.currency_id} does not match order total ${order.total}; left unpaid`,
      );
      break;
    case "alert-duplicate":
      console.error(`[ALERT] order ${orderId} already paid with ${order.mp_payment_id}; second approved payment ${paymentId} needs a manual refund`);
      break;
    case "alert-mediation":
      console.error(`[ALERT] order ${orderId} payment ${paymentId} is in mediation`);
      break;
  }
  return action;
}
