import type { Metadata } from "next";
import { CheckoutStatus } from "@/components/CheckoutStatus";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Pago aprobado",
  robots: { index: false },
  alternates: { languages: hreflangFor("/pago/exito") },
};

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
