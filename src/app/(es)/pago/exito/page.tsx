import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/seo";
import { CheckoutStatus } from "@/components/CheckoutStatus";

export const metadata: Metadata = noindexMetadata({ title: "Pago aprobado" });

export default function PagoExitoPage() {
  return (
    <CheckoutStatus
      variant="success"
      title="¡Pago aprobado!"
      message="Gracias por tu compra. Te contactaremos por WhatsApp o correo para confirmar los detalles de producción."
      clearCart
    />
  );
}
