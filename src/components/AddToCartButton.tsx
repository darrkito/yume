"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag, Check, Zap } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { cartItemLabel, defaultVariantId, hasVariants, resolvePrice, type Product } from "@/content/products";
import { cartItemLabelEn, getProductTranslation } from "@/content/products.en";
import { formatMXN } from "@/lib/format";
import { UI, type Lang } from "@/lib/i18n";

// Card-level add still defaults to the product's default variant (same
// default the PDP preselects), but a tiered/multi-variant product also
// gets a compact selector here so a "buy from the grid" click isn't a
// silent guess at quantity/color — the visitor sees and can change what
// they're about to add before either button does anything.
// "Comprar ahora" adds the same item and jumps straight to the cart to
// finish checkout, the always-be-closing pattern from Amazon's own
// buy box: every product surface (cards, cross-sell) gets both actions.
export function AddToCartButton({ product, compact = false, lang = "es" }: { product: Product; compact?: boolean; lang?: Lang }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [justAdded, setJustAdded] = useState(false);
  const [variantId, setVariantId] = useState<string | undefined>(defaultVariantId(product));
  const t = UI[lang];
  const translation = lang === "en" ? getProductTranslation(product.slug) : undefined;
  const variantLabel = (id: string, fallback: string) => (lang === "en" ? (translation?.variantLabels?.[id] ?? fallback) : fallback);

  const buildItem = () => {
    const name = lang === "en" ? cartItemLabelEn(product, variantId) : cartItemLabel(product, variantId);
    return { slug: product.slug, name, price: resolvePrice(product, variantId), variantId };
  };

  const handleAdd = () => {
    addItem(buildItem());
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const handleBuyNow = () => {
    addItem(buildItem());
    router.push(lang === "en" ? "/en/cart" : "/carrito");
  };

  const baseBtn = compact
    ? "flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full py-2 text-xs font-semibold transition-colors active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    : "flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

  return (
    <div className={compact ? "mt-3" : "mt-4"}>
      {hasVariants(product) && (
        <select
          aria-label={t.chooseOption}
          value={variantId}
          onChange={(e) => setVariantId(e.target.value)}
          className={compact ? "mb-2 block w-full rounded-lg border border-line bg-paper px-2.5 py-2 text-xs text-ink" : "mb-3 block w-full max-w-xs rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink"}
        >
          {product.variants!.map((v) => (
            <option key={v.id} value={v.id}>
              {variantLabel(v.id, v.label)} · {formatMXN(v.price)} MXN
            </option>
          ))}
        </select>
      )}
      <div className={compact ? "flex gap-2" : "flex flex-wrap gap-3"}>
        <button
          type="button"
          onClick={handleAdd}
          aria-live="polite"
          className={`${baseBtn} border border-line text-ink hover:border-brand hover:text-brand`}
        >
          {justAdded ? (
            <>
              <Check className="animate-pop" size={compact ? 14 : 16} aria-hidden="true" /> {t.added}
            </>
          ) : (
            <>
              <ShoppingBag size={compact ? 14 : 16} aria-hidden="true" /> {t.addToCart}
            </>
          )}
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          className={
            compact
              ? `${baseBtn} border border-line text-ink hover:border-brand hover:text-brand`
              : `${baseBtn} bg-brand text-white hover:bg-brand-deep`
          }
        >
          <Zap size={compact ? 14 : 16} aria-hidden="true" /> {t.buyNow}
        </button>
      </div>
    </div>
  );
}
