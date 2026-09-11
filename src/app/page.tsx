import Link from "next/link";
import { getProduct, hasVariants, productDisplayPrice, products } from "@/content/products";
import { getFeaturedFaq } from "@/content/faq";
import { waLink } from "@/content/site";
import { formatMXN } from "@/lib/format";
import { HeroJar } from "@/components/HeroJar";
import { CtaFillLink } from "@/components/CtaFillLink";
import { ProductVisual } from "@/components/ProductVisual";
import { FaqQuestion } from "@/components/FaqAccordion";
import { InfiniteGalleryStrip } from "@/components/InfiniteGalleryStrip";
import { galleryItems } from "@/content/gallery";

export default function Home() {
  const featured = getProduct("stickers-vinil-impermeable") ?? products[0];
  const rest = products.filter((p) => p.slug !== featured.slug);
  const featuredFaq = getFeaturedFaq();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-2">
          <div>
            <h1 className="animate-fade-up font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-ink text-balance sm:text-6xl lg:text-7xl">
              Papel con intención.
            </h1>
            <p className="animate-fade-up animate-fade-up-1 mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Papelería y artículos personalizados hechos sobre pedido en Guadalajara: recetarios médicos, etiquetas y
              piezas a tu medida, aprobadas contigo antes de imprimir.
            </p>
            <div className="animate-fade-up animate-fade-up-2 mt-8 flex flex-wrap gap-4">
              <Link href="/productos" className="btn-edit btn-edit-solid">
                Ver tienda
              </Link>
              <CtaFillLink
                href={waLink("Hola, me interesa cotizar un producto de Yume.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-edit"
              >
                Cotizar por WhatsApp
              </CtaFillLink>
            </div>
          </div>
          <div className="animate-fade-up animate-fade-up-1 flex min-w-0 justify-center sm:justify-end">
            <HeroJar />
          </div>
        </div>
      </section>

      {/* Featured product */}
      <section className="border-y-2 border-line-strong bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 sm:grid-cols-[1fr_1.2fr] sm:items-start">
            <div className="flex h-72 justify-center overflow-hidden border border-paper/20 bg-paper p-8">
              <ProductVisual product={featured} compact />
            </div>
            <div>
              <p className="mono-label text-xs text-paper/60">Producto destacado</p>
              <h2 className="mt-3 font-display text-3xl font-black uppercase text-balance sm:text-4xl">{featured.name}</h2>
              <p className="mt-4 text-2xl font-semibold">
                {hasVariants(featured) && "Desde "}
                {formatMXN(productDisplayPrice(featured))} <span className="text-sm font-normal text-paper/60">MXN</span>
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-paper/75">{featured.description}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {featured.details.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" />
                    {d}
                  </li>
                ))}
              </ul>
              <Link href={`/productos/${featured.slug}`} className="btn-edit btn-edit-solid mt-8 border-paper bg-paper text-ink hover:bg-brand hover:text-paper">
                Ver detalle y cotizar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More products */}
      {rest.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-black uppercase text-ink sm:text-4xl text-balance">Más productos</h2>
          <div className="mt-10 grid gap-px overflow-hidden border-2 border-line-strong bg-line-strong sm:grid-cols-2">
            {rest.map((p, i) => (
              <Link key={p.slug} href={`/productos/${p.slug}`} className="product-card group flex flex-col bg-paper-raised p-8">
                <span className="mono-label text-xs text-brand">{String(i + 1).padStart(2, "0")}</span>
                <div className="mt-4 flex h-48 justify-center overflow-hidden">
                  <div className="product-card-visual">
                    <ProductVisual product={p} compact />
                  </div>
                </div>
                <p className="mono-label mt-6 text-[11px] text-ink-soft">{p.category}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-ink transition-colors group-hover:text-brand">{p.name}</h3>
                <p className="mt-2 text-lg font-semibold text-ink">
                  {hasVariants(p) && "Desde "}
                  {formatMXN(productDisplayPrice(p))} MXN
                </p>
              </Link>
            ))}
          </div>
          <Link href="/productos" className="mono-label mt-10 inline-block text-xs text-brand hover:text-brand-deep">
            Ver toda la tienda →
          </Link>
        </section>
      )}

      {/* Gallery teaser */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <InfiniteGalleryStrip
          items={galleryItems}
          heading="Galería de trabajos"
          body="Hello Kitty, Pokémon, Zelda, mascotas, logos y más — mira ejemplos reales de stickers que hemos producido."
          viewAllLabel="Ver galería completa"
          viewAllHref="/galeria"
        />
      </section>

      {/* Values */}
      <section className="border-t-2 border-line-strong">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:grid-cols-3">
          <div className="sm:col-span-2 sm:border-r sm:border-line sm:pr-10">
            <h3 className="font-display text-2xl font-bold text-ink text-balance">Diseño a tu medida</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
              Cada pieza se ajusta a tus datos, tu marca o tu consultorio: nada de plantillas genéricas.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-display text-lg font-bold text-ink">Apruebas antes de imprimir</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Recibes una prueba digital y das el visto bueno antes de que se produzca tu pedido.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">Hecho en Guadalajara</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Producción local en Jalisco, con envíos a todo México, pensada para negocios y profesionales que
                quieren papelería con carácter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section id="faq" className="border-t-2 border-line-strong bg-paper-raised">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-display text-3xl font-black uppercase text-ink text-balance">¿Tienes dudas?</h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {featuredFaq.map((f) => (
              <FaqQuestion key={f.q} item={f} />
            ))}
          </div>
          <Link href="/preguntas-frecuentes" className="mono-label mt-8 inline-block text-xs text-brand hover:text-brand-deep">
            Ver todas las preguntas →
          </Link>
        </div>
      </section>
    </>
  );
}
