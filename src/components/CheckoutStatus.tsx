"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { useCart, type CartItem } from "@/components/CartContext";
import { ReceiptPrinter } from "@/components/ReceiptPrinter";
import { UI, type Lang } from "@/lib/i18n";

const ICONS = { success: CheckCircle2, pending: Loader2, error: XCircle } as const;

export function CheckoutStatus({
  variant,
  title,
  message,
  clearCart,
  lang = "es",
}: {
  variant: keyof typeof ICONS;
  title: string;
  message: string;
  clearCart?: boolean;
  lang?: Lang;
}) {
  const { items, total, clear } = useCart();
  const Icon = ICONS[variant];
  const t = UI[lang];
  const shopHref = lang === "en" ? "/en/products" : "/productos";

  // Snapshot the cart's contents before clearing it — this is the only
  // place the just-completed order's line items are still available
  // client-side, and the receipt below shows exactly what was ordered.
  // Can't capture this in a useState lazy initializer: useSyncExternalStore
  // deliberately renders an empty cart on the first client render to match
  // SSR, then resyncs to the real value a render later — a one-shot
  // initializer would catch that first, empty render. Reacting to `items`
  // itself (guarded so it only fires once) captures whichever render
  // actually has the real data.
  const [receipt, setReceipt] = useState<{ items: CartItem[]; total: number } | null>(null);
  const captured = useRef(false);

  useEffect(() => {
    if (!clearCart || captured.current) return;
    if (items.length > 0) {
      captured.current = true;
      setReceipt({ items, total });
      clear();
    }
  }, [items, total, clearCart, clear]);

  return (
    <section className="mx-auto max-w-lg px-6 py-24 text-center">
      {receipt ? (
        <ReceiptPrinter items={receipt.items} total={receipt.total} lang={lang} />
      ) : (
        <Icon size={40} className={`mx-auto text-brand ${variant === "pending" ? "animate-spin" : ""}`} />
      )}
      <h1 className="mt-6 font-display text-3xl text-ink">{title}</h1>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{message}</p>
      <Link
        href={shopHref}
        className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98]"
      >
        {t.backToShop}
      </Link>
    </section>
  );
}
