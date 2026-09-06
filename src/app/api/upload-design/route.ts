import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

const BUCKET = "order-designs";
const MAX_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ["image/", "application/pdf", "application/postscript", "image/vnd.adobe.photoshop"];
const ALLOWED_EXTENSIONS = [".ai", ".svg", ".pdf", ".psd"];
// A 10-year signed URL — these files need to stay reachable from the order
// record and the business notification email indefinitely, and there's no
// separate flow yet to refresh an expired link.
const SIGNED_URL_TTL_SECONDS = 60 * 60 * 24 * 365 * 10;

function isAllowedFile(file: File): boolean {
  if (ALLOWED_TYPES.some((t) => file.type.startsWith(t))) return true;
  const lower = file.name.toLowerCase();
  return ALLOWED_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No se recibió ningún archivo." }, { status: 400 });
    }
    if (file.size > MAX_SIZE_BYTES) {
      return NextResponse.json({ error: "El archivo supera el límite de 10MB." }, { status: 400 });
    }
    if (!isAllowedFile(file)) {
      return NextResponse.json({ error: "Tipo de archivo no permitido. Usa imagen, PDF, AI o SVG." }, { status: 400 });
    }

    const supabase = getSupabaseClient();
    const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    const path = `${crypto.randomUUID()}-${safeName}`;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(path, Buffer.from(await file.arrayBuffer()), { contentType: file.type || undefined });

    if (uploadError) {
      // Most likely cause during setup: the "order-designs" bucket doesn't
      // exist yet in this Supabase project.
      throw new Error(`No se pudo subir el archivo: ${uploadError.message}`);
    }

    const { data: signedData, error: signError } = await supabase.storage
      .from(BUCKET)
      .createSignedUrl(path, SIGNED_URL_TTL_SECONDS);

    if (signError || !signedData) {
      throw new Error(`No se pudo generar el enlace del archivo: ${signError?.message ?? "desconocido"}`);
    }

    return NextResponse.json({ url: signedData.signedUrl, fileName: file.name });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error al subir el archivo.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
