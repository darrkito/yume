"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, ExternalLink, Store } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { MercadoPagoBrick } from "@/components/MercadoPagoBrick";
import { ShippingForm } from "@/components/ShippingForm";
import type { Customer, ShippingAddress } from "@/lib/orders";

type Mode = "form" | "choose" | "onsite";

export function CheckoutView() {
  const { items, total } = useCart();
  const [mode, setMode] = useState<Mode>("form");
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress | null>(null);
  const [redirecting, setRedirecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [settled, setSettled] = useState(false);

  // Once a payment resolves, MercadoPagoBrick clears the cart itself — but
  // it still needs to render its own success/pending/cash-voucher result.
  // Only fall back to the empty-cart screen while still on the first step,
  // never mid-checkout, or the result flashes to this instead.
  if (items.length === 0 && mode === "form" && !settled) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-brand">Pago</p>
        <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Tu carrito está vacío</h1>
        <p className="mt-4 text-sm text-ink-soft">Agrega productos desde la tienda antes de pagar.</p>
        <Link
          href="/productos"
          className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep"
        >
          Ver tienda
        </Link>
      </section>
    );
  }

  const handleCheckoutPro = async () => {
    if (!customer || !shippingAddress) return;
    setError(null);
    setRedirecting(true);
    try {
      const res = await fetch("/api/checkout-pro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, customer, shippingAddress }),
      });
      const data = await res.json();
      if (!res.ok || !data.initPoint) throw new Error(data.error ?? "No se pudo iniciar el pago.");
      window.location.href = data.initPoint;
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo iniciar el pago.");
      setRedirecting(false);
    }
  };

  return (
    <section className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand">Pago</p>
      <h1 className="mt-3 font-display text-4xl text-ink">
        {mode === "form" ? "Tus datos y envío" : "Elige cómo pagar"}
      </h1>

      {!settled && (
        <>
          <ul className="mt-8 divide-y divide-line border-y border-line text-sm">
            {items.map((item) => (
              <li key={item.slug} className="flex items-center justify-between py-3">
                <span className="text-ink">
                  {item.name} <span className="text-ink-soft">x{item.qty}</span>
                </span>
                <span className="font-medium text-ink">${(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-ink-soft">Total</p>
            <p className="font-display text-2xl text-ink">${total.toFixed(2)} MXN</p>
          </div>
        </>
      )}

      {error && <p className="mt-6 rounded-xl border border-line bg-paper p-4 text-sm text-ink">{error}</p>}

      {mode === "form" && (
        <div className="mt-10">
          <ShippingForm
            onSubmit={({ customer: c, shippingAddress: a }) => {
              setCustomer(c);
              setShippingAddress(a);
              setMode("choose");
            }}
          />
        </div>
      )}

      {mode === "choose" && (
        <div className="mt-10">
          <button type="button" onClick={() => setMode("form")} className="mb-4 text-xs text-ink-soft hover:text-brand transition-colors">
            ← Editar datos de envío
          </button>
          <div className="grid gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleCheckoutPro}
              disabled={redirecting}
              className="flex flex-col items-start gap-3 rounded-2xl border border-line bg-paper-raised p-6 text-left transition-colors hover:border-brand disabled:opacity-60"
            >
              <ExternalLink size={22} className="text-brand" />
              <span className="font-display text-lg text-ink">Pagar en Mercado Pago</span>
              <span className="text-xs leading-relaxed text-ink-soft">
                Te llevamos al sitio seguro de Mercado Pago. Ahí puedes usar tarjeta, tu cuenta de Mercado Pago o pagar en efectivo en tiendas como OXXO.
              </span>
              <span className="mt-auto text-xs font-semibold uppercase tracking-[0.1em] text-brand">
                {redirecting ? "Redirigiendo…" : "Continuar →"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMode("onsite")}
              className="flex flex-col items-start gap-3 rounded-2xl border border-line bg-paper-raised p-6 text-left transition-colors hover:border-brand"
            >
              <CreditCard size={22} className="text-brand" />
              <span className="font-display text-lg text-ink">Pagar aquí mismo</span>
              <span className="text-xs leading-relaxed text-ink-soft">
                Ingresa tu tarjeta o genera una ficha para pagar en efectivo, sin salir de esta página.
              </span>
              <span className="mt-auto flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-brand">
                <Store size={13} /> Incluye pago en tiendas
              </span>
            </button>
          </div>
        </div>
      )}

      {mode === "onsite" && customer && shippingAddress && (
        <div className="mt-10">
          {!settled && (
            <button type="button" onClick={() => setMode("choose")} className="mb-4 text-xs text-ink-soft hover:text-brand transition-colors">
              ← Elegir otra forma de pago
            </button>
          )}
          <MercadoPagoBrick items={items} total={total} customer={customer} shippingAddress={shippingAddress} onSettled={() => setSettled(true)} />
        </div>
      )}
    </section>
  );
}
