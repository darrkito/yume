"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ImageUp, ShoppingBag, Check, CheckCircle2, Clock, MapPin, MessageCircle, Truck, Zap } from "lucide-react";
import { useAddProduct } from "@/components/useAddProduct";
import { useDeliveryDates } from "@/components/useDeliveryDates";
import { useDesignFiles } from "@/components/DesignFileContext";
import { DesignSheet } from "@/components/DesignSheet";
import { QtyInput } from "@/components/QtyInput";
import { LogoUploadNote } from "@/components/LogoUploadNote";
import { cartItemLabel, defaultVariantId, hasVariants, MAX_PIECES, pieceCount, piecesForAmount, resolvePrice, tieredPrice, wholesaleRate, type Product } from "@/content/products";
import { cartItemLabelEn, getProductTranslation } from "@/content/products.en";
import { waLink } from "@/content/site";
import { CASABLANCA_PRICE, FREE_SHIPPING_THRESHOLD, NATIONAL_SHIPPING_PRICE } from "@/content/shipping";
import { formatMXN } from "@/lib/format";
import { UI, type Lang } from "@/lib/i18n";

// Radio buttons read well for a couple of fulfillment options (recetario);
// a native <select> is the sane control once it's a long list of selectable
// quantities (stickers) — same variants mechanism either way.
const RADIO_VS_SELECT_THRESHOLD = 4;
const QUICK_PICK_MAX = 300;

const WA_QUOTE_MSG = {
  es: (label: string, price: string) => `Hola, me interesa cotizar: ${label} (${price} MXN). ¿Podrían darme más información?`,
  en: (label: string, price: string) => `Hi, I'm interested in getting a quote for: ${label} (${price} MXN). Could you give me more information?`,
};

