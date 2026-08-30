"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { cartItemLabel, defaultVariantId, hasVariants, resolvePrice, type Product } from "@/content/products";
import { waLink } from "@/content/site";
import { formatMXN } from "@/lib/format";

// Radio buttons read well for a couple of fulfillment options (recetario);
// a native <select> is the sane control once it's a long list of selectable
// quantities (stickers) — same variants mechanism either way.
const RADIO_VS_SELECT_THRESHOLD = 4;

export function ProductPurchase({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [variantId, setVariantId] = useState<string | undefined>(defaultVariantId(product));
  const [justAdded, setJustAdded] = useState(false);

  const price = resolvePrice(product, variantId);

  const handleAdd = () => {
    addItem({ slug: product.slug, name: cartItemLabel(product, variantId), price, variantId });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const waMsg = `Hola, me interesa cotizar: ${cartItemLabel(product, variantId)} (${formatMXN(price)} MXN). ¿Podrían darme más información?`;

  return (
    <div className="mt-4">
      <p className="text-2xl font-semibold text-ink">
        {formatMXN(price)} <span className="text-sm font-normal text-ink-soft">MXN</span>
      </p>

      {hasVariants(product) && product.variants!.length > RADIO_VS_SELECT_THRESHOLD && (
        <div className="mt-5">
          <label htmlFor={`variant-${product.slug}`} className="text-xs uppercase tracking-[0.15em] text-ink-soft">
            Elige la cantidad
          </label>
          <select
            id={`variant-${product.slug}`}
            value={variantId}
            onChange={(e) => setVariantId(e.target.value)}
            className="mt-2 block w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink"
          >
            {product.variants!.map((v) => (
              <option key={v.id} value={v.id}>
                {v.label} — {formatMXN(v.price)} MXN
              </option>
            ))}
          </select>
        </div>
      )}

      {hasVariants(product) && product.variants!.length <= RADIO_VS_SELECT_THRESHOLD && (
        <fieldset className="mt-5">
          <legend className="text-xs uppercase tracking-[0.15em] text-ink-soft">Elige una opción</legend>
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
                  {v.label}
                </span>
                <span className="font-semibold text-ink">{formatMXN(v.price)} MXN</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={waLink(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-brand px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98]"
        >
          Cotizar por WhatsApp
        </a>
        <button
          type="button"
          onClick={handleAdd}
          aria-live="polite"
          className="flex items-center justify-center gap-2 rounded-full border border-brand px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-brand transition-colors hover:bg-brand hover:text-white active:scale-[0.98]"
        >
          {justAdded ? (
            <>
              <Check size={16} aria-hidden="true" /> Agregado
            </>
          ) : (
            <>
              <ShoppingBag size={16} aria-hidden="true" /> Agregar al carrito
            </>
          )}
        </button>
      </div>
    </div>
  );
}
