import type { Metadata } from "next";
import { hreflangFor, enPathToEsPath, type Lang } from "@/lib/i18n";
import { SITE } from "@/content/site";
import { productDisplayPrice, products, type Product } from "@/content/products";
import type { BlogPost } from "@/content/blog";
import { CASABLANCA_PRICE, NATIONAL_SHIPPING_PRICE, NATIONAL_TRANSIT_DAYS, PICKUP_EXTRA_DAYS, PRODUCTION_DAYS } from "@/content/shipping";

export const ORG_ID = `${SITE.url}/#organization`;

// "en_MX" is not a locale Facebook/Open Graph consumers recognise; the
// English pages are written in US English for buyers in Mexico.
export const ogLocale = (lang: Lang) => (lang === "en" ? "en_US" : "es_MX");

const OG_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: SITE.name };

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
      siteName: SITE.name,
      locale: ogLocale(lang),
      // openGraph is replaced wholesale by the child page, not deep-merged
      // with the root layout's — so every static page needs its own image,
      // or it renders with none (2026-09-15 SEO audit: 11/12 pages had no
      // og:image because this was missing here).
      images: [OG_IMAGE],
    },
  };
}

// generateMetadata on a [slug] page whose slug doesn't exist (the page then
// calls notFound()): noindex and no inherited canonical.
export function notFoundMetadata(lang: Lang = "es"): Metadata {
  return noindexMetadata({ title: lang === "en" ? "Page not found" : "Página no encontrada", lang });
}

// Cart, checkout and 404 pages: noindex, and no canonical/hreflang/og:url at
// all. Without this they inherited the root layout's homepage canonical,
// which reads as "this page is a duplicate of the homepage" (soft-404 signal).
export function noindexMetadata({ title, lang = "es" }: { title: string; lang?: Lang }): Metadata {
  return {
    title,
    robots: { index: false, follow: true },
    alternates: {},
    openGraph: { title, siteName: SITE.name, locale: ogLocale(lang), images: [OG_IMAGE] },
  };
}

// The founder as a Person node (Organization.founder, the about page,
// BlogPosting.author). null until SITE.founder holds a real person.
export function founderSchema(lang: Lang) {
  const f = SITE.founder;
  if (!f) return null;
  return {
    "@type": "Person",
    "@id": `${SITE.url}/nosotros#founder`,
    name: f.name,
    jobTitle: f.role[lang],
    description: f.bio[lang],
    url: `${SITE.url}${lang === "en" ? "/en/about" : "/nosotros"}`,
    ...(f.photo ? { image: `${SITE.url}${f.photo}` } : {}),
    worksFor: { "@id": ORG_ID },
    ...(f.sameAs?.length ? { sameAs: f.sameAs } : {}),
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

// Listing pages describe the catalog as an ItemList of links. The full
// Product node lives only on each product's own page (Google: Product markup
// belongs on the product page, not on category pages), so every product has
// exactly one Product entity, with one @id, across the whole site.
export function itemListSchema(path: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE.url}${path}#itemlist`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${SITE.url}${item.path}`,
    })),
  };
}

// The one Product node per product, rendered on its ES and EN pages. Real
// fields only, from content/products.ts and content/shipping.ts:
// - price is productDisplayPrice (the lowest purchasable option, the same
//   "Desde $X" the page shows). A plain Offer (not AggregateOffer) keeps the
//   page eligible for Merchant listings; for products sold by piece count,
//   eligibleQuantity states the minimum that price buys.
// - availability stays InStock: every option can be ordered right now
//   (Merchant Center has no made-to-order value), and handlingTime already
//   carries the 3-5 day production window.
// - two shipping options: national paquetería, and Casa Blanca branch
//   pickup inside the Guadalajara metro area (Jalisco).
export function productPageSchema(
  product: Product,
  { lang, path, name, description, category, images }: { lang: Lang; path: string; name: string; description: string; category: string; images: string[] },
) {
  const url = `${SITE.url}${path}`;
  const handlingTime = { "@type": "QuantitativeValue", minValue: PRODUCTION_DAYS.min, maxValue: PRODUCTION_DAYS.max, unitCode: "DAY" };
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    url,
    sku: product.slug,
    name,
    description,
    category,
    image: [...new Set(images)].map((src) => `${SITE.url}${src}`),
    brand: { "@type": "Brand", name: SITE.name },
    manufacturer: { "@id": ORG_ID },
    offers: {
      "@type": "Offer",
      price: productDisplayPrice(product),
      priceCurrency: product.currency,
      ...(product.tiers
        ? { eligibleQuantity: { "@type": "QuantitativeValue", minValue: product.tiers.baseQty, unitCode: "C62", unitText: lang === "en" ? "pieces" : "piezas" } }
        : {}),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      url,
      areaServed: { "@type": "Country", name: lang === "en" ? "Mexico" : "México" },
      eligibleRegion: { "@type": "Country", name: "MX" },
      seller: { "@id": ORG_ID },
      hasMerchantReturnPolicy: merchantReturnPolicy(lang),
      shippingDetails: [
        {
          "@type": "OfferShippingDetails",
          shippingRate: { "@type": "MonetaryAmount", value: String(NATIONAL_SHIPPING_PRICE), currency: "MXN" },
          shippingDestination: { "@type": "DefinedRegion", addressCountry: "MX" },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime,
            transitTime: { "@type": "QuantitativeValue", minValue: NATIONAL_TRANSIT_DAYS.min, maxValue: NATIONAL_TRANSIT_DAYS.max, unitCode: "DAY" },
          },
        },
        {
          "@type": "OfferShippingDetails",
          shippingLabel: lang === "en" ? "Pickup at a Casa Blanca branch (Guadalajara metro area)" : "Recolección en sucursal Casa Blanca (zona metropolitana de Guadalajara)",
          shippingRate: { "@type": "MonetaryAmount", value: String(CASABLANCA_PRICE), currency: "MXN" },
          shippingDestination: { "@type": "DefinedRegion", addressCountry: "MX", addressRegion: "JAL" },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime,
            transitTime: { "@type": "QuantitativeValue", minValue: PICKUP_EXTRA_DAYS, maxValue: PICKUP_EXTRA_DAYS, unitCode: "DAY" },
          },
        },
      ],
    },
  };
}

