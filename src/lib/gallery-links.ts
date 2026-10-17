import type { GalleryType } from "@/content/gallery";

const CATEGORY_PRODUCT: Record<string, "logos" | "stickers"> = {
  Logos: "logos",
};

// Tattoo photos link to the quote-only tattoo page. Every other sticker
// category (Sanrio, Videojuegos, Anime y Terror, Mascotas, Ternurines,
// Religiosos, En uso) is custom vinyl sticker work.
export function productHrefFor(category: string, lang: "es" | "en", type: GalleryType = "sticker") {
  if (type === "tattoo") return lang === "en" ? "/en/products/custom-temporary-tattoos" : "/productos/tatuajes-temporales-personalizados";
  const kind = CATEGORY_PRODUCT[category] ?? "stickers";
  if (lang === "en") return kind === "logos" ? "/en/products/custom-logo-stickers" : "/en/products/waterproof-vinyl-stickers";
  return kind === "logos" ? "/productos/stickers-logo-personalizado" : "/productos/stickers-vinil-impermeable";
}
