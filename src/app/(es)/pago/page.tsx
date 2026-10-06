import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/seo";
import { CheckoutView } from "@/components/CheckoutView";

export const metadata: Metadata = noindexMetadata({ title: "Pago" });

export default function PagoPage() {
  return <CheckoutView />;
}
