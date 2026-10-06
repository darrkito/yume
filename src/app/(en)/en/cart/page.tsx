import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/seo";
import { CartView } from "@/components/CartView";

export const metadata: Metadata = noindexMetadata({ title: "Cart", lang: "en" });

export default function CartPageEn() {
  return <CartView lang="en" />;
}
