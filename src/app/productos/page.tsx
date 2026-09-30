import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/content/products";
import { FREE_SHIPPING_THRESHOLD, NATIONAL_SHIPPING_PRICE } from "@/content/shipping";
import { formatMXN } from "@/lib/format";
import { ProductCard } from "@/components/ProductCard";
import { QuoteCard } from "@/components/QuoteCard";
import { waLink } from "@/content/site";
import { CheckCircle2, Clock, Truck } from "lucide-react";
import { UI } from "@/lib/i18n";
import { pageMetadata, productSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tienda de papelería personalizada",
  description:
    "Papelería y artículos personalizados de Yume: recetarios médicos, etiquetas y stickers de vinil (Hello Kitty, Pokémon, mascotas y más). Envíos a todo México.",
  path: "/productos",
});

export default function ProductosPage() {
  const t = UI.es;
  const productSchemas = products.map((p) => productSchema(p, { path: `/productos/${p.slug}` }));
  const breadcrumb = breadcrumbSchema("/productos", [{ name: "Inicio", url: "/" }, { name: "Productos" }]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="animate-fade-up font-display text-4xl text-ink sm:text-5xl">Nuestros productos</h1>
      <p className="animate-fade-up animate-fade-up-1 mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Cada pieza se produce sobre pedido y se personaliza contigo antes de imprimir.
      </p>
      <ul className="animate-fade-up animate-fade-up-2 mt-6 flex flex-col gap-2 text-sm text-ink sm:flex-row sm:flex-wrap sm:gap-x-8">
        <li className="flex items-start gap-2"><Truck size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.factShipping.replace("{national}", formatMXN(NATIONAL_SHIPPING_PRICE)).replace("{threshold}", formatMXN(FREE_SHIPPING_THRESHOLD))}</li>
        <li className="flex items-start gap-2"><Clock size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.factTiming}</li>
        <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.factProof}</li>
      </ul>

      <nav aria-label="Elegir por uso" className="animate-fade-up animate-fade-up-2 mt-8">
        <ul className="flex flex-wrap gap-3">
          <li><Link href="/productos/recetario-medico-personalizado" className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper-raised px-5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Para tu consultorio</Link></li>
          <li><Link href="/productos/stickers-logo-personalizado" className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper-raised px-5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Para tu marca</Link></li>
          <li><Link href="/productos/stickers-vinil-impermeable" className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper-raised px-5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Para regalar</Link></li>
          <li><Link href="/productos/placa-resena-google-nfc" className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper-raised px-5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Para tener más reseñas</Link></li>
        </ul>
      </nav>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {products.flatMap((p, i) => [
          <ProductCard key={p.slug} product={p} index={i} headingAs="h2" />,
          ...(p.slug === "stickers-logo-personalizado" ? [<QuoteCard key="tattoos" index={i + 1} />] : []),
        ])}
      </div>
      <div className="mt-16 rounded-2xl border border-line bg-paper-raised p-8 text-center">
        <h2 className="font-display text-2xl text-ink text-balance">{t.listingCtaTitle}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{t.listingCtaBody}</p>
        <a href={waLink("Hola, me interesa cotizar un producto de Yume.")} target="_blank" rel="noopener noreferrer" className="btn-soft btn-soft-solid mt-6">{t.quoteWhatsapp}</a>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {productSchemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
    </section>
  );
}
