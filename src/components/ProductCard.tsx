import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { hasVariants, productDisplayPrice, tieredPrice, type Product } from "@/content/products";
import { productsEn } from "@/content/products.en";
import { ProductVisual } from "@/components/ProductVisual";
import { AddToCartButton } from "@/components/AddToCartButton";
import { PickupBadge } from "@/components/PickupBadge";
import { waLink } from "@/content/site";
import { formatMXN } from "@/lib/format";
import { PRODUCT_SLUG_EN, UI, type Lang } from "@/lib/i18n";

const SIZES = {
  md: { card: "p-6", media: "h-48", name: "mt-6 text-xl", price: "mt-2 text-xl font-bold" },
  sm: { card: "p-5", media: "h-32", name: "mt-4 text-base", price: "mt-1 text-sm font-semibold" },
};

// The one listing card (home, shop, cross-sell). One action per card: the
// whole card opens the product page ("Ver y personalizar"), except quickBuy
// products, which add straight to the cart since there's nothing to
// personalize.
export function ProductCard({
  product,
  lang = "es",
  index = 0,
  size = "md",
  headingAs: Heading = "h3",
}: {
  product: Product;
  lang?: Lang;
  index?: number;
  size?: keyof typeof SIZES;
  headingAs?: "h2" | "h3" | "p";
}) {
  const t = UI[lang];
  const s = SIZES[size];
  const name = lang === "en" ? (productsEn[product.slug]?.name ?? product.name) : product.name;
  const href = lang === "en" ? `/en/products/${PRODUCT_SLUG_EN[product.slug]}` : `/productos/${product.slug}`;
  const tiers = product.tiers;

  return (
    <div className={`card-soft group flex flex-col ${s.card} ${index % 2 === 0 ? "tilt-a" : "tilt-b"}`}>
      <Link
        href={href}
        className="flex flex-1 flex-col rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        <div className={`relative flex ${s.media} justify-center overflow-hidden`}>
          <PickupBadge lang={lang} />
          {product.isNew && (
            <span className="absolute left-0 top-0 z-10 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
              {lang === "en" ? "New" : "Nuevo"}
            </span>
          )}
          <div className="product-card-visual">
            <ProductVisual product={product} compact />
          </div>
        </div>
        <Heading className={`font-display text-ink text-balance transition-colors group-hover:text-brand ${s.name}`}>{name}</Heading>
        <p className={`text-ink ${s.price}`}>
          {hasVariants(product) && <span className="text-sm font-normal text-ink-soft">{t.from}</span>}
          {formatMXN(productDisplayPrice(product))} <span className="text-sm font-normal text-ink-soft">MXN</span>
        </p>
        {tiers && (
          <p className="mt-1 text-xs leading-relaxed text-ink-soft">
            {t.cardTier.replace("{qty}", String(tiers.discountQty)).replace("{price}", formatMXN(tieredPrice(tiers, tiers.discountQty)))}
          </p>
        )}
        {!product.quickBuy && (
          <span className="mt-auto pt-4">
            <span className="btn-soft btn-soft-solid w-full whitespace-nowrap px-4">{t.viewAndCustomize}</span>
          </span>
        )}
      </Link>
      {product.quickBuy && <AddToCartButton product={product} compact lang={lang} />}
      <a
        href={waLink(t.cardQuoteMsg.replace("{name}", name))}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-soft btn-soft-outline mt-3 w-full whitespace-nowrap px-4"
      >
        <MessageCircle size={16} aria-hidden="true" /> {t.quoteWhatsapp}
      </a>
    </div>
  );
}
