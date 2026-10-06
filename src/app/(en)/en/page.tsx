import type { Metadata } from "next";
import Link from "next/link";
import { Check, MessageCircle, CheckCircle2, Truck, PenTool, MapPin, ShieldCheck } from "lucide-react";
import { CASABLANCA_PRICE, FREE_SHIPPING_THRESHOLD } from "@/content/shipping";
import { hasVariants, productDisplayPrice, products } from "@/content/products";
import { productsEn } from "@/content/products.en";
import { getFeaturedFaqEn } from "@/content/faq.en";
import { SITE, waLink } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { formatMXN } from "@/lib/format";
import { HeroJarLazy } from "@/components/HeroJarLazy";
import { HeroPhotos } from "@/components/HeroPhotos";
import { CartReminder } from "@/components/CartReminder";
import { QuoteCard } from "@/components/QuoteCard";
import { QuoteBand } from "@/components/QuoteBand";
import { ProductRail } from "@/components/ProductRail";
import { CtaFillLink } from "@/components/CtaFillLink";
import { ProductVisual } from "@/components/ProductVisual";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductCard } from "@/components/ProductCard";
import { FaqQuestion } from "@/components/FaqAccordion";
import { InfiniteGalleryStrip } from "@/components/InfiniteGalleryStrip";
import { getGalleryItemsEn } from "@/content/gallery.en";
import { PRODUCT_SLUG_EN } from "@/lib/i18n";

const NO_MINIMUMS = [
  "One prescription pad or 40-50 stickers, not hundreds",
  "Flexible pricing from $100 MXN",
  "No bulk minimums like other print shops",
];

const HOW_IT_WORKS = [
  {
    icon: MessageCircle,
    title: "Get a quote",
    body: "Tell us what you need via WhatsApp or from the shop: your logo, character, pet, or design.",
  },
  {
    icon: CheckCircle2,
    title: "Approve your digital proof",
    body: "We send you a proof before printing. Nothing goes into production without your go-ahead.",
  },
  {
    icon: Truck,
    title: "Receive your order",
    body: "Shipping across Mexico or pickup at Casa Blanca Guadalajara.",
  },
];

export const metadata: Metadata = {
  ...pageMetadata({ title: SITE.homeTitleEn, description: SITE.descriptionEn, path: "/en", lang: "en" }),
  title: { absolute: SITE.homeTitleEn },
};

