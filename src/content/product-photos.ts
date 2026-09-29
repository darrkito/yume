import { galleryItems } from "@/content/gallery";
import { getGalleryItemsEn } from "@/content/gallery.en";
import type { Lang } from "@/lib/i18n";

export interface ProductPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
}

// Extra real photos per product, picked from the gallery (no new assets).
// Only sticker products have them; the recetario and NFC pieces still need
// real photos from the owner.
const GALLERY_SLUGS: Record<string, string[]> = {
  "stickers-logo-personalizado": ["logo-vanelia", "logo-yume"],
  "stickers-vinil-impermeable": ["mascotas-perros-gatos", "mascotas-schnauzer", "pokemon-dragones"],
};

export function productPhotos(slug: string, lang: Lang): ProductPhoto[] {
  const items = lang === "en" ? getGalleryItemsEn() : galleryItems;
  return (GALLERY_SLUGS[slug] ?? []).flatMap((g) => {
    const i = items.find((x) => x.slug === g);
    return i ? [{ src: i.image, width: i.width, height: i.height, alt: i.alt }] : [];
  });
}
