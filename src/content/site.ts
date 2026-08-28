export const SITE = {
  name: "Yume",
  domain: "studioyume.mx",
  url: "https://studioyume.mx",
  tagline: "Papelería y artículos personalizados",
  description:
    "Yume — papelería y artículos personalizados hechos en México: recetarios médicos, stickers, plantillas y botellas personalizadas.",
  whatsappNumber: "524621922778",
  // TODO(real inbox): using the owner's personal email as a placeholder
  // until a real hola@studioyume.mx inbox exists — swap when ready.
  email: "sebasesc5@gmail.com",
  instagram: "https://www.instagram.com/studioyume.mx",
};

export const waLink = (message: string) =>
  `https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(message)}`;
