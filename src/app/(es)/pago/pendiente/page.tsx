import type { Metadata } from "next";
import { CheckoutStatus } from "@/components/CheckoutStatus";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Pago pendiente",
  robots: { index: false },
  alternates: { languages: hreflangFor("/pago/pendiente") },
};

export default function PagoPendientePage() {
  return (
    <CheckoutStatus
      variant="pending"
      title="Pago en revisión"
      message="Tu pago quedó pendiente (por ejemplo, si generaste una ficha para pagar en efectivo). Te avisaremos por WhatsApp o correo en cuanto se confirme."
      clearCart
    />
  );
}
