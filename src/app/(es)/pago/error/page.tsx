import type { Metadata } from "next";
import { noindexMetadata } from "@/lib/seo";
import { CheckoutStatus } from "@/components/CheckoutStatus";

export const metadata: Metadata = noindexMetadata({ title: "Pago no completado" });

export default function PagoErrorPage() {
  return (
    <CheckoutStatus
      variant="error"
      title="El pago no se completó"
      message="No te preocupes, tu carrito sigue guardado. Puedes intentar de nuevo o elegir otro medio de pago."
      clearCart={false}
    />
  );
}
