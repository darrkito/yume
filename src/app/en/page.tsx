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
      <section className="desk-lamp-wash">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-16 sm:grid-cols-2 sm:pt-20">
          <div>
            <h1 className="animate-fade-up font-display text-4xl leading-[1.1] text-ink text-balance sm:text-5xl lg:text-6xl">
              Paper goods made with <em className="italic text-brand">intention</em>.
            </h1>
            <p className="animate-fade-up animate-fade-up-1 mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Custom stationery made to order in Guadalajara: medical prescription pads, stickers, and pieces built
              to your specs, approved with you before printing.
            </p>
            <div className="animate-fade-up animate-fade-up-2 mt-8 flex flex-wrap gap-4">
              <Link href="/en/products" className="btn-soft btn-soft-solid">
                View shop
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
          <div className="animate-fade-up animate-fade-up-1 flex min-w-0 justify-center sm:justify-end">
            <HeroJar />
          </div>
        </div>
      </section>

      {/* Featured product */}
      <section className="bg-brand-tint/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 sm:grid-cols-[1fr_1.2fr] sm:items-center">
            <div className="card-soft tilt-a flex h-72 justify-center overflow-hidden p-8">
              <ProductVisual product={featured} compact />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-deep">Featured product</p>
              <h2 className="mt-3 font-display text-3xl text-ink text-balance sm:text-4xl">{featuredT.name}</h2>
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
              <Link href={`/en/products/${PRODUCT_SLUG_EN[featured.slug]}`} className="btn-soft btn-soft-solid mt-8">
                View details & quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More products */}
      {rest.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl text-ink sm:text-4xl text-balance">More products</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {rest.map((p, i) => {
              const t = productsEn[p.slug];
              return (
                <Link
                  key={p.slug}
                  href={`/en/products/${PRODUCT_SLUG_EN[p.slug]}`}
                  className={`card-soft group flex flex-col p-7 ${i % 2 === 0 ? "tilt-a" : "tilt-b"}`}
                >
                  <div className="flex h-48 justify-center overflow-hidden">
                    <div className="product-card-visual">
                      <ProductVisual product={p} compact />
                    </div>
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-brand">{t.category}</p>
                  <h3 className="mt-1 font-display text-xl text-ink transition-colors group-hover:text-brand">{t.name}</h3>
                  <p className="mt-2 text-lg font-semibold text-ink">
                    {hasVariants(p) && "From "}
                    {formatMXN(productDisplayPrice(p))} MXN
                  </p>
                </Link>
              );
            })}
          </div>
          <Link
            href="/en/products"
            className="mt-10 inline-flex min-h-11 items-center text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
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
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:grid-cols-3">
          <div className="sm:col-span-2 sm:border-r sm:border-line sm:pr-10">
            <h3 className="font-display text-2xl text-ink text-balance">Design tailored to you</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
              Every piece is adjusted to your details, your brand, or your practice — no generic templates.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-display text-lg text-ink">You approve before printing</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                You get a digital proof and give the go-ahead before your order goes into production.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-ink">Made in Guadalajara</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Local production in Jalisco, shipping across all of Mexico, made for businesses and professionals who
                want stationery with character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section id="faq" className="border-t border-line bg-paper-raised">
        <div className="mx-auto max-w-3xl px-6 py-20">
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
    </>
  );
}
