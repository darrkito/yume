"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { useCart } from "@/components/CartContext";

const ICONS = { success: CheckCircle2, pending: Loader2, error: XCircle } as const;

export function CheckoutStatus({
  variant,
  title,
  message,
  clearCart,
}: {
  variant: keyof typeof ICONS;
  title: string;
  message: string;
  clearCart?: boolean;
}) {
  const { clear } = useCart();
  const Icon = ICONS[variant];

  useEffect(() => {
    if (clearCart) clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount only
  }, []);

  return (
    <section className="mx-auto max-w-lg px-6 py-24 text-center">
      <Icon size={40} className={`mx-auto text-brand ${variant === "pending" ? "animate-spin" : ""}`} />
      <h1 className="mt-6 font-display text-3xl text-ink">{title}</h1>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{message}</p>
      <Link
        href="/productos"
        className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep active:scale-[0.98]"
      >
        Volver a la tienda
      </Link>
    </section>
  );
}
