"use client";

import Link from "next/link";
import { Minus, Plus, X, ImageUp, CreditCard, Truck, CheckCircle2, Clock, ShieldCheck, MessageCircle } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { getProduct } from "@/content/products";
import { ProductVisual } from "@/components/ProductVisual";
import { CtaFillLink } from "@/components/CtaFillLink";
import { waLink } from "@/content/site";
import { FREE_SHIPPING_THRESHOLD, NATIONAL_SHIPPING_PRICE, CASABLANCA_PRICE } from "@/content/shipping";
import { formatMXN } from "@/lib/format";
import { PRODUCT_SLUG_EN, UI, type Lang } from "@/lib/i18n";

const CONFIRM_MSG = {
  es: (lines: string, total: string) => `Hola, quiero hacer un pedido:\n${lines}\n\nTotal: ${total} MXN\n\n¿Podrían confirmar disponibilidad y tiempo de entrega?`,
  en: (lines: string, total: string) => `Hi, I'd like to place an order:\n${lines}\n\nTotal: ${total} MXN\n\nCould you confirm availability and turnaround time?`,
};

const ATTACH_MSG = {
  es: (names: string) => `\n\nVoy a adjuntar en este chat el logo/diseño para: ${names}.`,
  en: (names: string) => `\n\nI'll attach the logo/design for: ${names} in this chat.`,
};

