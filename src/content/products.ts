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
  /** Base/starting price: the lowest variant price when `variants` is set.
   * Always what schema.org Offer, MCP/A2A, and listing cards show. */
  price: number;
  currency: "MXN";
  category: string;
  specs: { label: string; value: string }[];
  description: string;
  /** Short summary for <meta description>/OG: falls back to `description`
   * when unset. `description` doubles as the visible on-page paragraph, so
   * long ones need a separate, search-length-appropriate summary here. */
  metaDescription?: string;
  /** SERP <title> when it should differ from the on-page name (H1). */
  metaTitle?: string;
  details: string[];
  faq: { q: string; a: string }[];
  image?: string;
  /** Real pixel dimensions of `image`: lets the product photo frame size
   * itself to the image's actual aspect ratio instead of an arbitrary box,
   * and gives next/image a correct intrinsic size (avoids layout shift). */
  imageWidth?: number;
  imageHeight?: number;
  /** True when the customer must send their own logo/artwork for us to print: the
   * product page shows a file picker (preview only, no upload backend yet) and
   * clear instructions to attach it in the WhatsApp chat. */
  requiresImage?: boolean;
  /** Purchase options with different prices for the same physical product —
   * either different fulfillment options (e.g. with/without design work
   * included) or, for quantity-tiered products like stickers, one variant
   * per selectable quantity. When set, the customer picks one on the
   * product page and its price replaces `price`. */
  variants?: ProductVariant[];
  /** Set for products sold by piece count: any whole count from
   * `baseQty` up is buyable, the variants are just dropdown presets. */
  tiers?: TierPricing;
  /** Real last-edit date (ISO) of this product's page content (price, copy,
   * photos), set by hand when it changes. Feeds the sitemap's lastmod; left
   * unset rather than guessed. */
  updatedAt?: string;
  /** Shows the "trabajos realizados" infinite gallery strip on this product's page. */
  showGallery?: boolean;
  /** Shows a "Nuevo" badge on listing cards, the product page, and makes it
   * eligible for the homepage's featured-product slot. Toggle off by hand
   * once the launch window has passed: no expiry date logic, YAGNI. */
  isNew?: boolean;
  /** Needs nothing from the customer beyond picking an option, so listing
   * cards may add it to the cart directly. Everything else is personalized
   * (a design, a letterhead) and its card routes to the product page. */
  quickBuy?: boolean;
  /** Stickers: cut type and finish are chosen on the product page and ride in
   * the cart line's variantId as "<pieces>|<cut>|<finish>|<size>" (see lineVariantId). */
  lineOptions?: boolean;
}

export interface LineOption {
  id: string;
  label: { es: string; en: string };
  /** Added to the price of every piece. */
  extraPerPiece?: number;
}
const L = (es: string, en: string) => ({ es, en });
export const CUT_OPTIONS: LineOption[] = [
  { id: "troquelado", label: L("Troquelado", "Die cut") },
  { id: "semitroquelado", label: L("Semitroquelado", "Kiss cut") },
];
export const FINISH_OPTIONS: LineOption[] = [
  { id: "mate", label: L("Mate", "Matte") },
  { id: "brillante", label: L("Brillante", "Glossy") },
  { id: "holografico", label: L("Holográfico", "Holographic"), extraPerPiece: 0.5 },
];
/** Sticker size: the base rate of the product is the "chico" price; the rest add a fixed amount per piece. */
export const SIZE_OPTIONS: LineOption[] = [
  { id: "chico", label: L("Chico (hasta 5 cm)", "Small (up to 5 cm)") },
  { id: "mediano", label: L("Mediano (de 5 a 7 cm)", "Medium (5 to 7 cm)"), extraPerPiece: 1.5 },
  { id: "grande", label: L("Grande (de 7 a 8 cm)", "Large (7 to 8 cm)"), extraPerPiece: 3 },
];
const DEFAULT_SUFFIX = `|${CUT_OPTIONS[0].id}|${FINISH_OPTIONS[0].id}|${SIZE_OPTIONS[0].id}`;

/** "80|troquelado|mate" -> { base: "80", cut, finish }; ids not in the catalog come back undefined. */
export function parseVariant(variantId?: string) {
  const [base = "", cut, finish, size, ...rest] = (variantId ?? "").split("|");
  return {
    base,
    cut: CUT_OPTIONS.find((o) => o.id === cut),
    finish: FINISH_OPTIONS.find((o) => o.id === finish),
    // Carts saved before sizes existed carry only cut|finish: they price as "chico".
    size: SIZE_OPTIONS.find((o) => o.id === size) ?? SIZE_OPTIONS[0],
    shapeOk: rest.length === 0 && (cut === undefined) === (finish === undefined) && (size === undefined || SIZE_OPTIONS.some((o) => o.id === size)),
    hasSuffix: cut !== undefined || finish !== undefined,
  };
}

