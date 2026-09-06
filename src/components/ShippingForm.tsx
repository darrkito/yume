"use client";

import { useState } from "react";
import type { Customer, DeliveryInfo, DeliveryMethod } from "@/lib/orders";
import { CASABLANCA_BRANCHES, CASABLANCA_PRICE, deliverySurcharge } from "@/content/shipping";
import { CASABLANCA_BRANCHES_EN } from "@/content/shipping.en";
import { formatMXN } from "@/lib/format";
import { UI, type Lang } from "@/lib/i18n";

const FIELD_CLASS =
  "w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";
const LABEL_CLASS = "mb-1.5 block text-xs font-medium uppercase tracking-[0.08em] text-ink-soft";

export function ShippingForm({
  onSubmit,
  subtotal,
  lang = "es",
}: {
  onSubmit: (data: { customer: Customer; delivery: DeliveryInfo }) => void | Promise<void>;
  subtotal: number;
  lang?: Lang;
}) {
  const t = UI[lang];
  const branches = lang === "en" ? CASABLANCA_BRANCHES_EN : CASABLANCA_BRANCHES;
  const nationalShippingCost = deliverySurcharge("envio_nacional", subtotal);
  const [submitting, setSubmitting] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("envio_nacional");
  const [branchId, setBranchId] = useState(branches[0].id);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "Guadalajara",
    state: "Jalisco",
    zip: "",
    references: "",
  });

  const update = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
              onChange={update("phone")}
              placeholder="33 1234 5678"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-display text-lg text-ink">{t.deliveryMethod}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setDeliveryMethod("envio_nacional")}
            className={`rounded-xl border p-4 text-left transition-colors ${
              deliveryMethod === "envio_nacional" ? "border-brand bg-brand-tint" : "border-line bg-paper hover:border-brand"
            }`}
          >
            <p className="text-sm font-semibold text-ink">
              {t.nationalShipping} — {nationalShippingCost > 0 ? `${formatMXN(nationalShippingCost)} MXN` : t.free}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-ink-soft">{nationalShippingCost === 0 ? t.nationalShippingFreeNote : t.nationalShippingDesc}</p>
          </button>
          <button
            type="button"
            onClick={() => setDeliveryMethod("recoleccion_casablanca")}
            className={`rounded-xl border p-4 text-left transition-colors ${
              deliveryMethod === "recoleccion_casablanca" ? "border-brand bg-brand-tint" : "border-line bg-paper hover:border-brand"
            }`}
          >
            <p className="text-sm font-semibold text-ink">
              {t.casablancaPickup} — {formatMXN(CASABLANCA_PRICE)} MXN
            </p>
            <p className="mt-1 text-xs leading-relaxed text-ink-soft">{t.casablancaPickupDesc}</p>
          </button>
        </div>

        {deliveryMethod === "recoleccion_casablanca" && (
          <div className="mt-4">
            <label className={LABEL_CLASS} htmlFor="casablanca-branch">
              {t.chooseBranch}
            </label>
            <select id="casablanca-branch" required className={FIELD_CLASS} value={branchId} onChange={(e) => setBranchId(e.target.value)}>
              {branches.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name} — {b.address}
                </option>
              ))}
            </select>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">{t.casablancaNote}</p>
          </div>
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
              autoComplete="address-line1"
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
              autoComplete="address-line2"
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
              autoComplete="address-line3"
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
              autoComplete="address-level2"
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
              autoComplete="address-level1"
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
              autoComplete="postal-code"
              inputMode="numeric"
              className={FIELD_CLASS}
              value={values.zip}
              onChange={update("zip")}
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

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-brand px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98] disabled:opacity-60 sm:w-auto"
      >
        {t.continueToPayment}
      </button>
    </form>
  );
}
