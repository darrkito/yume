"use client";

import { useEffect, useRef, useState } from "react";
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { Loader2, Store, XCircle } from "lucide-react";
import { useCart } from "@/components/CartContext";
import type { CartItem } from "@/components/CartContext";
import { track } from "@/components/TrackClicks";
import { readAiSource } from "@/lib/ai-source";
import { formatMXN } from "@/lib/format";
import { ReceiptPrinter } from "@/components/ReceiptPrinter";
import type { DesignFileUpload } from "@/components/CheckoutView";
import type { Customer, DeliveryInfo } from "@/lib/orders";
import type { PersonalizationInput } from "@/content/personalization";
import type { Lang } from "@/lib/i18n";

type Result =
  | { kind: "approved" }
  | { kind: "cash"; ticketUrl?: string; orderNumber?: string; expiresAt?: string; reference?: string; amount?: number; method?: string }
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
    loading: string;
    voucherOrder: string;
    voucherAmount: string;
    voucherExpires: string;
    voucherReference: string;
    voucherKeep: string;
    rejectedBy: Record<string, string>;
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
    rejected: "El pago fue rechazado. Intenta con otra tarjeta o paga en efectivo (OXXO).",
    loading: "Cargando medios de pago…",
    voucherOrder: "Pedido",
    voucherAmount: "Monto a pagar",
    voucherExpires: "Vence",
    voucherReference: "Referencia",
    voucherKeep: "Guarda esta información o abre la ficha para pagar en la tienda.",
    rejectedBy: {
      cc_rejected_insufficient_amount: "Tu tarjeta no tiene fondos suficientes. Prueba con otra tarjeta o paga en efectivo (OXXO).",
      cc_rejected_bad_filled_card_number: "El número de tarjeta no es correcto. Revísalo e inténtalo de nuevo.",
      cc_rejected_bad_filled_date: "La fecha de vencimiento no es correcta. Revísala e inténtalo de nuevo.",
      cc_rejected_bad_filled_security_code: "El código de seguridad no es correcto. Revísalo e inténtalo de nuevo.",
      cc_rejected_bad_filled_other: "Revisa los datos de tu tarjeta e inténtalo de nuevo.",
      cc_rejected_call_for_authorize: "Tu banco necesita autorizar este pago: llámales o prueba con otra tarjeta.",
      cc_rejected_card_disabled: "Tu tarjeta está inactiva. Actívala con tu banco o usa otra.",
      cc_rejected_duplicated_payment: "Ya hiciste un pago igual hace un momento. Revisa tu correo antes de intentarlo otra vez.",
      cc_rejected_max_attempts: "Llegaste al máximo de intentos con esta tarjeta. Usa otra o paga en efectivo (OXXO).",
    },
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
    rejected: "The payment was declined. Try another card or pay with cash (OXXO).",
    loading: "Loading payment methods…",
    voucherOrder: "Order",
    voucherAmount: "Amount to pay",
    voucherExpires: "Expires",
    voucherReference: "Reference",
    voucherKeep: "Keep this information or open the voucher to pay at the store.",
    rejectedBy: {
      cc_rejected_insufficient_amount: "Your card has insufficient funds. Try another card or pay with cash (OXXO).",
      cc_rejected_bad_filled_card_number: "The card number is not correct. Check it and try again.",
      cc_rejected_bad_filled_date: "The expiration date is not correct. Check it and try again.",
      cc_rejected_bad_filled_security_code: "The security code is not correct. Check it and try again.",
      cc_rejected_bad_filled_other: "Check your card details and try again.",
      cc_rejected_call_for_authorize: "Your bank needs to authorize this payment: call them or try another card.",
      cc_rejected_card_disabled: "Your card is inactive. Activate it with your bank or use another one.",
      cc_rejected_duplicated_payment: "You already made the same payment a moment ago. Check your email before trying again.",
      cc_rejected_max_attempts: "You reached the maximum attempts with this card. Use another or pay with cash (OXXO).",
    },
  },
};