/** Same cut and finish as `variantId`, with a new piece count. */
export const withPieces = (variantId: string | undefined, pieces: number) => {
  const i = (variantId ?? "").indexOf("|");
  return `${pieces}${i < 0 ? "" : variantId!.slice(i)}`;
};

/** Cart-line key part that distinguishes lines of the same product (cut + finish). */
export const optionSuffix = (variantId?: string) => {
  const i = (variantId ?? "").indexOf("|");
  return i < 0 ? "" : variantId!.slice(i);
};

export const lineVariantId = (pieces: number, cutId: string, finishId: string, sizeId: string = SIZE_OPTIONS[0].id) => `${pieces}|${cutId}|${finishId}|${sizeId}`;

/** Per-piece pricing for products sold by piece count (stickers): a flat
 * rate up to `discountQty`, then every piece beyond it at the wholesale
 * rate (`discountedStepPrice` per `stepQty` block, e.g. 10% off). */
export interface TierPricing {
  baseQty: number;
  rate: number;
  stepQty: number;
  discountQty: number;
  discountedStepPrice: number;
}

/** Sanity cap on a typed piece count, not a business limit. */
export const MAX_PIECES = 10000;

export const wholesaleRate = (t: TierPricing) => t.discountedStepPrice / t.stepQty;

/** False for a flat per-piece price (dulceros: same price at any count): the
 * UI then shows "precio c/u · mínimo N" instead of the first-100/wholesale copy. */
export const hasWholesale = (t: TierPricing) => t.discountQty < MAX_PIECES;

export function tieredPrice(t: TierPricing, qty: number): number {
  const price = qty <= t.discountQty ? qty * t.rate : t.discountQty * t.rate + (qty - t.discountQty) * wholesaleRate(t);
  return Math.round(price * 100) / 100;
}

/** Smallest whole piece count whose tiered price reaches `amount`. */
export function piecesForAmount(t: TierPricing, amount: number): number {
  const flat = t.discountQty * t.rate;
  const n = amount <= flat ? Math.ceil(amount / t.rate) : t.discountQty + Math.ceil((amount - flat) / wholesaleRate(t));
  return Math.max(t.baseQty, n);
}

// Dropdown presets only: any whole piece count in [baseQty, MAX_PIECES] is
// also valid (see pieceCount), typed on the product page or in the cart.
function buildTieredVariants(t: TierPricing, presets: number, presetStep = t.stepQty): ProductVariant[] {
  return Array.from({ length: presets + 1 }, (_, step) => {
    const qty = t.baseQty + step * presetStep;
    return { id: String(qty), label: `${qty} piezas`, price: tieredPrice(t, qty), default: step === 0 };
  });
}

// Etiquetas con logo: 50 piezas mínimo, precio por pieza según tamaño (sin mayoreo):
// chico $3, mediano $4.50, grande $6 (`rate` = chico; ver SIZE_OPTIONS).
const STICKER_TIERS: TierPricing = { baseQty: 50, rate: 3, stepQty: 25, discountQty: MAX_PIECES, discountedStepPrice: 75 };
const stickerVariants = buildTieredVariants(STICKER_TIERS, 10); // presets 50→300
const STICKER_BASE_PRICE = tieredPrice(STICKER_TIERS, STICKER_TIERS.baseQty);

// Vinil: 40 piezas mínimo, precio por pieza según tamaño (sin mayoreo):
// chico $3.50, mediano $5, grande $6.50 (`rate` = chico; ver SIZE_OPTIONS).
const VINYL_TIERS: TierPricing = { baseQty: 40, rate: 3.5, stepQty: 10, discountQty: MAX_PIECES, discountedStepPrice: 35 };
const vinylStickerVariants = buildTieredVariants(VINYL_TIERS, 10); // presets 40→140
const VINYL_BASE_PRICE = tieredPrice(VINYL_TIERS, VINYL_TIERS.baseQty);

// Dulceros: $75 por pieza, mínimo 10 piezas, mismo precio a cualquier
// cantidad (sin escalón de mayoreo: discountQty = MAX_PIECES).
const DULCERO_TIERS: TierPricing = { baseQty: 10, rate: 75, stepQty: 1, discountQty: MAX_PIECES, discountedStepPrice: 75 };
const dulceroVariants = buildTieredVariants(DULCERO_TIERS, 19, 10); // presets 10→200 by 10; any count ≥ 10 can be typed
const DULCERO_BASE_PRICE = tieredPrice(DULCERO_TIERS, DULCERO_TIERS.baseQty);

