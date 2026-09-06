import { galleryItems, type GalleryItem } from "@/content/gallery";

export interface GalleryTranslation {
  category: string;
  title: string;
  alt: string;
}

// Keyed by the same `slug` as gallery.ts — translation-only, image/dimensions
// stay shared from the Spanish source (same pattern as products.en.ts).
const translations: Record<string, GalleryTranslation> = {
  "hello-kitty": {
    category: "Sanrio",
    title: "Hello Kitty stickers",
    alt: "Sheets of Hello Kitty vinyl stickers: wedding, Halloween, Valentine's Day and more designs",
  },
  "kuromi-pochacco": {
    category: "Sanrio",
    title: "Kuromi and Pochacco stickers",
    alt: "Kuromi, Pochacco and My Melody stickers on water-resistant vinyl",
  },
  "pompompurin-badtzmaru-kuromi": {
    category: "Sanrio",
    title: "Pompompurin, Badtz-Maru and Kuromi stickers",
    alt: "Sanrio's Pompompurin, Badtz-Maru and Kuromi stickers on vinyl",
  },
  "pompompurin-chiikawa": {
    category: "Sanrio",
    title: "Pompompurin and Chiikawa stickers",
    alt: "Sheets of Pompompurin and Chiikawa character stickers on vinyl",
  },
  "tuxedosam-vanelia": {
    category: "Sanrio",
    title: "Tuxedosam stickers and a custom logo (Vanelia)",
    alt: "Bag of Tuxedosam stickers next to circular stickers for the custom Vanelia logo",
  },
  "pokemon-dragones": {
    category: "Video Games",
    title: "Pokémon stickers: Dratini, Dragonair and Dragonite",
    alt: "Sheet of Dragonite evolution-line stickers next to a Pompompurin sheet, on vinyl",
  },
  "zelda-lucario": {
    category: "Video Games",
    title: "Zelda and Lucario stickers",
    alt: "The Legend of Zelda (Zelda, Link) and Pokémon's Lucario stickers on vinyl",
  },
  "coraline-scream-dandadan": {
    category: "Anime & Horror",
    title: "Coraline, Scream, Dan Da Dan, Hangyodon and Keroppi stickers",
    alt: "Five sticker sheets: Hangyodon, Scream, Dan Da Dan, Coraline and Keroppi",
  },
  "mascotas-perros-gatos": {
    category: "Pets",
    title: "Custom stickers made from real dog and cat photos",
    alt: "Die-cut stickers made from customers' real dog and cat photos",
  },
  "mascotas-schnauzer": {
    category: "Pets",
    title: "Custom Schnauzer stickers",
    alt: "Collection of illustrated and photo-based Schnauzer dog stickers",
  },
  "sylvanian-families": {
    category: "Ternurines",
    title: "Sylvanian Families stickers",
    alt: "Sylvanian Families (Calico Critters) figure stickers on vinyl",
  },
  "logo-yume": {
    category: "Logos",
    title: "Yume logo stickers",
    alt: "Sheet of circular stickers with the Yume logo in a metallic finish",
  },
  "logo-vanelia": {
    category: "Logos",
    title: "Custom business logo stickers (Vanelia)",
    alt: "Circular stickers with the custom logo for the Vanelia brand",
  },
};

export interface GalleryItemEn extends GalleryItem {
  category: string;
  title: string;
  alt: string;
}

export function getGalleryItemsEn(): GalleryItemEn[] {
  return galleryItems.map((item) => ({ ...item, ...translations[item.slug] }));
}

export const galleryCategoriesEn = [
  "Sanrio",
  "Video Games",
  "Anime & Horror",
  "Pets",
  "Ternurines",
  "Logos",
] as const;
