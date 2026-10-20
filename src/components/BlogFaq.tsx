import { FaqQuestion } from "@/components/FaqAccordion";
import type { BlogPost } from "@/content/blog";

// Visible FAQ + matching FAQPage JSON-LD for a blog post: the markup only
// asserts questions that are rendered on the page (Google's rule, and the
// watchdog's faq.schema_not_visible check).
export function BlogFaq({ faq, lang }: { faq: NonNullable<BlogPost["faq"]>; lang: "es" | "en" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <div className="mt-14">
      <h2 className="font-display text-xl text-ink">{lang === "en" ? "Frequently asked questions" : "Preguntas frecuentes"}</h2>
      <div className="mt-4 divide-y divide-line border-y border-line">
        {faq.map((item) => (
          <FaqQuestion key={item.q} item={item} />
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
