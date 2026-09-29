const CATEGORY_PRODUCT: Record<string, "logos" | "stickers"> = {
  Logos: "logos",
};

// Every other category (Sanrio, Videojuegos, Anime y Terror, Mascotas,
// Ternurines) is custom vinyl sticker work.
export function productHrefFor(category: string, lang: "es" | "en") {
  const kind = CATEGORY_PRODUCT[category] ?? "stickers";
  if (lang === "en") return kind === "logos" ? "/en/products/custom-logo-stickers" : "/en/products/waterproof-vinyl-stickers";
  return kind === "logos" ? "/productos/stickers-logo-personalizado" : "/productos/stickers-vinil-impermeable";
}
