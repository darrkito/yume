import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/seo";
import { CheckoutView } from "@/components/CheckoutView";

export const metadata: Metadata = noindexMetadata({ title: "Checkout", lang: "en" });

export default function CheckoutPageEn() {
  return <CheckoutView lang="en" />;
}
