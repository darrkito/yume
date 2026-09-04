import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, productDisplayPrice, products } from "@/content/products";
import { getProductTranslation } from "@/content/products.en";
import { SITE } from "@/content/site";
import { ProductVisual } from "@/components/ProductVisual";
import { ProductPurchase } from "@/components/ProductPurchase";
import { LogoUploadNote } from "@/components/LogoUploadNote";
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
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <nav aria-label="Breadcrumb" className="mb-10 text-xs text-ink-soft">
        <Link href="/en" className="hover:text-brand transition-colors">
          Home
        </Link>
        {" / "}
        <Link href="/en/products" className="hover:text-brand transition-colors">
          Shop
        </Link>
        {" / "}
        <span className="text-ink">{t.name}</span>
      </nav>

      <div className="grid gap-14 sm:grid-cols-2">
        <div className="flex items-center justify-center rounded-2xl border border-line bg-paper-raised p-10 sm:justify-start">
          <ProductVisual product={product} />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand">{t.category}</p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{t.name}</h1>

          <ProductPurchase product={product} lang="en" />

          <p className="mt-6 text-sm leading-relaxed text-ink-soft">{t.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-line py-6 text-sm">
            {t.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="text-ink-soft">{spec.label}</dt>
                <dd className="mt-1 font-medium text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>

          {product.requiresImage && <LogoUploadNote lang="en" />}

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
