"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, ExternalLink, Store } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { useDesignFiles } from "@/components/DesignFileContext";
import { MercadoPagoBrick } from "@/components/MercadoPagoBrick";
import { ShippingForm } from "@/components/ShippingForm";
import { getProduct } from "@/content/products";
import type { Customer, DeliveryInfo } from "@/lib/orders";
import { deliverySurcharge } from "@/content/shipping";
import { formatMXN } from "@/lib/format";
import { UI, type Lang } from "@/lib/i18n";

type Mode = "form" | "choose" | "onsite";
export interface DesignFileUpload {
  productName: string;
  fileName: string;
  url: string;
}

export function CheckoutView({ lang = "es" }: { lang?: Lang } = {}) {
  const { items, total } = useCart();
  const { getDesignFile } = useDesignFiles();
  const [mode, setMode] = useState<Mode>("form");
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [delivery, setDelivery] = useState<DeliveryInfo | null>(null);
  const [designFileUrls, setDesignFileUrls] = useState<DesignFileUpload[]>([]);
  const [redirecting, setRedirecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [settled, setSettled] = useState(false);
  const t = UI[lang];
  const shopHref = lang === "en" ? "/en/products" : "/productos";
  const surcharge = delivery ? deliverySurcharge(delivery.method, total) : 0;
  const grandTotal = total + surcharge;
  const deliveryLabel = delivery?.method === "recoleccion_casablanca" ? t.casablancaPickup : t.nationalShipping;

  // Uploads happen once, at checkout submission — not when the file is
  // picked on the product page — so an abandoned cart never leaves an
  // orphaned file in storage. Any upload failure surfaces as the normal
  // checkout error instead of silently dropping the customer's file.
  const uploadDesignFiles = async (): Promise<DesignFileUpload[]> => {
    const uploads: DesignFileUpload[] = [];
    for (const item of items) {
      const product = getProduct(item.slug);
      if (!product?.requiresImage) continue;
      const file = getDesignFile(item.slug);
      if (!file) continue;
      const body = new FormData();
      body.set("file", file);
      const res = await fetch("/api/upload-design", { method: "POST", body });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? t.couldNotUploadFile);
      uploads.push({ productName: product.name, fileName: data.fileName ?? file.name, url: data.url });
    }
    return uploads;
  };

  // Once a payment resolves, MercadoPagoBrick clears the cart itself — but
  // it still needs to render its own success/pending/cash-voucher result.
  // Only fall back to the empty-cart screen while still on the first step,
  // never mid-checkout, or the result flashes to this instead.
  if (items.length === 0 && mode === "form" && !settled) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-brand">{t.checkout}</p>
        <h1 className="animate-fade-up animate-fade-up-1 mt-3 font-display text-3xl text-ink sm:text-4xl">{t.emptyCartTitle}</h1>
        <p className="animate-fade-up animate-fade-up-2 mt-4 text-sm text-ink-soft">{t.emptyCartCheckoutBody}</p>
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
    if (!customer || !delivery) return;
    setError(null);
    setRedirecting(true);
    try {
      const res = await fetch("/api/checkout-pro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, customer, delivery, designFileUrls }),
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
      <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-brand">{t.checkout}</p>
      <h1 className="animate-fade-up animate-fade-up-1 mt-3 font-display text-4xl text-ink">{mode === "form" ? t.yourDetailsShipping : t.chooseHowToPay}</h1>
      {!settled && (
        <p className="animate-fade-up animate-fade-up-2 mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
          {mode === "form" ? t.checkoutStepShipping : t.checkoutStepPayment}
        </p>
      )}

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
          {delivery && (
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-ink-soft">{deliveryLabel}</span>
              <span className="font-medium text-ink">{surcharge > 0 ? formatMXN(surcharge) : t.free}</span>
            </div>
          )}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-ink-soft">{t.total}</p>
            <p className="font-display text-2xl text-ink">{formatMXN(grandTotal)} MXN</p>
          </div>
        </>
      )}

      {error && <p className="mt-6 rounded-xl border border-line bg-paper p-4 text-sm text-ink">{error}</p>}

      {mode === "form" && (
        <div className="mt-10">
          <ShippingForm
            lang={lang}
            subtotal={total}
            onSubmit={async ({ customer: c, delivery: d }) => {
              setError(null);
              try {
                const uploads = await uploadDesignFiles();
                setDesignFileUrls(uploads);
                setCustomer(c);
                setDelivery(d);
                setMode("choose");
              } catch (err) {
                setError(err instanceof Error ? err.message : t.couldNotUploadFile);
              }
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

      {mode === "onsite" && customer && delivery && (
        <div className="mt-10">
          {!settled && (
            <button type="button" onClick={() => setMode("choose")} className="mb-4 text-xs text-ink-soft hover:text-brand transition-colors">
              {t.changePaymentMethod}
            </button>
          )}
          <MercadoPagoBrick
            items={items}
            total={grandTotal}
            customer={customer}
            delivery={delivery}
            designFileUrls={designFileUrls}
            onSettled={() => setSettled(true)}
            lang={lang}
          />
        </div>
      )}
    </section>
  );
}
