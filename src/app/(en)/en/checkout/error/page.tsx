import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/seo";
import { CheckoutStatus } from "@/components/CheckoutStatus";

export const metadata: Metadata = noindexMetadata({ title: "Payment not completed", lang: "en" });

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
