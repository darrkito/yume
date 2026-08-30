"use client";

import Link from "next/link";
import { Minus, Plus, X, ImageUp, CreditCard } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { getProduct } from "@/content/products";
import { waLink } from "@/content/site";
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
        <p className="text-xs uppercase tracking-[0.25em] text-brand">{t.cart}</p>
        <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{t.emptyCartTitle}</h1>
        <p className="mt-4 text-sm text-ink-soft">{t.emptyCartBody}</p>
        <Link
          href={shopHref}
          className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98]"
        >
          {t.viewShop}
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand">{t.cart}</p>
      <h1 className="mt-3 font-display text-4xl text-ink">{t.yourOrder}</h1>

      <ul className="mt-10 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <li key={`${item.slug}:${item.variantId ?? ""}`} className="flex flex-wrap items-center justify-between gap-4 py-6">
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
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-full border border-line">
                <button
                  type="button"
                  onClick={() => updateQty(item.slug, item.qty - 1, item.variantId)}
                  disabled={item.qty <= 1}
                  aria-label={t.decreaseQty}
                  className="p-2 text-ink-soft transition-colors hover:text-brand disabled:opacity-30"
                >
                  <Minus size={14} />
                </button>
                <span className="min-w-6 text-center text-sm text-ink">{item.qty}</span>
                <button
                  type="button"
                  onClick={() => updateQty(item.slug, item.qty + 1, item.variantId)}
                  aria-label={t.increaseQty}
                  className="p-2 text-ink-soft transition-colors hover:text-brand"
                >
                  <Plus size={14} />
                </button>
              </div>
              <p className="w-20 text-right text-sm font-semibold text-ink">{formatMXN(item.price * item.qty)}</p>
              <button
                type="button"
                onClick={() => removeItem(item.slug, item.variantId)}
                aria-label={`${t.remove} ${item.name}`}
                className="p-1 text-ink-soft transition-colors hover:text-brand"
              >
                <X size={16} />
              </button>
            </div>
          </li>
        ))}
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

      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-ink-soft">{t.total}</p>
        <p className="font-display text-2xl text-ink">{formatMXN(total)} MXN</p>
      </div>

      <div className="mt-8 flex flex-col items-start gap-3">
        <Link
          href={checkoutHref}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98] sm:w-auto"
        >
          <CreditCard size={16} /> {t.payOnline}
        </Link>
        <a
          href={waLink(buildWaMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-line px-5 py-2 text-center text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft transition-colors hover:border-brand hover:text-brand"
        >
          {t.quoteWhatsapp}
        </a>
      </div>
      <button
        type="button"
        onClick={clear}
        className="mt-4 text-xs text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-brand"
      >
        {t.emptyCart}
      </button>
    </section>
  );
}
