// Pure decision logic for what a Mercado Pago payment should do to an order.
// Kept free of Supabase/MP imports so scripts/check-order-state.ts can test
// it directly. Order status only moves forward:
//   pending/failed -> paid -> refunded | charged_back
// A paid order is never downgraded (an OXXO voucher expiring or a stale
// rejection arriving after payment must not mark it failed).

export type OrderStatus = "pending" | "paid" | "failed" | "cancelled" | "refunded" | "charged_back";

export type PaymentAction =
  | "pay"
  | "fail"
  | "refund"
  | "chargeback"
  | "alert-amount"
  | "alert-duplicate"
  | "alert-mediation"
  | "ignore";

export function decidePaymentAction(input: {
  orderStatus: OrderStatus;
  orderTotal: number;
  orderPaymentId: string | null;
  paymentId: string;
  mpStatus: string | undefined;
  amount: number | undefined;
  currency: string | undefined;
}): PaymentAction {
  const { orderStatus, orderTotal, orderPaymentId, paymentId, mpStatus, amount, currency } = input;

  switch (mpStatus) {
    case "approved": {
      if (currency && currency !== "MXN") return "alert-amount";
      if (amount === undefined || Math.abs(amount - orderTotal) > 0.01) return "alert-amount";
      if (orderStatus === "paid" || orderStatus === "refunded" || orderStatus === "charged_back") {
        // Same payment re-notified is normal; a different payment id on an
        // already-paid order means the customer was charged twice.
        return orderPaymentId && orderPaymentId !== paymentId ? "alert-duplicate" : "ignore";
      }
      return "pay";
    }
    case "rejected":
    case "cancelled":
      return orderStatus === "pending" ? "fail" : "ignore";
    case "refunded":
      return orderStatus === "paid" && orderPaymentId === paymentId ? "refund" : "ignore";
    case "charged_back":
      return orderStatus === "paid" && orderPaymentId === paymentId ? "chargeback" : "ignore";
    case "in_mediation":
      return orderStatus === "paid" && orderPaymentId === paymentId ? "alert-mediation" : "ignore";
    default:
      return "ignore"; // pending / in_process: wait for the next notification
  }
}
