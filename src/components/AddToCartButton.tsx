"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/components/CartContext";
import type { Product } from "@/content/products";

export function AddToCartButton({ product, compact = false }: { product: Product; compact?: boolean }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem({ slug: product.slug, name: product.name, price: product.price });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={
        compact
          ? "mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-line py-2 text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:border-brand hover:text-brand"
          : "flex items-center justify-center gap-2 rounded-full border border-brand px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-brand transition-colors hover:bg-brand hover:text-white"
      }
    >
      {justAdded ? (
        <>
          <Check size={compact ? 14 : 16} /> Agregado
        </>
      ) : (
        <>
          <ShoppingBag size={compact ? 14 : 16} /> Agregar al carrito
        </>
      )}
    </button>
  );
}
