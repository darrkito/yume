"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, ExternalLink, Store } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { MercadoPagoBrick } from "@/components/MercadoPagoBrick";
import { ShippingForm } from "@/components/ShippingForm";
import type { Customer, ShippingAddress } from "@/lib/orders";
import { formatMXN } from "@/lib/format";
import { UI, type Lang } from "@/lib/i18n";

type Mode = "form" | "choose" | "onsite";

export function CheckoutView({ lang = "es" }: { lang?: Lang } = {}) {
  const { items, total } = useCart();
  const [mode, setMode] = useState<Mode>("form");
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress | null>(null);
  const [redirecting, setRedirecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [settled, setSettled] = useState(false);
  const t = UI[lang];
  const shopHref = lang === "en" ? "/en/products" : "/productos";

  // Once a payment resolves, MercadoPagoBrick clears the cart itself — but
  // it still needs to render its own success/pending/cash-voucher result.
  // Only fall back to the empty-cart screen while still on the first step,
  // never mid-checkout, or the result flashes to this instead.
  if (items.length === 0 && mode === "form" && !settled) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-brand">{t.checkout}</p>
        <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{t.emptyCartTitle}</h1>
        <p className="mt-4 text-sm text-ink-soft">{t.emptyCartCheckoutBody}</p>
        <Link
          href={shopHref}
          className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98]"
        >
          {t.viewShop}
        </Link>
      </section>
    );
  }

  const handleCheckoutPro = async () => {
    if (!customer || !shippingAddress) return;
    setError(null);
    setRedirecting(true);
    try {
      const res = await fetch("/api/checkout-pro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, customer, shippingAddress }),
      });
      const data = await res.json();
      if (!res.ok || !data.initPoint) throw new Error(data.error ?? t.couldNotStartPayment);
      window.location.href = data.initPoint;
    } catch (err) {
      setError(err instanceof Error ? err.message : t.couldNotStartPayment);
      setRedirecting(false);
    }
  };

  return (
    <section className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand">{t.checkout}</p>
      <h1 className="mt-3 font-display text-4xl text-ink">{mode === "form" ? t.yourDetailsShipping : t.chooseHowToPay}</h1>

      {!settled && (
        <>
          <ul className="mt-8 divide-y divide-line border-y border-line text-sm">
            {items.map((item) => (
              <li key={item.slug} className="flex items-center justify-between py-3">
                <span className="text-ink">
                  {item.name} <span className="text-ink-soft">x{item.qty}</span>
                </span>
                <span className="font-medium text-ink">{formatMXN(item.price * item.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-ink-soft">{t.total}</p>
            <p className="font-display text-2xl text-ink">{formatMXN(total)} MXN</p>
          </div>
        </>
      )}

      {error && <p className="mt-6 rounded-xl border border-line bg-paper p-4 text-sm text-ink">{error}</p>}

      {mode === "form" && (
        <div className="mt-10">
          <ShippingForm
            lang={lang}
            onSubmit={({ customer: c, shippingAddress: a }) => {
              setCustomer(c);
              setShippingAddress(a);
              setMode("choose");
            }}
          />
        </div>
      )}

      {mode === "choose" && (
        <div className="mt-10">
          <button type="button" onClick={() => setMode("form")} className="mb-4 text-xs text-ink-soft hover:text-brand transition-colors">
            {t.editShipping}
          </button>
          <div className="grid gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleCheckoutPro}
              disabled={redirecting}
              className="flex flex-col items-start gap-3 rounded-2xl border border-line bg-paper-raised p-6 text-left transition-colors hover:border-brand disabled:opacity-60"
            >
              <ExternalLink size={22} className="text-brand" />
              <span className="font-display text-lg text-ink">{t.payWithMercadoPago}</span>
              <span className="text-xs leading-relaxed text-ink-soft">{t.mpDescription}</span>
              <span className="mt-auto text-xs font-semibold uppercase tracking-[0.1em] text-brand">
                {redirecting ? t.redirecting : t.continueArrow}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMode("onsite")}
              className="flex flex-col items-start gap-3 rounded-2xl border border-line bg-paper-raised p-6 text-left transition-colors hover:border-brand"
            >
              <CreditCard size={22} className="text-brand" />
              <span className="font-display text-lg text-ink">{t.payHere}</span>
              <span className="text-xs leading-relaxed text-ink-soft">{t.payHereDescription}</span>
              <span className="mt-auto flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-brand">
                <Store size={13} /> {t.includesStorePayment}
              </span>
            </button>
          </div>
        </div>
      )}

      {mode === "onsite" && customer && shippingAddress && (
        <div className="mt-10">
          {!settled && (
            <button type="button" onClick={() => setMode("choose")} className="mb-4 text-xs text-ink-soft hover:text-brand transition-colors">
              {t.changePaymentMethod}
            </button>
          )}
          <MercadoPagoBrick items={items} total={total} customer={customer} shippingAddress={shippingAddress} onSettled={() => setSettled(true)} lang={lang} />
        </div>
      )}
    </section>
  );
}
