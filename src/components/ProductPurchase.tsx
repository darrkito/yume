"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { cartItemLabel, defaultVariantId, hasVariants, resolvePrice, type Product } from "@/content/products";
import { cartItemLabelEn, getProductTranslation } from "@/content/products.en";
import { waLink } from "@/content/site";
import { formatMXN } from "@/lib/format";
import { UI, type Lang } from "@/lib/i18n";

// Radio buttons read well for a couple of fulfillment options (recetario);
// a native <select> is the sane control once it's a long list of selectable
// quantities (stickers) — same variants mechanism either way.
const RADIO_VS_SELECT_THRESHOLD = 4;

const WA_QUOTE_MSG = {
  es: (label: string, price: string) => `Hola, me interesa cotizar: ${label} (${price} MXN). ¿Podrían darme más información?`,
  en: (label: string, price: string) => `Hi, I'm interested in getting a quote for: ${label} (${price} MXN). Could you give me more information?`,
};

export function ProductPurchase({ product, lang = "es" }: { product: Product; lang?: Lang }) {
  const { addItem } = useCart();
  const [variantId, setVariantId] = useState<string | undefined>(defaultVariantId(product));
  const [justAdded, setJustAdded] = useState(false);
  const t = UI[lang];
  const translation = lang === "en" ? getProductTranslation(product.slug) : undefined;

  const price = resolvePrice(product, variantId);
  const label = lang === "en" ? cartItemLabelEn(product, variantId) : cartItemLabel(product, variantId);
  const variantLabel = (variantIdValue: string, fallback: string) =>
    lang === "en" ? (translation?.variantLabels?.[variantIdValue] ?? fallback) : fallback;

  const handleAdd = () => {
    addItem({ slug: product.slug, name: label, price, variantId });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const waMsg = WA_QUOTE_MSG[lang](label, formatMXN(price));

  return (
    <div className="mt-4">
      <p className="text-2xl font-semibold text-ink">
        {formatMXN(price)} <span className="text-sm font-normal text-ink-soft">MXN</span>
      </p>

      {hasVariants(product) && product.variants!.length > RADIO_VS_SELECT_THRESHOLD && (
        <div className="mt-5">
          <label htmlFor={`variant-${product.slug}`} className="text-xs uppercase tracking-[0.15em] text-ink-soft">
            {t.chooseQuantity}
          </label>
          <select
            id={`variant-${product.slug}`}
            value={variantId}
            onChange={(e) => setVariantId(e.target.value)}
            className="mt-2 block w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink"
          >
            {product.variants!.map((v) => (
              <option key={v.id} value={v.id}>
                {variantLabel(v.id, v.label)} — {formatMXN(v.price)} MXN
              </option>
            ))}
          </select>
        </div>
      )}

      {hasVariants(product) && product.variants!.length <= RADIO_VS_SELECT_THRESHOLD && (
        <fieldset className="mt-5">
          <legend className="text-xs uppercase tracking-[0.15em] text-ink-soft">{t.chooseOption}</legend>
          <div className="mt-3 flex flex-col gap-2">
            {product.variants!.map((v) => (
              <label
                key={v.id}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                  variantId === v.id ? "border-brand bg-brand-tint text-ink" : "border-line text-ink-soft hover:border-brand"
                }`}
              >
                <span className="flex items-center gap-3">
                  <input
                    type="radio"
                    name={`variant-${product.slug}`}
                    value={v.id}
                    checked={variantId === v.id}
                    onChange={() => setVariantId(v.id)}
                    className="accent-brand"
                  />
                  {variantLabel(v.id, v.label)}
                </span>
                <span className="font-semibold text-ink">{formatMXN(v.price)} MXN</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className="mt-6 flex flex-col items-start gap-3">
        <button
          type="button"
          onClick={handleAdd}
          aria-live="polite"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98] sm:w-auto"
        >
          {justAdded ? (
            <>
              <Check size={16} aria-hidden="true" /> {t.added}
            </>
          ) : (
            <>
              <ShoppingBag size={16} aria-hidden="true" /> {t.addToCart}
            </>
          )}
        </button>
        <a
          href={waLink(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-line px-5 py-2 text-center text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft transition-colors hover:border-brand hover:text-brand"
        >
          {t.quoteWhatsapp}
        </a>
      </div>
    </div>
  );
}
