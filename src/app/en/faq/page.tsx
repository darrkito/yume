import type { Metadata } from "next";
import Link from "next/link";
import { getFaqCategoriesEn } from "@/content/faq.en";
import { FaqAccordion } from "@/components/FaqAccordion";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions About Custom Stationery",
  description: "Answers to the most common questions about Yume's products: general, medical prescription pads, and custom stickers.",
  path: "/en/faq",
  lang: "en",
});

export default function FaqPageEn() {
  const categories = getFaqCategoriesEn();
  const allFaq = categories.flatMap((c) => c.items);
  const breadcrumb = breadcrumbSchema("/en/faq", [{ name: "Home", url: "/en" }, { name: "FAQ" }]);

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
      <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-brand">Help</p>
      <h1 className="animate-fade-up animate-fade-up-1 mt-3 font-display text-4xl text-ink sm:text-5xl">Frequently Asked Questions</h1>
      <p className="animate-fade-up animate-fade-up-2 mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Everything you need to know about orders, shipping, and our products — organized by topic.
      </p>

      <div className="mt-14">
        <FaqAccordion categories={categories} />
      </div>

      <p className="mt-10 text-sm text-ink-soft">
        Didn&apos;t find your answer? Check our{" "}
        <Link href="/en/products" className="text-brand underline underline-offset-2 hover:text-brand-deep">products</Link>{" "}
        or <Link href="/en/contact" className="text-brand underline underline-offset-2 hover:text-brand-deep">contact us</Link> directly.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
