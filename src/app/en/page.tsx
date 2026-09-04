import type { Metadata } from "next";
import Link from "next/link";
import { hasVariants, productDisplayPrice, products } from "@/content/products";
import { productsEn } from "@/content/products.en";
import { getFeaturedFaqEn } from "@/content/faq.en";
import { waLink } from "@/content/site";
import { formatMXN } from "@/lib/format";
import { NotepadMark } from "@/components/NotepadMark";
import { ProductVisual } from "@/components/ProductVisual";
import { FaqQuestion } from "@/components/FaqAccordion";
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
  const featured = products[0];
  const rest = products.slice(1);
  const featuredT = productsEn[featured.slug];
  const featuredFaq = getFeaturedFaqEn();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand">Custom Creative Stationery · Guadalajara, Jalisco</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-ink text-balance sm:text-5xl">
              Paper goods made with intention.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Yume designs and produces custom stationery made to order from Guadalajara, Jalisco, shipping across all
              of Mexico: medical prescription pads, stickers, and more. We also customize other products like
              temporary tattoos, event invitations, menus, and more — tell us what you need when you request a quote.
              Every piece is approved with you before it goes to print.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/en/products"
                className="rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98]"
              >
                View shop
              </Link>
              <a
                href={waLink("Hi, I'm interested in getting a quote for a Yume product.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:border-brand hover:text-brand"
              >
                Quote via WhatsApp
              </a>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end">
            <NotepadMark />
          </div>
        </div>
      </section>

      {/* Featured product */}
      <section className="border-y border-line bg-paper-raised">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-brand">Featured</p>
          <h2 className="mt-3 font-display text-3xl text-ink text-balance sm:text-4xl">{featuredT.name}</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_1.2fr] sm:items-start">
            <div className="flex h-72 items-center justify-center overflow-hidden rounded-2xl border border-line bg-paper p-8">
              <ProductVisual product={featured} compact />
            </div>
            <div>
              <p className="text-2xl font-semibold text-ink">
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
              <Link
                href={`/en/products/${PRODUCT_SLUG_EN[featured.slug]}`}
                className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98]"
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
          <h2 className="font-display text-3xl text-ink sm:text-4xl text-balance">More products</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => {
              const t = productsEn[p.slug];
              return (
                <Link
                  key={p.slug}
                  href={`/en/products/${PRODUCT_SLUG_EN[p.slug]}`}
                  className="group rounded-2xl border border-line bg-paper-raised p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-48 items-center justify-center overflow-hidden">
                    <ProductVisual product={p} compact />
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.15em] text-brand">{t.category}</p>
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
            className="mt-10 inline-block text-sm font-semibold uppercase tracking-[0.1em] text-brand hover:text-brand-deep"
          >
            View full shop →
          </Link>
        </section>
      )}

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 sm:grid-cols-3">
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
            className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.1em] text-brand hover:text-brand-deep"
          >
            View all questions →
          </Link>
        </div>
      </section>
    </>
  );
}
