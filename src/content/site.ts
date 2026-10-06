/** A real, named person behind the business. Rendered (about page, blog
 * byline, Organization.founder, BlogPosting.author) only when set: never a
 * placeholder name or a stock photo. */
export interface Founder {
  name: string;
  /** e.g. "Fundadora y diseñadora" / "Founder and designer". */
  role: { es: string; en: string };
  bio: { es: string; en: string };
  /** Real photo under public/, e.g. "/equipo/nombre.webp". */
  photo?: string;
  /** The person's own public profiles (Instagram, LinkedIn...). */
  sameAs?: string[];
}

export const SITE = {
  name: "Yume",
  domain: "studioyume.mx",
  url: "https://studioyume.mx",
  tagline: "Papelería creativa y artículos personalizados",
  /** Homepage SERP title: leads with the head terms Yume wants to rank for. */
  homeTitle: "Stickers de Vinil, Tatuajes y Papelería Personalizada | Yume",
  homeTitleEn: "Custom Vinyl Stickers, Temporary Tattoos & Stationery | Yume",
  description:
    "Stickers de vinil y stickers con tu logo desde $100, tatuajes temporales y papelería personalizada. Hechos en Guadalajara, envíos a todo México.",
  descriptionEn:
    "Custom vinyl stickers and logo stickers from $100 MXN, temporary tattoos and custom stationery. Made in Guadalajara, shipping across Mexico.",
  whatsappNumber: "523334005135",
  /** Same number as whatsappNumber, as people dial it in Mexico. */
  phoneDisplay: "33 3400 5135",
  email: "yume.studiomx@gmail.com",
  instagram: "https://www.instagram.com/studioyume.mx",
  city: "Guadalajara",
  state: "Jalisco",
  /** Launch date (PRODUCT.md). */
  foundingDate: "2026-08-27",
  founder: undefined as Founder | undefined,
  /** Google Business Profile share link (g.page / maps.app.goo.gl). Set it
   * once the service-area profile is verified: it feeds Organization.sameAs
   * and hasMap, the strongest single tie between the site and the local entity. */
  gbpUrl: undefined as string | undefined,
  /** Other real, owned profiles (Facebook, TikTok, Bing Places, directories). */
  otherProfiles: [] as string[],
};

export const waLink = (message: string) =>
  `https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(message)}`;
