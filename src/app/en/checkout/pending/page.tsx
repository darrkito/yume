import type { Metadata } from "next";
import { CheckoutStatus } from "@/components/CheckoutStatus";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Payment pending",
  robots: { index: false },
  alternates: { languages: hreflangFor("/pago/pendiente") },
};

export default function CheckoutPendingPageEn() {
  return (
    <CheckoutStatus
      variant="pending"
      title="Payment under review"
      message="Your payment is pending (for example, if you generated a cash-payment voucher). We'll let you know via WhatsApp or email as soon as it's confirmed."
      clearCart
      lang="en"
    />
  );
}
