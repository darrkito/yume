import { getProduct, type Product } from "@/content/products";

export interface ProductTranslation {
  name: string;
  category: string;
  description: string;
  /** Short summary for <meta description>/OG — falls back to `description` when unset. */
  metaDescription?: string;
  details: string[];
  specs: { label: string; value: string }[];
  faq: { q: string; a: string }[];
  /** English label per variant id — variant ids/prices themselves are never
   * translated, they're the canonical pricing data shared with checkout. */
  variantLabels?: Record<string, string>;
}

const stickerVariantLabelsEn: Record<string, string> = Object.fromEntries(
  (getProduct("stickers-logo-personalizado")?.variants ?? []).map((v) => [v.id, `${v.id} pieces`]),
);

export const productsEn: Record<string, ProductTranslation> = {
  "recetario-medico-personalizado": {
    name: "Custom Medical Prescription Pads",
    category: "Custom Creative Stationery",
    specs: [
      { label: "Sheets", value: "100" },
      { label: "Size", value: "Half Letter (14 × 21.5 cm)" },
      { label: "Paper", value: "90 gsm bond paper" },
      { label: "Color", value: "White" },
      { label: "Production", value: "Made to order" },
    ],
    description:
      "Custom medical prescription pad, 100 sheets, Half Letter size (14 x 21.5 cm), white bond paper. We design the letterhead with your professional details (name, license number, specialty, office address) before printing, so you approve the final design before production.",
    metaDescription:
      "Custom medical prescription pad, 100 sheets, Half Letter size, 90gsm bond paper, with your professional letterhead. Design approved before printing.",
    details: [
      "100 sheets per pad",
      "Half Letter size (14 cm × 21.5 cm)",
      "90 gsm white bond paper",
      "Letterhead customized with your professional details",
      "Send your design in an editable format, or we design it with you",
      "Every piece is approved with you before it goes into production",
    ],
    variantLabels: {
      "sin-diseno": "No design — you already have your design ready",
      "con-diseno": "With design — we design it with you",
    },
    faq: [
      {
        q: "What's the price of the prescription pad?",
        a: "It's the same prescription pad either way. The $320 option is for when you already have your design ready in an editable format and we just print it; the $400 option includes us designing the letterhead with you from scratch.",
      },
      {
        q: "What information do I need to send to customize my pad?",
        a: "Full name, professional license number, specialty, and whatever contact details you want on the letterhead (office address, phone, hours). If you have a logo, send it over — if not, we'll help you create a simple one for the letterhead.",
      },
      {
        q: "Can I see the design before it's printed?",
        a: "Yes. Before sending anything to print, we send you a digital proof of the letterhead so you can approve it or ask for adjustments, at no extra cost.",
      },
      {
        q: "How long does my order take?",
        a: "Message us on WhatsApp with your letterhead details and we'll confirm the exact turnaround based on current production load.",
      },
      {
        q: "Is the paper suitable for official medical prescriptions?",
        a: "It's white bond paper, Half Letter size (14 × 21.5 cm), the most commonly used size for medical prescription pads in Mexico. If your office needs any additional specification (folio number, barcode, etc.), let us know when you request a quote.",
      },
    ],
  },
  "stickers-logo-personalizado": {
    name: "Custom Logo Stickers",
    category: "Custom Stickers",
    specs: [
      { label: "Minimum order", value: "50 pieces" },
      { label: "Base price", value: "$100 (50 pieces)" },
      { label: "Extra pieces", value: "+25 pieces = +$40 (20% discount)" },
      { label: "Customization", value: "Your logo or design" },
      { label: "Durability", value: "Water-resistant" },
      { label: "Production", value: "Made to order" },
    ],
    description:
      "Custom stickers with your logo or design, water-resistant. Sold by piece count, not by sheet: the first 50 pieces cost $100 and, from there, every extra 25 pieces get a 20% discount ($40 instead of $50). Send us your image (or the design you'd like turned into a sticker) and we'll send a digital proof before printing.",
    metaDescription:
      "Custom stickers with your logo, water-resistant. Starting at $100 for 50 pieces, with volume discounts. Digital proof before printing.",
    details: [
      "Sold by piece count, 50-piece minimum",
      "First 50 pieces: $100",
      "Every extra 25 pieces: +$40 (20% discount on those pieces)",
      "Water-resistant",
      "We print your logo or the design you send us",
      "Digital proof before printing",
      "Great for packaging, laptops, planners, gifts",
    ],
    variantLabels: stickerVariantLabelsEn,
    faq: [
      {
        q: "Is the sticker sold by sheet or by piece?",
        a: "It's sold by piece count, not by sheet.",
      },
      {
        q: "What's the minimum order quantity?",
        a: "Starting at 50 pieces.",
      },
      {
        q: "Can I choose different quantities?",
        a: "Yes, there's a dropdown to select the quantity: 50, 75, 100, 125, 150... (in steps of 25).",
      },
      {
        q: "What's the price of the stickers?",
        a: "The first 50 pieces cost $100. From there, every extra 25 pieces get a 20% discount and cost $40 instead of $50 — for example, 75 pieces is $140 and 100 pieces is $180.",
      },
      {
        q: "Are the stickers water-resistant?",
        a: "Yes, all of our stickers are water-resistant.",
      },
      {
        q: "Can I use my own logo or design?",
        a: "Yes, you can send your logo/design in an editable format, or we design it with you.",
      },
    ],
  },
};

export const getProductTranslation = (slug: string) => productsEn[slug];

/** English equivalent of products.ts's cartItemLabel() — variant id/price
 * resolution stays shared (resolvePrice()); only the display strings differ. */
export function cartItemLabelEn(product: Product, variantId?: string): string {
  const t = productsEn[product.slug];
  if (!t) return product.name;
  const variant = product.variants?.find((v) => v.id === variantId);
  if (!variant) return t.name;
  return `${t.name} — ${t.variantLabels?.[variant.id] ?? variant.label}`;
}
