import Link from "next/link";
import { hasVariants, productDisplayPrice, type Product } from "@/content/products";
import { formatMXN } from "@/lib/format";
import { ProductVisual } from "@/components/ProductVisual";
import { AddToCartButton } from "@/components/AddToCartButton";
import type { Lang } from "@/lib/i18n";

// The blog's "related products" slot used to be a plain text link — this is
// the same clickable product widget used in the shop grid (image, price,
// real Add to cart button) so a reader can act on it without leaving the
// article, instead of just being told the product exists.
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
  return (
    <div className="rounded-xl border border-line bg-paper p-4">
      <Link href={href} className="group flex items-center gap-4">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-paper-raised">
          <ProductVisual product={product} compact />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-base text-ink transition-colors group-hover:text-brand text-balance">{name}</p>
          <p className="mt-1 text-sm font-semibold text-ink">
            {hasVariants(product) && fromLabel}
            {formatMXN(productDisplayPrice(product))} MXN
          </p>
        </div>
      </Link>
      <AddToCartButton product={product} compact lang={lang} />
    </div>
  );
}
