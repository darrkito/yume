"use client";

import { CUT_OPTIONS, FINISH_OPTIONS, SIZE_OPTIONS, parseVariant, type LineOption } from "@/content/products";
import { formatMXN } from "@/lib/format";
import type { Lang } from "@/lib/i18n";

const COPY = {
  es: {
    cut: "Tipo de corte",
    cutHint: "Troquelado: cada sticker se corta por completo, suelto. Semitroquelado: se corta solo el vinil y quedan sobre su hoja base.",
    finish: "Acabado",
    size: "Tamaño",
    sizeHint: "¿Necesitas más grande o algo más específico? Lo cotizamos por WhatsApp.",
    perPiece: "c/u",
  },
  en: {
    cut: "Cut type",
    cutHint: "Die cut: each sticker is cut all the way through, loose. Kiss cut: only the vinyl is cut and the stickers stay on their backing sheet.",
    finish: "Finish",
    size: "Size",
    sizeHint: "Need something bigger or more specific? We quote it on WhatsApp.",
    perPiece: "each",
  },
};

/** Cut type + finish pill groups for per-line sticker options; keeps the piece count. */
export function LineOptionPicker({ variantId, onChange, lang, baseRate, compact = false }: { baseRate: number; variantId: string | undefined; onChange: (id: string) => void; lang: Lang; compact?: boolean }) {
  const oc = COPY[lang];
  const chosen = parseVariant(variantId);
  const pieces = chosen.base;
  const pick = (kind: "cut" | "finish" | "size", id: string) =>
    onChange(`${pieces}|${kind === "cut" ? id : chosen.cut?.id}|${kind === "finish" ? id : chosen.finish?.id}|${kind === "size" ? id : chosen.size.id}`);
  const group = (kind: "cut" | "finish" | "size", options: LineOption[]) => (
    <fieldset className={compact ? "mt-3" : "mt-5"}>
      <legend className="text-xs text-ink-soft">{oc[kind]}</legend>
      <div className={`flex flex-wrap gap-2 ${compact ? "mt-2" : "mt-3"}`}>
        {options.map((o) => {
          const on = chosen[kind]?.id === o.id;
          const sizeExtra = kind === "size" ? ` · ${formatMXN(baseRate + (o.extraPerPiece ?? 0))} ${oc.perPiece}` : "";
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={on}
              onClick={() => pick(kind, o.id)}
              className={`min-h-11 rounded-full border px-4 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                on ? "border-brand bg-brand-tint font-semibold text-ink" : "border-line text-ink-soft hover:border-brand"
              }`}
            >
              {o.label[lang]}
              {kind === "size" ? sizeExtra : o.extraPerPiece ? ` (+${formatMXN(o.extraPerPiece)} ${oc.perPiece})` : ""}
            </button>
          );
        })}
      </div>
      {kind === "cut" && <p className="mt-2 max-w-md text-xs leading-relaxed text-ink-soft">{oc.cutHint}</p>}
      {kind === "size" && <p className="mt-2 max-w-md text-xs leading-relaxed text-ink-soft">{oc.sizeHint}</p>}
    </fieldset>
  );
  return (
    <>
      {group("size", SIZE_OPTIONS)}
      {group("cut", CUT_OPTIONS)}
      {group("finish", FINISH_OPTIONS)}
    </>
  );
}
