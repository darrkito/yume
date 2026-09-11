import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, productDisplayPrice, products } from "@/content/products";
import { getProductTranslation } from "@/content/products.en";
import { SITE } from "@/content/site";
import { ProductVisual } from "@/components/ProductVisual";
import { ProductPurchase } from "@/components/ProductPurchase";
import { LogoUploadNote } from "@/components/LogoUploadNote";
import { InfiniteGalleryStrip } from "@/components/InfiniteGalleryStrip";
import { getGalleryItemsEn } from "@/content/gallery.en";
import { hreflangFor, PRODUCT_SLUG_EN, PRODUCT_SLUG_ES } from "@/lib/i18n";

export function generateStaticParams() {
  return products.map((p) => ({ slug: PRODUCT_SLUG_EN[p.slug] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const esSlug = PRODUCT_SLUG_ES[slug];
  const product = esSlug ? getProduct(esSlug) : undefined;
  const t = esSlug ? getProductTranslation(esSlug) : undefined;
  if (!product || !t) return {};
  const ogImage = product.image ?? "/og-image.jpg";
  const description = t.metaDescription ?? t.description;
  return {
    title: t.name,
    description,
    alternates: { canonical: `/en/products/${slug}`, languages: hreflangFor(`/productos/${esSlug}`) },
    openGraph: { title: t.name, description, type: "website", url: `/en/products/${slug}`, images: [ogImage], locale: "en_US" },
    twitter: { card: "summary_large_image", images: [ogImage] },
  };
}

export default async function ProductPageEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const esSlug = PRODUCT_SLUG_ES[slug];
  const product = esSlug ? getProduct(esSlug) : undefined;
  const t = esSlug ? getProductTranslation(esSlug) : undefined;
  if (!product || !t) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: t.name,
    description: t.description,
    category: t.category,
    image: [`${SITE.url}${product.image ?? "/og-image.jpg"}`],
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "Offer",
      price: productDisplayPrice(product),
      priceCurrency: product.currency,
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/en/products/${slug}`,
      areaServed: { "@type": "Country", name: "Mexico" },
      seller: { "@id": `${SITE.url}/#organization` },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
        applicableCountry: "MX",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: "150", currency: "MXN" },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "MX" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: 3, maxValue: 5, unitCode: "DAY" },
          transitTime: { "@type": "QuantitativeValue", minValue: 2, maxValue: 5, unitCode: "DAY" },
        },
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-8 sm:pb-24 sm:pt-16">
      <nav aria-label="Breadcrumb" className="mb-4 text-xs text-ink-soft sm:mb-10">
        <Link href="/en" className="inline-flex min-h-11 items-center hover:text-brand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
          Home
        </Link>
        {" / "}
        <Link href="/en/products" className="inline-flex min-h-11 items-center hover:text-brand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
          Shop
        </Link>
        {" / "}
        <span className="text-ink">{t.name}</span>
      </nav>

      <div className="grid gap-8 sm:gap-14 sm:grid-cols-2 sm:items-start">
        <div className="sm:sticky sm:top-24 sm:self-start">
          <div className="product-zoom-frame card-soft flex items-center justify-center p-4 [&_img]:max-h-44 [&_img]:w-auto [&_img]:object-contain [&_.product-zoom-img]:max-h-44 sm:[&_img]:max-h-none sm:[&_.product-zoom-img]:max-h-none sm:justify-start sm:p-10">
            <div className="product-zoom-img">
              <ProductVisual product={product} />
            </div>
          </div>
        </div>

        <div>
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.1em] text-brand">{t.category}</p>
          <h1 className="animate-fade-up animate-fade-up-1 mt-3 font-display text-3xl text-ink sm:text-4xl">{t.name}</h1>

          <ProductPurchase product={product} lang="en" />

          <p className="mt-6 text-sm leading-relaxed text-ink-soft">{t.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-line py-6 text-sm">
            {t.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="text-xs text-ink-soft">{spec.label}</dt>
                <dd className="mt-1 font-medium text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>

          {product.requiresImage && <LogoUploadNote slug={product.slug} lang="en" />}

          <ul className="mt-10 space-y-2 text-sm text-ink">
            {t.details.map((d) => (
              <li key={d} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {product.showGallery && (
        <InfiniteGalleryStrip
          items={getGalleryItemsEn()}
          heading="Work we've done"
          body="Real examples of stickers we've produced — characters, pets, and logos."
          viewAllLabel="See the full gallery"
          viewAllHref="/en/gallery"
        />
      )}

      <div className="mt-20 border-t border-line pt-14">
        <h2 className="font-display text-2xl text-ink">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-6 max-w-2xl">
          {t.faq.map((f) => (
            <div key={f.q} className="border-b border-line pb-6">
              <h3 className="font-display text-lg text-ink">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
