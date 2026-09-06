import type { FaqCategory, FaqItem } from "@/content/faq";
import { getProductTranslation } from "@/content/products.en";

export const generalFaqEn: FaqItem[] = [
  {
    q: "Where are you located and where do you ship?",
    a: "We design and produce everything from Guadalajara, Jalisco, with shipping across all of Mexico.",
  },
  {
    q: "Can I order a custom product that isn't in the catalog?",
    a: "Yes, we also customize temporary tattoos, event invitations, menus, and more — tell us what you need when you request a quote.",
  },
  {
    q: "Can I approve the design before it's produced?",
    a: "Yes, every piece is approved with you before it's produced/printed.",
  },
  {
    q: "How long does my order take?",
    a: "All of our products are made to order; turnaround varies by product and quantity. Message us to confirm the exact timeline for your order.",
  },
  {
    q: "How can I get a quote or place an order?",
    a: "You can email us at yume.studiomx@gmail.com with the details of what you need.",
  },
  {
    q: "Do you offer local delivery in Guadalajara?",
    a: "Yes — if you're in Guadalajara or the metro area, you can choose pickup at a Casa Blanca branch for $20 MXN instead of home delivery ($150 MXN). At checkout you pick whichever of the 11 ZMG branches works best for you; we'll let you know via WhatsApp and email as soon as your order is ready, along with the proof you need to show at the branch to pick it up.",
  },
];

export function getFaqCategoriesEn(): FaqCategory[] {
  return [
    { label: "General", items: generalFaqEn },
    { label: "Medical Prescription Pads", items: getProductTranslation("recetario-medico-personalizado").faq },
    { label: "Custom Logo Stickers", items: getProductTranslation("stickers-logo-personalizado").faq },
    { label: "Waterproof Vinyl Stickers", items: getProductTranslation("stickers-vinil-impermeable").faq },
  ];
}

export function getFeaturedFaqEn(): FaqItem[] {
  const categories = getFaqCategoriesEn();
  return [categories[0].items[4], categories[1].items[0], categories[2].items[3]];
}
