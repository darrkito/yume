export const SITE = {
  name: "Yume",
  domain: "studioyume.mx",
  url: "https://studioyume.mx",
  tagline: "Papelería y artículos personalizados",
  description:
    "Yume — papelería y artículos personalizados hechos en México: recetarios médicos, stickers, plantillas y botellas personalizadas.",
  // TODO(real contact info): placeholder — replace with the real WhatsApp
  // number and email before launch. Never invent a real-looking number.
  whatsappNumber: "5200000000",
  email: "hola@studioyume.mx",
  instagram: "https://instagram.com/studio.yume",
};

export const waLink = (message: string) =>
  `https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(message)}`;
