import type { Metadata } from "next";
import { hreflangFor, enPathToEsPath, type Lang } from "@/lib/i18n";
import { SITE } from "@/content/site";
import { hasVariants, productDisplayPrice, products, type Product } from "@/content/products";
import type { BlogPost } from "@/content/blog";

// Root cause of the og:url/og:title/og:description/og:locale bug found by
// the 2026-09-12 SEO audit: static pages that only set title/description
// (no openGraph key at all) inherit the root layout's openGraph object
// verbatim — including its homepage title and es_MX locale. Every dynamic
// [slug] page already sets its own openGraph and is unaffected. One
// helper, used by every static page, closes the gap for all of them at
// once instead of patching each file's Open Graph block by hand.
export function pageMetadata({
  title,
  description,
  path,
  lang = "es",
}: {
  title: string;
  description: string;
  path: string;
  lang?: Lang;
}): Metadata {
  const esPath = lang === "en" ? enPathToEsPath(path) : path;
  return {
    title,
    description,
    alternates: { canonical: path, languages: hreflangFor(esPath) },
    openGraph: {
      title,
      description,
      type: "website",
      url: path,
      locale: lang === "en" ? "en_US" : "es_MX",
      // openGraph is replaced wholesale by the child page, not deep-merged
      // with the root layout's — so every static page needs its own image,
      // or it renders with none (2026-09-15 SEO audit: 11/12 pages had no
      // og:image because this was missing here).
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE.name }],
    },
  };
}

// One BreadcrumbList node per nested page, matching the real nav hierarchy
// (Home -> ... -> this page). No page currently declares one at all.
export function breadcrumbSchema(path: string, trail: { name: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE.url}${path}#breadcrumb`,
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: `${SITE.url}${item.url}` } : {}),
    })),
  };
}

// Real fields only, sourced from content/products.ts (the same data the
// listing card itself renders — the "Desde $X MXN" price shown is exactly
// productDisplayPrice, the lowest variant price). `image` falls back to
// /og-image.jpg, the same convention the product's own OG tag already
// uses for a product with no dedicated photo (see productos/[slug]/page.tsx).
// availability is MadeToOrder — every Yume product genuinely is (see
// PRODUCT.md: "every piece is made to order and approved via a digital
// proof before it goes to print"), not a guess.
export function productSchema(product: Product, { name, path }: { name?: string; path: string }) {
  const price = productDisplayPrice(product);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE.url}${path}#product`,
    name: name ?? product.name,
    image: `${SITE.url}${product.image ?? "/og-image.jpg"}`,
    brand: { "@id": `${SITE.url}/#organization` },
    url: `${SITE.url}${path}`,
    offers: {
      "@type": hasVariants(product) ? "AggregateOffer" : "Offer",
      ...(hasVariants(product) ? { lowPrice: price } : { price }),
      priceCurrency: product.currency,
      availability: "https://schema.org/MadeToOrder",
      url: `${SITE.url}${path}`,
      seller: { "@id": `${SITE.url}/#organization` },
    },
  };
}

// Each blogPost[] entry gets a stable @id (so it can be cross-referenced from
// a single @graph, e.g. by the post's own page-level schema later) and a real
// `image`: the first related product's actual photo when the post has one
// (relatedProductSlugs), otherwise the site's real default share image —
// never a fabricated per-post photo (the blog deliberately has none, see
// yume_project.md "no stock photos" decision).
export function blogPostingEntry(post: BlogPost, { baseUrl }: { baseUrl: string }) {
  const relatedProduct = post.relatedProductSlugs.length > 0 ? products.find((p) => p.slug === post.relatedProductSlugs[0]) : undefined;
  const url = `${baseUrl}/${post.slug}`;
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    url,
    image: `${SITE.url}${relatedProduct?.image ?? "/og-image.jpg"}`,
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt ?? post.publishedAt,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}
