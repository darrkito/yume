import Link from "next/link";
import { hasVariants, productDisplayPrice, type Product } from "@/content/products";
import { formatMXN } from "@/lib/format";
import { waLink } from "@/content/site";
import { ProductVisual } from "@/components/ProductVisual";
import { AddToCartButton } from "@/components/AddToCartButton";
import { UI, type Lang } from "@/lib/i18n";

// Same wording as ProductPurchase.tsx's WA_QUOTE_MSG — the blog card's
// WhatsApp CTA has to read identically to the one on the real product page,
// so a reader never gets a different message depending on which page they
// clicked "cotizar" from.
const WA_QUOTE_MSG = {
  es: (label: string, price: string) => `Hola, me interesa cotizar: ${label} (${price} MXN). ¿Podrían darme más información?`,
  en: (label: string, price: string) => `Hi, I'm interested in getting a quote for: ${label} (${price} MXN). Could you give me more information?`,
};

// The blog's "related products" slot used to be a plain text link — this is
// the same clickable product widget used in the shop grid (image, price,
// real Add to cart button) so a reader can act on it without leaving the
// article, instead of just being told the product exists. It also carries
// its own WhatsApp CTA (not just Add to cart) — every blog post has to
// reference the specific product a reader would quote, the same way the
// quote-only posts (tattoos, invitations) already do via `quoteMessage`.
export function BlogProductCard({
  product,
  name,
  href,
  lang = "es",
}: {
  product: Product;
  name: string;
  href: string;
  lang?: Lang;
}) {
  const fromLabel = lang === "en" ? "From " : "Desde ";
  const price = productDisplayPrice(product);
  const waMsg = WA_QUOTE_MSG[lang](name, formatMXN(price));
  return (
    <div className="product-card border border-line bg-paper p-4">
      <Link href={href} className="group flex items-center gap-4">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden bg-paper-raised">
          <div className="product-card-visual">
            <ProductVisual product={product} compact />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-base text-ink transition-colors group-hover:text-brand text-balance">{name}</p>
          <p className="mt-1 text-sm font-semibold text-ink">
            {hasVariants(product) && fromLabel}
            {formatMXN(price)} MXN
          </p>
        </div>
      </Link>
      <AddToCartButton product={product} compact lang={lang} />
      <a
        href={waLink(waMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 block text-center text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-brand"
      >
        {UI[lang].quoteWhatsapp}
      </a>
    </div>
  );
}
