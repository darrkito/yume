import type { Metadata } from "next";
import { CheckoutStatus } from "@/components/CheckoutStatus";

export const metadata: Metadata = { title: "Pago pendiente", robots: { index: false } };

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
