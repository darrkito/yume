import Link from "next/link";
import { products } from "@/content/products";
import { waLink } from "@/content/site";
import { formatMXN } from "@/lib/format";
import { NotepadMark } from "@/components/NotepadMark";
import { ProductVisual } from "@/components/ProductVisual";

export default function Home() {
  const featured = products[0];
  const rest = products.slice(1);
  const allFaq = products.flatMap((p) => p.faq);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand">Papelería personalizada · Guadalajara, Jalisco</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-ink text-balance sm:text-5xl">
              Piezas de papel hechas con intención.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Yume diseña y produce papelería personalizada por encargo desde Guadalajara, Jalisco, con envíos a todo
              México: recetarios médicos, stickers, plantillas y botellas a tu medida. Cada pieza se aprueba contigo
              antes de imprimir.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/productos"
                className="rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98]"
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
          <h2 className="mt-3 font-display text-3xl text-ink text-balance sm:text-4xl">{featured.name}</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_1.2fr] sm:items-start">
            <div className="flex h-72 items-center justify-center overflow-hidden rounded-2xl border border-line bg-paper p-8">
              <ProductVisual product={featured} compact />
            </div>
            <div>
              <p className="text-2xl font-semibold text-ink">
                {formatMXN(featured.price)} <span className="text-sm font-normal text-ink-soft">MXN</span>
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
                className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98]"
              >
                Ver detalle y cotizar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More products */}
      {rest.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl text-ink sm:text-4xl text-balance">Más productos</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/productos/${p.slug}`}
                className="group rounded-2xl border border-line bg-paper-raised p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-48 items-center justify-center overflow-hidden">
                  <ProductVisual product={p} compact />
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.15em] text-brand">{p.category}</p>
                <h3 className="mt-1 font-display text-xl text-ink transition-colors group-hover:text-brand">{p.name}</h3>
                <p className="mt-2 text-lg font-semibold text-ink">{formatMXN(p.price)} MXN</p>
              </Link>
            ))}
          </div>
          <Link
            href="/productos"
            className="mt-10 inline-block text-sm font-semibold uppercase tracking-[0.1em] text-brand hover:text-brand-deep"
          >
            Ver toda la tienda →
          </Link>
        </section>
      )}

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 sm:grid-cols-3">
          <div className="sm:col-span-2 sm:border-r sm:border-line sm:pr-10">
            <h3 className="font-display text-2xl text-ink text-balance">Diseño a tu medida</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
              Cada pieza se ajusta a tus datos, tu marca o tu consultorio: nada de plantillas genéricas.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-display text-lg text-ink">Apruebas antes de imprimir</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Recibes una prueba digital y das el visto bueno antes de que se produzca tu pedido.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-ink">Hecho en Guadalajara</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Producción local en Jalisco, con envíos a todo México, pensada para negocios y profesionales que
                quieren papelería con carácter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-line bg-paper-raised">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-display text-3xl text-ink text-balance">¿Tienes dudas?</h2>
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
