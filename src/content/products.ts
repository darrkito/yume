export interface ProductVariant {
  id: string;
  label: string;
  price: number;
  /** Preselected option on the product page when the product has variants. */
  default?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  /** Base/starting price — the lowest variant price when `variants` is set.
   * Always what schema.org Offer, MCP/A2A, and listing cards show. */
  price: number;
  currency: "MXN";
  category: string;
  specs: { label: string; value: string }[];
  description: string;
  /** Short summary for <meta description>/OG — falls back to `description`
   * when unset. `description` doubles as the visible on-page paragraph, so
   * long ones need a separate, search-length-appropriate summary here. */
  metaDescription?: string;
  details: string[];
  faq: { q: string; a: string }[];
  image?: string;
  /** Real pixel dimensions of `image` — lets the product photo frame size
   * itself to the image's actual aspect ratio instead of an arbitrary box,
   * and gives next/image a correct intrinsic size (avoids layout shift). */
  imageWidth?: number;
  imageHeight?: number;
  /** True when the customer must send their own logo/artwork for us to print — the
   * product page shows a file picker (preview only, no upload backend yet) and
   * clear instructions to attach it in the WhatsApp chat. */
  requiresImage?: boolean;
  /** Purchase options with different prices for the same physical product —
   * either different fulfillment options (e.g. with/without design work
   * included) or, for quantity-tiered products like stickers, one variant
   * per selectable quantity. When set, the customer picks one on the
   * product page and its price replaces `price`. */
  variants?: ProductVariant[];
  /** Shows the "trabajos realizados" infinite gallery strip on this product's page. */
  showGallery?: boolean;
}

// Stickers pricing: 50 piezas = $100 (base rate $2.00/pieza). From there,
// each extra 25-pieza block costs $40 instead of $50 — a 20% discount that
// applies only to the extra piezas beyond the first 50. Generates the
// selectable quantities: 50→$100, 75→$140, 100→$180, ... up to 300→$500.
const STICKER_BASE_QTY = 50;
const STICKER_BASE_PRICE = 100;
const STICKER_STEP_QTY = 25;
const STICKER_STEP_PRICE = 40;
const STICKER_MAX_STEPS = 10; // caps the dropdown at 300 piezas; more via WhatsApp

const stickerVariants: ProductVariant[] = Array.from({ length: STICKER_MAX_STEPS + 1 }, (_, step) => {
  const qty = STICKER_BASE_QTY + step * STICKER_STEP_QTY;
  const price = STICKER_BASE_PRICE + step * STICKER_STEP_PRICE;
  return { id: String(qty), label: `${qty} piezas`, price, default: step === 0 };
});

// Vinyl stickers pricing: 40 piezas = $100 (base rate $2.50/pieza). From
// there, each extra 10-pieza block costs $20 instead of $25 — a 20%
// discount on the extra piezas beyond the first 40. Same discount
// mechanism as stickerVariants, different base/step sizes.
// Generates: 40→$100, 50→$120, 60→$140, ... up to 140→$300.
const VINYL_BASE_QTY = 40;
const VINYL_BASE_PRICE = 100;
const VINYL_STEP_QTY = 10;
const VINYL_STEP_PRICE = 20;
const VINYL_MAX_STEPS = 10; // caps the dropdown at 140 piezas; more via WhatsApp

const vinylStickerVariants: ProductVariant[] = Array.from({ length: VINYL_MAX_STEPS + 1 }, (_, step) => {
  const qty = VINYL_BASE_QTY + step * VINYL_STEP_QTY;
  const price = VINYL_BASE_PRICE + step * VINYL_STEP_PRICE;
  return { id: String(qty), label: `${qty} piezas`, price, default: step === 0 };
});

