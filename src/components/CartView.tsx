"use client";

import Link from "next/link";
import { Minus, Plus, X, ImageUp, CreditCard } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { getProduct } from "@/content/products";
import { waLink } from "@/content/site";
import { formatMXN } from "@/lib/format";

export function CartView() {
  const { items, removeItem, updateQty, total, clear } = useCart();

  const itemsRequiringImage = items
    .map((i) => getProduct(i.slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p?.requiresImage));

  const buildWaMessage = () => {
    const lines = items.map((i) => `- ${i.name} x${i.qty}: ${formatMXN(i.price * i.qty)}`);
    let msg = `Hola, quiero hacer un pedido:\n${lines.join("\n")}\n\nTotal: ${formatMXN(total)} MXN\n\n¿Podrían confirmar disponibilidad y tiempo de entrega?`;
    if (itemsRequiringImage.length > 0) {
      msg += `\n\nVoy a adjuntar en este chat el logo/diseño para: ${itemsRequiringImage.map((p) => p.name).join(", ")}.`;
    }
    return msg;
  };

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-brand">Carrito</p>
        <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Tu carrito está vacío</h1>
        <p className="mt-4 text-sm text-ink-soft">Agrega productos desde la tienda para armar tu pedido.</p>
        <Link
          href="/productos"
          className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98]"
        >
          Ver tienda
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand">Carrito</p>
      <h1 className="mt-3 font-display text-4xl text-ink">Tu pedido</h1>

      <ul className="mt-10 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <li key={item.slug} className="flex flex-wrap items-center justify-between gap-4 py-6">
            <div>
              <Link href={`/productos/${item.slug}`} className="font-display text-lg text-ink hover:text-brand transition-colors">
                {item.name}
              </Link>
              <p className="mt-1 text-sm text-ink-soft">{formatMXN(item.price)} MXN c/u</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-full border border-line">
                <button
                  type="button"
                  onClick={() => updateQty(item.slug, item.qty - 1)}
                  disabled={item.qty <= 1}
                  aria-label="Reducir cantidad"
                  className="p-2 text-ink-soft transition-colors hover:text-brand disabled:opacity-30"
                >
                  <Minus size={14} />
                </button>
                <span className="min-w-6 text-center text-sm text-ink">{item.qty}</span>
                <button
                  type="button"
                  onClick={() => updateQty(item.slug, item.qty + 1)}
                  aria-label="Aumentar cantidad"
                  className="p-2 text-ink-soft transition-colors hover:text-brand"
                >
                  <Plus size={14} />
                </button>
              </div>
              <p className="w-20 text-right text-sm font-semibold text-ink">{formatMXN(item.price * item.qty)}</p>
              <button type="button" onClick={() => removeItem(item.slug)} aria-label={`Quitar ${item.name}`} className="p-1 text-ink-soft transition-colors hover:text-brand">
                <X size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {itemsRequiringImage.length > 0 && (
        <div className="mt-6 flex items-start gap-3 rounded-xl bg-brand-tint p-4 text-sm text-ink">
          <ImageUp size={18} className="mt-0.5 shrink-0 text-brand" />
          <p>
            {itemsRequiringImage.length === 1 ? "Este producto requiere" : "Estos productos requieren"} tu logo o diseño:{" "}
            <strong>{itemsRequiringImage.map((p) => p.name).join(", ")}</strong>. Adjunta la imagen directamente en el chat de WhatsApp que se abrirá.
          </p>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-ink-soft">Total</p>
        <p className="font-display text-2xl text-ink">{formatMXN(total)} MXN</p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/pago"
          className="flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98]"
        >
          <CreditCard size={16} /> Pagar en línea
        </Link>
        <a
          href={waLink(buildWaMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-brand px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.15em] text-brand transition-colors hover:bg-brand hover:text-white"
        >
          Cotizar por WhatsApp
        </a>
      </div>
      <button
        type="button"
        onClick={clear}
        className="mt-4 text-xs text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-brand"
      >
        Vaciar carrito
      </button>
    </section>
  );
}
