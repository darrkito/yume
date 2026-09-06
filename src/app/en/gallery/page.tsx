import type { Metadata } from "next";
import { galleryCategoriesEn, getGalleryItemsEn } from "@/content/gallery.en";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SITE } from "@/content/site";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Custom Sticker Gallery: Hello Kitty, Pokémon, Zelda & More",
  description:
    "Real gallery of vinyl stickers we've made: Hello Kitty, Kuromi, Pompompurin, Pokémon, Zelda, Coraline, pet stickers (dogs and cats), and business logos. Custom stickers from Guadalajara, Mexico.",
  alternates: { canonical: "/en/gallery", languages: hreflangFor("/galeria") },
};

export default function GalleryPageEn() {
  const items = getGalleryItemsEn();

  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Yume custom sticker gallery",
    description: "Real photos of vinyl stickers produced by Yume: characters, pets, and logos.",
    image: items.map((item) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE.url}${item.image}`,
      name: item.title,
      description: item.alt,
    })),
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-brand">Portfolio</p>
      <h1 className="animate-fade-up animate-fade-up-1 mt-3 font-display text-4xl text-ink text-balance sm:text-5xl">Sticker gallery</h1>
      <p className="animate-fade-up animate-fade-up-2 mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
        Real examples of vinyl stickers we've produced: Hello Kitty, Kuromi, Pompompurin and other Sanrio characters, Pokémon, Zelda, Coraline, Sylvanian
        Families, pet stickers made from real dog and cat photos, and custom business logos. All made to order from Guadalajara, Jalisco.
      </p>

      <div className="mt-14">
        <GalleryGrid items={items} categories={galleryCategoriesEn} allLabel="All" />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
