export const SITE = {
  name: "Yume",
  domain: "studioyume.mx",
  url: "https://studioyume.mx",
  tagline: "Papelería creativa y artículos personalizados",
  /** Homepage SERP title: leads with the head terms Yume wants to rank for. */
  homeTitle: "Stickers de Vinil, Tatuajes y Papelería Personalizada | Yume",
  description:
    "Stickers de vinil y stickers con tu logo desde $100, tatuajes temporales y papelería personalizada. Hechos en Guadalajara, envíos a todo México.",
  whatsappNumber: "523334005135",
  email: "yume.studiomx@gmail.com",
  instagram: "https://www.instagram.com/studioyume.mx",
  city: "Guadalajara",
  state: "Jalisco",
  // City-level coordinates (no public storefront — Yume ships from Guadalajara,
  // it isn't a walk-in location) — same convention as other local projects.
  geo: { lat: 20.659698, lng: -103.349609 },
};

export const waLink = (message: string) =>
  `https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(message)}`;
