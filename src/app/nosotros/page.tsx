import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/content/site";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce a Yume: papelería y artículos personalizados hechos sobre pedido desde Guadalajara, Jalisco, con envíos a todo México.",
  alternates: { canonical: "/nosotros", languages: hreflangFor("/nosotros") },
};

const SECTIONS = [
  {
    title: "Quiénes somos",
    body: `${SITE.name} diseña y produce papelería y artículos personalizados hechos sobre pedido en ${SITE.city}, ${SITE.state}, con envíos a todo México. Trabajamos con dos tipos de clientes por igual: personas que piden stickers o recetarios personalizados para ellas mismas o como regalo, y consultorios médicos y pequeños negocios que necesitan recetarios con membrete o etiquetas con su logo.`,
  },
  {
    title: "Cantidades flexibles, no mínimos de mayoreo",
    body: "A diferencia de la mayoría de las imprentas, no exigimos mínimos de cientos o miles de piezas. Puedes pedir un solo recetario personalizado, o desde 40-50 piezas de stickers, con precios desde $100 MXN — no las planillas de mínimos grandes típicas del mercado.",
  },
  {
    title: "Prueba digital antes de imprimir",
    body: "Cada pieza se aprueba con el cliente mediante una prueba digital antes de entrar a producción. No imprimimos nada sin tu aprobación — sin sorpresas, sin adivinar qué querías.",
  },
  {
    title: "Honestidad sobre quiénes somos",
    body: "Yume es un negocio real y pequeño con base en Guadalajara — no una operación global genérica. Actualmente no contamos con testimonios ni reseñas publicadas de clientes; preferimos no inventar prueba social que no existe todavía.",
  },
];

export default function NosotrosPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-brand">Sobre nosotros</p>
      <h1 className="animate-fade-up animate-fade-up-1 mt-3 font-display text-4xl text-ink sm:text-5xl">Sobre Yume</h1>
      <p className="animate-fade-up animate-fade-up-2 mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Papelería creativa y artículos personalizados hechos sobre pedido en {SITE.city}, {SITE.state}.
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
          href={waLink("Hola, quiero saber más sobre Yume.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <MessageCircle size={16} aria-hidden="true" />
          Escríbenos por WhatsApp
        </a>
      </div>
    </section>
  );
}
