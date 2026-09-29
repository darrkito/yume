import { products } from "@/content/products";
import { ProductCard } from "@/components/ProductCard";
import { type Lang } from "@/lib/i18n";

const MAX_ITEMS = 3;

// Cross-sell block reused on product pages (excludes the current product)
// and the cart (excludes whatever's already in it): the same ProductCard as
// the shop grid, just smaller and in more columns.
export function RelatedProducts({ excludeSlugs, lang = "es", heading }: { excludeSlugs: string[]; lang?: Lang; heading?: string }) {
  // Same-category products (e.g. the plate and the stand) are the most
  // relevant cross-sell — bubble them to the front before falling back to
  // catalog order, so a 3-item slice never drops the one product that's
  // actually related in favor of unrelated ones earlier in the array.
  const priorityCategories = new Set(products.filter((p) => excludeSlugs.includes(p.slug)).map((p) => p.category));
  const others = products
    .filter((p) => !excludeSlugs.includes(p.slug))
    .sort((a, b) => Number(priorityCategories.has(b.category)) - Number(priorityCategories.has(a.category)))
    .slice(0, MAX_ITEMS);
  if (others.length === 0) return null;

  const title = heading ?? (lang === "en" ? "You might also like" : "También te puede interesar");

  return (
    <div className="mt-14 border-t border-line pt-10">
      <h2 className="animate-fade-up font-display text-2xl text-ink">{title}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {others.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} size="sm" headingAs="p" lang={lang} />
        ))}
      </div>
    </div>
  );
}
