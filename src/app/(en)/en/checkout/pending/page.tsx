import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/seo";
import { CheckoutStatus } from "@/components/CheckoutStatus";

export const metadata: Metadata = noindexMetadata({ title: "Payment pending", lang: "en" });

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