export function CartView({ lang = "es" }: { lang?: Lang } = {}) {
  const { items, removeItem, updateQty, total, clear } = useCart();
  const t = UI[lang];
  const shopHref = lang === "en" ? "/en/products" : "/productos";
  const checkoutHref = lang === "en" ? "/en/checkout" : "/pago";

  const itemsRequiringImage = [...new Set(items.map((i) => i.slug))]
    .map((slug) => getProduct(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p?.requiresImage));

  const buildWaMessage = () => {
    const lines = items.map((i) => `- ${i.name} x${i.qty}: ${formatMXN(i.price * i.qty)}`).join("\n");
    let msg = CONFIRM_MSG[lang](lines, formatMXN(total));
    if (itemsRequiringImage.length > 0) {
      msg += ATTACH_MSG[lang](itemsRequiringImage.map((p) => p.name).join(", "));
    }
    return msg;
  };

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-brand">{t.cart}</p>
        <h1 className="animate-fade-up animate-fade-up-1 mt-3 font-display text-3xl text-ink sm:text-4xl">{t.emptyCartTitle}</h1>
        <p className="animate-fade-up animate-fade-up-2 mt-4 text-sm text-ink-soft">{t.emptyCartBody}</p>
        <Link
          href={shopHref}
          className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98]"
        >
          {t.viewShop}
        </Link>
        <p className="mt-6 text-sm text-ink-soft">{t.emptyCartHelp}</p>
        <a
          href={waLink(lang === "es" ? "Hola, me interesa cotizar un producto de Yume." : "Hi, I'm interested in getting a quote for a Yume product.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <MessageCircle size={16} aria-hidden="true" />{t.quoteWhatsapp}
        </a>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-brand">{t.cart}</p>
      <h1 className="animate-fade-up animate-fade-up-1 mt-3 font-display text-4xl text-ink">{t.yourOrder}</h1>

      <ul className="mt-10 divide-y divide-line border-y border-line">
        {items.map((item) => {
          const product = getProduct(item.slug);
          return (
          <li key={`${item.slug}:${item.variantId ?? ""}`} className="flex flex-wrap items-center justify-between gap-4 py-6">
            <div className="flex items-center gap-4">
              <Link
                href={`${shopHref}/${lang === "en" ? (PRODUCT_SLUG_EN[item.slug] ?? item.slug) : item.slug}`}
                className="flex h-16 w-16 shrink-0 justify-center overflow-hidden rounded-lg border border-line bg-paper-raised p-1.5"
                aria-hidden="true"
                tabIndex={-1}
              >
                {product && <ProductVisual product={product} compact />}
              </Link>
              <div>
                <Link
                  href={`${shopHref}/${lang === "en" ? (PRODUCT_SLUG_EN[item.slug] ?? item.slug) : item.slug}`}
                  className="font-display text-lg text-ink hover:text-brand transition-colors"
                >
                  {item.name}
                </Link>
                <p className="mt-1 text-sm text-ink-soft">
                  {formatMXN(item.price)} {t.each}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-full border border-line">
                <button
                  type="button"
                  onClick={() => updateQty(item.slug, item.qty - 1, item.variantId)}
                  disabled={item.qty <= 1}
                  aria-label={t.decreaseQty}
                  className="flex size-11 items-center justify-center text-ink-soft transition-colors hover:text-brand disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <Minus size={14} />
                </button>
                <span className="min-w-6 text-center text-sm text-ink">{item.qty}</span>
                <button
                  type="button"
                  onClick={() => updateQty(item.slug, item.qty + 1, item.variantId)}
                  aria-label={t.increaseQty}
                  className="flex size-11 items-center justify-center text-ink-soft transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <Plus size={14} />
                </button>
              </div>
              <p className="w-20 text-right text-sm font-semibold text-ink">{formatMXN(item.price * item.qty)}</p>
              <button
                type="button"
                onClick={() => removeItem(item.slug, item.variantId)}
                aria-label={`${t.remove} ${item.name}`}
                className="flex size-11 items-center justify-center text-ink-soft transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <X size={16} />
              </button>
            </div>
          </li>
          );
        })}
      </ul>

      {itemsRequiringImage.length > 0 && (
        <div className="mt-6 flex items-start gap-3 rounded-xl bg-brand-tint p-4 text-sm text-ink">
          <ImageUp size={18} className="mt-0.5 shrink-0 text-brand" />
          <p>
            {itemsRequiringImage.length === 1 ? t.requiresImageOne : t.requiresImageMany} {t.requiresImageSuffix}{" "}
            <strong>{itemsRequiringImage.map((p) => p.name).join(", ")}</strong>. {t.attachInWhatsapp}
          </p>
        </div>
      )}

      {total < FREE_SHIPPING_THRESHOLD && (
        <div className="mt-8 rounded-xl border border-line bg-paper-raised p-4">
          <p className="text-sm text-ink">{t.freeShippingProgress.replace("{remaining}", formatMXN(FREE_SHIPPING_THRESHOLD - total))}</p>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-line">
            <div className="h-full rounded-full bg-brand transition-[width] duration-300" style={{ width: `${Math.min(100, Math.round((total / FREE_SHIPPING_THRESHOLD) * 100))}%` }} />
          </div>
        </div>
      )}
      {total >= FREE_SHIPPING_THRESHOLD && (
        <div className="mt-8 flex items-start gap-2 rounded-xl border border-line bg-paper-raised p-4 text-sm text-ink"><Truck size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.freeShippingReached}</div>
      )}

      <div className="mt-8 border-t border-line pt-6">
        <div className="flex items-center justify-between text-sm text-ink-soft"><span>{t.subtotal}</span><span>{formatMXN(total)} MXN</span></div>
        <div className="mt-2 flex items-center justify-between text-sm text-ink-soft"><span>{t.shippingLabel}</span><span>{total >= FREE_SHIPPING_THRESHOLD ? t.freeShipping : `${formatMXN(NATIONAL_SHIPPING_PRICE)} MXN`}</span></div>
        <p className="mt-2 text-xs text-ink-soft">{t.pickupAlternative.replace("{pickup}", formatMXN(CASABLANCA_PRICE))}</p>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
          <p className="text-sm text-ink-soft">{t.total}</p>
          <p className="font-display text-2xl text-ink">{formatMXN(total >= FREE_SHIPPING_THRESHOLD ? total : total + NATIONAL_SHIPPING_PRICE)} MXN</p>
        </div>
        <p className="mt-2 text-xs text-ink-soft">{t.totalNote}</p>
      </div>

      <div className="mt-8 flex flex-col items-start gap-3">
        <Link
          href={checkoutHref}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98] sm:w-auto"
        >
          <CreditCard size={16} /> {t.payOnline}
        </Link>
        <CtaFillLink
          href={waLink(buildWaMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded-full border border-line px-5 py-2 text-center text-sm font-semibold text-ink-soft transition-colors hover:border-brand"
        >
          {t.quoteWhatsapp}
        </CtaFillLink>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-ink">
        <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.factProof}</li>
        <li className="flex items-start gap-2"><Clock size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.factTiming}</li>
        <li className="flex items-start gap-2"><ShieldCheck size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.securePayment}</li>
      </ul>
      <button
        type="button"
        onClick={clear}
        className="mt-4 inline-flex min-h-11 items-center text-xs text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {t.emptyCart}
      </button>
    </section>
  );
}
