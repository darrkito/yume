import { NextRequest, NextResponse } from "next/server";
import { createCheckoutPro } from "@/lib/checkout-pro";
import { localizeError } from "@/lib/errors";
import { rateLimited } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  if (rateLimited(req, "checkout", 10)) {
    return NextResponse.json({ error: localizeError("Demasiados intentos. Espera un minuto e intenta de nuevo.", req.headers.get("x-lang")) }, { status: 429 });
  }
  let lang: unknown;
  try {
    const body = await req.json();
    lang = body.lang;
    const { initPoint, orderId } = await createCheckoutPro(body);
    return NextResponse.json({ initPoint, orderId });
  } catch (err) {
    console.error("[checkout-pro] error", err);
    const message = err instanceof Error ? err.message : "Error al crear la preferencia de pago.";
    return NextResponse.json({ error: localizeError(message, lang) }, { status: 400 });
  }
}
