// What each product needs from the buyer beyond picking an option (names,
// themes, a professional license...). Captured at checkout once per product,
// validated server-side against this same catalog, and stored on the order
// line (`items[].personalization`) so it reaches both emails.
// ponytail: per product, not per cart line: two different dulcero names in one
// order go in the order note. Add per-line capture if that becomes common.

import { getProduct, pieceCount } from "@/content/products";

export interface PersonalizationField {
  id: string;
  label: { es: string; en: string };
  placeholder?: { es: string; en: string };
  type: "text" | "textarea" | "url" | "date" | "select";
  /** For type "select": the allowed values (validated server-side). */
  options?: { value: string; label: { es: string; en: string } }[];
  /** Short help line under the field. */
  hint?: { es: string; en: string };
  required?: boolean;
  maxLength: number;
  /** Only asked when the cart line uses this option (e.g. the recetario's
   * data is only needed when we design it). */
  onlyVariant?: string;
}

const T = (es: string, en: string) => ({ es, en });

// Both sticker products are made either way; the buyer picks at checkout.
const CUT_FIELD: PersonalizationField = {
  id: "cut",
  type: "select",
  required: true,
  maxLength: 20,
  label: T("Tipo de corte", "Cut type"),
  options: [
    { value: "troquelado", label: T("Troquelado", "Die cut") },
    { value: "semitroquelado", label: T("Semitroquelado", "Kiss cut") },
  ],
  hint: T(
    "Troquelado: cada sticker se corta por completo, suelto. Semitroquelado: se corta solo el vinil y quedan sobre su hoja base.",
    "Die cut: each sticker is cut all the way through, loose. Kiss cut: only the vinyl is cut and the stickers stay on their backing sheet.",
  ),
};

// Finish is a required choice on both sticker products; holographic costs
// extra per piece, added as its own order line (see holoExtraLines).
export const HOLO_EXTRA_PER_PIECE = 0.5;
const FINISH_FIELD: PersonalizationField = {
  id: "finish",
  type: "select",
  required: true,
  maxLength: 20,
  label: T("Acabado", "Finish"),
  options: [
    { value: "mate", label: T("Mate", "Matte") },
    { value: "brillante", label: T("Brillante", "Glossy") },
    { value: "holografico", label: T("Holográfico (+$0.50 por pieza)", "Holographic (+$0.50 per piece)") },
  ],
};

export const PERSONALIZATION: Record<string, PersonalizationField[]> = {
  "dulceros-personalizados": [
    { id: "name", type: "text", required: true, maxLength: 80, label: T("Nombre o texto de la caja", "Name or text on the box"), placeholder: T("Sofía, 7 años", "Sofia, 7 years") },
    { id: "theme", type: "text", required: true, maxLength: 120, label: T("Temática", "Theme"), placeholder: T("Unicornios, Spider-Man, Navidad...", "Unicorns, Spider-Man, Christmas...") },
    { id: "eventDate", type: "date", maxLength: 10, label: T("Fecha del evento (opcional)", "Event date (optional)") },
  ],
  "recetario-medico-personalizado": [
    { id: "fullName", type: "text", required: true, maxLength: 120, onlyVariant: "con-diseno", label: T("Nombre completo del médico", "Doctor's full name"), placeholder: T("Dra. Laura Pérez Gómez", "Dr. Laura Perez Gomez") },
    { id: "license", type: "text", required: true, maxLength: 40, onlyVariant: "con-diseno", label: T("Cédula profesional", "Professional license no.") },
    { id: "specialty", type: "text", required: true, maxLength: 120, onlyVariant: "con-diseno", label: T("Especialidad", "Specialty"), placeholder: T("Pediatría", "Pediatrics") },
    { id: "specialtyLicense", type: "text", maxLength: 40, onlyVariant: "con-diseno", label: T("Cédula de especialidad (opcional)", "Specialty license no. (optional)") },
    { id: "address", type: "textarea", required: true, maxLength: 240, onlyVariant: "con-diseno", label: T("Dirección del consultorio", "Office address") },
    { id: "phone", type: "text", maxLength: 40, onlyVariant: "con-diseno", label: T("Teléfono del consultorio (opcional)", "Office phone (optional)") },
    { id: "hours", type: "text", maxLength: 120, onlyVariant: "con-diseno", label: T("Horario de atención (opcional)", "Office hours (optional)") },
  ],
  "placa-resena-google-nfc": [
    { id: "google", type: "text", required: true, maxLength: 300, label: T("Link de reseñas de Google o nombre de tu negocio", "Google reviews link or your business name"), placeholder: T("g.page/r/... o Café Aurora, Guadalajara", "g.page/r/... or Aurora Cafe, Guadalajara") },
  ],
  "stand-resena-google-nfc": [
    { id: "google", type: "text", required: true, maxLength: 300, label: T("Link de reseñas de Google o nombre de tu negocio", "Google reviews link or your business name"), placeholder: T("g.page/r/... o Café Aurora, Guadalajara", "g.page/r/... or Aurora Cafe, Guadalajara") },
  ],
  "stickers-vinil-impermeable": [
    CUT_FIELD,
    FINISH_FIELD,
    { id: "note", type: "textarea", maxLength: 300, label: T("Tamaño, forma o indicaciones (opcional)", "Size, shape or notes (optional)") },
  ],
  "stickers-logo-personalizado": [
    CUT_FIELD,
    FINISH_FIELD,
    { id: "note", type: "textarea", maxLength: 300, label: T("Tamaño, forma o indicaciones (opcional)", "Size, shape or notes (optional)") },
  ],
};

