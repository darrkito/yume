"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { cartItemLabel, defaultVariantId, resolvePrice, type Product } from "@/content/products";

export function AddToCartButton({ product, compact = false }: { product: Product; compact?: boolean }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    const variantId = defaultVariantId(product);
    addItem({ slug: product.slug, name: cartItemLabel(product, variantId), price: resolvePrice(product, variantId), variantId });
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
          ? "mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-line py-2 text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:border-brand hover:text-brand active:scale-[0.98]"
          : "flex items-center justify-center gap-2 rounded-full border border-brand px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-brand transition-colors hover:bg-brand hover:text-white active:scale-[0.98]"
      }
    >
      {justAdded ? (
        <>
          <Check size={compact ? 14 : 16} aria-hidden="true" /> Agregado
        </>
      ) : (
        <>
          <ShoppingBag size={compact ? 14 : 16} aria-hidden="true" /> Agregar al carrito
        </>
      )}
    </button>
  );
}
