"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Customer, DeliveryInfo, DeliveryMethod } from "@/lib/orders";
import { CASABLANCA_BRANCHES, CASABLANCA_PRICE, deliverySurcharge } from "@/content/shipping";
import { CASABLANCA_BRANCHES_EN } from "@/content/shipping.en";
import { formatMXN } from "@/lib/format";
import { UI, type Lang } from "@/lib/i18n";

const FIELD_CLASS =
  "w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";
const LABEL_CLASS = "mb-1.5 block text-xs font-medium text-ink-soft";

const EMPTY_VALUES = {
  name: "",
  email: "",
  phone: "",
  street: "",
  number: "",
  neighborhood: "",
  city: "",
  state: "",
  zip: "",
  references: "",
};

export const DRAFT_KEY = "yume_checkout_draft_v1";

function readDraft() {
  try {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/** Forget everything typed at checkout once the order is placed. */
export function clearCheckoutDraft() {
  try {
    sessionStorage.removeItem(DRAFT_KEY);
    sessionStorage.removeItem("yume_uploads_v1");
    localStorage.removeItem("yume_personalization_v1");
    localStorage.removeItem("yume_order_note_v1");
  } catch {}
}

export function ShippingForm({
  onSubmit,
  onMethodChange,
  subtotal,
  lang = "es",
  beforeSubmit,
}: {
  onSubmit: (data: { customer: Customer; delivery: DeliveryInfo }) => void | Promise<void>;
  onMethodChange?: (method: DeliveryMethod | null) => void;
  subtotal: number;
  lang?: Lang;
  beforeSubmit?: React.ReactNode;
}) {
  const t = UI[lang];
  const branches = lang === "en" ? CASABLANCA_BRANCHES_EN : CASABLANCA_BRANCHES;
  const nationalShippingCost = deliverySurcharge("envio_nacional", subtotal);
  const [submitting, setSubmitting] = useState(false);
  // Preselect whatever the shopper already picked in the cart (?entrega=).
  // Only mounts once the cart has items, so never during static prerender.
  const searchParams = useSearchParams();
  const entrega = searchParams.get("entrega");
  // No default, same as the cart: only carry over what the shopper chose.
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod | null>(
    entrega === "casablanca" ? "recoleccion_casablanca" : entrega === "nacional" ? "envio_nacional" : null,
  );
  const [methodError, setMethodError] = useState(false);
  useEffect(() => {
    onMethodChange?.(deliveryMethod);
  }, [deliveryMethod, onMethodChange]);
  // No default: the shopper picks the branch on purpose.
  const [branchId, setBranchId] = useState("");
  const [values, setValues] = useState<typeof EMPTY_VALUES>(() => ({ ...EMPTY_VALUES, ...readDraft() }));

  // Draft survives a reload or coming back from Mercado Pago (never any card
  // data: the form has none). Cleared by clearCheckoutDraft() once paid.
  useEffect(() => {
    try {
      sessionStorage.setItem(DRAFT_KEY, JSON.stringify(values));
    } catch {}
  }, [values]);

  const update = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  // Specific validation messages instead of the browser's generic "match the
  // requested format": say what is wrong and by how much. Empty stays "" so
  // `required` still reports its own message.
  const checkDigits = (min: number, max: number, message: (have: number) => string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const have = e.target.value.replace(/\D/g, "").length;
    e.target.setCustomValidity(have === 0 || (have >= min && have <= max) ? "" : message(have));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!deliveryMethod) {
      setMethodError(true);
      document.getElementById("delivery-method")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitting(true);
    try {
      const delivery: DeliveryInfo =
        deliveryMethod === "recoleccion_casablanca"
          ? { method: "recoleccion_casablanca", shippingAddress: null, casablancaBranch: branchId }
          : {
              method: "envio_nacional",
              casablancaBranch: null,
              shippingAddress: {
                street: values.street,
                number: values.number,
                neighborhood: values.neighborhood,
                city: values.city,
                state: values.state,
                zip: values.zip,
                references: values.references || undefined,
              },
            };
      await onSubmit({
        customer: { name: values.name, email: values.email, phone: values.phone },
        delivery,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="font-display text-lg text-ink">{t.yourDetails}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={LABEL_CLASS} htmlFor="name">
              {t.fullName}
            </label>
            <input
              id="name"
              required
              autoComplete="name"
              className={FIELD_CLASS}
              value={values.name}
              onChange={update("name")}
              placeholder={lang === "en" ? "Jane Smith" : "María López"}
            />
          </div>
          <div>
            <label className={LABEL_CLASS} htmlFor="email">
              {t.email}
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              spellCheck={false}
              inputMode="email"
              className={FIELD_CLASS}
              value={values.email}
              onChange={update("email")}
              placeholder={lang === "en" ? "jane@email.com" : "maria@correo.com"}
            />
            <p className="mt-1 text-xs text-ink-soft">{t.reminderNotice}</p>
          </div>
          <div>
            <label className={LABEL_CLASS} htmlFor="phone">
              {t.phone}
            </label>
            <input
              id="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              className={FIELD_CLASS}
              value={values.phone}
              onChange={(e) => {
                update("phone")(e);
                checkDigits(10, 12, (n) => t.phoneDigits.replace("{n}", String(n)))(e);
              }}
              placeholder="33 1234 5678"
            />
            <p className="mt-1 text-xs text-ink-soft">{t.phoneHelp}</p>
          </div>
        </div>
      </div>

      <div id="delivery-method">
        <h2 className="font-display text-lg text-ink">{t.deliveryMethod}</h2>
        {methodError && !deliveryMethod && (
          <p role="alert" className="mt-2 text-sm font-medium text-brand">
            {t.chooseDeliveryError}
          </p>
        )}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <button
            type="button"
            aria-pressed={deliveryMethod === "envio_nacional"}
            onClick={() => setDeliveryMethod("envio_nacional")}
            className={`rounded-xl border p-4 text-left transition-colors ${
              deliveryMethod === "envio_nacional" ? "border-brand bg-brand-tint" : "border-line bg-paper hover:border-brand"
            }`}
          >
            <p className="text-sm font-semibold text-ink">
              {t.nationalShipping} · {nationalShippingCost > 0 ? `${formatMXN(nationalShippingCost)} MXN` : t.free}
            </p>
            <p className={`mt-1 text-xs leading-relaxed ${deliveryMethod === "envio_nacional" ? "text-ink" : "text-ink-soft"}`}>{nationalShippingCost === 0 ? t.nationalShippingFreeNote : t.nationalShippingDesc}</p>
          </button>
          <button
            type="button"
            aria-pressed={deliveryMethod === "recoleccion_casablanca"}
            onClick={() => setDeliveryMethod("recoleccion_casablanca")}
            className={`rounded-xl border p-4 text-left transition-colors ${
              deliveryMethod === "recoleccion_casablanca" ? "border-brand bg-brand-tint" : "border-line bg-paper hover:border-brand"
            }`}
          >
            <p className="text-sm font-semibold text-ink">
              {t.casablancaPickup} · {formatMXN(CASABLANCA_PRICE)} MXN
            </p>
            <p className={`mt-1 text-xs leading-relaxed ${deliveryMethod === "recoleccion_casablanca" ? "text-ink" : "text-ink-soft"}`}>{t.casablancaPickupDesc}</p>
          </button>
        </div>

        {deliveryMethod === "recoleccion_casablanca" && (
          <fieldset className="mt-4">
            <legend className={LABEL_CLASS}>{t.chooseBranch}</legend>
            <div className="grid gap-2">
              {branches.map((b, i) => (
                <label
                  key={b.id}
                  className={`flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm transition-colors ${
                    branchId === b.id ? "border-brand bg-brand-tint" : "border-line bg-paper hover:border-brand"
                  }`}
                >
                  <input
                    type="radio"
                    name="casablanca-branch"
                    value={b.id}
                    required={i === 0}
                    checked={branchId === b.id}
                    onChange={() => setBranchId(b.id)}
                    className="mt-1 size-4 accent-brand"
                  />
                  <span>
                    <span className="block font-semibold text-ink">{b.name}</span>
                    <span className="block text-xs text-ink-soft">{b.address}</span>
                    <span className="block text-xs text-ink-soft">{b.hours}</span>
                  </span>
                </label>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-ink-soft">{t.casablancaNote}</p>
            {nationalShippingCost === 0 && <p className="mt-2 text-xs leading-relaxed text-ink-soft">{t.casablancaFeeNote}</p>}
          </fieldset>
        )}
      </div>

      {deliveryMethod === "envio_nacional" && (
      <div>
        <h2 className="font-display text-lg text-ink">{t.shippingAddress}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <label className={LABEL_CLASS} htmlFor="street">
              {t.street}
            </label>
            <input
              id="street"
              required
              autoComplete="shipping address-line1"
              className={FIELD_CLASS}
              value={values.street}
              onChange={update("street")}
              placeholder="Av. Vallarta"
            />
          </div>
          <div>
            <label className={LABEL_CLASS} htmlFor="number">
              {t.number}
            </label>
            <input
              id="number"
              required
              autoComplete="off"
              className={FIELD_CLASS}
              value={values.number}
              onChange={update("number")}
              placeholder="123"
            />
          </div>
          <div className="sm:col-span-3">
            <label className={LABEL_CLASS} htmlFor="neighborhood">
              {t.neighborhood}
            </label>
            <input
              id="neighborhood"
              required
              autoComplete="shipping address-line2"
              className={FIELD_CLASS}
              value={values.neighborhood}
              onChange={update("neighborhood")}
              placeholder="Americana"
            />
          </div>
          <div>
            <label className={LABEL_CLASS} htmlFor="city">
              {t.city}
            </label>
            <input
              id="city"
              required
              autoComplete="shipping address-level2"
              className={FIELD_CLASS}
              value={values.city}
              onChange={update("city")}
            />
          </div>
          <div>
            <label className={LABEL_CLASS} htmlFor="state">
              {t.state}
            </label>
            <input
              id="state"
              required
              autoComplete="shipping address-level1"
              className={FIELD_CLASS}
              value={values.state}
              onChange={update("state")}
            />
          </div>
          <div>
            <label className={LABEL_CLASS} htmlFor="zip">
              {t.zip}
            </label>
            <input
              id="zip"
              required
              autoComplete="shipping postal-code"
              inputMode="numeric"
              className={FIELD_CLASS}
              value={values.zip}
              maxLength={5}
              enterKeyHint="next"
              onChange={(e) => {
                update("zip")(e);
                checkDigits(5, 5, (n) => t.zipDigits.replace("{n}", String(n)))(e);
              }}
              placeholder="44100"
            />
          </div>
          <div className="sm:col-span-3">
            <label className={LABEL_CLASS} htmlFor="references">
              {t.referencesOptional}
            </label>
            <input id="references" className={FIELD_CLASS} value={values.references} onChange={update("references")} placeholder={t.referencesPlaceholder} />
          </div>
        </div>
      </div>
      )}

      {beforeSubmit}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-brand px-8 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-brand-deep active:scale-[0.98] disabled:opacity-60 sm:w-auto"
      >
        {t.continueToPayment}
      </button>
    </form>
  );
}
