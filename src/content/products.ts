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
}

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

// Stickers: 50 piezas mínimo a $3.00/pieza ($150); las primeras 100 cuestan
// $300 y cada pieza extra después de 100 va a precio mayoreo, $2.70 (10% menos).
const STICKER_TIERS: TierPricing = { baseQty: 50, rate: 3.0, stepQty: 25, discountQty: 100, discountedStepPrice: 67.5 };
const stickerVariants = buildTieredVariants(STICKER_TIERS, 10); // presets 50→300
const STICKER_BASE_PRICE = tieredPrice(STICKER_TIERS, STICKER_TIERS.baseQty);

// Vinyl: 40 piezas mínimo a $3.50/pieza ($140); las primeras 100 cuestan $350
// y cada pieza extra después de 100 va a precio mayoreo, $3.15 (10% menos).
const VINYL_TIERS: TierPricing = { baseQty: 40, rate: 3.5, stepQty: 10, discountQty: 100, discountedStepPrice: 31.5 };
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
    metaTitle: "Stickers de Vinil Personalizados en Guadalajara",
    price: VINYL_BASE_PRICE,
    currency: "MXN",
    updatedAt: "2026-10-06",
    category: "Stickers de Vinil Personalizados",
    variants: vinylStickerVariants,
    tiers: VINYL_TIERS,
    showGallery: true,
    specs: [
      { label: "Mínimo de compra", value: "40 piezas" },
      { label: "Primeras 100 piezas", value: "$350 ($3.50 c/u)" },
      { label: "Precio mayoreo", value: "Más de 100 piezas: cada pieza extra a $3.15 (10% menos)" },
      { label: "Material", value: "Vinil premium, corte troquelado" },
      { label: "Resistencia", value: "Al agua, al sol y a rayones" },
      { label: "Personalización", value: "Tu diseño, personaje o foto" },
    ],
    description:
      "Stickers troquelados en vinil premium, resistentes al agua, al sol y a rayones: para cualquier diseño, personaje o foto que quieras convertir en sticker, no solo logos. Se venden por cantidad de piezas, no por planilla: las primeras 100 piezas cuestan $350 ($3.50 c/u) y, entre más pidas, mejor: pasando las 100 entras a precio mayoreo y cada pieza extra te sale en $3.15, 10% menos. Envíanos tu imagen o diseño y te mandamos una prueba digital antes de imprimir.",
    metaDescription:
      "Stickers de vinil personalizados, resistentes al agua, al sol y a rayones. Cualquier diseño, personaje o foto. Primeras 100 piezas por $350 y precio mayoreo en cada pieza extra.",
    details: [
      "Vinil premium con corte troquelado a la forma del diseño",
      "Se venden por cantidad de piezas, mínimo 40",
      "Primeras 100 piezas: $350 ($3.50 c/u)",
      "Más de 100 piezas: precio mayoreo, cada pieza extra a $3.15 (10% menos)",
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
        a: "Las primeras 100 piezas cuestan $350 ($3.50 c/u). Y pasando las 100 entras a precio mayoreo: cada pieza extra te sale en $3.15, 10% menos. Por ejemplo, 150 piezas son $507.50 y 200 piezas son $665.",
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
    metaTitle: "Stickers y Etiquetas con tu Logo en Guadalajara",
    price: STICKER_BASE_PRICE,
    currency: "MXN",
    updatedAt: "2026-10-06",
    category: "Stickers y etiquetas personalizadas",
    variants: stickerVariants,
    tiers: STICKER_TIERS,
    showGallery: true,
    specs: [
      { label: "Mínimo de compra", value: "50 piezas" },
      { label: "Primeras 100 piezas", value: "$300 ($3.00 c/u)" },
      { label: "Precio mayoreo", value: "Más de 100 piezas: cada pieza extra a $2.70 (10% menos)" },
      { label: "Personalización", value: "Tu logo o diseño" },
      { label: "Resistencia", value: "Resistentes al agua" },
      { label: "Producción", value: "Sobre pedido" },
    ],
    description:
      "Stickers y etiquetas personalizadas con tu logo o diseño, resistentes al agua: etiquetas para productos, etiquetas para empaques, bolsas y cajas de tu negocio. Se venden por cantidad de piezas, no por hoja: las primeras 100 piezas cuestan $300 ($3.00 c/u) y, entre más pidas, mejor: pasando las 100 entras a precio mayoreo y cada pieza extra te sale en $2.70, 10% menos. Envíanos tu imagen (o el diseño que quieras convertir en etiqueta) y te mandamos una prueba digital antes de imprimir.",
    metaDescription:
      "Stickers y etiquetas con tu logo para productos y empaques, resistentes al agua. Primeras 100 piezas por $300 y precio mayoreo en cada pieza extra.",
    details: [
      "Se venden por cantidad de piezas, mínimo 50",
      "Primeras 100 piezas: $300 ($3.00 c/u)",
      "Más de 100 piezas: precio mayoreo, cada pieza extra a $2.70 (10% menos)",
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
        a: "Las primeras 100 piezas cuestan $300 ($3.00 c/u). Y pasando las 100 entras a precio mayoreo: cada pieza extra te sale en $2.70, 10% menos. Por ejemplo, 150 piezas son $435 y 300 piezas son $840.",
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
    metaTitle: "Dulceros Personalizados para Fiestas en Guadalajara",
    price: DULCERO_BASE_PRICE,
    currency: "MXN",
    updatedAt: "2026-10-06",
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
    metaDescription:
      "Dulceros personalizados tipo lunch box con nombre y temática, de cartulina opalina, armados. $75 por pieza, mínimo 10. Para fiestas, bautizos, graduaciones y eventos de empresa.",
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
    description:
      "Placa para conseguir más reseñas de Google, con tecnología NFC y código QR, ideal para mostrador, caja o mesa. La configuramos con el enlace de tu negocio antes de enviártela: el NFC ya está programado y el QR ya está listo para usar, no necesitas instalar ni configurar nada, ni pagar ninguna suscripción. Incluye adhesivo para pegarla donde prefieras. Disponible en blanco o negro.",
    metaDescription:
      "Placa NFC y QR para reseñas de Google, 12 × 12 cm, lista para usar sin configuración ni suscripción. Blanco o negro, adhesivo incluido. Desde $140 MXN.",
    details: [
      "Tus clientes tocan con el celular (NFC) o escanean el QR: ambos llevan directo a dejar una reseña en Google",
      "Se entrega configurada con el enlace de tu negocio: NFC y QR listos para usar",
      "No necesita ninguna aplicación ni suscripción: pago único, funciona con la cámara y el NFC del teléfono del cliente",
      "Incluye adhesivo para pegarla en mostrador, caja o mesa",
      "Disponible en blanco o negro",
      "12 × 12 cm, 0.2 cm de grosor",
      "También disponible con base para escritorio: ver Stand para Reseñas de Google",
    ],
    image: "/placa-resena-google-nfc.webp",
    imageWidth: 250,
    imageHeight: 250,
    variants: [
      { id: "blanco", label: "Blanco", price: 140, default: true },
      { id: "negro", label: "Negro", price: 140 },
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
    description:
      "Stand con base para conseguir más reseñas de Google, con tecnología NFC y código QR, para colocar de pie sobre mostrador, caja o mesa sin necesidad de pegarlo. La configuramos con el enlace de tu negocio antes de enviártelo: el NFC ya está programado y el QR ya está listo para usar, no necesitas instalar ni configurar nada, ni pagar ninguna suscripción. Disponible en blanco o negro.",
    metaDescription:
      "Stand NFC y QR para reseñas de Google, con base independiente, listo para usar sin configuración ni suscripción. Blanco o negro. Desde $200 MXN.",
    details: [
      "Tus clientes tocan con el celular (NFC) o escanean el QR: ambos llevan directo a dejar una reseña en Google",
      "Se entrega configurado con el enlace de tu negocio: NFC y QR listos para usar",
      "No necesita ninguna aplicación ni suscripción: pago único, funciona con la cámara y el NFC del teléfono del cliente",
      "Base independiente: se coloca de pie, no necesita pegamento ni cinta",
      "Disponible en blanco o negro",
      "12.75 cm de alto, 7.6 cm de ancho, base de 5 cm de profundidad",
      "También disponible sin base, con adhesivo: ver Placa para Reseñas de Google",
    ],
    image: "/stand-resena-google-nfc.webp",
    imageWidth: 250,
    imageHeight: 250,
    variants: [
      { id: "blanco", label: "Blanco", price: 200, default: true },
      { id: "negro", label: "Negro", price: 200 },
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
    ],
  },
  {
    slug: "recetario-medico-personalizado",
    name: "Recetario Médico Personalizado",
    metaTitle: "Recetarios Médicos Personalizados en Guadalajara",
    price: 320,
    currency: "MXN",
    updatedAt: "2026-10-06",
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
  return (product.variants!.find((v) => v.default) ?? product.variants![0]).id;
};

/** Piece count encoded in `variantId` for a per-piece product, when valid. */
export const pieceCount = (product: Product, variantId?: string): number | null => {
  if (!product.tiers || !variantId || !/^\d+$/.test(variantId)) return null;
  const qty = Number(variantId);
  return qty >= product.tiers.baseQty && qty <= MAX_PIECES ? qty : null;
};

export const isValidVariant = (product: Product, variantId?: string): boolean =>
  !hasVariants(product) || pieceCount(product, variantId) !== null || product.variants!.some((v) => v.id === variantId);

export const resolvePrice = (product: Product, variantId?: string): number => {
  const pieces = pieceCount(product, variantId);
  if (pieces !== null) return tieredPrice(product.tiers!, pieces);
  const variant = product.variants?.find((v) => v.id === variantId);
  return variant ? variant.price : product.price;
};

export const cartItemLabel = (product: Product, variantId?: string): string => {
  const pieces = pieceCount(product, variantId);
  if (pieces !== null) return `${product.name}: ${pieces} piezas`;
  const variant = product.variants?.find((v) => v.id === variantId);
  return variant ? `${product.name}: ${variant.label}` : product.name;
};

/** Price table rows for per-piece products, computed from the catalog so blog
 * and product tables can never drift from the real prices. */
export function tierPriceRows(slugs: string[], quantities: number[], lang: "es" | "en"): string[][] {
  const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  return quantities.map((q) => [
    `${q} ${lang === "en" ? "pieces" : "piezas"}`,
    ...slugs.map((slug) => {
      const t = getProduct(slug)?.tiers;
      if (!t) return "";
      const total = tieredPrice(t, q);
      return `${fmt(total)} (${fmt(total / q)} ${lang === "en" ? "each" : "c/u"})`;
    }),
  ]);
}
