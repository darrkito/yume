import { BlogTable } from "@/components/BlogTable";
import { sizeTable, type Product } from "@/content/products";
import { FREE_SHIPPING_THRESHOLD } from "@/content/shipping";

// Visible price-by-quantity table for sticker products, one column per size, computed from the catalog (same numbers the cart charges).
export function ProductPriceTable({ product, lang }: { product: Product; lang: "es" | "en" }) {
  const tiers = product.tiers;
  if (!tiers || !product.lineOptions) return null;
  const qtys = [tiers.baseQty, 100, 200, 300].filter((q, i, a) => a.indexOf(q) === i);
  const t =
    lang === "en"
      ? { h: "Price by size and quantity", note: `Shipping and pickup in Guadalajara are free from $${FREE_SHIPPING_THRESHOLD} MXN.` }
      : { h: "Precio por tamaño y cantidad", note: `El envío y la recolección en Guadalajara son gratis desde $${FREE_SHIPPING_THRESHOLD} MXN.` };
  return (
    <section className="mx-auto mt-16 max-w-2xl px-0">
      <h2 className="font-display text-2xl text-ink">{t.h}</h2>
      <BlogTable table={sizeTable([product.slug], qtys, lang)} caption={t.h} />
      <p className="mt-3 text-xs text-ink-soft">{t.note}</p>
    </section>
  );
}
