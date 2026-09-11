import type { Metadata } from "next";
import Link from "next/link";
import { getProduct, hasVariants, productDisplayPrice, products } from "@/content/products";
import { productsEn } from "@/content/products.en";
import { getFeaturedFaqEn } from "@/content/faq.en";
import { waLink } from "@/content/site";
import { formatMXN } from "@/lib/format";
import { HeroJar } from "@/components/HeroJar";
import { CtaFillLink } from "@/components/CtaFillLink";
import { ProductVisual } from "@/components/ProductVisual";
import { FaqQuestion } from "@/components/FaqAccordion";
import { InfiniteGalleryStrip } from "@/components/InfiniteGalleryStrip";
import { getGalleryItemsEn } from "@/content/gallery.en";
import { hreflangFor, PRODUCT_SLUG_EN } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: "Yume — Custom Creative Stationery" },
  description:
    "Yume — custom stationery from Guadalajara, Jalisco: medical prescription pads and custom stickers, shipping across Mexico.",
  alternates: { canonical: "/en", languages: hreflangFor("/") },
  openGraph: {
    title: "Yume — Custom Creative Stationery",
    description: "Custom stationery and personalized goods made to order from Guadalajara, Jalisco, shipping across all of Mexico.",
    type: "website",
    url: "/en",
    locale: "en_US",
  },
};

export default function HomeEn() {
  const featured = getProduct("stickers-vinil-impermeable") ?? products[0];
  const rest = products.filter((p) => p.slug !== featured.slug);
  const featuredT = productsEn[featured.slug];
  const featuredFaq = getFeaturedFaqEn();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-2">
          <div>
            <h1 className="animate-fade-up font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-ink text-balance sm:text-6xl lg:text-7xl">
              Paper with intention.
            </h1>
            <p className="animate-fade-up animate-fade-up-1 mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Custom stationery made to order in Guadalajara: medical prescription pads, stickers, and pieces built
              to your specs, approved with you before printing.
            </p>
            <div className="animate-fade-up animate-fade-up-2 mt-8 flex flex-wrap gap-4">
              <Link href="/en/products" className="btn-edit btn-edit-solid">
                View shop
              </Link>
              <CtaFillLink
                href={waLink("Hi, I'm interested in getting a quote for a Yume product.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-edit"
              >
                Quote via WhatsApp
              </CtaFillLink>
            </div>
          </div>
          <div className="animate-fade-up animate-fade-up-1 flex min-w-0 justify-center sm:justify-end">
            <HeroJar />
          </div>
        </div>
      </section>

      {/* Featured product */}
      <section className="border-y-2 border-line-strong bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 sm:grid-cols-[1fr_1.2fr] sm:items-start">
            <div className="flex h-72 items-center justify-center overflow-hidden border border-paper/20 bg-paper p-8">
              <ProductVisual product={featured} compact />
            </div>
            <div>
              <p className="mono-label text-xs text-paper/60">Featured product</p>
              <h2 className="mt-3 font-display text-3xl font-black uppercase text-balance sm:text-4xl">{featuredT.name}</h2>
              <p className="mt-4 text-2xl font-semibold">
                {hasVariants(featured) && "From "}
                {formatMXN(productDisplayPrice(featured))} <span className="text-sm font-normal text-paper/60">MXN</span>
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-paper/75">{featuredT.description}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {featuredT.details.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" />
                    {d}
                  </li>
                ))}
              </ul>
              <Link
                href={`/en/products/${PRODUCT_SLUG_EN[featured.slug]}`}
                className="btn-edit btn-edit-solid mt-8 border-paper bg-paper text-ink hover:bg-brand hover:text-paper"
              >
                View details & quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More products */}
      {rest.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-black uppercase text-ink sm:text-4xl text-balance">More products</h2>
          <div className="mt-10 grid gap-px overflow-hidden border-2 border-line-strong bg-line-strong sm:grid-cols-2">
            {rest.map((p, i) => {
              const t = productsEn[p.slug];
              return (
                <Link
                  key={p.slug}
                  href={`/en/products/${PRODUCT_SLUG_EN[p.slug]}`}
                  className="product-card group flex flex-col bg-paper-raised p-8"
                >
                  <span className="mono-label text-xs text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <div className="mt-4 flex h-48 items-center justify-center overflow-hidden">
                    <div className="product-card-visual">
                      <ProductVisual product={p} compact />
                    </div>
                  </div>
                  <p className="mono-label mt-6 text-[11px] text-ink-soft">{t.category}</p>
                  <h3 className="mt-1 font-display text-xl font-bold text-ink transition-colors group-hover:text-brand">{t.name}</h3>
                  <p className="mt-2 text-lg font-semibold text-ink">
                    {hasVariants(p) && "From "}
                    {formatMXN(productDisplayPrice(p))} MXN
                  </p>
                </Link>
              );
            })}
          </div>
          <Link href="/en/products" className="mono-label mt-10 inline-block text-xs text-brand hover:text-brand-deep">
            View full shop →
          </Link>
        </section>
      )}

      {/* Gallery teaser */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <InfiniteGalleryStrip
          items={getGalleryItemsEn()}
          heading="Work we've done"
          body="Hello Kitty, Pokémon, Zelda, pets, logos and more — see real examples of stickers we've produced."
          viewAllLabel="See the full gallery"
          viewAllHref="/en/gallery"
        />
      </section>

      {/* Values */}
      <section className="border-t-2 border-line-strong">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:grid-cols-3">
          <div className="sm:col-span-2 sm:border-r sm:border-line sm:pr-10">
            <h3 className="font-display text-2xl font-bold text-ink text-balance">Design tailored to you</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
              Every piece is adjusted to your details, your brand, or your practice — no generic templates.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-display text-lg font-bold text-ink">You approve before printing</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                You get a digital proof and give the go-ahead before your order goes into production.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">Made in Guadalajara</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Local production in Jalisco, shipping across all of Mexico, made for businesses and professionals who
                want stationery with character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section id="faq" className="border-t-2 border-line-strong bg-paper-raised">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-display text-3xl font-black uppercase text-ink text-balance">Have questions?</h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {featuredFaq.map((f) => (
              <FaqQuestion key={f.q} item={f} />
            ))}
          </div>
          <Link href="/en/faq" className="mono-label mt-8 inline-block text-xs text-brand hover:text-brand-deep">
            View all questions →
          </Link>
        </div>
      </section>
    </>
  );
}
