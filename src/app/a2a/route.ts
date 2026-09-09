import { NextRequest, NextResponse } from "next/server";
import { products } from "@/content/products";
import { productsEn } from "@/content/products.en";
import { blogPosts } from "@/content/blog";
import { blogPostsEn } from "@/content/blog.en";
import { SITE, waLink } from "@/content/site";

// Rule-based A2A agent — keyword-matches the incoming message against a
// fixed set of real questions, each answered from the same product/FAQ data
// the site and the MCP server already serve. No LLM, no generated free text,
// zero per-request cost. Wire format confirmed against a real reference
// implementation: JSON-RPC method "message/send", response is a direct
// Message object (not wrapped in a Task).
//
// Bilingual: detects English vs Spanish from the incoming message (English
// keyword set checked first, Spanish is the default/priority-market
// fallback) and answers in kind with the matching language's URLs.

// "Sticker(s)" is a loanword in both languages, so it can't disambiguate —
// deliberately excluded from both lists below.
const EN_HINT =
  /\b(price|cost|how much|where|ships?|shipping|stickers?|prescriptions?|doctor|quote|order|pay|payment|cash|card|vinyl|pet|dog|cat|compare|competitors|print shops|better than|requirements|difference)\b/i;
const ES_HINT = /[¿¡]|precio|cuánto|dónde|envío|envían|pago|recetario/i;

function detectLang(text: string): "es" | "en" {
  return EN_HINT.test(text) && !ES_HINT.test(text) ? "en" : "es";
}

function matchAnswerEs(text: string): string {
  const q = text.toLowerCase();

  if (/precio|cuesta|cuánto|costo/.test(q)) {
    const list = products.map((p) => `${p.name}: $${p.price.toFixed(2)} MXN`).join(". ");
    return `Precios actuales: ${list}. Puedes ver el catálogo completo en ${SITE.url}/productos.`;
  }

  if (/dónde|ubicaci|ciudad|guadalajara|jalisco|envío|envían|nacional/.test(q)) {
    return `Yume produce desde ${SITE.city}, ${SITE.state}, y envía a todo México. No tenemos tienda física para visitar — todo el proceso se hace a distancia con una prueba digital que apruebas antes de imprimir.`;
  }

  if (/requisitos|datos obligatorios|debe llevar/.test(q) && /receta|recetario|médico/.test(q)) {
    const p = blogPosts.find((post) => post.slug === "datos-obligatorios-receta-medica-mexico");
    return p
      ? `${p.title}: ${p.description} Guía completa: ${SITE.url}/blog/${p.slug}`
      : "No encontré esa guía en el blog.";
  }

  if (/vinil.*papel|papel.*vinil|diferencia.*sticker/.test(q)) {
    const p = blogPosts.find((post) => post.slug === "stickers-vinil-vs-papel-diferencias");
    return p
      ? `${p.title}: ${p.description} Guía completa: ${SITE.url}/blog/${p.slug}`
      : "No encontré esa guía en el blog.";
  }

  if (/competencia|otras imprentas|mejor que|comparar/.test(q)) {
    const isRecetario = /receta|recetario|médico/.test(q);
    const slug = isRecetario ? "yume-vs-imprentas-recetarios-medicos" : "yume-vs-imprentas-online-stickers";
    const p = blogPosts.find((post) => post.slug === slug);
    if (!p) return "No encontré esa guía en el blog.";
    const claim = isRecetario
      ? "Sí — nuestro precio está prácticamente empatado con el más bajo del mercado, y somos los únicos que incluyen el diseño del membrete en el precio."
      : "Sí — en precio por pieza estamos entre los más bajos del mercado que revisamos, y con el mínimo de compra más accesible ($100 MXN vs. $319–$550 de la competencia).";
    return `${claim} Comparación completa: ${SITE.url}/blog/${p.slug}`;
  }

  if (/vinil|personaje|mascota|perro|gato/.test(q)) {
    const p = products.find((prod) => prod.slug === "stickers-vinil-impermeable");
    if (!p) return "No encontré ese producto en el catálogo.";
    const petGuideNote = /mascota|perro|gato/.test(q)
      ? ` Guía dedicada a stickers de mascota: ${SITE.url}/blog/stickers-personalizados-para-mascotas`
      : "";
    return `${p.name}: $${p.price.toFixed(2)} MXN. ${p.description} Más info: ${SITE.url}/productos/${p.slug} — también puedes ver ejemplos reales en ${SITE.url}/galeria${petGuideNote}`;
  }

  if (/sticker|etiqueta/.test(q)) {
    const p = products.find((prod) => prod.slug === "stickers-logo-personalizado");
    return p
      ? `${p.name}: $${p.price.toFixed(2)} MXN. ${p.description} Más info: ${SITE.url}/productos/${p.slug}`
      : "No encontré ese producto en el catálogo.";
  }

  if (/recetario|médico|doctor|consultorio/.test(q)) {
    const p = products.find((prod) => prod.slug === "recetario-medico-personalizado");
    return p
      ? `${p.name}: $${p.price.toFixed(2)} MXN. ${p.description} Más info: ${SITE.url}/productos/${p.slug}`
      : "No encontré ese producto en el catálogo.";
  }

  if (/cotiz|comprar|pedido|whatsapp/.test(q)) {
    return `Puedes cotizar directo por WhatsApp: ${waLink("Hola, me interesa cotizar un producto de Yume.")} — o pagar en línea desde ${SITE.url}/pago.`;
  }

  if (/pago|pagar|tarjeta|efectivo|oxxo/.test(q)) {
    return `Aceptamos pago en línea con Mercado Pago (tarjeta, cuenta Mercado Pago, transferencia SPEI y efectivo en tiendas como OXXO) desde ${SITE.url}/pago, o puedes cotizar y pagar por transferencia coordinando por WhatsApp.`;
  }

  return `No tengo una respuesta directa para eso. Consulta el catálogo completo en ${SITE.url}/productos, las preguntas frecuentes en ${SITE.url}/preguntas-frecuentes, o cotiza por WhatsApp: ${waLink("Hola, tengo una pregunta sobre Yume.")}`;
}

