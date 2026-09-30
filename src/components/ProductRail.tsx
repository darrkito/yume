import { products } from "@/content/products";
import { ProductCard } from "@/components/ProductCard";
import { QuoteCard } from "@/components/QuoteCard";
import { QuoteBand } from "@/components/QuoteBand";
import type { Lang } from "@/lib/i18n";

// Phone-only shelf: every product one swipe away, right under the hero
// (cards peek at the edge so the swipe is discoverable). Plain CSS
// scroll-snap: no carousel library, no JS.
export function ProductRail({ lang, heading, children }: { lang: Lang; heading: string; children?: React.ReactNode }) {
  return (
    <section aria-labelledby="rail-heading" className="sm:hidden">
      <h2 id="rail-heading" className="px-6 font-display text-2xl text-ink text-balance">
        {heading}
      </h2>
      <ul className="rail mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 pt-2">
        {products.flatMap((p, i) => {
          const item = (
            <li key={p.slug} className="flex w-[72%] max-w-72 shrink-0 snap-start scroll-ml-6">
              <div className="flex w-full">
                <ProductCard product={p} lang={lang} index={i} size="sm" headingAs="p" />
              </div>
            </li>
          );
          // Temporary tattoos are quote-only: they sit right after the two sticker lines.
          return p.slug === "stickers-logo-personalizado"
            ? [
                item,
                <li key="tattoos" className="flex w-[72%] max-w-72 shrink-0 snap-start scroll-ml-6">
                  <div className="flex w-full">
                    <QuoteCard lang={lang} index={i + 1} size="sm" />
                  </div>
                </li>,
              ]
            : [item];
        })}
      </ul>
      <QuoteBand lang={lang} className="mx-6 mt-2" />
      {children}
    </section>
  );
}
