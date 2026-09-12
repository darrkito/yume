import type { Metadata } from "next";
import Link from "next/link";
import { hasVariants, productDisplayPrice, products } from "@/content/products";
import { productsEn } from "@/content/products.en";
import { FREE_SHIPPING_THRESHOLD, NATIONAL_SHIPPING_PRICE } from "@/content/shipping";
import { formatMXN } from "@/lib/format";
import { ProductVisual } from "@/components/ProductVisual";
import { AddToCartButton } from "@/components/AddToCartButton";
import { waLink } from "@/content/site";
import { CheckCircle2, Clock, Truck } from "lucide-react";
import { PRODUCT_SLUG_EN, UI } from "@/lib/i18n";
import { pageMetadata, productSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Shop Custom Stationery and Prescription Pads Online",
  description: "Custom stationery and personalized goods from Yume: medical prescription pads, custom stickers, and more, tailored to you.",
  path: "/en/products",
  lang: "en",
});

export default function ProductsPageEn() {
  const t = UI.en;
  const productSchemas = products.map((p) =>
    productSchema(p, { name: productsEn[p.slug].name, path: `/en/products/${PRODUCT_SLUG_EN[p.slug]}` }),
  );
  const breadcrumb = breadcrumbSchema("/en/products", [{ name: "Home", url: "/en" }, { name: "Products" }]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="animate-fade-up font-display text-4xl text-ink sm:text-5xl">Our products</h1>
      <p className="animate-fade-up animate-fade-up-1 mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Every piece is made to order and personalized with you before printing.
      </p>
      <ul className="animate-fade-up animate-fade-up-2 mt-6 flex flex-col gap-2 text-sm text-ink sm:flex-row sm:flex-wrap sm:gap-x-8">
        <li className="flex items-start gap-2"><Truck size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.factShipping.replace("{national}", formatMXN(NATIONAL_SHIPPING_PRICE)).replace("{threshold}", formatMXN(FREE_SHIPPING_THRESHOLD))}</li>
        <li className="flex items-start gap-2"><Clock size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.factTiming}</li>
        <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.factProof}</li>
      </ul>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => {
          const productT = productsEn[p.slug];
          return (
            <div key={p.slug} className={`card-soft group flex flex-col p-6 ${i % 2 === 0 ? "tilt-a" : "tilt-b"}`}>
              <Link href={`/en/products/${PRODUCT_SLUG_EN[p.slug]}`}>
                <div className="flex h-48 justify-center overflow-hidden">
                  <div className="product-card-visual">
                    <ProductVisual product={p} compact />
                  </div>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-brand">{productT.category}</p>
                <h2 className="mt-1 font-display text-xl text-ink group-hover:text-brand transition-colors">{productT.name}</h2>
                <p className="mt-2 text-lg font-semibold text-ink">
                  {hasVariants(p) && "From "}
                  {formatMXN(productDisplayPrice(p))} MXN
                </p>
              </Link>
              <AddToCartButton product={p} compact lang="en" href={`/en/products/${PRODUCT_SLUG_EN[p.slug]}`} />
            </div>
          );
        })}
      </div>
      <div className="mt-16 rounded-2xl border border-line bg-paper-raised p-8 text-center">
        <h2 className="font-display text-2xl text-ink text-balance">{t.listingCtaTitle}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{t.listingCtaBody}</p>
        <a href={waLink("Hi, I'm interested in getting a quote for a Yume product.")} target="_blank" rel="noopener noreferrer" className="btn-soft btn-soft-solid mt-6">{t.quoteWhatsapp}</a>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {productSchemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
    </section>
  );
}
