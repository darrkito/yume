"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag, Check, Zap } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { cartItemLabel, defaultVariantId, resolvePrice, type Product } from "@/content/products";
import { cartItemLabelEn } from "@/content/products.en";
import { UI, type Lang } from "@/lib/i18n";

// One-click add uses the product's default variant (e.g. the cheapest
// sticker tier, "sin diseño", the first color) — same default the PDP
// itself preselects, so a card-level add is never an arbitrary guess.
// "Comprar ahora" adds the same item and jumps straight to the cart to
// finish checkout, the always-be-closing pattern from Amazon's own
// buy box: every product surface (cards, cross-sell) gets both actions.
export function AddToCartButton({ product, compact = false, lang = "es" }: { product: Product; compact?: boolean; lang?: Lang }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [justAdded, setJustAdded] = useState(false);
  const t = UI[lang];

  const buildItem = () => {
    const variantId = defaultVariantId(product);
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
    <div className={compact ? "mt-3 flex gap-2" : "mt-4 flex flex-wrap gap-3"}>
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
      <button type="button" onClick={handleBuyNow} className={`${baseBtn} bg-brand text-white hover:bg-brand-deep`}>
        <Zap size={compact ? 14 : 16} aria-hidden="true" /> {t.buyNow}
      </button>
    </div>
  );
}
