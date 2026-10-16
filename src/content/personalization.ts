// What each product needs from the buyer beyond picking an option (names,
// themes, a professional license...). Captured at checkout once per product,
// validated server-side against this same catalog, and stored on the order
// line (`items[].personalization`) so it reaches both emails.
// ponytail: per product, not per cart line: two different dulcero names in one
// order go in the order note. Add per-line capture if that becomes common.

export interface PersonalizationField {
  id: string;
  label: { es: string; en: string };
  placeholder?: { es: string; en: string };
  type: "text" | "textarea" | "url" | "date";
  required?: boolean;
  maxLength: number;
  /** Only asked when the cart line uses this option (e.g. the recetario's
   * data is only needed when we design it). */
  onlyVariant?: string;
}

const T = (es: string, en: string) => ({ es, en });

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
    { id: "note", type: "textarea", maxLength: 300, label: T("Tamaño, forma o indicaciones (opcional)", "Size, shape or notes (optional)") },
  ],
  "stickers-logo-personalizado": [
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
      if (f.type === "date" && !/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error(`Fecha inválida: ${f.label.es}.`);
      entries.push({ label: f.label.es.replace(/ \(opcional\)$/, ""), value });
    }
    if (entries.length) out[slug] = entries;
  }
  return out;
}

export function validateNote(raw: unknown): string {
  return typeof raw === "string" ? raw.trim().slice(0, MAX_NOTE_LENGTH) : "";
}
