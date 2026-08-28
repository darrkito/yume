"use client";

import { useEffect, useState } from "react";
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { Loader2, CheckCircle2, Store, XCircle } from "lucide-react";
import { useCart } from "@/components/CartContext";
import type { CartItem } from "@/components/CartContext";
import type { Customer, ShippingAddress } from "@/lib/orders";

type Result =
  | { kind: "approved" }
  | { kind: "cash"; ticketUrl?: string }
  | { kind: "pending" }
  | { kind: "error"; message: string };

export function MercadoPagoBrick({
  items,
  total,
  customer,
  shippingAddress,
  onSettled,
}: {
  items: CartItem[];
  total: number;
  customer: Customer;
  shippingAddress: ShippingAddress;
  onSettled?: () => void;
}) {
  const { clear } = useCart();
  const [ready, setReady] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY;
    if (!publicKey) return;
    initMercadoPago(publicKey, { locale: "es-MX" });
    setReady(true);
  }, []);

  if (!process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY) {
    return (
      <p className="rounded-xl border border-line bg-paper p-4 text-sm text-ink-soft">
        Pago en línea no configurado todavía. Usa &quot;Cotizar por WhatsApp&quot; mientras tanto.
      </p>
    );
  }

  if (result?.kind === "approved") {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-line bg-paper-raised p-5">
        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand" />
        <div>
          <p className="font-display text-lg text-ink">¡Pago aprobado!</p>
          <p className="mt-1 text-sm text-ink-soft">
            Gracias por tu compra. Te contactaremos por WhatsApp o correo para confirmar los detalles de producción.
          </p>
        </div>
      </div>
    );
  }

  if (result?.kind === "cash") {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-line bg-paper-raised p-5">
        <Store size={20} className="mt-0.5 shrink-0 text-brand" />
        <div>
          <p className="font-display text-lg text-ink">Ficha de pago generada</p>
          <p className="mt-1 text-sm text-ink-soft">
            Paga en cualquier tienda participante (OXXO y otras) antes de que venza la ficha. Tu pedido se confirma en cuanto se registre el pago.
          </p>
          {result.ticketUrl && (
            <a
              href={result.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-brand px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep"
            >
              Ver ficha para pagar
            </a>
          )}
        </div>
      </div>
    );
  }

  if (result?.kind === "pending") {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-line bg-paper-raised p-5">
        <Loader2 size={20} className="mt-0.5 shrink-0 animate-spin text-brand" />
        <div>
          <p className="font-display text-lg text-ink">Pago en revisión</p>
          <p className="mt-1 text-sm text-ink-soft">Te avisaremos por WhatsApp o correo en cuanto se confirme.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {result?.kind === "error" && (
        <div className="mb-4 flex items-start gap-2 rounded-xl border border-line bg-paper p-4 text-sm text-ink">
          <XCircle size={16} className="mt-0.5 shrink-0 text-brand" />
          {result.message}
        </div>
      )}
      {ready && (
        <Payment
          key={total}
          initialization={{ amount: total, payer: { email: customer.email } }}
          customization={{
            paymentMethods: {
              creditCard: "all",
              debitCard: "all",
              ticket: "all",
              bankTransfer: "all",
            },
          }}
          onSubmit={async ({ formData }) => {
            try {
              const res = await fetch("/api/checkout-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items, formData, customer, shippingAddress }),
              });
              const data = await res.json();
              if (!res.ok) throw new Error(data.error ?? "No se pudo procesar el pago.");

              if (data.status === "approved") {
                clear();
                onSettled?.();
                setResult({ kind: "approved" });
              } else if (data.status === "pending" && data.point_of_interaction?.transaction_data?.ticket_url) {
                clear();
                onSettled?.();
                setResult({ kind: "cash", ticketUrl: data.point_of_interaction.transaction_data.ticket_url });
              } else if (data.status === "pending" || data.status === "in_process") {
                clear();
                onSettled?.();
                setResult({ kind: "pending" });
              } else {
                setResult({ kind: "error", message: "El pago fue rechazado. Intenta con otro medio de pago." });
              }
            } catch (err) {
              setResult({ kind: "error", message: err instanceof Error ? err.message : "Error al procesar el pago." });
            }
          }}
          onError={(err) => setResult({ kind: "error", message: String(err) })}
        />
      )}
    </div>
  );
}
