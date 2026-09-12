import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/content/site";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Yume: custom stationery and personalized goods made to order in Guadalajara, Jalisco, shipping across all of Mexico.",
  alternates: { canonical: "/en/about", languages: hreflangFor("/nosotros") },
};

const SECTIONS = [
  {
    title: "Who we are",
    body: `${SITE.name} designs and produces custom stationery and personalized goods made to order in ${SITE.city}, ${SITE.state}, shipping across all of Mexico. We serve two customer types equally: individuals ordering personalized stickers or prescription pads for themselves or as gifts, and medical offices and small businesses that need letterhead prescription pads or logo stickers.`,
  },
  {
    title: "Flexible quantities, not wholesale minimums",
    body: "Unlike most print shops, we don't require minimums in the hundreds or thousands. You can order a single personalized prescription pad, or as few as 40-50 stickers, with pricing starting at $100 MXN — not the large-minimum tiers typical of this market.",
  },
  {
    title: "Digital proof before printing",
    body: "Every piece is approved by the customer via a digital proof before it goes into production. Nothing is printed without your approval — no surprises, no guessing at what you wanted.",
  },
  {
    title: "Honest about who we are",
    body: "Yume is a real, small business based in Guadalajara — not a generic global operation. We don't currently have published customer testimonials or reviews; we'd rather say so than invent social proof that doesn't exist yet.",
  },
];

export default function AboutPageEn() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-brand">About us</p>
      <h1 className="animate-fade-up animate-fade-up-1 mt-3 font-display text-4xl text-ink sm:text-5xl">About Yume</h1>
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

      <div className="mt-10">
        <a
          href={waLink("Hi, I'd like to know more about Yume.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <MessageCircle size={16} aria-hidden="true" />
          Message us on WhatsApp
        </a>
      </div>
    </section>
  );
}
