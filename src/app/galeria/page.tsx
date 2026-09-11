import type { Metadata } from "next";
import { galleryItems, galleryCategories } from "@/content/gallery";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SITE } from "@/content/site";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Galería de Stickers Personalizados: Hello Kitty, Pokémon, Zelda y más",
  description:
    "Galería real de stickers de vinil que hemos hecho: Hello Kitty, Kuromi, Pompompurin, Pokémon, Zelda, Coraline, mascotas (perros y gatos) y logos de negocios. Stickers personalizados desde Guadalajara.",
  alternates: { canonical: "/galeria", languages: hreflangFor("/galeria") },
};

export default function GaleriaPage() {
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
      <h1 className="animate-fade-up font-display text-4xl font-black uppercase text-ink text-balance sm:text-5xl">Galería de stickers</h1>
      <p className="animate-fade-up animate-fade-up-1 mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
        Ejemplos reales de stickers de vinil que hemos producido: Hello Kitty, Kuromi, Pompompurin y otros personajes de Sanrio, Pokémon, Zelda, Coraline,
        Sylvanian Families, stickers de mascotas con fotos de perros y gatos, y logos personalizados para negocios. Todo hecho por pedido desde Guadalajara,
        Jalisco.
      </p>

      <div className="mt-14">
        <GalleryGrid items={galleryItems} categories={galleryCategories} allLabel="Todos" />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
