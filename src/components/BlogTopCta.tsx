import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import type { Product } from "@/content/products";
import { productsEn } from "@/content/products.en";
import { waLink } from "@/content/site";
import { PRODUCT_SLUG_EN, UI, type Lang } from "@/lib/i18n";

export function BlogTopCta({ post, products, lang }: { post: BlogPost; products: Product[]; lang: Lang }) {
  const product = products[0];
  if (!product && !post.serviceLink && !post.quoteMessage) return null;

  const name = product ? (lang === "en" ? productsEn[product.slug].name : product.name) : post.serviceLink?.label;
  const productHref = product && (lang === "en" ? `/en/products/${PRODUCT_SLUG_EN[product.slug]}` : `/productos/${product.slug}`);
  const message = post.quoteMessage ?? (lang === "en" ? `Hi, I'm interested in ${name}.` : `Hola, me interesa ${name}.`);

  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      {product && productHref ? (
        <Link href={productHref} className="btn-soft btn-soft-solid">
          {lang === "en" ? `View ${name}` : `Ver ${name}`}
        </Link>
      ) : post.serviceLink ? (
        <Link href={post.serviceLink.href} className="btn-soft btn-soft-solid">
          {post.serviceLink.label}
        </Link>
      ) : null}
      <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn-soft btn-soft-outline">
        {UI[lang].quoteWhatsapp}
      </a>
    </div>
  );
}
