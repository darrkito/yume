import type { Lang } from "@/lib/i18n";

export interface ProductVideo {
  src: string;
  poster: string;
  seconds: number;
  uploadDate: string;
  text: Record<Lang, { name: string; description: string }>;
}

/** Real videos shot by Yume, shown on the product page and marked up as VideoObject (only what is visible there). */
export const productVideos: Record<string, ProductVideo[]> = {
  "stand-resena-google-nfc": [
    {
      src: "/videos/stand-resena-google-nfc-muestra.mp4",
      poster: "/videos/stand-resena-google-nfc-muestra.webp",
      seconds: 13,
      uploadDate: "2026-10-20",
      text: {
        es: { name: "Stand para reseñas de Google con base", description: "El stand con base de Yume visto de lado: se coloca de pie sobre mostrador, caja o mesa, sin pegamento." },
        en: { name: "Google review stand with base", description: "Yume's stand with base seen from the side: it stands upright on a counter, register or table, no glue needed." },
      },
    },
    {
      src: "/videos/stand-resena-google-nfc-prueba.mp4",
      poster: "/videos/stand-resena-google-nfc-prueba.webp",
      seconds: 19,
      uploadDate: "2026-10-20",
      text: {
        es: { name: "Prueba del NFC del stand de reseñas de Google", description: "Se acerca el celular al stand para probar el NFC que lleva a la reseña de Google, sin instalar ninguna app." },
        en: { name: "Testing the NFC on the Google review stand", description: "A phone is held to the stand to test the NFC that leads to the Google review, with no app to install." },
      },
    },
  ],
};