// Only defective items can be returned or exchanged (everything is made to
// order): 48 h from delivery, customer pays the return shipping. Full text
// at /politica-de-devoluciones (ES) and /en/returns-policy (EN).
export function merchantReturnPolicy(lang: Lang) {
  return {
    "@type": "MerchantReturnPolicy",
    returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
    applicableCountry: "MX",
    itemDefectReturnFees: "https://schema.org/ReturnShippingFees",
    merchantReturnLink: `${SITE.url}${lang === "en" ? "/en/returns-policy" : "/politica-de-devoluciones"}`,
  };
}

// A post's real share image: the first related product's actual photo when
// the post has one (relatedProductSlugs), otherwise the site's default share
// image — never a fabricated per-post photo (the blog deliberately has none,
// see yume_project.md "no stock photos" decision).
export function blogPostImage(post: BlogPost): string {
  const relatedProduct = post.relatedProductSlugs.length > 0 ? products.find((p) => p.slug === post.relatedProductSlugs[0]) : undefined;
  return relatedProduct?.image ?? "/og-image.jpg";
}

// Each blogPost[] entry on the blog index carries the same @id as the full
// BlogPosting on the post's own page (blogPostingSchema), so both describe
// one entity instead of two.
export function blogPostingEntry(post: BlogPost, { baseUrl }: { baseUrl: string }) {
  const url = `${baseUrl}/${post.slug}`;
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    url,
    image: `${SITE.url}${blogPostImage(post)}`,
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt ?? post.publishedAt,
    // A named person when there is one (first-hand authorship is what
    // Google's helpful-content signals look for); the business otherwise.
    author: SITE.founder ? { "@id": `${SITE.url}/nosotros#founder` } : { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

export function blogPostingSchema(post: BlogPost, { lang, path }: { lang: Lang; path: string }) {
  const url = `${SITE.url}${path}`;
  return {
    "@context": "https://schema.org",
    ...blogPostingEntry(post, { baseUrl: url.slice(0, url.lastIndexOf("/")) }),
    description: post.description,
    inLanguage: lang === "en" ? "en" : "es-MX",
    ...(SITE.founder ? { author: founderSchema(lang) } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    isPartOf: { "@id": `${SITE.url}/#website` },
  };
}

// Post pages: the per-page metadata, with the share image, article dates and
// locale that a page-level openGraph object must restate (it replaces the
// root layout's openGraph wholesale instead of merging with it).
export function blogPostMetadata(post: BlogPost, { lang, path, languages }: { lang: Lang; path: string; languages?: ReturnType<typeof hreflangFor> }): Metadata {
  const title = post.metaTitle ?? post.title;
  const image = blogPostImage(post);
  return {
    title,
    description: post.description,
    alternates: { canonical: path, languages },
    openGraph: {
      title,
      description: post.description,
      type: "article",
      url: path,
      siteName: SITE.name,
      locale: ogLocale(lang),
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt ?? post.publishedAt,
      images: [image === "/og-image.jpg" ? OG_IMAGE : { url: image, alt: post.title }],
    },
    twitter: { card: "summary_large_image", images: [image] },
  };
}
