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
  "stickers-vinil-impermeable": ["mascotas-schnauzer", "hello-kitty", "pokemon-dragones"],
};

// Product renders that aren't part of the sticker gallery.
const STATIC_PHOTOS: Record<string, Record<Lang, ProductPhoto[]>> = {
  "placa-resena-google-nfc": {
    es: [{ src: "/placa-resena-google-nfc-adhesivo.webp", width: 781, height: 781, alt: "Placa para reseñas de Google con NFC y QR, vista del adhesivo trasero" }],
    en: [{ src: "/placa-resena-google-nfc-adhesivo.webp", width: 781, height: 781, alt: "Google review plate with NFC and QR, showing the adhesive back" }],
  },
  "stand-resena-google-nfc": {
    es: [{ src: "/stand-resena-google-nfc.webp", width: 250, height: 250, alt: "Stand para reseñas de Google en color negro, con código QR y NFC" }],
    en: [{ src: "/stand-resena-google-nfc.webp", width: 250, height: 250, alt: "Black Google review stand with a QR code and NFC" }],
  },
};

export function productPhotos(slug: string, lang: Lang): ProductPhoto[] {
  const items = lang === "en" ? getGalleryItemsEn() : galleryItems;
  const fromGallery = (GALLERY_SLUGS[slug] ?? []).flatMap((g) => {
    const i = items.find((x) => x.slug === g);
    return i ? [{ src: i.image, width: i.width, height: i.height, alt: i.alt }] : [];
  });
  return [...fromGallery, ...(STATIC_PHOTOS[slug]?.[lang] ?? [])];
}
