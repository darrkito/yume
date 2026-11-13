import { getProduct } from "@/content/products";
import { getProductTranslation } from "@/content/products.en";

export function cartAvailabilityNote(slugs: string[], lang: "es" | "en"): string | null {
  for (const slug of slugs) {
    const note = lang === "es" ? getProduct(slug)?.availabilityNote : getProductTranslation(slug)?.availabilityNote;
    if (note) return note;
  }
  return null;
}
