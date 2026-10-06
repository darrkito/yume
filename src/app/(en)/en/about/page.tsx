import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/content/site";
import { pageMetadata, breadcrumbSchema, aboutPageSchema } from "@/lib/seo";
import { FounderBlock } from "@/components/FounderBlock";
import { CASABLANCA_BRANCHES, PRODUCTION_DAYS } from "@/content/shipping";
import { ShopCta } from "@/components/ShopCta";

export const metadata: Metadata = pageMetadata({
  title: "About Yume: Custom Stationery Studio in Guadalajara",
  description: "Meet Yume: custom stationery and personalized goods made to order in Guadalajara, Jalisco, shipping across all of Mexico.",
  path: "/en/about",
  lang: "en",
});

const SECTIONS = [
  {
    title: "Who we are",
    body: `${SITE.name} designs and produces custom stationery and personalized goods made to order in ${SITE.city}, ${SITE.state}, shipping across all of Mexico. We serve two customer types equally: individuals ordering personalized stickers or prescription pads for themselves or as gifts, and medical offices and small businesses that need letterhead prescription pads or logo stickers.`,
  },
  {
    title: "Flexible quantities, not wholesale minimums",
    body: "Unlike most print shops, we don't require minimums in the hundreds or thousands. You can order a single personalized prescription pad, or as few as 40-50 stickers, with pricing starting at $100 MXN, not the large-minimum tiers typical of this market.",
  },
  {
    title: "Digital proof before printing",
    body: "Every piece is approved by the customer via a digital proof before it goes into production. Nothing is printed without your approval, no surprises, no guessing at what you wanted.",
  },
  {
    title: "Honest about who we are",
    body: "Yume is a real, small business based in Guadalajara, not a generic global operation. We don't currently have published customer testimonials or reviews; we'd rather say so than invent social proof that doesn't exist yet.",
  },
];

// Verifiable facts about the business, from the same data the rest of the
// site uses (dates, shipping, branches): what an answer engine can quote.
const FACTS = [
  `Opened in August 2026 in ${SITE.city}, ${SITE.state}.`,
  `Production takes ${PRODUCTION_DAYS.min} to ${PRODUCTION_DAYS.max} business days after you approve your digital proof.`,
  `Shipping across Mexico, or pickup at ${CASABLANCA_BRANCHES.length} Casa Blanca branches in the Guadalajara metro area.`,
  "Online store: there's no walk-in counter to visit.",
];

export default function AboutPageEn() {
  const breadcrumb = breadcrumbSchema("/en/about", [{ name: "Home", url: "/en" }, { name: "About" }]);
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="animate-fade-up font-display text-4xl text-ink sm:text-5xl">About Yume</h1>
      <p className="animate-fade-up animate-fade-up-2 mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Custom stationery and personalized goods made to order in {SITE.city}, {SITE.state}.
      </p>

      <div className="mt-12 space-y-8">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl text-ink">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
          </div>
        ))}
      </div>

      <FounderBlock lang="en" />

      <div className="mt-12">
        <h2 className="font-display text-xl text-ink">Yume at a glance</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-soft">
          {FACTS.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={waLink("Hi, I'd like to know more about Yume.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-soft btn-soft-solid gap-1.5"
        >
          <MessageCircle size={16} aria-hidden="true" />
          Message us on WhatsApp
        </a>
        <Link href="/en/gallery" className="inline-flex min-h-11 items-center text-sm text-ink-soft underline underline-offset-2 hover:text-brand">See sticker gallery</Link>
      </div>
      <ShopCta lang="en" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema("en")) }} />
    </section>
  );
}