export function ProductPurchase({ product, lang = "es" }: { product: Product; lang?: Lang }) {
  const addProduct = useAddProduct(lang);
  const router = useRouter();
  const { getDesignFile, setDesignFile } = useDesignFiles();
  // The sticky bar leads with the design step when the product needs one and
  // none is attached yet; buying without it stays possible (upload at checkout).
  const [designLater, setDesignLater] = useState(false);
  const designDialog = useRef<HTMLDialogElement>(null);
  const buyAfterChoice = useRef(false);
  const needsDesign = Boolean(product.requiresImage) && !getDesignFile(product.slug) && !designLater;
  const [variantId, setVariantId] = useState<string | undefined>(defaultVariantId(product));
  const [units, setUnits] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const dates = useDeliveryDates(lang);
  const addButtonRef = useRef<HTMLButtonElement>(null);
  const t = UI[lang];
  const translation = lang === "en" ? getProductTranslation(product.slug) : undefined;

  const price = resolvePrice(product, variantId);
  const label = lang === "en" ? cartItemLabelEn(product, variantId) : cartItemLabel(product, variantId);
  const variantLabel = (variantIdValue: string, fallback: string) =>
    lang === "en" ? (translation?.variantLabels?.[variantIdValue] ?? fallback) : fallback;
  // Per-piece products: the piece count IS the variant (presets or typed),
  // so there's no separate units control; everything else gets one.
  const tiers = product.tiers;
  const pieces = pieceCount(product, variantId);
  const lineTotal = tiers ? price : price * units;
  const savings = tiers && pieces ? pieces * tiers.rate - price : 0;
  const pct = tiers && pieces ? Math.round((savings / (pieces * tiers.rate)) * 100) : 0;

  const handleAdd = () => {
    addProduct(product, variantId, tiers ? 1 : units);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const handleBuyNow = () => {
    addProduct(product, variantId, tiers ? 1 : units);
    router.push(lang === "en" ? "/en/cart" : "/carrito");
  };

  // Buying a product that needs the customer's artwork always goes through
  // this explicit "design or later" choice (upload or skip are both fine).
  const askDesign = (thenBuy: boolean) => {
    buyAfterChoice.current = thenBuy;
    designDialog.current?.showModal();
  };
  const resolveDesign = () => {
    designDialog.current?.close();
    if (buyAfterChoice.current) handleBuyNow();
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

  // Free-shipping nudge at the decision point: one tap raises this line to
  // the amount that clears the threshold. Never shown as fake urgency, only
  // the real cart-subtotal rule from shipping.ts.
  let nudge: React.ReactNode = null;
  const nudgeClass =
    "mt-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-tint px-4 text-left text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-tint/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
  if (lineTotal >= FREE_SHIPPING_THRESHOLD) {
    nudge = (
      <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-deep">
        <Truck size={16} aria-hidden="true" /> {t.freeShipReached}
      </p>
    );
  } else if (tiers) {
    const n = piecesForAmount(tiers, FREE_SHIPPING_THRESHOLD);
    nudge = (
      <button type="button" onClick={() => setVariantId(String(n))} className={nudgeClass}>
        <Truck size={16} aria-hidden="true" />
        {t.freeShipNudge.replace("{qty}", String(n)).replace("{price}", formatMXN(tieredPrice(tiers, n)))}
      </button>
    );
  } else {
    const need = Math.ceil((FREE_SHIPPING_THRESHOLD - lineTotal) / price);
    if (units + need <= 99) {
      nudge = (
        <button type="button" onClick={() => setUnits(units + need)} className={nudgeClass}>
          <Truck size={16} aria-hidden="true" /> {t.freeShipUnits.replace("{n}", String(need))}
        </button>
      );
    }
  }

  const waMsg = WA_QUOTE_MSG[lang](label, formatMXN(price));
  const guidance = t.whatsappGuidance;

  return (
    <div className="mt-4">
      <p className="text-2xl font-semibold text-ink">
        {formatMXN(lineTotal)} <span className="text-sm font-normal text-ink-soft">MXN</span>
      </p>
      {!tiers && units > 1 && (
        <p className="mt-1 text-sm text-ink">
          {units} × {formatMXN(price)}
        </p>
      )}
      {pieces && (
        <>
          <p className="mt-1 text-sm text-ink">
            {pieces} {t.pieces} · {formatMXN(price)} · {formatMXN(price / pieces)}{t.perPieceSuffix}
          </p>
          {savings > 0 && (
            <p className="mt-0.5 text-xs font-semibold text-brand">
              {t.tierSavings.replace("{saved}", formatMXN(savings)).replace("{pct}", String(pct))}
            </p>
          )}
        </>
      )}

      {tiers && pieces && (
        // Three one-tap amounts plus a typable stepper for anything else:
        // one control for "how many", instead of a 12-row select AND a field.
        <fieldset className="mt-5">
          <legend className="text-xs text-ink-soft">{t.chooseQuantity}</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {[tiers.baseQty, tiers.discountQty, QUICK_PICK_MAX].map((n) => (
              <button
                key={n}
                type="button"
                aria-pressed={pieces === n}
                onClick={() => setVariantId(String(n))}
                className={`min-h-11 rounded-full border px-4 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                  pieces === n ? "border-brand bg-brand-tint font-semibold text-ink" : "border-line text-ink-soft hover:border-brand"
                }`}
              >
                {n} {t.pieces}
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="text-sm text-ink-soft">{t.piecesLabel}</span>
            <QtyInput
              value={pieces}
              min={tiers.baseQty}
              max={MAX_PIECES}
              step={tiers.stepQty}
              onChange={(n) => setVariantId(String(n))}
              label={t.piecesInputLabel}
              decreaseLabel={t.decreaseQty}
              increaseLabel={t.increaseQty}
              minNote={t.qtyMinNote.replace("{min}", String(tiers.baseQty))}
              maxNote={t.qtyMaxNote.replace("{max}", String(MAX_PIECES))}
            />
          </div>
        </fieldset>
      )}

      {!tiers && hasVariants(product) && product.variants!.length > RADIO_VS_SELECT_THRESHOLD && (
        <div className="mt-5">
          <label htmlFor={`variant-${product.slug}`} className="text-xs text-ink-soft">
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
              </option>
            ))}
          </select>
        </div>
      )}

      {hasVariants(product) && product.variants!.length <= RADIO_VS_SELECT_THRESHOLD && (
        <fieldset className="mt-5">
          <legend className="text-xs text-ink-soft">{t.chooseOption}</legend>
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

      {tiers && (
        <div className="mt-3 rounded-xl bg-brand-tint px-4 py-3 text-sm">
          <p className="text-ink">
            {t.tierBase
              .replace("{qty}", String(tiers.discountQty))
              .replace("{price}", formatMXN(tieredPrice(tiers, tiers.discountQty)))
              .replace("{unit}", formatMXN(tiers.rate))}
          </p>
          <p className="mt-1 font-semibold text-brand-deep">
            {t.tierWholesale
              .replace("{qty}", String(tiers.discountQty))
              .replace("{unit}", formatMXN(wholesaleRate(tiers)))
              .replace("{pct}", String(Math.round((1 - wholesaleRate(tiers) / tiers.rate) * 100)))}
          </p>
        </div>
      )}

      {!tiers && (
        <div className="mt-5 flex items-center gap-3">
          <span className="text-xs text-ink-soft">{t.unitsLabel}</span>
          <QtyInput
            value={units}
            min={1}
            max={99}
            onChange={setUnits}
            label={t.unitsLabel}
            decreaseLabel={t.decreaseQty}
            increaseLabel={t.increaseQty}
          />
        </div>
      )}

      {nudge}

      {product.requiresImage && <LogoUploadNote slug={product.slug} lang={lang} hint={t.uploadLaterHint} />}

      <div className="mt-6 flex flex-col items-start">
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <button
            ref={addButtonRef}
            type="button"
            onClick={handleAdd}
            data-track="add_to_cart"
            aria-live="polite"
            className="btn-soft btn-soft-outline w-full whitespace-nowrap sm:w-auto"
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
          <button type="button" data-track="buy_now" onClick={() => (needsDesign ? askDesign(true) : handleBuyNow())} className="btn-soft btn-soft-solid w-full whitespace-nowrap sm:w-auto">
            <Zap size={16} aria-hidden="true" /> {t.buyNow}
          </button>
        </div>
        <ul className="mt-5 space-y-2 text-sm text-ink">
          <li className="flex items-start gap-2"><Truck size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.factShipping.replace("{national}", formatMXN(NATIONAL_SHIPPING_PRICE)).replace("{threshold}", formatMXN(FREE_SHIPPING_THRESHOLD))}</li>
          <li className="flex items-start gap-2"><Clock size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
            <span>
              {dates ? t.deliveryEstimate.replace("{from}", dates.national.from).replace("{to}", dates.national.to) : t.factTiming}
              {dates && <span className="block text-xs text-ink-soft">{t.deliveryEstimateNote}</span>}
            </span>
          </li>
          <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" /><span>
              {t.factPickup.replace("{pickup}", formatMXN(CASABLANCA_PRICE))}
              {dates && <span className="block text-xs text-ink-soft">{t.pickupEstimate.replace("{from}", dates.pickup.from).replace("{to}", dates.pickup.to)}</span>}
            </span></li>
          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.factProof}</li>
        </ul>
        <a
          href={waLink(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-soft btn-soft-outline mt-3 w-full sm:w-auto"
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
            <p className="truncate text-base font-semibold text-ink">{formatMXN(lineTotal)}</p>
            <p className="truncate text-xs text-ink-soft">{pieces ? `${pieces} ${t.pieces}` : units > 1 ? `${units} × ${product.name}` : label}</p>
          </div>
          <a
            href={waLink(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.quoteWhatsapp}
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-brand transition-colors hover:border-brand"
          >
            <MessageCircle size={20} aria-hidden="true" />
          </a>
          {/* One primary CTA: two full buttons squeezed the price to "$100..." at 390px; WhatsApp is an icon. */}
          {needsDesign ? (
            <button type="button" data-track="choose_design" onClick={() => askDesign(false)} className="btn-soft btn-soft-solid min-h-11 shrink-0 px-5 text-sm">
              <ImageUp size={16} aria-hidden="true" /> {t.chooseDesign}
            </button>
          ) : (
            <button type="button" data-track="buy_now" onClick={handleBuyNow} className="btn-soft btn-soft-solid min-h-11 shrink-0 px-5 text-sm">
              <Zap size={16} aria-hidden="true" /> {t.buyNow}
            </button>
          )}
        </div>
      </div>
      {product.requiresImage && (
        <DesignSheet
          ref={designDialog}
          lang={lang}
          onFile={(file) => {
            setDesignFile(product.slug, file);
            resolveDesign();
          }}
          onLater={() => {
            setDesignLater(true);
            resolveDesign();
          }}
        />
      )}
    </div>
  );
}
