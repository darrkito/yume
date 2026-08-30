import type { Metadata } from "next";
import { CheckoutView } from "@/components/CheckoutView";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Checkout",
  robots: { index: false },
  alternates: { languages: hreflangFor("/pago") },
};

export default function CheckoutPageEn() {
  return <CheckoutView lang="en" />;
}
