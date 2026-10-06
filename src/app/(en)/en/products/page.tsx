import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/content/products";
import { productsEn } from "@/content/products.en";
import { FREE_SHIPPING_THRESHOLD, NATIONAL_SHIPPING_PRICE } from "@/content/shipping";
import { formatMXN } from "@/lib/format";
import { ProductCard } from "@/components/ProductCard";
import { QuoteCard } from "@/components/QuoteCard";
import { waLink } from "@/content/site";
import { CheckCircle2, Clock, Truck } from "lucide-react";
import { PRODUCT_SLUG_EN, UI } from "@/lib/i18n";
import { pageMetadata, itemListSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Shop Custom Stationery and Prescription Pads Online",
  description: "Custom stationery and personalized goods from Yume: medical prescription pads, custom stickers, and more, tailored to you.",
  path: "/en/products",
  lang: "en",
});

export default function ProductsPageEn() {
  const t = UI.en;
  const itemList = itemListSchema(
    "/en/products",
    products.map((p) => ({ name: productsEn[p.slug].name, path: `/en/products/${PRODUCT_SLUG_EN[p.slug]}` })),
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

      <nav aria-label="Shop by use" className="animate-fade-up animate-fade-up-2 mt-8">
        <ul className="flex flex-wrap gap-3">
          <li><Link href="/en/products/medical-prescription-pads" className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper-raised px-5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">For your practice</Link></li>
          <li><Link href="/en/products/custom-logo-stickers" className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper-raised px-5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">For your brand</Link></li>
          <li><Link href="/en/products/waterproof-vinyl-stickers" className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper-raised px-5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">For gifting</Link></li>
          <li><Link href="/en/products/google-review-nfc-plate" className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper-raised px-5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">For more reviews</Link></li>
        </ul>
      </nav>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {products.flatMap((p, i) => [
          <ProductCard key={p.slug} product={p} index={i} headingAs="h2" lang="en" />,
          ...(p.slug === "stickers-logo-personalizado" ? [<QuoteCard key="tattoos" index={i + 1} lang="en" />] : []),
        ])}
      </div>
      <div className="mt-16 rounded-2xl border border-line bg-paper-raised p-8 text-center">
        <h2 className="font-display text-2xl text-ink text-balance">{t.listingCtaTitle}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{t.listingCtaBody}</p>
        <a href={waLink("Hi, I'm interested in getting a quote for a Yume product.")} target="_blank" rel="noopener noreferrer" className="btn-soft btn-soft-solid mt-6">{t.quoteWhatsapp}</a>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </section>
  );
}
