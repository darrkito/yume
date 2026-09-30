"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { UI, type Lang } from "@/lib/i18n";

// Returning shopper with something in the cart: one line up top, one tap back.
export function CartReminder({ lang = "es" }: { lang?: Lang }) {
  const { count } = useCart();
  const t = UI[lang];
  if (count === 0) return null;
  return (
    <Link
      href={lang === "en" ? "/en/cart" : "/carrito"}
      className="flex min-h-11 items-center justify-center gap-2 bg-brand-tint px-4 text-sm font-semibold text-brand-deep"
    >
      <ShoppingBag size={16} aria-hidden="true" />
      {t.cartWaiting.replace("{n}", String(count))}
    </Link>
  );
}
