import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { galleryCategoriesEn, getGalleryItemsEn } from "@/content/gallery.en";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SITE, waLink } from "@/content/site";
import { UI } from "@/lib/i18n";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Custom Sticker and Temporary Tattoo Gallery",
  description:
    "Real gallery of vinyl stickers and temporary tattoos we've made: Sanrio, Pokémon, Ghibli, pets, business logos and custom photos. Made in Guadalajara, Mexico.",
  path: "/en/gallery",
  lang: "en",
});

export default function GalleryPageEn() {
  const t = UI.en;
  const items = getGalleryItemsEn();
  const breadcrumb = breadcrumbSchema("/en/gallery", [{ name: "Home", url: "/en" }, { name: "Gallery" }]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Yume sticker and temporary tattoo gallery",
    description: "Real photos of vinyl stickers and temporary tattoos produced by Yume: characters, pets, logos, and custom photos.",
    image: items.map((item) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE.url}${item.image}`,
      name: item.title,
      description: item.alt,
    })),
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="animate-fade-up font-display text-4xl text-ink text-balance sm:text-5xl">Sticker and temporary tattoo gallery</h1>
      <p className="animate-fade-up animate-fade-up-1 mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
        Real examples of <Link href="/en/products/waterproof-vinyl-stickers" className="text-brand underline underline-offset-2 hover:text-brand-deep">vinyl stickers</Link> we&apos;ve produced: Hello Kitty, Kuromi, Pompompurin and other Sanrio characters, Pokémon, Zelda, Coraline, Sylvanian
        Families, pet stickers made from real dog and cat photos, and <Link href="/en/products/custom-logo-stickers" className="text-brand underline underline-offset-2 hover:text-brand-deep">custom business logos</Link>. We also make <Link href="/en/products/custom-temporary-tattoos" className="text-brand underline underline-offset-2 hover:text-brand-deep">temporary tattoos</Link> with characters, stamps and your own photos. All made to order from Guadalajara, Jalisco. Questions about pricing or timing? Check our <Link href="/en/faq" className="text-brand underline underline-offset-2 hover:text-brand-deep">FAQ</Link>.
      </p>

      <div className="mt-14">
        <GalleryGrid items={items} categories={galleryCategoriesEn} allLabel="All" typeLabels={{ sticker: t.galleryTypeSticker, tattoo: t.galleryTypeTattoo }} lang="en" />
      </div>

      <div className="mt-16 rounded-2xl border border-line bg-paper-raised p-8 text-center">
        <h2 className="font-display text-2xl text-ink text-balance">{t.galleryCtaTitle}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{t.galleryCtaBody}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/en/products/waterproof-vinyl-stickers" className="btn-soft btn-soft-solid">{t.galleryCtaButton}</Link>
          <Link href="/en/products/custom-temporary-tattoos" className="btn-soft">{t.galleryCtaTattoo}</Link>
          <a href={waLink("Hi, I'd like a quote for custom stickers.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"><MessageCircle size={16} aria-hidden="true" />{t.quoteWhatsapp}</a>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
