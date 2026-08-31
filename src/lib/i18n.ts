export type Lang = "es" | "en";

// Spanish stays at bare paths (studioyume.mx/productos) as the priority
// market (Guadalajara/Jalisco/México) — English is the secondary, prefixed
// /en/... tree with its own real English slugs (not just an /en/productos
// mirror). Single source of truth for every ES<->EN path pair, so nav,
// hreflang, sitemap, and the language toggle can never drift from each
// other — see seo_ai_search_playbook §13 for why that drift is a real risk.
export const PRODUCT_SLUG_EN: Record<string, string> = {
  "recetario-medico-personalizado": "medical-prescription-pads",
  "stickers-logo-personalizado": "custom-logo-stickers",
};

export const BLOG_SLUG_EN: Record<string, string> = {
  "recetarios-medicos-personalizados-guadalajara": "custom-medical-prescription-pads-guadalajara",
  "stickers-personalizados-para-negocios-guadalajara": "custom-stickers-for-businesses-guadalajara",
  "papeleria-personalizada-para-negocios-jalisco": "custom-stationery-for-businesses-jalisco",
  "como-pedir-papeleria-personalizada-en-linea": "how-to-order-custom-stationery-online",
  "recetario-medico-impreso-vs-digital": "printed-vs-digital-prescription-pads",
  "tatuajes-temporales-personalizados-para-eventos": "custom-temporary-tattoos-for-events-and-brands",
  "como-pedir-invitaciones-personalizadas-para-eventos": "how-to-order-custom-event-invitations",
};

export const PRODUCT_SLUG_ES: Record<string, string> = Object.fromEntries(
  Object.entries(PRODUCT_SLUG_EN).map(([es, en]) => [en, es]),
);
export const BLOG_SLUG_ES: Record<string, string> = Object.fromEntries(
  Object.entries(BLOG_SLUG_EN).map(([es, en]) => [en, es]),
);

const STATIC_PATH_EN: Record<string, string> = {
  "/": "/en",
  "/productos": "/en/products",
  "/blog": "/en/blog",
  "/preguntas-frecuentes": "/en/faq",
  "/carrito": "/en/cart",
  "/pago": "/en/checkout",
  "/pago/exito": "/en/checkout/success",
  "/pago/error": "/en/checkout/error",
  "/pago/pendiente": "/en/checkout/pending",
};
const STATIC_PATH_ES: Record<string, string> = Object.fromEntries(
  Object.entries(STATIC_PATH_EN).map(([es, en]) => [en, es]),
);

/** Given a Spanish (canonical, unprefixed) pathname, returns its English sibling URL. */
export function esPathToEnPath(esPath: string): string {
  const productMatch = esPath.match(/^\/productos\/([^/]+)\/?$/);
  if (productMatch) return `/en/products/${PRODUCT_SLUG_EN[productMatch[1]] ?? productMatch[1]}`;

  const blogMatch = esPath.match(/^\/blog\/([^/]+)\/?$/);
  if (blogMatch) return `/en/blog/${BLOG_SLUG_EN[blogMatch[1]] ?? blogMatch[1]}`;

  return STATIC_PATH_EN[esPath] ?? `/en${esPath}`;
}

/** Given an English pathname, returns its Spanish (canonical) sibling URL. */
export function enPathToEsPath(enPath: string): string {
  const productMatch = enPath.match(/^\/en\/products\/([^/]+)\/?$/);
  if (productMatch) return `/productos/${PRODUCT_SLUG_ES[productMatch[1]] ?? productMatch[1]}`;

  const blogMatch = enPath.match(/^\/en\/blog\/([^/]+)\/?$/);
  if (blogMatch) return `/blog/${BLOG_SLUG_ES[blogMatch[1]] ?? blogMatch[1]}`;

  if (enPath === "/en") return "/";
  return STATIC_PATH_ES[enPath] ?? enPath.replace(/^\/en/, "") ?? "/";
}

/** hreflang alternates for a page pair, keyed by the canonical Spanish path. Spanish is x-default (priority market). */
export function hreflangFor(esPath: string) {
  return {
    "es-MX": esPath,
    "en-US": esPathToEnPath(esPath),
    "x-default": esPath,
  } as const;
}

