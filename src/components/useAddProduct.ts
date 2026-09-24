"use client";

import { useCart } from "@/components/CartContext";
import { cartItemLabel, MAX_PIECES, pieceCount, resolvePrice, type Product } from "@/content/products";
import { cartItemLabelEn } from "@/content/products.en";
import type { Lang } from "@/lib/i18n";

/** The cart line for a product + option, labeled in the page's language. */
export function cartLine(product: Product, variantId: string | undefined, lang: Lang) {
  return {
    slug: product.slug,
    name: lang === "en" ? cartItemLabelEn(product, variantId) : cartItemLabel(product, variantId),
    price: resolvePrice(product, variantId),
    variantId,
  };
}

// Per-piece products (stickers) keep ONE cart line whose piece count grows:
// adding 300 twice gives "600 piezas" at the wholesale price, not two
// separate 300-piece lines. Everything else adds `units` of the option.
export function useAddProduct(lang: Lang) {
  const { items, addItem, replaceLine } = useCart();

  return (product: Product, variantId: string | undefined, units = 1) => {
    const pieces = pieceCount(product, variantId);
    const existing = pieces === null ? undefined : items.find((i) => i.slug === product.slug);
    if (pieces === null || !existing) {
      addItem(cartLine(product, variantId, lang), units);
      return;
    }
    const had = (pieceCount(product, existing.variantId) ?? 0) * existing.qty;
    const total = Math.min(MAX_PIECES, had + pieces * units);
    replaceLine(existing, cartLine(product, String(total), lang), 1, true);
  };
}
