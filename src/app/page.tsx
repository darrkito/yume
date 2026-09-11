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
            <h1 className="animate-fade-up font-display text-4xl leading-[1.1] text-ink text-balance sm:text-5xl lg:text-6xl">
              Piezas de papel hechas con <em className="italic text-brand">intención</em>.
            </h1>
            <p className="animate-fade-up animate-fade-up-1 mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Papelería y artículos personalizados hechos sobre pedido en Guadalajara: recetarios médicos, etiquetas y
              piezas a tu medida, aprobadas contigo antes de imprimir.
            </p>
            <div className="animate-fade-up animate-fade-up-2 mt-8 flex flex-wrap gap-4">
              <Link href="/productos" className="btn-soft btn-soft-solid">
                Ver tienda
              </Link>
              <CtaFillLink
                href={waLink("Hola, me interesa cotizar un producto de Yume.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-soft btn-soft-outline"
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
      <section className="bg-brand-tint/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 sm:grid-cols-[1fr_1.2fr] sm:items-center">
            <div className="card-soft tilt-a flex h-72 justify-center overflow-hidden p-8">
              <ProductVisual product={featured} compact />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-deep">Producto destacado</p>
              <h2 className="mt-3 font-display text-3xl text-ink text-balance sm:text-4xl">{featured.name}</h2>
              <p className="mt-4 text-2xl font-semibold text-ink">
                {hasVariants(featured) && "Desde "}
                {formatMXN(productDisplayPrice(featured))} <span className="text-sm font-normal text-ink-soft">MXN</span>
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
              <Link href={`/productos/${featured.slug}`} className="btn-soft btn-soft-solid mt-8">
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
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {rest.map((p, i) => (
              <Link
                key={p.slug}
                href={`/productos/${p.slug}`}
                className={`card-soft group flex flex-col p-7 ${i % 2 === 0 ? "tilt-a" : "tilt-b"}`}
              >
                <div className="flex h-48 justify-center overflow-hidden">
                  <div className="product-card-visual">
                    <ProductVisual product={p} compact />
                  </div>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-brand">{p.category}</p>
                <h3 className="mt-1 font-display text-xl text-ink transition-colors group-hover:text-brand">{p.name}</h3>
                <p className="mt-2 text-lg font-semibold text-ink">
                  {hasVariants(p) && "Desde "}
                  {formatMXN(productDisplayPrice(p))} MXN
                </p>
              </Link>
            ))}
          </div>
          <Link href="/productos" className="mt-10 inline-block text-sm font-semibold text-brand hover:text-brand-deep">
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
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:grid-cols-3">
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

      {/* FAQ teaser */}
      <section id="faq" className="border-t border-line bg-paper-raised">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-display text-3xl text-ink text-balance">¿Tienes dudas?</h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {featuredFaq.map((f) => (
              <FaqQuestion key={f.q} item={f} />
            ))}
          </div>
          <Link href="/preguntas-frecuentes" className="mt-8 inline-block text-sm font-semibold text-brand hover:text-brand-deep">
            Ver todas las preguntas →
          </Link>
        </div>
      </section>
    </>
  );
}