export const products: Product[] = [
  {
    slug: "stickers-vinil-impermeable",
    name: "Stickers de Vinil Personalizados",
    metaTitle: "Stickers Personalizados de Vinil | Desde $3.50 c/u",
    price: VINYL_BASE_PRICE,
    currency: "MXN",
    updatedAt: "2026-10-17",
    category: "Stickers de Vinil Personalizados",
    variants: vinylStickerVariants,
    tiers: VINYL_TIERS,
    lineOptions: true,
    showGallery: true,
    specs: [
      { label: "Mínimo de compra", value: "40 piezas" },
      { label: "Precio por pieza", value: "Chico (hasta 5 cm) $3.50 · Mediano (5 a 7 cm) $5 · Grande (7 a 8 cm) $6.50" },
      { label: "Otras medidas", value: "Más grande o algo específico: se cotiza por WhatsApp" },
      { label: "Material", value: "Vinil premium" },
      { label: "Laminado", value: "BOPP de alta calidad en todos los stickers" },
      { label: "Tipo de corte", value: "Troquelado o semitroquelado, tú eliges al pedir" },
      { label: "Acabado", value: "Mate, brillante u holográfico, como lo prefieras (holográfico +$0.50 por pieza)" },
      { label: "Resistencia", value: "Al agua, al sol y a rayones" },
      { label: "Personalización", value: "Tu diseño, personaje o foto" },
    ],
    description:
      "Stickers troquelados en vinil premium con laminado BOPP de alta calidad, resistentes al agua, al sol y a rayones: para cualquier diseño, personaje o foto que quieras convertir en sticker, no solo logos. Se venden por pieza y el precio depende del tamaño: chico (hasta 5 cm) $3.50 c/u, mediano (de 5 a 7 cm) $5 c/u y grande (de 7 a 8 cm) $6.50 c/u. Si necesitas una medida más grande o algo más específico, lo cotizamos por WhatsApp. Envíanos tu imagen o diseño y te mandamos una prueba digital antes de imprimir.",
    metaDescription: "Stickers personalizados de vinil impermeable con tu diseño, personaje o foto. Desde $3.50 por pieza según tamaño, mínimo 40. Envíos a todo México.",
    details: [
      "Todos con laminado BOPP de alta calidad; el acabado (mate, brillante u holográfico) lo eliges tú",
      "Vinil premium con corte a la forma del diseño: troquelado o semitroquelado, tú eliges al pedir",
      "Se venden por cantidad de piezas, mínimo 40",
      "Tres tamaños: chico hasta 5 cm ($3.50 c/u), mediano de 5 a 7 cm ($5 c/u) y grande de 7 a 8 cm ($6.50 c/u)",
      "¿Más grande o algo específico? Se cotiza por WhatsApp",
      "Pide la cantidad exacta que necesitas: elígela o escríbela",
      "Resistentes al agua, al sol y a rayones",
      "Ideal para tus personajes favoritos, mascotas, fotos o cualquier diseño",
      "Prueba digital antes de imprimir",
      "Mira ejemplos reales de nuestro trabajo en la galería",
    ],
    image: "/gallery/gallery-mascotas-perros-gatos.webp",
    imageWidth: 960,
    imageHeight: 1280,
    requiresImage: true,
    faq: [
      {
        q: "¿Qué es el laminado BOPP y todos los stickers lo llevan?",
        a: "Sí, todos nuestros stickers llevan laminado BOPP, una película de alta calidad muy reconocida en la industria de las etiquetas. Lo que eliges tú es el acabado: mate, brillante u holográfico. El laminado BOPP va siempre incluido, sin costo extra.",
      },
      {
        q: "¿En qué se diferencian de los Stickers y Etiquetas con tu Logo?",
        a: "Es el mismo tipo de vinil, pero con distinto mínimo y escalón de precio: Stickers y Etiquetas con tu Logo está pensado para el logo de tu negocio (desde 50 piezas), mientras que Stickers de Vinil Personalizados es para cualquier diseño, personaje, mascota o foto que quieras convertir en sticker (desde 40 piezas).",
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
        a: "Depende del tamaño: chico (hasta 5 cm) $3.50 c/u, mediano (de 5 a 7 cm) $5 c/u y grande (de 7 a 8 cm) $6.50 c/u, con mínimo de 40 piezas. El acabado holográfico suma $0.50 por pieza. Por ejemplo, 100 stickers chicos son $350 y 100 medianos son $500.",
      },
      {
        q: "¿Y si necesito un sticker más grande de 9 cm o una medida específica?",
        a: "Escríbenos por WhatsApp con la medida y la cantidad y te cotizamos aparte.",
      },
      {
        q: "¿El vinil resiste el agua y el sol?",
        a: "Sí, es vinil premium resistente al agua, al sol y a rayones: aguanta bien en botellas, laptops, patinetas o superficies que se mojan o se exponen al sol.",
      },
      {
        q: "¿Cuánto cuesta el envío y hay recolección en Guadalajara?",
        a: "El envío a domicilio a todo México cuesta $199 MXN y es gratis en compras de $750 MXN o más. Si estás en Guadalajara o su zona metropolitana, puedes recoger en una de las 11 sucursales Casa Blanca por $20 MXN, también gratis desde $750 MXN.",
      },
      {
        q: "¿Cuánto tarda la prueba digital?",
        a: "La prueba digital llega normalmente en un máximo de 24 horas después de tu pago, e incluye hasta 2 rondas de ajustes. No imprimimos nada sin tu aprobación.",
      },
    ],
  },
  {
    slug: "stickers-logo-personalizado",
    name: "Stickers y Etiquetas con tu Logo",
    metaTitle: "Etiquetas Personalizadas con Logo | Desde $3 c/u",
    price: STICKER_BASE_PRICE,
    currency: "MXN",
    updatedAt: "2026-10-17",
    category: "Stickers y etiquetas personalizadas",
    variants: stickerVariants,
    tiers: STICKER_TIERS,
    lineOptions: true,
    showGallery: true,
    specs: [
      { label: "Mínimo de compra", value: "50 piezas" },
      { label: "Precio por pieza", value: "Chico (hasta 5 cm) $3 · Mediano (5 a 7 cm) $4.50 · Grande (7 a 8 cm) $6" },
      { label: "Otras medidas", value: "Más grande o algo específico: se cotiza por WhatsApp" },
      { label: "Laminado", value: "BOPP de alta calidad en todos los stickers" },
      { label: "Tipo de corte", value: "Troquelado o semitroquelado, tú eliges al pedir" },
      { label: "Acabado", value: "Mate, brillante u holográfico, como lo prefieras (holográfico +$0.50 por pieza)" },
      { label: "Personalización", value: "Tu logo o diseño" },
      { label: "Resistencia", value: "Resistentes al agua" },
      { label: "Producción", value: "Sobre pedido" },
    ],
    description:
      "Stickers y etiquetas personalizadas con tu logo o diseño, con laminado BOPP de alta calidad y resistentes al agua: etiquetas para productos, etiquetas para empaques, bolsas y cajas de tu negocio. Se venden por pieza y el precio depende del tamaño: chico (hasta 5 cm) $3 c/u, mediano (de 5 a 7 cm) $4.50 c/u y grande (de 7 a 8 cm) $6 c/u. Si necesitas una medida más grande o algo más específico, lo cotizamos por WhatsApp. Envíanos tu imagen (o el diseño que quieras convertir en etiqueta) y te mandamos una prueba digital antes de imprimir.",
    metaDescription: "Etiquetas y stickers con tu logo para productos y empaques, resistentes al agua. Desde $3 por pieza según tamaño, mínimo 50. Envíos a todo México.",
    details: [
      "Todos con laminado BOPP de alta calidad; el acabado (mate, brillante u holográfico) lo eliges tú",
      "Se venden por cantidad de piezas, mínimo 50",
      "Tres tamaños: chico hasta 5 cm ($3 c/u), mediano de 5 a 7 cm ($4.50 c/u) y grande de 7 a 8 cm ($6 c/u)",
      "¿Más grande o algo específico? Se cotiza por WhatsApp",
      "Pide la cantidad exacta que necesitas: elígela o escríbela",
      "Resistentes al agua",
      "Imprimimos tu logo o el diseño que nos envíes",
      "Prueba digital antes de imprimir",
      "Ideal como etiquetas para productos y empaques, y para laptops, agendas y regalos",
    ],
    image: "/stickers-logo-muestra.webp",
    imageWidth: 900,
    imageHeight: 1164,
    requiresImage: true,
    faq: [
      {
        q: "¿Qué es el laminado BOPP y todos los stickers lo llevan?",
        a: "Sí, todos nuestros stickers llevan laminado BOPP, una película de alta calidad muy reconocida en la industria de las etiquetas. Lo que eliges tú es el acabado: mate, brillante u holográfico. El laminado BOPP va siempre incluido, sin costo extra.",
      },
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
        a: "Sí: elige una cantidad rápida de la lista (50, 75, 100, 125...) o escribe la cantidad exacta que necesitas, desde 50 piezas. Si vuelves a agregar el mismo producto, se suma a las piezas que ya tienes en tu carrito.",
      },
      {
        q: "¿Cuál es el precio de las etiquetas?",
        a: "Depende del tamaño: chico (hasta 5 cm) $3 c/u, mediano (de 5 a 7 cm) $4.50 c/u y grande (de 7 a 8 cm) $6 c/u, con mínimo de 50 piezas. El acabado holográfico suma $0.50 por pieza. Por ejemplo, 100 etiquetas chicas son $300 y 100 medianas son $450. Si necesitas más de 9 cm o una medida específica, cotizamos por WhatsApp.",
      },
      {
        q: "¿Las etiquetas son resistentes al agua?",
        a: "Sí, todas nuestras etiquetas son resistentes al agua.",
      },
      {
        q: "¿Puedo usar mi propio logo o diseño?",
        a: "Sí, puedes enviar tu logo/diseño en formato editable o lo diseñamos contigo.",
      },
      {
        q: "¿Cuánto cuesta el envío y hay recolección en Guadalajara?",
        a: "El envío a domicilio a todo México cuesta $199 MXN y es gratis en compras de $750 MXN o más. Si estás en Guadalajara o su zona metropolitana, puedes recoger en una de las 11 sucursales Casa Blanca por $20 MXN, también gratis desde $750 MXN.",
      },
      {
        q: "¿Cuánto tarda la prueba digital?",
        a: "La prueba digital llega normalmente en un máximo de 24 horas después de tu pago, e incluye hasta 2 rondas de ajustes. No imprimimos nada sin tu aprobación.",
      },
      {
        q: "¿Emiten factura?",
        a: "No emitimos factura (CFDI). Tu comprobante es el correo de confirmación del pedido. Si tu empresa necesita factura, escríbenos por WhatsApp antes de pagar.",
      },
    ],
  },
  {
    slug: "dulceros-personalizados",
    name: "Dulceros Personalizados tipo Lunch Box",
    metaTitle: "Dulceros para Niños y Fiestas Personalizados | $75",
    price: DULCERO_BASE_PRICE,
    currency: "MXN",
    updatedAt: "2026-10-17",
    category: "Dulceros y cajitas para fiestas",
    variants: dulceroVariants,
    tiers: DULCERO_TIERS,
    isNew: true,
    specs: [
      { label: "Precio", value: "$75 por pieza" },
      { label: "Mínimo de compra", value: "10 piezas" },
      { label: "Medidas", value: "15.7 × 11.7 × 9.9 cm (6.2 × 4.6 × 3.9 in)" },
      { label: "Material", value: "Cartulina opalina" },
      { label: "Personalización", value: "Nombre y temática" },
      { label: "Entrega", value: "Armada y vacía (sin dulces), lista para llenar" },
    ],
    description:
      "Dulceros personalizados tipo lunch box: cajita con asa de cartulina opalina, de 15.7 × 11.7 × 9.9 cm, decorada con el nombre y la temática que elijas. Para cumpleaños, fiestas infantiles, bautizos, graduaciones, Navidad, eventos sociales y eventos de empresa (con tu logo). Cuestan $75 por pieza, con pedido mínimo de 10, y te llegan armados y vacíos (no incluyen dulces), listos para llenar. Te mandamos una prueba digital del diseño antes de producir.",
    metaDescription: "Dulceros para niños y fiestas tipo lunch box con nombre y temática, de cartulina opalina y armados. $75 por pieza, mínimo 10. Envíos a todo México.",
    details: [
      "$75 por pieza, mínimo 10 piezas: pide la cantidad exacta de invitados",
      "Caja tipo lunch box con asa, 15.7 × 11.7 × 9.9 cm",
      "Cartulina opalina",
      "Incluye el nombre y la temática que elijas (o el logo de tu empresa)",
      "Te llegan armados y vacíos (sin dulces), listos para llenar",
      "Prueba digital del diseño antes de producir",
      "Para cumpleaños, fiestas infantiles, bautizos, graduaciones, Navidad y eventos de empresa",
    ],
    image: "/dulcero-personalizado-lunch-box.webp",
    imageWidth: 960,
    imageHeight: 1280,
    requiresImage: true,
    faq: [
      {
        q: "¿Cuánto cuestan los dulceros personalizados?",
        a: "$75 por pieza, con pedido mínimo de 10 piezas. Por ejemplo, 10 dulceros son $750 (y con eso ya tienes envío gratis a todo México), 20 son $1,500 y 30 son $2,250.",
      },
      {
        q: "¿Qué medidas tiene el dulcero?",
        a: "La caja mide 15.7 × 11.7 × 9.9 cm (6.2 × 4.6 × 3.9 pulgadas), con asa para cargarla. Cabe una buena porción de dulces, un juguetito y algún detalle.",
      },
      {
        q: "¿De qué material es?",
        a: "De cartulina opalina: una cartulina lisa y firme que da buen acabado a la impresión.",
      },
      {
        q: "¿Qué incluye la personalización?",
        a: "El nombre (del festejado, los novios o tu empresa) y la temática que elijas: un personaje, colores, un deporte, un estilo navideño o el logo de tu marca. Te mandamos una prueba digital para que la apruebes antes de producir.",
      },
      {
        q: "¿Llegan armados?",
        a: "Sí, te llegan armados, listos para llenar con dulces o detalles.",
      },
      {
        q: "¿Incluyen dulces?",
        a: "No, el dulcero llega vacío: tú eliges los dulces o detalles que van dentro. Si necesitas ideas, tenemos una guía de qué poner en un dulcero según la edad de los invitados.",
      },
      {
        q: "¿Sirven para eventos de empresa?",
        a: "Sí: con el logo y los colores de tu empresa funcionan para posadas, aniversarios, kits de bienvenida, lanzamientos y eventos con clientes.",
      },
      {
        q: "¿Con cuánto tiempo debo pedirlos?",
        a: "La producción toma de 3 a 5 días hábiles después de aprobar tu prueba digital, más el envío (2 a 5 días) o 1 día hábil más si lo recoges en una sucursal Casa Blanca de Guadalajara. Para fechas como Navidad, Día del Niño o graduaciones, pídelos con al menos dos semanas de anticipación.",
      },
      {
        q: "¿Emiten factura?",
        a: "No emitimos factura (CFDI). Tu comprobante es el correo de confirmación del pedido. Si es para tu empresa y necesitas factura, escríbenos por WhatsApp antes de pagar.",
      },
    ],
  },
  {
    slug: "placa-resena-google-nfc",
    name: "Placa para Reseñas de Google (NFC y QR)",
    price: 140,
    currency: "MXN",
    category: "Placas y Stands NFC para Reseñas de Google",
    isNew: true,
    quickBuy: true,
    specs: [
      { label: "Tamaño", value: "12 × 12 cm" },
      { label: "Grosor", value: "0.2 cm" },
      { label: "Colores disponibles", value: "Blanco y Negro" },
      { label: "Tecnología", value: "NFC + Código QR" },
      { label: "Instalación", value: "Ninguna, se entrega lista para usar" },
      { label: "Producción", value: "Sobre pedido" },
    ],
    metaTitle: "Placas de reseñas Google desde 1 pieza | $140",
    description:
      "Placa para conseguir más reseñas de Google, con tecnología NFC y código QR, ideal para mostrador, caja o mesa. La configuramos con el enlace de tu negocio antes de enviártela: el NFC ya está programado y el QR ya está listo para usar, no necesitas instalar ni configurar nada, ni pagar ninguna suscripción. Incluye adhesivo para pegarla donde prefieras. Disponible en blanco o negro.",
    metaDescription: "Placas de reseñas Google con NFC y QR, desde 1 pieza por $140. Sin app ni suscripción; adhesivo incluido.",
    updatedAt: "2026-10-17",
    details: [
      "Tus clientes tocan con el celular (NFC) o escanean el QR: ambos llevan directo a dejar una reseña en Google",
      "Se entrega configurada con el enlace de tu negocio: NFC y QR listos para usar",
      "No necesita ninguna aplicación ni suscripción: pago único, funciona con la cámara y el NFC del teléfono del cliente",
      "Incluye adhesivo para pegarla en mostrador, caja o mesa",
      "Disponible en blanco o negro",
      "12 × 12 cm, 0.2 cm de grosor",
      "También disponible con base para escritorio: ver Stand para Reseñas de Google",
      "Opcional: con tu logo personalizado por $155 (nos lo envías por WhatsApp)",
    ],
    image: "/placa-resena-google-nfc-colores.webp",
    imageWidth: 781,
    imageHeight: 781,
    variants: [
      { id: "blanco", label: "Blanco", price: 140, default: true },
      { id: "negro", label: "Negro", price: 140 },
      { id: "blanco-logo", label: "Blanco con tu logo", price: 155 },
      { id: "negro-logo", label: "Negro con tu logo", price: 155 },
    ],
    faq: [
      {
        q: "¿Necesito configurar el NFC o el QR yo mismo?",
        a: "No. Nosotros programamos el NFC y generamos el código QR con el enlace de tu reseña de Google antes de enviarte tu placa: la recibes lista para usar.",
      },
      {
        q: "¿Cómo le doy a Yume el enlace de mi negocio en Google?",
        a: "Después de tu compra te lo pedimos por WhatsApp (el enlace de tu reseña o el nombre exacto de tu negocio en Google) para configurar tu placa antes de producirla.",
      },
      {
        q: "¿Necesita alguna aplicación para funcionar?",
        a: "No. El cliente solo acerca su teléfono para leer el NFC o escanea el QR con la cámara, sin instalar nada.",
      },
      {
        q: "¿Cómo se pega la placa?",
        a: "Incluye adhesivo en la parte trasera, lista para pegarse en mostrador, caja o mesa.",
      },
      {
        q: "¿En qué colores está disponible?",
        a: "Blanco y negro, mismo precio en ambos.",
      },
      {
        q: "¿Cuál es la diferencia con el Stand con base?",
        a: "Es la misma placa y la misma configuración lista para usar; el Stand agrega una base para colocarla de pie sobre un escritorio o mostrador sin necesidad de pegarla.",
      },
      { q: "¿Tiene mensualidad o suscripción?", a: "No. Es un pago único, sin suscripción ni mensualidad." },
      { q: "¿Es para un solo negocio o para varias sucursales?", a: "Se configura con el enlace de reseñas de tu negocio. La pieza no incluye una plataforma para administrar varias sucursales." },
      { q: "¿Hace falta un dashboard?", a: "No. La pieza de Yume no tiene dashboard; administras las reseñas en tu propio perfil de empresa de Google." },
    ],
  },
  {
    slug: "stand-resena-google-nfc",
    name: "Stand para Reseñas de Google (NFC y QR)",
    price: 200,
    currency: "MXN",
    category: "Placas y Stands NFC para Reseñas de Google",
    isNew: true,
    quickBuy: true,
    specs: [
      { label: "Alto", value: "12.75 cm" },
      { label: "Ancho", value: "7.6 cm" },
      { label: "Profundidad de la base", value: "5 cm" },
      { label: "Colores disponibles", value: "Blanco y Negro" },
      { label: "Tecnología", value: "NFC + Código QR" },
      { label: "Instalación", value: "Ninguna, se entrega lista para usar" },
      { label: "Producción", value: "Sobre pedido" },
    ],
    metaTitle: "Stand de reseñas Google desde 1 pieza | $200",
    description:
      "Stand con base para conseguir más reseñas de Google, con tecnología NFC y código QR, para colocar de pie sobre mostrador, caja o mesa sin necesidad de pegarlo. La configuramos con el enlace de tu negocio antes de enviártelo: el NFC ya está programado y el QR ya está listo para usar, no necesitas instalar ni configurar nada, ni pagar ninguna suscripción. Disponible en blanco o negro.",
    metaDescription: "Stand para reseñas Google con NFC y QR, desde 1 pieza por $200. Blanco o negro, sin app ni suscripción.",
    updatedAt: "2026-10-17",
    details: [
      "Tus clientes tocan con el celular (NFC) o escanean el QR: ambos llevan directo a dejar una reseña en Google",
      "Se entrega configurado con el enlace de tu negocio: NFC y QR listos para usar",
      "No necesita ninguna aplicación ni suscripción: pago único, funciona con la cámara y el NFC del teléfono del cliente",
      "Base independiente: se coloca de pie, no necesita pegamento ni cinta",
      "Disponible en blanco o negro",
      "12.75 cm de alto, 7.6 cm de ancho, base de 5 cm de profundidad",
      "También disponible sin base, con adhesivo: ver Placa para Reseñas de Google",
      "Opcional: con tu logo personalizado por $215 (nos lo envías por WhatsApp)",
    ],
    // The two-color shot leads; white and black follow as the second and third photos.
    image: "/stand-resena-google-nfc-colores.webp",
    imageWidth: 781,
    imageHeight: 781,
    variants: [
      { id: "blanco", label: "Blanco", price: 200, default: true },
      { id: "negro", label: "Negro", price: 200 },
      { id: "blanco-logo", label: "Blanco con tu logo", price: 215 },
      { id: "negro-logo", label: "Negro con tu logo", price: 215 },
    ],
    faq: [
      {
        q: "¿Necesito configurar el NFC o el QR yo mismo?",
        a: "No. Nosotros programamos el NFC y generamos el código QR con el enlace de tu reseña de Google antes de enviarte tu stand: lo recibes listo para usar.",
      },
      {
        q: "¿Cómo le doy a Yume el enlace de mi negocio en Google?",
        a: "Después de tu compra te lo pedimos por WhatsApp (el enlace de tu reseña o el nombre exacto de tu negocio en Google) para configurar tu stand antes de producirlo.",
      },
      {
        q: "¿Necesita alguna aplicación para funcionar?",
        a: "No. El cliente solo acerca su teléfono para leer el NFC o escanea el QR con la cámara, sin instalar nada.",
      },
      {
        q: "¿Necesito pegarlo a algo?",
        a: "No, tiene base propia y se coloca de pie sobre cualquier superficie plana.",
      },
      {
        q: "¿En qué colores está disponible?",
        a: "Blanco y negro, mismo precio en ambos.",
      },
      {
        q: "¿Cuál es la diferencia con la Placa sin base?",
        a: "Es la misma configuración lista para usar; la Placa no tiene base, se pega con el adhesivo incluido, y cuesta menos.",
      },
      { q: "¿Tiene mensualidad o suscripción?", a: "No. Es un pago único, sin suscripción ni mensualidad." },
      { q: "¿Es para un solo negocio o para varias sucursales?", a: "Se configura con el enlace de reseñas de tu negocio. La pieza no incluye una plataforma para administrar varias sucursales." },
      { q: "¿Hace falta un dashboard?", a: "No. La pieza de Yume no tiene dashboard; administras las reseñas en tu propio perfil de empresa de Google." },
    ],
  },
  {
    slug: "recetario-medico-personalizado",
    name: "Recetario Médico Personalizado",
    metaTitle: "Recetario Médico Personalizado | 100 hojas $320",
    price: 320,
    currency: "MXN",
    updatedAt: "2026-10-17",
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
    metaDescription: "Recetario médico personalizado de 100 hojas, media carta, papel bond 90 g. Desde $320; con diseño de membrete, $400. Prueba digital antes de imprimir.",
    details: [
      "100 hojas por recetario",
      "Tamaño Media Carta (14 cm × 21.5 cm)",
      "Papel Bond 90 gr, blanco",
      "Membrete personalizado con tus datos profesionales",
      "Envías tu diseño en formato editable o lo diseñamos contigo",
      "Cada pieza se aprueba contigo antes de producirse",
    ],
    requiresImage: true,
    image: "/recetario-medico.webp",
    variants: [
      { id: "sin-diseno", label: "Sin diseño: ya tienes tu diseño listo", price: 320, default: true },
      { id: "con-diseno", label: "Con diseño: lo diseñamos contigo", price: 400 },
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
      {
        q: "¿Emiten factura?",
        a: "No emitimos factura (CFDI). Tu comprobante es el correo de confirmación del pedido. Si la necesitas para tu consultorio o clínica, escríbenos por WhatsApp antes de pagar.",
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
  return (product.variants!.find((v) => v.default) ?? product.variants![0]).id + (product.lineOptions ? DEFAULT_SUFFIX : "");
};

/** Piece count encoded in `variantId` for a per-piece product, when valid. */
export const pieceCount = (product: Product, variantId?: string): number | null => {
  if (!product.tiers || !variantId) return null;
  const v = parseVariant(variantId);
  if (!/^\d+$/.test(v.base) || !v.shapeOk) return null;
  // Option products need both choices; the rest must not carry any.
  if (product.lineOptions ? !(v.cut && v.finish) : v.hasSuffix) return null;
  const qty = Number(v.base);
  return qty >= product.tiers.baseQty && qty <= MAX_PIECES ? qty : null;
};

/** True when this cart line needs a logo/design file: the product always does
 * (stickers) or the buyer picked a "-logo" variant (NFC plate/stand). */
export const lineNeedsDesign = (product: Product, variantId?: string): boolean =>
  Boolean(product.requiresImage) || Boolean(variantId?.endsWith("-logo"));

export const isValidVariant = (product: Product, variantId?: string): boolean =>
  !hasVariants(product) ||
  pieceCount(product, variantId) !== null ||
  (!product.lineOptions && product.variants!.some((v) => v.id === variantId));

export const resolvePrice = (product: Product, variantId?: string): number => {
  const pieces = pieceCount(product, variantId);
  if (pieces !== null) {
    const v = parseVariant(variantId);
    const extra = (v.finish?.extraPerPiece ?? 0) + (v.size.extraPerPiece ?? 0);
    return Math.round((tieredPrice(product.tiers!, pieces) + extra * pieces) * 100) / 100;
  }
  const variant = product.variants?.find((v) => v.id === variantId);
  return variant ? variant.price : product.price;
};

export const cartItemLabel = (product: Product, variantId?: string): string => {
  const pieces = pieceCount(product, variantId);
  if (pieces !== null) {
    const v = parseVariant(variantId);
    return [`${product.name}: ${pieces} piezas`, v.cut?.label.es, v.finish?.label.es, product.lineOptions ? v.size.label.es : undefined].filter(Boolean).join(" · ");
  }
  const variant = product.variants?.find((v) => v.id === variantId);
  return variant ? `${product.name}: ${variant.label}` : product.name;
};

const TABLE_LABELS: Record<string, { es: string; en: string }> = {
  "stickers-vinil-impermeable": { es: "Stickers de vinil", en: "Vinyl stickers" },
  "stickers-logo-personalizado": { es: "Etiquetas con tu logo", en: "Logo labels" },
  "dulceros-personalizados": { es: "Dulceros", en: "Favor boxes" },
};

/** Blog/product price table, one column per sticker size (chico/mediano/grande),
 * computed from the catalog so it can never drift from what the cart charges.
 * One product: rows are quantities. Several: a leading product column. Products
 * without sizes (dulceros) show their single price under the first size. */
export function sizeTable(slugs: string[], quantities: number[], lang: "es" | "en"): { headers: string[]; rows: string[][] } {
  const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const each = lang === "en" ? "each" : "c/u";
  const multi = slugs.length > 1;
  const rows = slugs.flatMap((slug) => {
    const product = getProduct(slug)!;
    return quantities.map((q) => {
      const cells = SIZE_OPTIONS.map((size, i) => {
        if (!product.lineOptions && i > 0) return "—";
        const total = product.lineOptions ? resolvePrice(product, lineVariantId(q, CUT_OPTIONS[0].id, FINISH_OPTIONS[0].id, size.id)) : tieredPrice(product.tiers!, q);
        return `${fmt(total)} (${fmt(total / q)} ${each})`;
      });
      return [...(multi ? [TABLE_LABELS[slug]?.[lang] ?? product.name] : []), `${q} ${lang === "en" ? "pieces" : "piezas"}`, ...cells];
    });
  });
  return {
    headers: [...(multi ? [lang === "en" ? "Product" : "Producto"] : []), lang === "en" ? "Pieces" : "Piezas", ...SIZE_OPTIONS.map((o) => o.label[lang])],
    rows,
  };
}
