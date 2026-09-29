"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { useAddProduct } from "@/components/useAddProduct";
import { defaultVariantId, hasVariants, type Product } from "@/content/products";
import { getProductTranslation } from "@/content/products.en";
import { formatMXN } from "@/lib/format";
import { UI, type Lang } from "@/lib/i18n";

// One action per product surface: pick the option, add it. The CartToast
// that follows already offers "Ver carrito", so a second "Comprar ahora"
// button here only competed with this one. Only rendered for quickBuy
// products; personalized ones route to their product page instead.
export function AddToCartButton({ product, compact = false, lang = "es" }: { product: Product; compact?: boolean; lang?: Lang }) {
  const addProduct = useAddProduct(lang);
  const [justAdded, setJustAdded] = useState(false);
  const [variantId, setVariantId] = useState<string | undefined>(defaultVariantId(product));
  const t = UI[lang];
  const translation = lang === "en" ? getProductTranslation(product.slug) : undefined;
  const variantLabel = (id: string, fallback: string) => (lang === "en" ? (translation?.variantLabels?.[id] ?? fallback) : fallback);

  const handleAdd = () => {
    addProduct(product, variantId);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div className={compact ? "mt-3" : "mt-4"}>
      {hasVariants(product) && (
        <select
          aria-label={t.chooseOption}
          value={variantId}
          onChange={(e) => setVariantId(e.target.value)}
          className={compact ? "mb-2 block min-h-11 w-full rounded-lg border border-line bg-paper px-2.5 py-2 text-xs text-ink" : "mb-3 block min-h-11 w-full max-w-xs rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink"}
        >
          {product.variants!.map((v) => (
            <option key={v.id} value={v.id}>
              {variantLabel(v.id, v.label)} · {formatMXN(v.price)} MXN
            </option>
          ))}
        </select>
      )}
      <button
        type="button"
        onClick={handleAdd}
        aria-live="polite"
        className={`btn-soft btn-soft-solid whitespace-nowrap ${compact ? "w-full px-4" : "w-full sm:w-auto"}`}
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
    </div>
  );
}
