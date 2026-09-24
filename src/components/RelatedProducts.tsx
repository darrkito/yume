import Link from "next/link";
import { hasVariants, productDisplayPrice, products } from "@/content/products";
import { productsEn } from "@/content/products.en";
import { ProductVisual } from "@/components/ProductVisual";
import { AddToCartButton } from "@/components/AddToCartButton";
import { formatMXN } from "@/lib/format";
import { PRODUCT_SLUG_EN, type Lang } from "@/lib/i18n";
import { PickupBadge } from "@/components/PickupBadge";

const MAX_ITEMS = 3;

// Cross-sell block reused on product pages (excludes the current product)
// and the cart (excludes whatever's already in it) — same card style as
// the shop grid, just fewer columns. Carries its own Add to cart/Buy now
// (see AddToCartButton) so a cross-sell click can convert without a page
// navigation, same as every other product surface on the site.
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
  const shopBase = lang === "en" ? "/en/products" : "/productos";

  return (
    <div className="mt-14 border-t border-line pt-10">
      <h2 className="animate-fade-up font-display text-2xl text-ink">{title}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {others.map((p, i) => {
          const name = lang === "en" ? (productsEn[p.slug]?.name ?? p.name) : p.name;
          const href = `${shopBase}/${lang === "en" ? PRODUCT_SLUG_EN[p.slug] : p.slug}`;
          return (
            <div
              key={p.slug}
              className={`card-soft animate-fade-up animate-fade-up-1 flex flex-col p-5 ${i % 2 === 0 ? "tilt-a" : "tilt-b"}`}
            >
              <Link href={href} className="group flex flex-col">
                <div className="relative flex h-32 justify-center overflow-hidden">
                  <PickupBadge lang={lang} />
                  <div className="product-card-visual">
                    <ProductVisual product={p} compact />
                  </div>
                </div>
                <p className="mt-4 font-display text-sm text-ink transition-colors group-hover:text-brand">{name}</p>
                <p className="mt-1 text-sm font-semibold text-ink">
                  {hasVariants(p) && (lang === "en" ? "From " : "Desde ")}
                  {formatMXN(productDisplayPrice(p))} MXN
                </p>
              </Link>
              <AddToCartButton product={p} compact lang={lang} stackActions />
            </div>
          );
        })}
      </div>
    </div>
  );
}
