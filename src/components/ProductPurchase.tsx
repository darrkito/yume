"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag, Check, CheckCircle2, Clock, MapPin, MessageCircle, Truck, Zap } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { cartItemLabel, defaultVariantId, hasVariants, resolvePrice, type Product } from "@/content/products";
import { cartItemLabelEn, getProductTranslation } from "@/content/products.en";
import { waLink } from "@/content/site";
import { CASABLANCA_PRICE, FREE_SHIPPING_THRESHOLD, NATIONAL_SHIPPING_PRICE } from "@/content/shipping";
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
  const router = useRouter();
  const [variantId, setVariantId] = useState<string | undefined>(defaultVariantId(product));
  const [justAdded, setJustAdded] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const addButtonRef = useRef<HTMLButtonElement>(null);
  const t = UI[lang];
  const translation = lang === "en" ? getProductTranslation(product.slug) : undefined;

  const price = resolvePrice(product, variantId);
  const label = lang === "en" ? cartItemLabelEn(product, variantId) : cartItemLabel(product, variantId);
  const variantLabel = (variantIdValue: string, fallback: string) =>
    lang === "en" ? (translation?.variantLabels?.[variantIdValue] ?? fallback) : fallback;
  const selected = product.variants?.find((variant) => variant.id === variantId);
  const qty = selected ? Number(selected.id) : NaN;
  const isQuantityTier = Number.isFinite(qty) && qty > 0;
  const variants = product.variants ?? [];
  const base = variants[0];
  const baseRate = base ? base.price / Number(base.id) : 0;
  const savings = selected ? qty * baseRate - selected.price : 0;
  const pct = selected ? Math.round((savings / (qty * baseRate)) * 100) : 0;
  // Wholesale tier, derived from the variant prices: the last quantity
  // still at the base rate, and the cheaper per-piece rate after it.
  const stepQty = variants.length >= 2 ? Number(variants[1].id) - Number(variants[0].id) : 0;
  const stepPrice = variants.length >= 2 ? variants[1].price - variants[0].price : 0;
  const tierBreak = variants.findIndex((v, i) => i > 0 && v.price - variants[i - 1].price < stepPrice);
  const wholesale =
    tierBreak > 0
      ? {
          qty: variants[tierBreak - 1].id,
          price: variants[tierBreak - 1].price,
          baseUnit: stepPrice / stepQty,
          unit: (variants[tierBreak].price - variants[tierBreak - 1].price) / stepQty,
        }
      : null;
  const isTieredProduct = variants.length > 0 && variants.every((variant) => Number.isFinite(Number(variant.id)));

  const handleAdd = () => {
    addItem({ slug: product.slug, name: label, price, variantId });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const handleBuyNow = () => {
    addItem({ slug: product.slug, name: label, price, variantId });
    router.push(lang === "en" ? "/en/cart" : "/carrito");
  };

  useEffect(() => {
    const button = addButtonRef.current;
    if (!button) return;

    const observer = new IntersectionObserver(([entry]) => {
      setShowBar(entry.boundingClientRect.top < 0 && !entry.isIntersecting);
    });
    observer.observe(button);
    return () => observer.disconnect();
  }, []);

  const waMsg = WA_QUOTE_MSG[lang](label, formatMXN(price));
  const guidance = isTieredProduct
    ? t.whatsappGuidanceTiered.replace("{maxQty}", String(Number(variants[variants.length - 1].id)))
    : t.whatsappGuidance;

  return (
    <div className="mt-4">
      <p className="text-2xl font-semibold text-ink">
        {formatMXN(price)} <span className="text-sm font-normal text-ink-soft">MXN</span>
      </p>
      {selected && isQuantityTier && (
        <>
          <p className="mt-1 text-sm text-ink">
            {qty} {t.pieces} · {formatMXN(selected.price)} · {formatMXN(selected.price / qty)}{t.perPieceSuffix}
          </p>
          {savings > 0 && (
            <p className="mt-0.5 text-xs font-semibold text-brand">
              {t.tierSavings.replace("{saved}", formatMXN(savings)).replace("{pct}", String(pct))}
            </p>
          )}
        </>
      )}

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
                {variantLabel(v.id, v.label)} · {formatMXN(v.price)} MXN
                {wholesale && Number(v.id) > Number(wholesale.qty) ? ` · ${t.wholesaleTag}` : ""}
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
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-2.5 sm:py-3 text-sm transition-colors ${
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

      {selected && isQuantityTier && wholesale && (
        <div className="mt-3 rounded-xl bg-brand-tint px-4 py-3 text-sm">
          <p className="text-ink">
            {t.tierBase
              .replace("{qty}", wholesale.qty)
              .replace("{price}", formatMXN(wholesale.price))
              .replace("{unit}", formatMXN(wholesale.baseUnit))}
          </p>
          <p className="mt-1 font-semibold text-brand-deep">
            {t.tierWholesale
              .replace("{qty}", wholesale.qty)
              .replace("{unit}", formatMXN(wholesale.unit))
              .replace("{pct}", String(Math.round((1 - wholesale.unit / wholesale.baseUnit) * 100)))}
          </p>
        </div>
      )}

      <div className="mt-6 flex flex-col items-start">
        <div className="flex w-full flex-wrap gap-3 sm:w-auto">
          <button
            ref={addButtonRef}
            type="button"
            onClick={handleAdd}
            aria-live="polite"
            className="btn-soft btn-soft-outline flex-1 sm:flex-initial"
          >
            {justAdded ? (
              <>
                <Check className="animate-pop" size={16} aria-hidden="true" /> {t.added}
              </>
            ) : (
              <>
                <ShoppingBag size={16} aria-hidden="true" /> {t.addToCart}
              </>
            )}
          </button>
          <button type="button" onClick={handleBuyNow} className="btn-soft btn-soft-solid flex-1 sm:flex-initial">
            <Zap size={16} aria-hidden="true" /> {t.buyNow}
          </button>
        </div>
        <ul className="mt-5 space-y-2 text-sm text-ink">
          <li className="flex items-start gap-2"><Truck size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.factShipping.replace("{national}", formatMXN(NATIONAL_SHIPPING_PRICE)).replace("{threshold}", formatMXN(FREE_SHIPPING_THRESHOLD))}</li>
          <li className="flex items-start gap-2"><Clock size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.factTiming}</li>
          <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.factPickup.replace("{pickup}", formatMXN(CASABLANCA_PRICE))}</li>
          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.factProof}</li>
        </ul>
        <a
          href={waLink(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <MessageCircle size={16} aria-hidden="true" />{guidance}
        </a>
      </div>
      <div
        inert={!showBar || undefined}
        aria-hidden={!showBar}
        className={`fixed inset-x-0 bottom-0 z-40 sm:hidden border-t border-line bg-paper-raised px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-12px_hsl(var(--shadow-tint)/0.35)] transition-transform duration-200 motion-reduce:transition-none ${showBar ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-ink">{formatMXN(selected?.price ?? product.price)}</p>
            <p className="truncate text-xs text-ink-soft">{selected ? variantLabel(selected.id, selected.label) : product.name}</p>
          </div>
          {/* One CTA only: two buttons squeezed the price to "$100..." at 390px. */}
          <button type="button" onClick={handleBuyNow} className="btn-soft btn-soft-solid min-h-11 shrink-0 px-5 text-sm">
            <Zap size={16} aria-hidden="true" /> {t.buyNow}
          </button>
        </div>
      </div>
    </div>
  );
}
