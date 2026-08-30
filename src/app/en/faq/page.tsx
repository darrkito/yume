import type { Metadata } from "next";
import { getFaqCategoriesEn } from "@/content/faq.en";
import { FaqAccordion } from "@/components/FaqAccordion";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to the most common questions about Yume's products: general, medical prescription pads, and custom stickers.",
  alternates: { canonical: "/en/faq", languages: hreflangFor("/preguntas-frecuentes") },
};

export default function FaqPageEn() {
  const categories = getFaqCategoriesEn();
  const allFaq = categories.flatMap((c) => c.items);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand">Help</p>
      <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Frequently Asked Questions</h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Everything you need to know about orders, shipping, and our products — organized by topic.
      </p>

      <div className="mt-14">
        <FaqAccordion categories={categories} />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
