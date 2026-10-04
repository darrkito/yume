import type { Metadata } from "next";
import Link from "next/link";
import { SITE, waLink } from "@/content/site";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Política de Devoluciones y Cambios",
  description: "Política de devoluciones y cambios de Yume: solo aplica a artículos defectuosos, tienes 48 horas desde que llega tu paquete y el envío de regreso corre por tu cuenta.",
  path: "/politica-de-devoluciones",
});

const SECTIONS = [
  {
    title: "1. Solo artículos defectuosos",
    body: "Todos nuestros productos se hacen sobre pedido con tu diseño o tus datos, por eso solo aceptamos devoluciones o cambios cuando el artículo llega defectuoso. No aceptamos devoluciones ni cambios de artículos sin defecto.",
  },
  {
    title: "2. Plazo: 48 horas",
    body: "Tienes 48 horas a partir de que llega tu paquete para solicitar la devolución o el cambio. Después de ese plazo ya no podemos aceptarlo.",
  },
  {
    title: "3. Cómo solicitarlo",
    body: `Escríbenos por WhatsApp o a ${SITE.email} dentro de esas 48 horas con tu número de pedido y fotos del defecto.`,
  },
  {
    title: "4. Envío de regreso",
    body: "El artículo defectuoso debe enviarse de regreso a Yume, tanto para una devolución como para un cambio. El costo del envío de regreso corre por cuenta del cliente.",
  },
  {
    title: "5. Devolución o cambio",
    body: "Cuando recibimos el artículo y confirmamos el defecto, puedes elegir la devolución de tu dinero o que te enviemos el artículo de nuevo.",
  },
];

export default function PoliticaDevolucionesPage() {
  const breadcrumb = breadcrumbSchema("/politica-de-devoluciones", [{ name: "Inicio", url: "/" }, { name: "Política de Devoluciones" }]);
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="animate-fade-up font-display text-4xl text-ink sm:text-5xl">Política de Devoluciones y Cambios</h1>
      <p className="animate-fade-up animate-fade-up-2 mt-4 text-sm text-ink-soft">Última actualización: 4 de octubre de 2026</p>

      <div className="mt-12 space-y-8">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl text-ink">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-12 text-sm text-ink-soft">
        ¿Tu pedido llegó con un defecto?{" "}
        <a href={waLink("Hola, mi pedido de Yume llegó con un defecto. Mi número de pedido es: ")} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:underline">
          Escríbenos por WhatsApp
        </a>{" "}
        o revisa las <Link href="/preguntas-frecuentes" className="font-semibold text-brand hover:underline">preguntas frecuentes</Link>.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </section>
  );
}