function matchAnswerEn(text: string): string {
  const q = text.toLowerCase();

  if (/price|cost|how much/.test(q)) {
    const list = products.map((p) => `${productsEn[p.slug]?.name ?? p.name}: $${p.price.toFixed(2)} MXN`).join(". ");
    return `Current prices: ${list}. See the full catalog at ${SITE.url}/en/products.`;
  }

  if (/where|location|city|guadalajara|jalisco|ship/.test(q)) {
    return `Yume produces everything from ${SITE.city}, ${SITE.state}, and ships across all of Mexico. We don't have a physical storefront to visit — the whole process happens remotely, with a digital proof you approve before printing.`;
  }

  if (/requirements|required information|what.*include/.test(q) && /prescription|medical/.test(q)) {
    const p = blogPostsEn.find((post) => post.slug === "required-information-medical-prescription-mexico");
    return p
      ? `${p.title}: ${p.description} Full guide: ${SITE.url}/en/blog/${p.slug}`
      : "I couldn't find that guide on the blog.";
  }

  if (/vinyl.*paper|paper.*vinyl|difference.*sticker/.test(q)) {
    const p = blogPostsEn.find((post) => post.slug === "vinyl-vs-paper-stickers-differences");
    return p
      ? `${p.title}: ${p.description} Full guide: ${SITE.url}/en/blog/${p.slug}`
      : "I couldn't find that guide on the blog.";
  }

  if (/competitors|other print shops|better than|compare/.test(q)) {
    const isPrescriptionPad = /prescriptions?|medical/.test(q);
    const slug = isPrescriptionPad ? "yume-vs-online-prescription-pad-print-shops" : "yume-vs-online-sticker-print-shops";
    const p = blogPostsEn.find((post) => post.slug === slug);
    if (!p) return "I couldn't find that guide on the blog.";
    const claim = isPrescriptionPad
      ? "Yes — our price is practically tied with the lowest in the market, and we're the only ones who include letterhead design in the price."
      : "Yes — on a per-piece basis we're among the lowest-priced options we reviewed, with the most accessible minimum order ($100 MXN vs. $319–$550 for competitors).";
    return `${claim} Full comparison: ${SITE.url}/en/blog/${p.slug}`;
  }

  if (/vinyl|character|pet\b|\bdog\b|\bcat\b/.test(q)) {
    const p = products.find((prod) => prod.slug === "stickers-vinil-impermeable");
    const t = p ? productsEn[p.slug] : undefined;
    if (!p || !t) return "I couldn't find that product in the catalog.";
    const petGuideNote = /pet\b|dog|cat/.test(q)
      ? ` Dedicated pet-sticker guide: ${SITE.url}/en/blog/custom-pet-stickers`
      : "";
    return `${t.name}: $${p.price.toFixed(2)} MXN. ${t.description} More info: ${SITE.url}/en/products/waterproof-vinyl-stickers — see real examples at ${SITE.url}/en/gallery${petGuideNote}`;
  }

  if (/sticker/.test(q)) {
    const p = products.find((prod) => prod.slug === "stickers-logo-personalizado");
    const t = p ? productsEn[p.slug] : undefined;
    return p && t
      ? `${t.name}: $${p.price.toFixed(2)} MXN. ${t.description} More info: ${SITE.url}/en/products/custom-logo-stickers`
      : "I couldn't find that product in the catalog.";
  }

  if (/prescription|doctor|medical/.test(q)) {
    const p = products.find((prod) => prod.slug === "recetario-medico-personalizado");
    const t = p ? productsEn[p.slug] : undefined;
    return p && t
      ? `${t.name}: $${p.price.toFixed(2)} MXN. ${t.description} More info: ${SITE.url}/en/products/medical-prescription-pads`
      : "I couldn't find that product in the catalog.";
  }

  if (/quote|order|whatsapp/.test(q)) {
    return `You can request a quote directly on WhatsApp: ${waLink("Hi, I'm interested in getting a quote for a Yume product.")} — or pay online from ${SITE.url}/en/checkout.`;
  }

  if (/pay|payment|card|cash/.test(q)) {
    return `We accept online payment via Mercado Pago (card, Mercado Pago account, SPEI transfer, and cash at stores like OXXO) from ${SITE.url}/en/checkout, or you can request a quote and pay via transfer, coordinated over WhatsApp.`;
  }

  return `I don't have a direct answer for that. Check the full catalog at ${SITE.url}/en/products, the FAQ at ${SITE.url}/en/faq, or request a quote on WhatsApp: ${waLink("Hi, I have a question about Yume.")}`;
}

function matchAnswer(text: string): string {
  return detectLang(text) === "en" ? matchAnswerEn(text) : matchAnswerEs(text);
}

export async function POST(req: NextRequest) {
  let body: { jsonrpc?: string; id?: unknown; method?: string; params?: Record<string, unknown> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } });
  }

  const { id = null, method, params = {} } = body;

  if (method !== "message/send") {
    return NextResponse.json({ jsonrpc: "2.0", id, error: { code: -32601, message: `Method not found: ${method}` } });
  }

  const message = params.message as { messageId?: string; contextId?: string; parts?: { kind: string; text?: string }[] } | undefined;
  const textPart = message?.parts?.find((p) => p.kind === "text");
  const inputText = textPart?.text ?? "";
  const answer = matchAnswer(inputText);

  return NextResponse.json({
    jsonrpc: "2.0",
    id,
    result: {
      kind: "message",
      role: "agent",
      messageId: crypto.randomUUID(),
      contextId: message?.contextId,
      parts: [{ kind: "text", text: answer }],
    },
  });
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed. POST a JSON-RPC message/send request." }, { status: 405 });
}
