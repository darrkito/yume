export interface Product {
  slug: string;
  name: string;
  price: number;
  currency: "MXN";
  category: string;
  specs: { label: string; value: string }[];
  description: string;
  details: string[];
  faq: { q: string; a: string }[];
  image?: string;
  /** True when the customer must send their own logo/artwork for us to print — the
   * product page shows a file picker (preview only, no upload backend yet) and
   * clear instructions to attach it in the WhatsApp chat. */
  requiresImage?: boolean;
}

export const products: Product[] = [
  {
    slug: "recetario-medico-personalizado",
    name: "Recetario Médico Personalizado",
    price: 400,
    currency: "MXN",
    category: "Papelería personalizada",
    specs: [
      { label: "Hojas", value: "100" },
      { label: "Tamaño", value: "14 × 21.5 cm" },
      { label: "Color", value: "Blanco" },
      { label: "Producción", value: "Por encargo" },
    ],
    description:
      "Recetario médico personalizado de 100 hojas, tamaño 14 x 21.5 cm, papel blanco. Diseñamos el membrete con tus datos profesionales (nombre, cédula, especialidad, dirección del consultorio) antes de imprimir, para que apruebes el diseño final antes de producción.",
    details: [
      "100 hojas por recetario",
      "Tamaño 14 cm × 21.5 cm",
      "Papel blanco",
      "Membrete personalizado con tus datos profesionales",
      "Envías tu logo o lo diseñamos contigo",
      "Aprobación de diseño antes de imprimir",
    ],
    image: "/recetario-medico.webp",
    faq: [
      {
        q: "¿Qué datos necesito enviar para personalizar mi recetario?",
        a: "Nombre completo, cédula profesional, especialidad, y los datos de contacto que quieras en el membrete (dirección del consultorio, teléfono, horario). Si tienes un logo, lo puedes enviar; si no, te ayudamos a crear uno simple para el membrete.",
      },
      {
        q: "¿Puedo ver el diseño antes de que se imprima?",
        a: "Sí. Antes de mandar a imprimir te enviamos una prueba digital del membrete para que la apruebes o pidas ajustes, sin costo adicional.",
      },
      {
        q: "¿Cuánto tarda en estar listo mi recetario?",
        a: "Escríbenos por WhatsApp con los datos de tu membrete y te confirmamos el tiempo de entrega exacto según la carga de producción del momento.",
      },
      {
        q: "¿El papel es apto para recetas médicas oficiales?",
        a: "Es papel blanco estándar de 14 × 21.5 cm, el tamaño más usado para recetarios médicos en México. Si tu consultorio requiere alguna especificación adicional (folio, código de barras, etc.), cuéntanos al cotizar.",
      },
    ],
  },
  {
    slug: "stickers-logo-personalizado",
    name: "Stickers Logo Personalizado",
    price: 75,
    currency: "MXN",
    category: "Stickers personalizados",
    specs: [
      { label: "Piezas por hoja", value: "30" },
      { label: "Forma", value: "Circular" },
      { label: "Personalización", value: "Tu logo o diseño" },
      { label: "Producción", value: "Por encargo" },
    ],
    description:
      "Hoja de 30 stickers circulares con tu logo o diseño. Envíanos tu imagen (o el diseño que quieras convertir en sticker) y te mandamos una prueba digital antes de imprimir.",
    details: [
      "30 stickers circulares por hoja",
      "Imprimimos tu logo o el diseño que nos envíes",
      "Prueba digital antes de imprimir",
      "Ideal para packaging, laptops, agendas, regalos",
    ],
    image: "/stickers-logo-muestra.webp",
    requiresImage: true,
    faq: [
      {
        q: "¿Qué formato de imagen necesito enviar?",
        a: "Preferimos PNG o vectores (AI, PDF, SVG) con fondo transparente si tu logo lo permite — pero si solo tienes un JPG o una foto del logo, también podemos trabajar con eso y te avisamos si necesitamos algo mejor.",
      },
      {
        q: "¿Puedo pedir stickers de más de un diseño en la misma hoja?",
        a: "Sí, cuéntanos al cotizar cuántos diseños distintos quieres combinar en las 30 piezas de la hoja.",
      },
      {
        q: "¿Los stickers son resistentes al agua?",
        a: "Escríbenos por WhatsApp para confirmar el material disponible según el uso que le vayas a dar (interior, exterior, botellas, etc.).",
      },
      {
        q: "¿Puedo ver cómo va a quedar antes de imprimir?",
        a: "Sí, siempre mandamos una prueba digital de la hoja completa para que la apruebes antes de producción.",
      },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
