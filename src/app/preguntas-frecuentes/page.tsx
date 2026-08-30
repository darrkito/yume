import type { Metadata } from "next";
import { getFaqCategories } from "@/content/faq";
import { FaqAccordion } from "@/components/FaqAccordion";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Respuestas a las dudas más comunes sobre los productos de Yume: generales, recetarios médicos y stickers personalizados.",
  alternates: { canonical: "/preguntas-frecuentes", languages: hreflangFor("/preguntas-frecuentes") },
};

export default function PreguntasFrecuentesPage() {
  const categories = getFaqCategories();
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
      <p className="text-xs uppercase tracking-[0.25em] text-brand">Ayuda</p>
      <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Preguntas frecuentes</h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Todo lo que necesitas saber sobre pedidos, envíos y nuestros productos — organizado por tema.
      </p>

      <div className="mt-14">
        <FaqAccordion categories={categories} />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
