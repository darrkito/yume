"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { cartItemLabel, defaultVariantId, resolvePrice, type Product } from "@/content/products";
import { cartItemLabelEn } from "@/content/products.en";
import { UI, type Lang } from "@/lib/i18n";

export function AddToCartButton({ product, compact = false, lang = "es" }: { product: Product; compact?: boolean; lang?: Lang }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const t = UI[lang];

  const handleAdd = () => {
    const variantId = defaultVariantId(product);
    const name = lang === "en" ? cartItemLabelEn(product, variantId) : cartItemLabel(product, variantId);
    addItem({ slug: product.slug, name, price: resolvePrice(product, variantId), variantId });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      aria-live="polite"
      className={
        compact
          ? "mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-line py-2 text-xs font-semibold text-ink transition-colors hover:border-brand hover:text-brand active:scale-[0.98]"
          : "btn-soft btn-soft-outline"
      }
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
  );
}
