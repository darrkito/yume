import { getProduct } from "@/content/products";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  label: string;
  items: FaqItem[];
}

// General FAQs that don't belong to a specific product — shown as their own
// accordion category alongside each product's own FAQ list.
export const generalFaq: FaqItem[] = [
  {
    q: "¿Dónde están ubicados y a dónde envían?",
    a: "Diseñamos y producimos desde Guadalajara, Jalisco, con envíos a todo México.",
  },
  {
    q: "¿Puedo pedir un producto personalizado que no está en el catálogo?",
    a: "Sí, también personalizamos tatuajes temporales, invitaciones para eventos, menús y más — cuéntanos qué necesitas al cotizar.",
  },
  {
    q: "¿Puedo aprobar el diseño antes de que se produzca?",
    a: "Sí, cada pieza se aprueba contigo antes de producirse/imprimirse.",
  },
  {
    q: "¿Cuánto tiempo tarda mi pedido?",
    a: "Todos los productos son sobre pedido; el tiempo varía según el producto y la cantidad. Escríbenos para confirmar el tiempo exacto de tu pedido.",
  },
  {
    q: "¿Cómo puedo cotizar o hacer un pedido?",
    a: "Puedes escribirnos a yume.studiomx@gmail.com con los detalles de lo que necesitas.",
  },
];

// Single source of truth for the 3 FAQ categories shown on the FAQ page and
// (as a teaser) on the home page.
export function getFaqCategories(): FaqCategory[] {
  return [
    { label: "Generales", items: generalFaq },
    { label: "Recetarios Médicos", items: getProduct("recetario-medico-personalizado")!.faq },
    { label: "Stickers Logo Personalizado", items: getProduct("stickers-logo-personalizado")!.faq },
  ];
}

// A small, cross-category preview for the home page teaser — one question
// per category so the visitor sees the spread of topics before clicking
// through to the full page.
export function getFeaturedFaq(): FaqItem[] {
  const categories = getFaqCategories();
  return [categories[0].items[4], categories[1].items[0], categories[2].items[3]];
}
