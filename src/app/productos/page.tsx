import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/content/products";
import { formatMXN } from "@/lib/format";
import { ProductVisual } from "@/components/ProductVisual";
import { AddToCartButton } from "@/components/AddToCartButton";

export const metadata: Metadata = {
  title: "Tienda",
  description: "Papelería y artículos personalizados de Yume: recetarios médicos, stickers, plantillas y botellas a tu medida.",
  alternates: { canonical: "/productos" },
};

export default function ProductosPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand">Tienda</p>
      <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Nuestros productos</h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Cada pieza se produce por encargo y se personaliza contigo antes de imprimir.
      </p>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p.slug} className="group rounded-2xl border border-line bg-paper-raised p-6 transition-shadow hover:shadow-lg">
            <Link href={`/productos/${p.slug}`}>
              <div className="flex h-48 items-center justify-center overflow-hidden">
                <ProductVisual product={p} compact />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.15em] text-brand">{p.category}</p>
              <h2 className="mt-1 font-display text-xl text-ink group-hover:text-brand transition-colors">{p.name}</h2>
              <p className="mt-2 text-lg font-semibold text-ink">{formatMXN(p.price)} MXN</p>
            </Link>
            <AddToCartButton product={p} compact />
          </div>
        ))}
      </div>
    </section>
  );
}
