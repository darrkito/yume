import Link from "next/link";
import { products } from "@/content/products";
import { waLink } from "@/content/site";
import { NotepadMark } from "@/components/NotepadMark";
import { ProductVisual } from "@/components/ProductVisual";

export default function Home() {
  const featured = products[0];
  const allFaq = products.flatMap((p) => p.faq);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand">Papelería personalizada · México</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Piezas de papel hechas con intención.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Yume diseña y produce papelería personalizada por encargo: recetarios médicos, stickers, plantillas y botellas
              a tu medida. Cada pieza se aprueba contigo antes de imprimir.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/productos"
                className="rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep"
              >
                Ver tienda
              </Link>
              <a
                href={waLink("Hola, me interesa cotizar un producto de Yume.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:border-brand hover:text-brand"
              >
                Cotizar por WhatsApp
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
          <p className="text-xs uppercase tracking-[0.25em] text-brand">Destacado</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{featured.name}</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_1.2fr] sm:items-start">
            <div className="flex items-center justify-center rounded-2xl border border-line bg-paper p-8">
              <ProductVisual product={featured} compact />
            </div>
            <div>
              <p className="text-2xl font-semibold text-ink">
                ${featured.price.toFixed(2)} <span className="text-sm font-normal text-ink-soft">MXN</span>
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">{featured.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-ink">
                {featured.details.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {d}
                  </li>
                ))}
              </ul>
              <Link
                href={`/productos/${featured.slug}`}
                className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep"
              >
                Ver detalle y cotizar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 sm:grid-cols-3">
          {[
            { title: "Diseño a tu medida", body: "Cada pieza se ajusta a tus datos, tu marca o tu consultorio — nada de plantillas genéricas." },
            { title: "Apruebas antes de imprimir", body: "Recibes una prueba digital y das el visto bueno antes de que se produzca tu pedido." },
            { title: "Hecho en México", body: "Producción local, pensada para negocios y profesionales que quieren papelería con carácter." },
          ].map((v) => (
            <div key={v.title}>
              <h3 className="font-display text-xl text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-line bg-paper-raised">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-brand">Preguntas frecuentes</p>
          <h2 className="mt-3 font-display text-3xl text-ink">¿Tienes dudas?</h2>
          <div className="mt-10 space-y-6">
            {allFaq.map((f) => (
              <div key={f.q} className="border-b border-line pb-6">
                <h3 className="font-display text-lg text-ink">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