// Shared UI copy for components rendered on both language trees (buttons,
// nav labels, form fields, generic messages). Content-specific text (product
// descriptions, blog posts, FAQ) lives in its own per-language content files
// instead — this dictionary is only for chrome/UI strings reused verbatim
// across many components.
export const UI: Record<Lang, Record<string, string>> = {
  es: {
    home: "Inicio",
    shop: "Tienda",
    blog: "Blog",
    faqNav: "Preguntas",
    explore: "Explora",
    contact: "Contacto",
    quoteWhatsapp: "Cotizar por WhatsApp",
    addToCart: "Agregar al carrito",
    added: "Agregado",
    viewShop: "Ver tienda",
    from: "Desde ",
    total: "Total",
    each: "MXN c/u",
    cart: "Carrito",
    emptyCartTitle: "Tu carrito está vacío",
    emptyCartBody: "Agrega productos desde la tienda para armar tu pedido.",
    yourOrder: "Tu pedido",
    decreaseQty: "Reducir cantidad",
    increaseQty: "Aumentar cantidad",
    remove: "Quitar",
    requiresImageOne: "Este producto requiere",
    requiresImageMany: "Estos productos requieren",
    requiresImageSuffix: "tu logo o diseño:",
    attachInWhatsapp: "Adjunta la imagen directamente en el chat de WhatsApp que se abrirá.",
    payOnline: "Pagar en línea",
    emptyCart: "Vaciar carrito",
    checkout: "Pago",
    yourDetailsShipping: "Tus datos y envío",
    chooseHowToPay: "Elige cómo pagar",
    emptyCartCheckoutBody: "Agrega productos desde la tienda antes de pagar.",
    couldNotStartPayment: "No se pudo iniciar el pago.",
    editShipping: "← Editar datos de envío",
    payWithMercadoPago: "Pagar en Mercado Pago",
    mpDescription: "Te llevamos al sitio seguro de Mercado Pago. Ahí puedes usar tarjeta, tu cuenta de Mercado Pago o pagar en efectivo en tiendas como OXXO.",
    redirecting: "Redirigiendo…",
    continueArrow: "Continuar →",
    payHere: "Pagar aquí mismo",
    payHereDescription: "Ingresa tu tarjeta o genera una ficha para pagar en efectivo, sin salir de esta página.",
    includesStorePayment: "Incluye pago en tiendas",
    changePaymentMethod: "← Elegir otra forma de pago",
    yourDetails: "Tus datos",
    fullName: "Nombre completo",
    email: "Correo",
    phoneOptional: "Teléfono (opcional)",
    shippingAddress: "Dirección de envío",
    street: "Calle",
    number: "Número",
    neighborhood: "Colonia",
    city: "Ciudad",
    state: "Estado",
    zip: "Código postal",
    referencesOptional: "Referencias (opcional)",
    referencesPlaceholder: "Portón negro, entre calles X y Y",
    continueToPayment: "Continuar al pago →",
    backToShop: "Volver a la tienda",
    yourLogoOrDesign: "Tu logo o diseño",
    logoNoteBody: "Selecciona tu imagen para confirmar cuál vas a usar. Al cotizar, adjúntala directamente en el chat de WhatsApp que se abre — WhatsApp no nos deja recibir archivos desde este botón.",
    previewAlt: "Vista previa de tu logo",
    chooseFile: "Elegir archivo",
    chooseQuantity: "Elige la cantidad",
    chooseOption: "Elige una opción",
    switchToSpanish: "Cambiar a español",
    switchToEnglish: "Switch to English",
    viewingInEnglish: "Estás viendo esta página en inglés.",
  },
  en: {
    home: "Home",
    shop: "Shop",
    blog: "Blog",
    faqNav: "FAQ",
    explore: "Explore",
    contact: "Contact",
    quoteWhatsapp: "Quote via WhatsApp",
    addToCart: "Add to cart",
    added: "Added",
    viewShop: "View shop",
    from: "From ",
    total: "Total",
    each: "MXN each",
    cart: "Cart",
    emptyCartTitle: "Your cart is empty",
    emptyCartBody: "Add products from the shop to build your order.",
    yourOrder: "Your order",
    decreaseQty: "Decrease quantity",
    increaseQty: "Increase quantity",
    remove: "Remove",
    requiresImageOne: "This product requires",
    requiresImageMany: "These products require",
    requiresImageSuffix: "your logo or design:",
    attachInWhatsapp: "Attach the image directly in the WhatsApp chat that opens.",
    payOnline: "Pay online",
    emptyCart: "Empty cart",
    checkout: "Checkout",
    yourDetailsShipping: "Your details & shipping",
    chooseHowToPay: "Choose how to pay",
    emptyCartCheckoutBody: "Add products from the shop before checking out.",
    couldNotStartPayment: "Could not start the payment.",
    editShipping: "← Edit shipping details",
    payWithMercadoPago: "Pay with Mercado Pago",
    mpDescription: "We'll take you to Mercado Pago's secure site. There you can pay by card, your Mercado Pago account, or cash at stores like OXXO.",
    redirecting: "Redirecting…",
    continueArrow: "Continue →",
    payHere: "Pay right here",
    payHereDescription: "Enter your card or generate a cash-payment voucher without leaving this page.",
    includesStorePayment: "Includes in-store payment",
    changePaymentMethod: "← Choose another payment method",
    yourDetails: "Your details",
    fullName: "Full name",
    email: "Email",
    phoneOptional: "Phone (optional)",
    shippingAddress: "Shipping address",
    street: "Street",
    number: "Number",
    neighborhood: "Neighborhood",
    city: "City",
    state: "State",
    zip: "ZIP code",
    referencesOptional: "Additional references (optional)",
    referencesPlaceholder: "Black gate, between streets X and Y",
    continueToPayment: "Continue to payment →",
    backToShop: "Back to shop",
    yourLogoOrDesign: "Your logo or design",
    logoNoteBody: "Select your image to confirm which one you'll use. When you reach out to quote, attach it directly in the WhatsApp chat that opens — WhatsApp doesn't let us receive files through this button.",
    previewAlt: "Preview of your logo",
    chooseFile: "Choose file",
    chooseQuantity: "Choose the quantity",
    chooseOption: "Choose an option",
    switchToSpanish: "Cambiar a español",
    switchToEnglish: "Switch to English",
    viewingInEnglish: "You're viewing this page in English.",
  },
};
