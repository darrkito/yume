"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { useCart, type CartItem } from "@/components/CartContext";
import { clearCheckoutDraft } from "@/components/ShippingForm";
import { ReceiptPrinter } from "@/components/ReceiptPrinter";
import { UI, type Lang } from "@/lib/i18n";

const ICONS = { success: CheckCircle2, pending: Loader2, error: XCircle } as const;

export function CheckoutStatus({
  variant,
  title,
  message,
  clearCart,
  lang = "es",
}: {
  variant: keyof typeof ICONS;
  title: string;
  message: string;
  clearCart?: boolean;
  lang?: Lang;
}) {
  const { items, clear } = useCart();
  const Icon = ICONS[variant];
  const t = UI[lang];
  const shopHref = lang === "en" ? "/en/products" : "/productos";

  // The result pages are reachable by anyone (a stale tab, a typed URL), so
  // the cart is only cleared once the server confirms the order the buyer
  // came back from (Mercado Pago appends ?external_reference=<order id>) is
  // paid or pending. The receipt shows the real order number and the total
  // actually charged, not the cart's.
  const [confirmed, setConfirmed] = useState<{ number: string; total: number; shipping: number } | null>(null);
  const [receipt, setReceipt] = useState<{ items: CartItem[]; total: number; shipping: number; number: string } | null>(null);
  const captured = useRef(false);

  useEffect(() => {
    if (!clearCart) return;
    const ref = new URLSearchParams(window.location.search).get("external_reference");
    if (!ref) return;
    fetch(`/api/order-status?id=${encodeURIComponent(ref)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((o) => {
        if (o && (o.status === "paid" || o.status === "pending")) setConfirmed({ number: o.number, total: o.total, shipping: o.shipping });
      })
      .catch(() => {});
  }, [clearCart]);

  useEffect(() => {
    if (!confirmed || captured.current || items.length === 0) return;
    captured.current = true;
    clearCheckoutDraft();
    // Reacting to the cart (an external store) finishing its post-hydration
    // resync, guarded to fire once.
    setReceipt({ items, total: confirmed.total, shipping: confirmed.shipping, number: confirmed.number });
    clear();
  }, [confirmed, items, clear]);

  return (
    <section className="mx-auto max-w-lg px-6 py-24 text-center">
      {receipt ? (
        <ReceiptPrinter items={receipt.items} total={receipt.total} shipping={receipt.shipping} orderNumber={receipt.number} lang={lang} />
      ) : (
        <Icon size={40} className={`mx-auto text-brand ${variant === "pending" ? "animate-spin" : ""}`} />
      )}
      <h1 className="mt-6 font-display text-3xl text-ink">{title}</h1>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{message}</p>
      {variant === "success" && (
        <div className="mt-8 rounded-2xl bg-brand-tint px-5 py-5 text-left">
          <h2 className="font-display text-lg text-ink">{t.nextTitle}</h2>
          <ol className="mt-3 space-y-3 text-sm text-ink">
            {[t.next1, t.next2, t.next3].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white" aria-hidden="true">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
      <Link
        href={shopHref}
        className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-deep active:scale-[0.98]"
      >
        {t.backToShop}
      </Link>
    </section>
  );
}
