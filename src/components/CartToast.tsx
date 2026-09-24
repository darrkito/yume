"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, X } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { formatMXN } from "@/lib/format";
import { UI } from "@/lib/i18n";

const VISIBLE_MS = 4500;
const EXIT_MS = 180;

// Confirmation after "Agregar al carrito": lands like a sticker pressed onto
// the page, just under the cart icon it relates to. Skipped on cart/checkout
// ("Comprar ahora" already navigates there, so the cart itself confirms).
export function CartToast() {
  const { lastAdded, dismissAdded, total, count } = useCart();
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const t = UI[lang];
  const cartHref = lang === "en" ? "/en/cart" : "/carrito";
  const onCartOrCheckout = /^\/(en\/)?(carrito|cart|pago|checkout)/.test(pathname);
  const [leaving, setLeaving] = useState(false);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const close = () => {
    setLeaving(true);
    setTimeout(() => {
      setLeaving(false);
      dismissAdded();
    }, EXIT_MS);
  };

  useEffect(() => {
    if (!lastAdded || paused) return;
    timer.current = setTimeout(close, VISIBLE_MS);
    return () => clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- restart only on a new add or un-pause
  }, [lastAdded?.id, paused]);

  if (!lastAdded || onCartOrCheckout) return null;

  return (
    <div
      key={lastAdded.id}
      role="status"
      aria-live="polite"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => e.key === "Escape" && close()}
      className={`cart-toast card-soft fixed left-4 right-4 top-20 z-[60] p-4 sm:left-auto sm:right-6 sm:top-24 sm:w-[22rem] lg:right-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] ${leaving ? "cart-toast-out" : ""}`}
    >
      <div className="flex items-start gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-white">
          <Check size={16} aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-ink">{t.addedToCart}</p>
          <p className="mt-0.5 line-clamp-2 text-sm text-ink-soft">{lastAdded.name}</p>
          <p className="mt-1 text-xs text-ink-soft">
            {t.cartSubtotalShort} ({count}): <span className="font-semibold text-ink">{formatMXN(total)} MXN</span>
          </p>
        </div>
        <button
          type="button"
          onClick={close}
          aria-label={t.keepShopping}
          className="-m-2 flex size-11 shrink-0 items-center justify-center text-ink-soft transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>
      <div className="mt-3 flex gap-2">
        <Link href={cartHref} onClick={dismissAdded} className="btn-soft btn-soft-solid min-h-11 flex-1 px-4 py-2.5">
          {t.viewCart}
        </Link>
        <button type="button" onClick={close} className="btn-soft btn-soft-outline min-h-11 flex-1 px-4 py-2.5">
          {t.keepShopping}
        </button>
      </div>
    </div>
  );
}
