import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/seo";
import { CheckoutStatus } from "@/components/CheckoutStatus";

export const metadata: Metadata = noindexMetadata({ title: "Pago pendiente" });

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
