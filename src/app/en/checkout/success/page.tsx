import type { Metadata } from "next";
import { CheckoutStatus } from "@/components/CheckoutStatus";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Payment approved",
  robots: { index: false },
  alternates: { languages: hreflangFor("/pago/exito") },
};

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
