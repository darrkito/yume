export interface Product {
  slug: string;
  name: string;
  price: number;
  currency: "MXN";
  category: string;
  sheetCount: number;
  dimensions: { width: number; height: number; unit: "cm" };
  color: string;
  description: string;
  details: string[];
  faq: { q: string; a: string }[];
  image?: string;
}

export const products: Product[] = [
  {
    slug: "recetario-medico-personalizado",
    name: "Recetario Médico Personalizado",
    price: 400,
    currency: "MXN",
    category: "Papelería personalizada",
    sheetCount: 400,
    dimensions: { width: 14, height: 21.5, unit: "cm" },
    color: "Blanco",
    description:
      "Recetario médico personalizado de 400 hojas, tamaño 14 x 21.5 cm, papel blanco. Diseñamos el membrete con tus datos profesionales (nombre, cédula, especialidad, dirección del consultorio) antes de imprimir, para que apruebes el diseño final antes de producción.",
    details: [
      "400 hojas por recetario",
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
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
