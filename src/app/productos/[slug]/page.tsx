import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, productDisplayPrice, products } from "@/content/products";
import { SITE } from "@/content/site";
import { ProductVisual } from "@/components/ProductVisual";
import { ProductPurchase } from "@/components/ProductPurchase";
import { LogoUploadNote } from "@/components/LogoUploadNote";
import { hreflangFor } from "@/lib/i18n";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const title = product.name;
  const description = product.description;
  const ogImage = product.image ?? "/og-image.jpg";
  return {
    title,
    description,
    alternates: { canonical: `/productos/${slug}`, languages: hreflangFor(`/productos/${slug}`) },
    openGraph: { title, description, type: "website", url: `/productos/${slug}`, images: [ogImage] },
    twitter: { card: "summary_large_image", images: [ogImage] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    image: [`${SITE.url}${product.image ?? "/og-image.jpg"}`],
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "Offer",
      price: productDisplayPrice(product),
      priceCurrency: product.currency,
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/productos/${product.slug}`,
      areaServed: { "@type": "Country", name: "México" },
      seller: { "@id": `${SITE.url}/#organization` },
      // No hay devoluciones salvo defecto de fábrica — todos los productos
      // son personalizados/hechos por pedido.
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
        applicableCountry: "MX",
      },
      // El costo real de envío varía por destino/paquetería; $150 MXN es un
      // estimado nacional promedio para paquetería ligera — ajustar cuando
      // se tenga una tarifa real confirmada.
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
    mainEntity: product.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <nav aria-label="Breadcrumb" className="mb-10 text-xs text-ink-soft">
        <Link href="/" className="hover:text-brand transition-colors">
          Inicio
        </Link>
        {" / "}
        <Link href="/productos" className="hover:text-brand transition-colors">
          Tienda
        </Link>
        {" / "}
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-14 sm:grid-cols-2">
        <div className="flex items-center justify-center rounded-2xl border border-line bg-paper-raised p-10 sm:justify-start">
          <ProductVisual product={product} />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand">{product.category}</p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{product.name}</h1>

          <ProductPurchase product={product} />

          <p className="mt-6 text-sm leading-relaxed text-ink-soft">{product.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-line py-6 text-sm">
            {product.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="text-ink-soft">{spec.label}</dt>
                <dd className="mt-1 font-medium text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>

          {product.requiresImage && <LogoUploadNote />}

          <ul className="mt-10 space-y-2 text-sm text-ink">
            {product.details.map((d) => (
              <li key={d} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 border-t border-line pt-14">
        <h2 className="font-display text-2xl text-ink">Preguntas frecuentes</h2>
        <div className="mt-8 space-y-6 max-w-2xl">
          {product.faq.map((f) => (
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