export interface PersonalizationEntry {
  label: string;
  value: string;
}

export const ORDER_NOTE_LABEL = "Nota del pedido";
export const MAX_NOTE_LENGTH = 500;

/** Fields to ask for a product given the option(s) chosen in the cart. */
export function fieldsFor(slug: string, variantIds: (string | undefined)[]): PersonalizationField[] {
  return (PERSONALIZATION[slug] ?? []).filter((f) => !f.onlyVariant || variantIds.includes(f.onlyVariant));
}

export type PersonalizationInput = Record<string, Record<string, string>>;

/** Validates what the client sent against the catalog; returns, per product
 * slug, the entries to store (Spanish labels: the owner reads them). Throws
 * on a missing required field or a bad URL/date. */
export function validatePersonalization(
  lines: { slug: string; variantId?: string }[],
  raw: unknown,
): Record<string, PersonalizationEntry[]> {
  const input = (raw && typeof raw === "object" ? raw : {}) as Record<string, Record<string, unknown>>;
  const out: Record<string, PersonalizationEntry[]> = {};
  for (const slug of new Set(lines.map((l) => l.slug))) {
    const fields = fieldsFor(slug, lines.filter((l) => l.slug === slug).map((l) => l.variantId));
    const entries: PersonalizationEntry[] = [];
    for (const f of fields) {
      const v = input[slug]?.[f.id];
      const value = typeof v === "string" ? v.trim().slice(0, f.maxLength) : "";
      if (!value) {
        if (f.required) throw new Error(`Falta: ${f.label.es}.`);
        continue;
      }
      if (f.type === "select" && !f.options?.some((o) => o.value === value)) throw new Error(`Opción inválida: ${f.label.es}.`);
      if (f.type === "date" && !/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error(`Fecha inválida: ${f.label.es}.`);
      const shown = f.type === "select" ? f.options!.find((o) => o.value === value)!.label.es : value;
      entries.push({ label: f.label.es.replace(/ \(opcional\)$/, ""), value: shown });
    }
    if (entries.length) out[slug] = entries;
  }
  return out;
}

/** Extra order lines for the holographic finish: $0.50 per piece, derived from
 * the buyer's finish choice and each line's piece count. Shared by the checkout
 * summary and the server, which recomputes it, so both always agree. */
export function holoExtraLines(
  lines: { slug: string; variantId?: string; qty: number }[],
  raw: unknown,
  lang: "es" | "en" = "es",
): { slug: string; name: string; price: number; qty: number; variantId: string }[] {
  const input = (raw && typeof raw === "object" ? raw : {}) as Record<string, Record<string, unknown>>;
  const bySlug = new Map<string, number>();
  for (const l of lines) {
    const product = getProduct(l.slug);
    const pieces = product ? pieceCount(product, l.variantId) : null;
    if (pieces !== null && input[l.slug]?.finish === "holografico") bySlug.set(l.slug, (bySlug.get(l.slug) ?? 0) + pieces * l.qty);
  }
  const name = lang === "en" ? "Holographic finish (+$0.50 per piece)" : "Acabado holográfico (+$0.50 por pieza)";
  return [...bySlug].map(([slug, qty]) => ({ slug, name, price: HOLO_EXTRA_PER_PIECE, qty, variantId: "acabado-holografico" }));
}

export function validateNote(raw: unknown): string {
  return typeof raw === "string" ? raw.trim().slice(0, MAX_NOTE_LENGTH) : "";
}
