import type { Metadata } from "next";
import { CheckoutStatus } from "@/components/CheckoutStatus";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Payment not completed",
  robots: { index: false },
  alternates: { languages: hreflangFor("/pago/error") },
};

export default function CheckoutErrorPageEn() {
  return (
    <CheckoutStatus
      variant="error"
      title="The payment wasn't completed"
      message="Don't worry, your cart is still saved. You can try again or choose another payment method."
      clearCart={false}
      lang="en"
    />
  );
}
