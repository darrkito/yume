import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/seo";
import { CartView } from "@/components/CartView";

export const metadata: Metadata = noindexMetadata({ title: "Carrito" });

export default function CarritoPage() {
  return <CartView />;
}
