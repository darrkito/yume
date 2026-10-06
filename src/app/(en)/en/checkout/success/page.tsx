import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/seo";
import { CheckoutStatus } from "@/components/CheckoutStatus";

export const metadata: Metadata = noindexMetadata({ title: "Payment approved", lang: "en" });

export default function CheckoutSuccessPageEn() {
  return (
    <CheckoutStatus
      variant="success"
      title="Payment approved!"
      message="Thanks for your purchase. We'll reach out via WhatsApp or email to confirm production details."
      clearCart
      lang="en"
    />
  );
}
