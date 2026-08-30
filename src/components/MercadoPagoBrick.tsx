"use client";

import { useEffect, useState } from "react";
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { Loader2, CheckCircle2, Store, XCircle } from "lucide-react";
import { useCart } from "@/components/CartContext";
import type { CartItem } from "@/components/CartContext";
import type { Customer, ShippingAddress } from "@/lib/orders";
import type { Lang } from "@/lib/i18n";

type Result =
  | { kind: "approved" }
  | { kind: "cash"; ticketUrl?: string }
  | { kind: "pending" }
  | { kind: "error"; message: string };

const COPY: Record<
  Lang,
  {
    notConfigured: string;
    approvedTitle: string;
    approvedBody: string;
    cashTitle: string;
    cashBody: string;
    viewVoucher: string;
    pendingTitle: string;
    pendingBody: string;
    genericError: string;
    rejected: string;
  }
> = {
  es: {
    notConfigured: 'Pago en línea no configurado todavía. Usa "Cotizar por WhatsApp" mientras tanto.',
    approvedTitle: "¡Pago aprobado!",
    approvedBody: "Gracias por tu compra. Te contactaremos por WhatsApp o correo para confirmar los detalles de producción.",
    cashTitle: "Ficha de pago generada",
    cashBody: "Paga en cualquier tienda participante (OXXO y otras) antes de que venza la ficha. Tu pedido se confirma en cuanto se registre el pago.",
    viewVoucher: "Ver ficha para pagar",
    pendingTitle: "Pago en revisión",
    pendingBody: "Te avisaremos por WhatsApp o correo en cuanto se confirme.",
    genericError: "Error al procesar el pago.",
    rejected: "El pago fue rechazado. Intenta con otro medio de pago.",
  },
  en: {
    notConfigured: 'Online payment isn\'t set up yet. Use "Quote via WhatsApp" in the meantime.',
    approvedTitle: "Payment approved!",
    approvedBody: "Thanks for your purchase. We'll reach out via WhatsApp or email to confirm production details.",
    cashTitle: "Payment voucher generated",
    cashBody: "Pay at any participating store (OXXO and others) before the voucher expires. Your order is confirmed as soon as the payment is registered.",
    viewVoucher: "View voucher to pay",
    pendingTitle: "Payment under review",
    pendingBody: "We'll let you know via WhatsApp or email as soon as it's confirmed.",
    genericError: "Error processing the payment.",
    rejected: "The payment was declined. Try another payment method.",
  },
};

export function MercadoPagoBrick({
  items,
  total,
  customer,
  shippingAddress,
  onSettled,
  lang = "es",
}: {
  items: CartItem[];
  total: number;
  customer: Customer;
  shippingAddress: ShippingAddress;
  onSettled?: () => void;
  lang?: Lang;
}) {
  const { clear } = useCart();
  const [ready, setReady] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const c = COPY[lang];

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY;
    if (!publicKey) return;
    initMercadoPago(publicKey, { locale: lang === "en" ? "en-US" : "es-MX" });
    // Must run client-only (the SDK touches window/document, which don't
    // exist during SSR) — `ready` genuinely reflects an external system
    // (the MercadoPago SDK) finishing setup, not state derivable from
    // props/render, so this doesn't fit the "don't setState in an effect"
    // rule's target case.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- init once per mount; the locale is fixed for the page's lifetime (lang doesn't change without a navigation/remount)
  }, []);

  if (!process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY) {
    return <p className="rounded-xl border border-line bg-paper p-4 text-sm text-ink-soft">{c.notConfigured}</p>;
  }

  if (result?.kind === "approved") {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-line bg-paper-raised p-5">
        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand" />
        <div>
          <p className="font-display text-lg text-ink">{c.approvedTitle}</p>
          <p className="mt-1 text-sm text-ink-soft">{c.approvedBody}</p>
        </div>
      </div>
    );
  }

  if (result?.kind === "cash") {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-line bg-paper-raised p-5">
        <Store size={20} className="mt-0.5 shrink-0 text-brand" />
        <div>
          <p className="font-display text-lg text-ink">{c.cashTitle}</p>
          <p className="mt-1 text-sm text-ink-soft">{c.cashBody}</p>
          {result.ticketUrl && (
            <a
              href={result.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-brand px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep"
            >
              {c.viewVoucher}
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
          <p className="font-display text-lg text-ink">{c.pendingTitle}</p>
          <p className="mt-1 text-sm text-ink-soft">{c.pendingBody}</p>
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
              if (!res.ok) throw new Error(data.error ?? c.genericError);

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
                setResult({ kind: "error", message: c.rejected });
              }
            } catch (err) {
              setResult({ kind: "error", message: err instanceof Error ? err.message : c.genericError });
            }
          }}
          onError={(err) => setResult({ kind: "error", message: String(err) })}
        />
      )}
    </div>
  );
}
