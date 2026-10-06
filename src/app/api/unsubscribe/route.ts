import { NextRequest, NextResponse } from "next/server";
import { optOutOfReminders } from "@/lib/orders";
import { validUnsubscribe } from "@/lib/unsubscribe";
import { SITE } from "@/content/site";

// Opens from the reminder email's footer link. GET on purpose (a mail client
// can't POST); harmless to repeat, and only a valid signed link works.
export const dynamic = "force-dynamic";

const page = (title: string, body: string, status = 200) =>
  new NextResponse(
    `<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${title}</title><body style="font-family:Georgia,serif;background:#fffaf5;color:#2b2320;display:grid;place-items:center;min-height:100vh;margin:0;padding:24px;text-align:center"><div style="max-width:420px"><h1 style="font-weight:400">${title}</h1><p style="font-family:Helvetica,Arial,sans-serif;line-height:1.6">${body}</p><p><a href="${SITE.url}" style="color:#7a1220">${SITE.name}</a></p></div></body></html>`,
    { status, headers: { "Content-Type": "text/html; charset=utf-8" } },
  );

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("e") ?? "";
  const token = req.nextUrl.searchParams.get("t") ?? "";
  if (!email || !validUnsubscribe(email, token)) {
    return page("Enlace no válido", "Este enlace no es válido o expiró. Si quieres dejar de recibir correos, escríbenos y lo hacemos por ti.", 400);
  }
  try {
    await optOutOfReminders(email);
  } catch (err) {
    console.error("[unsubscribe] error", err);
    return page("Algo salió mal", "No pudimos guardar tu baja. Inténtalo de nuevo en unos minutos o escríbenos.", 500);
  }
  return page("Listo, no más recordatorios", "No te enviaremos más recordatorios de carrito. Los correos de tus compras (confirmaciones) sí llegarán.");
}
