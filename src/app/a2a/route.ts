import { NextRequest, NextResponse } from "next/server";
import { products } from "@/content/products";
import { SITE, waLink } from "@/content/site";

// Rule-based A2A agent — keyword-matches the incoming message against a
// fixed set of real questions, each answered from the same product/FAQ data
// the site and the MCP server already serve. No LLM, no generated free text,
// zero per-request cost. Wire format confirmed against a real reference
// implementation: JSON-RPC method "message/send", response is a direct
// Message object (not wrapped in a Task).

function matchAnswer(text: string): string {
  const q = text.toLowerCase();

  if (/precio|cuesta|cuánto|costo/.test(q)) {
    const list = products.map((p) => `${p.name}: $${p.price.toFixed(2)} MXN`).join(". ");
    return `Precios actuales: ${list}. Puedes ver el catálogo completo en ${SITE.url}/productos.`;
  }

  if (/dónde|ubicaci|ciudad|guadalajara|jalisco|envío|envían|nacional/.test(q)) {
    return `Yume produce desde ${SITE.city}, ${SITE.state}, y envía a todo México. No tenemos tienda física para visitar — todo el proceso se hace a distancia con una prueba digital que apruebas antes de imprimir.`;
  }

  if (/sticker/.test(q)) {
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

  return `No tengo una respuesta directa para eso. Consulta el catálogo completo en ${SITE.url}/productos, las preguntas frecuentes en ${SITE.url}/#faq, o cotiza por WhatsApp: ${waLink("Hola, tengo una pregunta sobre Yume.")}`;
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
