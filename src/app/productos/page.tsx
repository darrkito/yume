import type { Metadata } from "next";
import Link from "next/link";
import { hasVariants, productDisplayPrice, products } from "@/content/products";
import { formatMXN } from "@/lib/format";
import { ProductVisual } from "@/components/ProductVisual";
import { AddToCartButton } from "@/components/AddToCartButton";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Tienda de papelería personalizada",
  description:
    "Papelería y artículos personalizados de Yume: recetarios médicos, etiquetas con tu logo y stickers de vinil personalizados (Hello Kitty, Pokémon, mascotas y más). Envíos a todo México.",
  alternates: { canonical: "/productos", languages: hreflangFor("/productos") },
};

export default function ProductosPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="animate-fade-up font-display text-4xl font-black uppercase text-ink sm:text-5xl">Nuestros productos</h1>
      <p className="animate-fade-up animate-fade-up-1 mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Cada pieza se produce sobre pedido y se personaliza contigo antes de imprimir.
      </p>

      <div className="mt-14 grid gap-px overflow-hidden border-2 border-line-strong bg-line-strong sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <div key={p.slug} className="product-card group flex flex-col bg-paper-raised p-6">
            <Link href={`/productos/${p.slug}`}>
              <span className="mono-label text-xs text-brand">{String(i + 1).padStart(2, "0")}</span>
              <div className="mt-4 flex h-48 justify-center overflow-hidden">
                <div className="product-card-visual">
                  <ProductVisual product={p} compact />
                </div>
              </div>
              <p className="mono-label mt-6 text-[11px] text-ink-soft">{p.category}</p>
              <h2 className="mt-1 font-display text-xl font-bold text-ink group-hover:text-brand transition-colors">{p.name}</h2>
              <p className="mt-2 text-lg font-semibold text-ink">
                {hasVariants(p) && "Desde "}
                {formatMXN(productDisplayPrice(p))} MXN
              </p>
            </Link>
            <AddToCartButton product={p} compact />
          </div>
        ))}
      </div>
    </section>
  );
}
