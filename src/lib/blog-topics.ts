import type { BlogPost } from "@/content/blog";
import type { Lang } from "@/lib/i18n";

// The blog's own `category` field is nearly useless for filtering (16 of
// 18 posts are "Guías") — `relatedProductSlugs` is the real signal for what
// a post is actually about, so filter topics are derived from that instead
// of introducing a second, parallel taxonomy in the content files.
const TOPIC_BY_PRODUCT: Record<string, { es: string; en: string }> = {
  "recetario-medico-personalizado": { es: "Recetarios médicos", en: "Prescription pads" },
  "stickers-logo-personalizado": { es: "Etiquetas y stickers", en: "Labels & stickers" },
  "stickers-vinil-impermeable": { es: "Etiquetas y stickers", en: "Labels & stickers" },
  "stand-resena-google-nfc": { es: "Reseñas de Google (NFC/QR)", en: "Google reviews (NFC/QR)" },
  "placa-resena-google-nfc": { es: "Reseñas de Google (NFC/QR)", en: "Google reviews (NFC/QR)" },
  "dulceros-personalizados": { es: "Dulceros y fiestas", en: "Party favor boxes" },
};
const OTHER_TOPIC = { es: "Eventos y otros", en: "Events & other" };
export const TOPIC_ORDER = {
  es: ["Dulceros y fiestas", "Recetarios médicos", "Etiquetas y stickers", "Reseñas de Google (NFC/QR)", "Eventos y otros"],
  en: ["Party favor boxes", "Prescription pads", "Labels & stickers", "Google reviews (NFC/QR)", "Events & other"],
};

export function topicsFor(post: BlogPost, lang: Lang): string[] {
  if (post.relatedProductSlugs.length === 0) return [OTHER_TOPIC[lang]];
  const set = new Set(post.relatedProductSlugs.map((slug) => TOPIC_BY_PRODUCT[slug]?.[lang]).filter((t): t is string => Boolean(t)));
  return set.size > 0 ? [...set] : [OTHER_TOPIC[lang]];
}
