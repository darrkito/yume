"use client";

import { fieldsFor, MAX_NOTE_LENGTH, type PersonalizationInput } from "@/content/personalization";
import type { CartItem } from "@/components/CartContext";
import { getProduct } from "@/content/products";
import { productsEn } from "@/content/products.en";
import { estimateCasablancaPickup, estimateNationalDelivery, type DeliveryMethod } from "@/content/shipping";
import type { Lang } from "@/lib/i18n";

const FIELD_CLASS =
  "w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";
const LABEL_CLASS = "mb-1.5 block text-xs font-medium text-ink-soft";

const COPY = {
  es: { title: "Personaliza tu pedido", intro: "Lo que escribas aquí es lo que usamos para tu diseño.", noteLabel: "Nota para tu pedido (opcional)", notePlaceholder: "Fecha límite, detalles de entrega, algo que debamos saber…" },
  en: { title: "Personalize your order", intro: "What you write here is what we use for your design.", noteLabel: "Note for your order (optional)", notePlaceholder: "Deadline, delivery details, anything we should know…" },
};

/** One block per product in the cart that needs details from the buyer, plus
 * a free order note. Rendered inside the checkout <form>, so `required`
 * fields block the submit natively. Hidden while the form is not the active step. */
export function PersonalizationFields({
  items,
  values,
  onChange,
  note,
  onNoteChange,
  lang,
  method,
}: {
  items: CartItem[];
  values: PersonalizationInput;
  onChange: (slug: string, id: string, value: string) => void;
  note: string;
  onNoteChange: (v: string) => void;
  lang: Lang;
  method: DeliveryMethod | null;
}) {
  const t = COPY[lang];
  // Latest realistic arrival if the proof is approved today (worst case:
  // national shipping until the buyer picks a method). Estimate only.
  const arrival = (method === "recoleccion_casablanca" ? estimateCasablancaPickup(new Date()) : estimateNationalDelivery(new Date())).to;
  const fmt = (d: Date) => d.toLocaleDateString(lang === "en" ? "en-US" : "es-MX", { weekday: "short", day: "numeric", month: "short" });
  const tooLate = (iso: string) => {
    const event = new Date(`${iso}T23:59:59`);
    return !Number.isNaN(event.getTime()) && event < arrival;
  };
  const blocks = [...new Set(items.map((i) => i.slug))]
    .map((slug) => ({ slug, fields: fieldsFor(slug, items.filter((i) => i.slug === slug).map((i) => i.variantId)) }))
    .filter((b) => b.fields.length > 0);

  return (
    <div>
      {blocks.length > 0 && (
        <>
          <h2 className="font-display text-lg text-ink">{t.title}</h2>
          <p className="mt-1 text-xs leading-relaxed text-ink-soft">{t.intro}</p>
          {blocks.map(({ slug, fields }) => {
            const product = getProduct(slug);
            const name = lang === "en" ? (productsEn[slug]?.name ?? product?.name) : product?.name;
            return (
              <fieldset key={slug} className="mt-4 space-y-4 rounded-xl border border-line p-4">
                <legend className="px-1 text-sm font-semibold text-ink">{name}</legend>
                {fields.map((f) => {
                  const id = `pz-${slug}-${f.id}`;
                  const common = {
                    id,
                    required: f.required,
                    maxLength: f.maxLength,
                    className: FIELD_CLASS,
                    value: values[slug]?.[f.id] ?? "",
                    placeholder: f.placeholder?.[lang],
                  };
                  return (
                    <div key={f.id}>
                      <label className={LABEL_CLASS} htmlFor={id}>
                        {f.label[lang]}
                      </label>
                      {f.type === "textarea" ? (
                        <textarea rows={3} {...common} onChange={(e) => onChange(slug, f.id, e.target.value)} />
                      ) : (
                        <input
                          type={f.type === "date" ? "date" : "text"}
                          inputMode={f.type === "url" ? "url" : undefined}
                          {...common}
                          onChange={(e) => onChange(slug, f.id, e.target.value)}
                        />
                      )}
                      {f.type === "date" && values[slug]?.[f.id] && tooLate(values[slug][f.id]) && (
                        <p role="status" className="mt-1.5 text-xs font-medium text-brand-deep">
                          {lang === "en"
                            ? `Heads up: with production and delivery your order could arrive as late as ${fmt(arrival)} (estimate, if you approve the proof today). Message us on WhatsApp and we will see if we can speed it up.`
                            : `Ojo: con producción y entrega tu pedido podría llegar hasta el ${fmt(arrival)} (estimado, si apruebas la prueba hoy). Escríbenos por WhatsApp y vemos si se puede acelerar.`}
                        </p>
                      )}
                    </div>
                  );
                })}
              </fieldset>
            );
          })}
        </>
      )}
      <div className={blocks.length > 0 ? "mt-6" : ""}>
        <label className={LABEL_CLASS} htmlFor="order-note">
          {t.noteLabel}
        </label>
        <textarea
          id="order-note"
          rows={2}
          maxLength={MAX_NOTE_LENGTH}
          className={FIELD_CLASS}
          value={note}
          placeholder={t.notePlaceholder}
          onChange={(e) => onNoteChange(e.target.value)}
        />
      </div>
    </div>
  );
}