export function MercadoPagoBrick({
  items,
  total,
  customer,
  delivery,
  designFileUrls = [],
  personalization,
  note,
  onSettled,
  lang = "es",
}: {
  items: CartItem[];
  total: number;
  customer: Customer;
  delivery: DeliveryInfo;
  designFileUrls?: DesignFileUpload[];
  personalization?: PersonalizationInput;
  note?: string;
  onSettled?: () => void;
  lang?: Lang;
}) {
  const { clear } = useCart();
  const [ready, setReady] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [brickReady, setBrickReady] = useState(false);
  // A rejected submit is reported with its own message; the Brick then also
  // fires onError, which must not overwrite it.
  const submitFailed = useRef(false);
  // `items`/`total` are props from the parent's live cart — once clear()
  // runs, the parent re-renders and hands this component fresh (now
  // empty) props on the next render. Snapshot them here, at the moment
  // the order actually settles, so the receipt still has something to
  // show after the cart is wiped.
  const [orderSnapshot, setOrderSnapshot] = useState<{ items: CartItem[]; total: number; orderNumber?: string } | null>(null);
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

  if (result?.kind === "approved" && orderSnapshot) {
    return (
      <div className="rounded-xl border border-line bg-paper-raised p-6 text-center">
        <ReceiptPrinter
          items={orderSnapshot.items}
          total={orderSnapshot.total}
          shipping={Math.max(0, orderSnapshot.total - orderSnapshot.items.reduce((sum, i) => sum + i.price * i.qty, 0))}
          orderNumber={orderSnapshot.orderNumber}
          lang={lang}
        />
        <p className="mt-6 font-display text-lg text-ink">{c.approvedTitle}</p>
        <p className="mt-1 text-sm text-ink-soft">{c.approvedBody}</p>
      </div>
    );
  }

  if (result?.kind === "cash") {
    const expires = result.expiresAt
      ? new Date(result.expiresAt).toLocaleString(lang === "en" ? "en-US" : "es-MX", { dateStyle: "long", timeStyle: "short" })
      : null;
    return (
      <div className="flex items-start gap-3 rounded-xl border border-line bg-paper-raised p-5">
        <Store size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
        <div>
          <p className="font-display text-lg text-ink">{c.cashTitle}</p>
          <p className="mt-1 text-sm text-ink-soft">{c.cashBody}</p>
          <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
            {result.orderNumber && (
              <>
                <dt className="text-ink-soft">{c.voucherOrder}</dt>
                <dd className="font-medium text-ink">#{result.orderNumber}</dd>
              </>
            )}
            {result.amount != null && (
              <>
                <dt className="text-ink-soft">{c.voucherAmount}</dt>
                <dd className="font-medium text-ink">{formatMXN(result.amount)} MXN</dd>
              </>
            )}
            {expires && (
              <>
                <dt className="text-ink-soft">{c.voucherExpires}</dt>
                <dd className="font-medium text-ink">{expires}</dd>
              </>
            )}
            {result.reference && (
              <>
                <dt className="text-ink-soft">{c.voucherReference}</dt>
                <dd className="font-mono font-medium text-ink">{result.reference}</dd>
              </>
            )}
          </dl>
          <p className="mt-3 text-xs text-ink-soft">{c.voucherKeep}</p>
          {result.ticketUrl && (
            <a
              href={result.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-brand px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-brand-deep"
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
        <Loader2 size={20} className="mt-0.5 shrink-0 animate-spin text-brand" aria-hidden="true" />
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
          <XCircle size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
          {result.message}
        </div>
      )}
      {ready && !brickReady && !result && (
        <p role="status" className="flex items-center gap-2 rounded-xl border border-line bg-paper p-4 text-sm text-ink-soft">
          <Loader2 size={16} className="animate-spin" aria-hidden="true" />
          {c.loading}
        </p>
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
          onReady={() => setBrickReady(true)}
          onSubmit={async ({ formData }) => {
            submitFailed.current = false;
            try {
              const res = await fetch("/api/checkout-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items, formData, customer, delivery, designFileUrls, personalization, note, lang, src: readAiSource() }),
              });
              const data = await res.json().catch(() => ({}));
              if (!res.ok) throw new Error(data.error ?? c.genericError);

              if (data.status === "approved") {
                track("purchase_brick");
                setOrderSnapshot({ items, total, orderNumber: String(data.orderId ?? "").slice(0, 8) || undefined });
                clear();
                onSettled?.();
                setResult({ kind: "approved" });
              } else if (data.status === "pending" && data.ticket_url) {
                track("payment_pending_cash");
                clear();
                onSettled?.();
                setResult({
                  kind: "cash",
                  ticketUrl: data.ticket_url,
                  orderNumber: String(data.orderId ?? "").slice(0, 8) || undefined,
                  expiresAt: data.date_of_expiration,
                  reference: data.reference,
                  amount: data.amount,
                  method: data.payment_method_id,
                });
              } else if (data.status === "pending" || data.status === "in_process") {
                clear();
                onSettled?.();
                setResult({ kind: "pending" });
              } else {
                track(`payment_rejected_${data.status_detail ?? "unknown"}`);
                throw new Error(c.rejectedBy[data.status_detail as string] ?? c.rejected);
              }
            } catch (err) {
              // Show the reason, then reject so the Brick re-enables the form
              // for another card instead of staying stuck.
              submitFailed.current = true;
              setResult({ kind: "error", message: err instanceof Error ? err.message : c.genericError });
              throw err;
            }
          }}
          onError={(err) => {
            if (submitFailed.current) return;
            const message = (err as { message?: string })?.message;
            setResult({ kind: "error", message: message && !/^\[object/.test(message) ? message : c.genericError });
          }}
        />
      )}
    </div>
  );
}