export default function HomeEn() {
  const featured = products[0];
  const rest = products.filter((p) => p.slug !== featured.slug);
  const featuredT = productsEn[featured.slug];
  const featuredFaq = getFeaturedFaqEn();

  return (
    <>
      <CartReminder lang="en" />
      {/* Hero */}
      <section className="desk-lamp-wash">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 pb-6 pt-8 sm:grid-cols-2 sm:gap-12 sm:pb-20 sm:pt-20">
          <div>
            <h1 className="font-display text-4xl leading-[1.1] text-ink text-balance sm:text-5xl lg:text-6xl">
              Custom stickers, prescription pads and stationery, <em className="italic text-brand">from $100 MXN</em>.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Custom stationery made to order in Guadalajara: medical prescription pads, stickers, and pieces built
              to your specs, approved with you before printing.
            </p>
            <div className="animate-fade-up animate-fade-up-2 mt-6 flex flex-wrap gap-4 sm:mt-8">
              <Link href="/en/products" className="btn-soft btn-soft-solid">
                See products &amp; prices
              </Link>
              <CtaFillLink
                href={waLink("Hi, I'm interested in getting a quote for a Yume product.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-soft btn-soft-outline"
              >
                Quote via WhatsApp
              </CtaFillLink>
            </div>
            <ul aria-label="Why buy with confidence" className="animate-fade-up animate-fade-up-2 mt-6 max-sm:hidden space-y-2 text-sm text-ink">
              <li className="flex items-center gap-2"><MapPin size={16} className="shrink-0 text-brand" aria-hidden="true" />Pick up in Guadalajara for {formatMXN(CASABLANCA_PRICE)} (free from {formatMXN(FREE_SHIPPING_THRESHOLD)})</li>
              <li className="flex items-center gap-2"><ShieldCheck size={16} className="shrink-0 text-brand" aria-hidden="true" />Pay by card, OXXO or SPEI</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="shrink-0 text-brand" aria-hidden="true" />You approve the design before printing</li>
            </ul>
          </div>
          <div className="animate-fade-up animate-fade-up-1 flex min-w-0 flex-col items-center sm:items-end">
            <div className="hidden sm:block sm:min-h-[380px]">
              <HeroJarLazy />
            </div>
            <HeroPhotos lang="en" />
          </div>
        </div>
      </section>

      {/* Phones: the shelf comes first, before any long explanation */}
      <ProductRail lang="en" heading="Pick your product">
        <ul aria-label="Why buy with confidence" className="mt-2 space-y-2 px-6 pb-8 text-sm text-ink">
              <li className="flex items-center gap-2"><MapPin size={16} className="shrink-0 text-brand" aria-hidden="true" />Pick up in Guadalajara for {formatMXN(CASABLANCA_PRICE)} (free from {formatMXN(FREE_SHIPPING_THRESHOLD)})</li>
              <li className="flex items-center gap-2"><ShieldCheck size={16} className="shrink-0 text-brand" aria-hidden="true" />Pay by card, OXXO or SPEI</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="shrink-0 text-brand" aria-hidden="true" />You approve the design before printing</li>
            </ul>
      </ProductRail>

      {/* No-minimums differentiator */}
      <section className="border-y border-line bg-paper-raised">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-lg text-ink text-balance sm:text-xl">
              Low minimums: from 1 prescription pad or 40 stickers<span className="text-ink-soft">.</span>
            </p>
            <ul className="flex flex-col gap-3 text-sm text-ink-soft sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
              {NO_MINIMUMS.map((item) => (
                <li key={item} className="flex items-start gap-2 sm:items-center">
                  <Check size={16} className="mt-0.5 shrink-0 text-brand sm:mt-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
        <h2 className="font-display text-3xl text-ink sm:text-4xl text-balance">How it works</h2>
        <div className="rail -mx-6 mt-8 flex scroll-px-6 snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0">
          {HOW_IT_WORKS.map((step, i) => (
            <div key={step.title} className="info-card w-[80%] shrink-0 snap-start p-7 sm:w-auto">
              <div className="info-card-icon">
                <step.icon size={20} aria-hidden="true" />
              </div>
              <p className="mt-5 text-xs font-semibold text-brand">Step {i + 1}</p>
              <h3 className="mt-1 font-display text-xl text-ink text-balance">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
            </div>
          ))}
        </div>
        <Link href="/en/products" className="mt-10 inline-flex min-h-11 items-center text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
          Choose my product →
        </Link>
      </section>

      {/* Featured product */}
      <section className="bg-brand-tint/60 max-sm:hidden">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
          <div className="grid gap-10 sm:grid-cols-[1fr_1.2fr] sm:items-center">
            <Link
              href={`/en/products/${PRODUCT_SLUG_EN[featured.slug]}`}
              className="card-soft tilt-a flex h-72 justify-center overflow-hidden p-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <ProductVisual product={featured} compact />
            </Link>
            <div>
              <p className="text-xs font-semibold text-brand-deep">
                {featured.isNew ? "New!" : "Featured product"}
              </p>
              <h2 className="mt-3 font-display text-3xl text-ink text-balance sm:text-4xl">
                <Link
                  href={`/en/products/${PRODUCT_SLUG_EN[featured.slug]}`}
                  className="transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {featuredT.name}
                </Link>
              </h2>
              <p className="mt-4 text-2xl font-semibold text-ink">
                {hasVariants(featured) && "From "}
                {formatMXN(productDisplayPrice(featured))} <span className="text-sm font-normal text-ink-soft">MXN</span>
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">{featuredT.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-ink">
                {featuredT.details.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {d}
                  </li>
                ))}
              </ul>
              <AddToCartButton product={featured} lang="en" />
              <Link
                href={`/en/products/${PRODUCT_SLUG_EN[featured.slug]}`}
                className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                View details & options →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More products */}
      {rest.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-20 max-sm:hidden">
          <h2 className="font-display text-3xl text-ink sm:text-4xl text-balance">More products</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {rest.flatMap((p, i) => [
              <ProductCard key={p.slug} product={p} index={i} lang="en" />,
              ...(p.slug === "stickers-logo-personalizado" ? [<QuoteCard key="tattoos" index={i + 1} lang="en" />] : []),
            ])}
          </div>
          <QuoteBand lang="en" className="mt-10" />
          <Link
            href="/en/products"
            className="mt-10 inline-flex min-h-11 items-center text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            View full shop →
          </Link>
        </section>
      )}

      {/* Gallery teaser */}
      <section className="mx-auto max-w-6xl px-6">
        <InfiniteGalleryStrip
          items={getGalleryItemsEn()}
          heading="Work we've done"
          body="Hello Kitty, Pokémon, Zelda, pets, logos and more: see real examples of stickers we've produced."
          viewAllLabel="See the full gallery"
          viewAllHref="/en/gallery"
        productLinksLang="en"
        />
      </section>

      {/* Values */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
          <h2 className="font-display text-3xl text-ink sm:text-4xl text-balance">Why Yume</h2>
          <div className="rail -mx-6 mt-8 flex scroll-px-6 snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-3 sm:gap-10 sm:overflow-visible sm:px-0 sm:pb-0">
            <div className="w-[78%] shrink-0 snap-start sm:w-auto">
              <div className="info-card-icon">
                <PenTool size={20} aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink text-balance">Design tailored to you</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Every piece is adjusted to your details, your brand, or your practice, no generic templates.
              </p>
            </div>
            <div className="w-[78%] shrink-0 snap-start sm:w-auto">
              <div className="info-card-icon">
                <CheckCircle2 size={20} aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink text-balance">You approve before printing</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                You get a digital proof and give the go-ahead before your order goes into production.
              </p>
            </div>
            <div className="w-[78%] shrink-0 snap-start sm:w-auto">
              <div className="info-card-icon">
                <MapPin size={20} aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink text-balance">Made in Guadalajara</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Local production in Jalisco, shipping across all of Mexico, made for businesses and professionals who
                want stationery with character.
              </p>
            </div>
          </div>
          <Link href="/en/products" className="mt-10 inline-flex min-h-11 items-center text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
            See products and prices →
          </Link>
        </div>
      </section>

      {/* FAQ teaser */}
      <section id="faq" className="border-t border-line bg-paper-raised">
        <div className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
          <h2 className="font-display text-3xl text-ink text-balance">Have questions?</h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {featuredFaq.map((f) => (
              <FaqQuestion key={f.q} item={f} />
            ))}
          </div>
          <Link
            href="/en/faq"
            className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            View all questions →
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-line bg-brand-tint/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl text-ink text-balance sm:text-3xl">Ready to order?</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
              Pick from the shop and pay online, or get a free WhatsApp quote for something custom.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/en/products" className="btn-soft btn-soft-solid">
              See products &amp; prices
            </Link>
            <CtaFillLink
              href={waLink("Hi, I'm interested in getting a quote for a Yume product.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-soft btn-soft-outline"
            >
              Quote via WhatsApp
            </CtaFillLink>
          </div>
        </div>
      </section>
    </>
  );
}
