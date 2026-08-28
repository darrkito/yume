import type { Metadata } from "next";
import { CheckoutStatus } from "@/components/CheckoutStatus";

export const metadata: Metadata = { title: "Pago aprobado", robots: { index: false } };

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