export const products: Product[] = [
  {
    slug: "recetario-medico-personalizado",
    name: "Recetario Médico Personalizado",
    price: 320,
    currency: "MXN",
    category: "Papelería Creativa Personalizada",
    specs: [
      { label: "Hojas", value: "100" },
      { label: "Tamaño", value: "Media Carta (14 × 21.5 cm)" },
      { label: "Papel", value: "Papel Bond 90 gr" },
      { label: "Color", value: "Blanco" },
      { label: "Producción", value: "Sobre pedido" },
    ],
    description:
      "Recetario médico personalizado de 100 hojas, tamaño Media Carta (14 x 21.5 cm), papel Bond de 90 gr. Diseñamos el membrete con tus datos profesionales (nombre, cédula, especialidad, dirección del consultorio) antes de imprimir, para que apruebes el diseño final antes de producción.",
    metaDescription:
      "Recetario médico personalizado de 100 hojas, Media Carta, papel Bond 90gr, con tu membrete profesional. Diseño aprobado antes de imprimir.",
    details: [
      "100 hojas por recetario",
      "Tamaño Media Carta (14 cm × 21.5 cm)",
      "Papel Bond 90 gr, blanco",
      "Membrete personalizado con tus datos profesionales",
      "Envías tu diseño en formato editable o lo diseñamos contigo",
      "Cada pieza se aprueba contigo antes de producirse",
    ],
    image: "/recetario-medico.webp",
    variants: [
      { id: "sin-diseno", label: "Sin diseño — ya tienes tu diseño listo", price: 320, default: true },
      { id: "con-diseno", label: "Con diseño — lo diseñamos contigo", price: 400 },
    ],
    faq: [
      {
        q: "¿Cuál es el precio del recetario médico?",
        a: "Dos opciones: si ya tienes tu diseño, el costo es de $320; si no tienes diseño y necesitas que lo hagamos, el costo es de $400.",
      },
      {
        q: "¿Qué tamaño tiene el recetario?",
        a: "Media Carta (14 cm × 21.5 cm).",
      },
      {
        q: "¿Qué tipo de papel se usa?",
        a: "Papel Bond 90 gr.",
      },
      {
        q: "¿Cómo envío mi diseño?",
        a: "Puedes enviar tu diseño en formato editable, o lo diseñamos contigo desde cero.",
      },
      {
        q: "¿El recetario se produce sin mi aprobación?",
        a: "No, cada pieza se aprueba contigo antes de producirse.",
      },
    ],
  },
  {
    slug: "stickers-logo-personalizado",
    name: "Etiquetas Logo Personalizado",
    price: STICKER_BASE_PRICE,
    currency: "MXN",
    category: "Etiquetas personalizadas",
    variants: stickerVariants,
    showGallery: true,
    specs: [
      { label: "Mínimo de compra", value: "50 piezas" },
      { label: "Precio base", value: "$100 (50 piezas)" },
      { label: "Piezas extra", value: "+25 piezas = +$40 (20% de descuento)" },
      { label: "Personalización", value: "Tu logo o diseño" },
      { label: "Resistencia", value: "Resistentes al agua" },
      { label: "Producción", value: "Sobre pedido" },
    ],
    description:
      "Etiquetas personalizadas con tu logo o diseño, resistentes al agua. Se venden por cantidad de piezas, no por hoja: los primeros 50 piezas cuestan $100 y, a partir de ahí, cada 25 piezas extra tienen 20% de descuento ($40 en vez de $50). Envíanos tu imagen (o el diseño que quieras convertir en etiqueta) y te mandamos una prueba digital antes de imprimir.",
    metaDescription:
      "Etiquetas personalizadas con tu logo, resistentes al agua. Desde $100 por 50 piezas, con descuento por volumen. Prueba digital antes de imprimir.",
    details: [
      "Se venden por cantidad de piezas, mínimo 50",
      "Primeras 50 piezas: $100",
      "Cada 25 piezas extra: +$40 (20% de descuento sobre esas piezas)",
      "Resistentes al agua",
      "Imprimimos tu logo o el diseño que nos envíes",
      "Prueba digital antes de imprimir",
      "Ideal para packaging, laptops, agendas, regalos",
    ],
    image: "/stickers-logo-muestra.webp",
    imageWidth: 900,
    imageHeight: 1164,
    requiresImage: true,
    faq: [
      {
        q: "¿Cómo se vende la etiqueta, por hoja o por pieza?",
        a: "Se vende por cantidad de piezas, no por hoja.",
      },
      {
        q: "¿Cuál es la cantidad mínima de compra?",
        a: "A partir de 50 piezas.",
      },
      {
        q: "¿Puedo elegir distintas cantidades?",
        a: "Sí, hay un dropdown para seleccionar la cantidad: 50, 75, 100, 125, 150... (de 25 en 25).",
      },
      {
        q: "¿Cuál es el precio de las etiquetas?",
        a: "Las primeras 50 piezas cuestan $100. A partir de ahí, cada 25 piezas extra tienen 20% de descuento y cuestan $40 en vez de $50 — por ejemplo, 75 piezas son $140 y 100 piezas son $180.",
      },
      {
        q: "¿Las etiquetas son resistentes al agua?",
        a: "Sí, todas nuestras etiquetas son resistentes al agua.",
      },
      {
        q: "¿Puedo usar mi propio logo o diseño?",
        a: "Sí, puedes enviar tu logo/diseño en formato editable o lo diseñamos contigo.",
      },
    ],
  },
  {
    slug: "stickers-vinil-impermeable",
    name: "Stickers Vinil Impermeable",
    price: VINYL_BASE_PRICE,
    currency: "MXN",
    category: "Stickers de Vinil Personalizados",
    variants: vinylStickerVariants,
    showGallery: true,
    specs: [
      { label: "Mínimo de compra", value: "40 piezas" },
      { label: "Precio base", value: "$100 (40 piezas)" },
      { label: "Piezas extra", value: "+10 piezas = +$20 (20% de descuento)" },
      { label: "Material", value: "Vinil premium, corte troquelado" },
      { label: "Resistencia", value: "Al agua, al sol y a rayones" },
      { label: "Personalización", value: "Tu diseño, personaje o foto" },
    ],
    description:
      "Stickers troquelados en vinil premium, resistentes al agua, al sol y a rayones — para cualquier diseño, personaje o foto que quieras convertir en sticker, no solo logos. Se venden por cantidad de piezas, no por planilla: los primeros 40 piezas cuestan $100 y, a partir de ahí, cada 10 piezas extra tienen 20% de descuento ($20 en vez de $25). Envíanos tu imagen o diseño y te mandamos una prueba digital antes de imprimir.",
    metaDescription:
      "Stickers de vinil personalizados, resistentes al agua, al sol y a rayones. Cualquier diseño, personaje o foto. Desde $100 por 40 piezas, con descuento por volumen.",
    details: [
      "Vinil premium con corte troquelado a la forma del diseño",
      "Se venden por cantidad de piezas, mínimo 40",
      "Primeras 40 piezas: $100",
      "Cada 10 piezas extra: +$20 (20% de descuento sobre esas piezas)",
      "Resistentes al agua, al sol y a rayones",
      "Ideal para tus personajes favoritos, mascotas, fotos o cualquier diseño",
      "Prueba digital antes de imprimir",
      "Mira ejemplos reales de nuestro trabajo en la galería",
    ],
    image: "/gallery/gallery-sanrio-hello-kitty.webp",
    imageWidth: 1280,
    imageHeight: 1226,
    requiresImage: true,
    faq: [
      {
        q: "¿En qué se diferencian de las Etiquetas Logo Personalizado?",
        a: "Es el mismo tipo de vinil, pero con distinto mínimo y escalón de precio — Etiquetas Logo Personalizado está pensado para el logo de tu negocio (desde 50 piezas), mientras que Stickers Vinil Impermeable es para cualquier diseño, personaje, mascota o foto que quieras convertir en sticker (desde 40 piezas).",
      },
      {
        q: "¿Puedo pedir stickers de mis personajes favoritos?",
        a: "Sí, mándanos referencia del personaje o diseño que quieras y te preparamos una prueba digital antes de imprimir. Puedes ver ejemplos reales de trabajos anteriores en nuestra galería.",
      },
      {
        q: "¿Puedo hacer stickers con la foto de mi mascota?",
        a: "Sí, envíanos una foto de tu perro o gato y la convertimos en un sticker troquelado con su silueta.",
      },
      {
        q: "¿Cómo se vende, por planilla o por pieza?",
        a: "Se vende por cantidad de piezas, no por planilla.",
      },
      {
        q: "¿Cuál es el precio de los stickers de vinil?",
        a: "Las primeras 40 piezas cuestan $100. A partir de ahí, cada 10 piezas extra tienen 20% de descuento y cuestan $20 en vez de $25 — por ejemplo, 50 piezas son $120 y 60 piezas son $140.",
      },
      {
        q: "¿El vinil resiste el agua y el sol?",
        a: "Sí, es vinil premium resistente al agua, al sol y a rayones — aguanta bien en botellas, laptops, patinetas o superficies que se mojan o se exponen al sol.",
      },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const hasVariants = (product: Product) => Boolean(product.variants && product.variants.length > 0);

export const productDisplayPrice = (product: Product) =>
  hasVariants(product) ? Math.min(...product.variants!.map((v) => v.price)) : product.price;

export const defaultVariantId = (product: Product): string | undefined => {
  if (!hasVariants(product)) return undefined;
  return (product.variants!.find((v) => v.default) ?? product.variants![0]).id;
};

export const resolvePrice = (product: Product, variantId?: string): number => {
  const variant = product.variants?.find((v) => v.id === variantId);
  return variant ? variant.price : product.price;
};

export const cartItemLabel = (product: Product, variantId?: string): string => {
  const variant = product.variants?.find((v) => v.id === variantId);
  return variant ? `${product.name} — ${variant.label}` : product.name;
};
