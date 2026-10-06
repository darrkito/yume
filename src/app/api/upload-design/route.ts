import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { sniffDesignType } from "@/lib/file-sniff";
import { rateLimited } from "@/lib/rate-limit";

// Two-step upload so files bigger than Vercel's 4.5 MB request limit work:
//   1. POST {fileName, size}  -> we hand back a signed upload URL (the browser
//      PUTs the file straight to Supabase Storage, never through this server).
//   2. POST {path}            -> we verify what actually landed (real size and
//      magic bytes, not the client's claims), store it with a safe
//      content-type and return the private download link.
const BUCKET = "order-designs";
const MAX_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
const ALLOWED_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".pdf", ".ai", ".psd"];
// A 10-year signed URL — these files need to stay reachable from the order
// record and the business notification email indefinitely.
const SIGNED_URL_TTL_SECONDS = 60 * 60 * 24 * 365 * 10;
const PATH_RE = /^[0-9a-f-]{36}-[a-zA-Z0-9.\-_]{1,120}$/;

const fail = (error: string, status = 400) => NextResponse.json({ error }, { status });

export async function POST(req: NextRequest) {
  if (rateLimited(req, "upload", 20)) return fail("Demasiados archivos. Espera un minuto e intenta de nuevo.", 429);
  try {
    const body = (await req.json()) as { fileName?: unknown; size?: unknown; path?: unknown };
    const supabase = getSupabaseClient();

    if (typeof body.path !== "string") {
      const fileName = typeof body.fileName === "string" ? body.fileName : "";
      const size = typeof body.size === "number" ? body.size : 0;
      if (!ALLOWED_EXTENSIONS.some((ext) => fileName.toLowerCase().endsWith(ext))) {
        return fail("Tipo de archivo no permitido. Usa imagen, PDF, AI, PSD o SVG.");
      }
      if (size > MAX_SIZE_BYTES) return fail("El archivo supera el límite de 10 MB.");
      const safeName = fileName.replace(/[^a-zA-Z0-9.\-_]/g, "_").slice(-100);
      const { data, error } = await supabase.storage.from(BUCKET).createSignedUploadUrl(`${crypto.randomUUID()}-${safeName}`);
      if (error || !data) throw new Error(`No se pudo preparar la subida: ${error?.message ?? "desconocido"}`);
      return NextResponse.json({ path: data.path, signedUrl: data.signedUrl });
    }

    if (!PATH_RE.test(body.path)) return fail("Archivo inválido.");
    const { data: blob, error: dlError } = await supabase.storage.from(BUCKET).download(body.path);
    if (dlError || !blob) return fail("No se encontró el archivo subido.");
    const bytes = Buffer.from(await blob.arrayBuffer());
    const type = bytes.length <= MAX_SIZE_BYTES ? sniffDesignType(bytes) : null;
    if (!type) {
      await supabase.storage.from(BUCKET).remove([body.path]);
      return fail("El archivo no es un diseño válido (máximo 10 MB; imagen, PDF, AI, PSD o SVG).");
    }
    // Re-store with a content-type we chose (SVG/AI/PSD as octet-stream so
    // a browser never renders them), not the one the client declared.
    const { error: upError } = await supabase.storage.from(BUCKET).upload(body.path, bytes, { contentType: type, upsert: true });
    if (upError) throw new Error(`No se pudo guardar el archivo: ${upError.message}`);

    const { data: signed, error: signError } = await supabase.storage.from(BUCKET).createSignedUrl(body.path, SIGNED_URL_TTL_SECONDS);
    if (signError || !signed) throw new Error(`No se pudo generar el enlace del archivo: ${signError?.message ?? "desconocido"}`);
    return NextResponse.json({ url: signed.signedUrl, path: body.path });
  } catch (err) {
    console.error("[upload-design] error", err);
    return fail(err instanceof Error ? err.message : "Error al subir el archivo.");
  }
}
