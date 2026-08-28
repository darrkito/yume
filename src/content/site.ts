export const SITE = {
  name: "Yume",
  domain: "studioyume.mx",
  url: "https://studioyume.mx",
  tagline: "Papelería y artículos personalizados",
  description:
    "Yume — papelería y artículos personalizados hechos en México: recetarios médicos, stickers, plantillas y botellas personalizadas.",
  whatsappNumber: "524621922778",
  email: "hola@studioyume.mx",
  instagram: "https://instagram.com/studio.yume",
};

export const waLink = (message: string) =>
  `https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(message)}`;
