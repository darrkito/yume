import { products } from "@/content/products";
import { ProductCard } from "@/components/ProductCard";
import { type Lang } from "@/lib/i18n";

const MAX_ITEMS = 3;

const AUDIENCE: Record<string, "clinic" | "brand" | "party"> = {
  "recetario-medico-personalizado": "clinic",
  "stickers-logo-personalizado": "brand",
  "stickers-vinil-impermeable": "brand",
  "placa-resena-google-nfc": "brand",
  "stand-resena-google-nfc": "brand",
  "dulceros-personalizados": "party",
};

// Cross-sell block reused on product pages (excludes the current product)
// and the cart (excludes whatever's already in it): the same ProductCard as
// the shop grid, just smaller and in more columns.
export function RelatedProducts({ excludeSlugs, lang = "es", heading }: { excludeSlugs: string[]; lang?: Lang; heading?: string }) {
  // Rank by relevance to what's already in view: same category first (plate
  // and stand), then same audience (stickers + NFC serve brands; the
  // prescription pad serves clinics), then catalog order. Without this a
  // sticker cart was offered the prescription pad ahead of the NFC plate.
  const current = products.filter((p) => excludeSlugs.includes(p.slug));
  const score = (p: (typeof products)[number]) =>
    current.some((c) => c.category === p.category) ? 2 : current.some((c) => AUDIENCE[c.slug] === AUDIENCE[p.slug]) ? 1 : 0;
  const others = products
    .filter((p) => !excludeSlugs.includes(p.slug))
    .sort((a, b) => score(b) - score(a))
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
