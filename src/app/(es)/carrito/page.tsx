import type { Metadata } from "next";
import { CartView } from "@/components/CartView";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Carrito",
  robots: { index: false, follow: true },
  alternates: { languages: hreflangFor("/carrito") },
};

export default function CarritoPage() {
  return <CartView />;
}
