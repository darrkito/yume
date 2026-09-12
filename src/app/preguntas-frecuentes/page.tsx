import type { Metadata } from "next";
import Link from "next/link";
import { getFaqCategories } from "@/content/faq";
import { FaqAccordion } from "@/components/FaqAccordion";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Preguntas frecuentes sobre papelería personalizada",
  description: "Respuestas a las dudas más comunes sobre los productos de Yume: generales, recetarios médicos y etiquetas personalizadas.",
  path: "/preguntas-frecuentes",
});

export default function PreguntasFrecuentesPage() {
  const categories = getFaqCategories();
  const allFaq = categories.flatMap((c) => c.items);
  const breadcrumb = breadcrumbSchema("/preguntas-frecuentes", [{ name: "Inicio", url: "/" }, { name: "Preguntas frecuentes" }]);

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
      <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-brand">Ayuda</p>
      <h1 className="animate-fade-up animate-fade-up-1 mt-3 font-display text-4xl text-ink sm:text-5xl">Preguntas frecuentes</h1>
      <p className="animate-fade-up animate-fade-up-2 mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Todo lo que necesitas saber sobre pedidos, envíos y nuestros productos — organizado por tema.
      </p>

      <div className="mt-14">
        <FaqAccordion categories={categories} />
      </div>

      <p className="mt-10 text-sm text-ink-soft">
        ¿No encontraste tu respuesta? Revisa nuestros{" "}
        <Link href="/productos" className="text-brand underline underline-offset-2 hover:text-brand-deep">productos</Link>{" "}
        o <Link href="/contacto" className="text-brand underline underline-offset-2 hover:text-brand-deep">contáctanos</Link> directamente.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
