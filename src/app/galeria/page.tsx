import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { galleryItems, galleryCategories } from "@/content/gallery";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SITE, waLink } from "@/content/site";
import { hreflangFor, UI } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Galería de Stickers Personalizados: Hello Kitty, Pokémon, Zelda y más",
  description:
    "Galería real de stickers de vinil que hemos hecho: Hello Kitty, Kuromi, Pompompurin, Pokémon, Zelda, Coraline, mascotas (perros y gatos) y logos de negocios. Stickers personalizados desde Guadalajara.",
  alternates: { canonical: "/galeria", languages: hreflangFor("/galeria") },
};

export default function GaleriaPage() {
  const t = UI.es;
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Galería de stickers personalizados Yume",
    description: "Fotos reales de stickers de vinil producidos por Yume: personajes, mascotas y logos.",
    image: galleryItems.map((item) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE.url}${item.image}`,
      name: item.title,
      description: item.alt,
    })),
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="animate-fade-up font-display text-4xl text-ink text-balance sm:text-5xl">Galería de stickers</h1>
      <p className="animate-fade-up animate-fade-up-1 mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
        Ejemplos reales de stickers de vinil que hemos producido: Hello Kitty, Kuromi, Pompompurin y otros personajes de Sanrio, Pokémon, Zelda, Coraline,
        Sylvanian Families, stickers de mascotas con fotos de perros y gatos, y logos personalizados para negocios. Todo hecho por pedido desde Guadalajara,
        Jalisco.
      </p>

      <div className="mt-14">
        <GalleryGrid items={galleryItems} categories={galleryCategories} allLabel="Todos" lang="es" />
      </div>

      <div className="mt-16 rounded-2xl border border-line bg-paper-raised p-8 text-center">
        <h2 className="font-display text-2xl text-ink text-balance">{t.galleryCtaTitle}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{t.galleryCtaBody}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/productos/stickers-vinil-impermeable" className="btn-soft btn-soft-solid">{t.galleryCtaButton}</Link>
          <a href={waLink("Hola, me interesa cotizar stickers personalizados.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"><MessageCircle size={16} aria-hidden="true" />{t.quoteWhatsapp}</a>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
