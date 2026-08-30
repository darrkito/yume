"use client";

import { useState } from "react";
import type { Customer, ShippingAddress } from "@/lib/orders";
import { UI, type Lang } from "@/lib/i18n";

const FIELD_CLASS =
  "w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";
const LABEL_CLASS = "mb-1.5 block text-xs font-medium uppercase tracking-[0.08em] text-ink-soft";

export function ShippingForm({
  onSubmit,
  lang = "es",
}: {
  onSubmit: (data: { customer: Customer; shippingAddress: ShippingAddress }) => void;
  lang?: Lang;
}) {
  const t = UI[lang];
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      customer: { name: values.name, email: values.email, phone: values.phone || undefined },
      shippingAddress: {
        street: values.street,
        number: values.number,
        neighborhood: values.neighborhood,
        city: values.city,
        state: values.state,
        zip: values.zip,
        references: values.references || undefined,
      },
    });
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
              {t.phoneOptional}
            </label>
            <input
              id="phone"
              type="tel"
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

      <button
        type="submit"
        className="w-full rounded-full bg-brand px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98] sm:w-auto"
      >
        {t.continueToPayment}
      </button>
    </form>
  );
}
