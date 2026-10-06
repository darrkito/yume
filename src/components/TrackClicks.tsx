"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

// One delegated click listener feeding Microsoft Clarity custom events (free;
// Clarity is already loaded in layout.tsx), so funnels can be built in its
// dashboard: add_to_cart, buy_now, choose_design, begin_checkout, wa_click,
// tab_<name>. No new dependency, and a silent no-op until Clarity has loaded.
const send = (event: string, page: string) => {
  try {
    window.clarity?.("set", "page", page);
    window.clarity?.("event", event);
  } catch {
    // analytics must never break a click
  }
};

/** Funnel events fired from code (not clicks). Checkout funnel in Clarity:
 * add_to_cart → begin_checkout → shipping_submitted → payment_method_chosen
 * (pro | brick) → purchase_brick (or payment_pending_cash) / payment_rejected_<detail>.
 * upload_failed marks a design file that could not be sent. */
export const track = (event: string) => send(event, typeof location === "undefined" ? "" : location.pathname);

export function TrackClicks() {
  const pathname = usePathname();
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("a,button");
      if (!el) return;
      const tracked = el.closest<HTMLElement>("[data-track]")?.dataset.track;
      const href = el instanceof HTMLAnchorElement ? el.href : "";
      const isWhatsApp = href.includes("whatsapp.com");
      if (tracked) {
        send(tracked, pathname);
        // A tracked WhatsApp link still counts as a WhatsApp click.
        if (isWhatsApp) send("wa_click", pathname);
        return;
      }
      if (isWhatsApp) return send("wa_click", pathname);
      if (href && /^\/(pago|en\/checkout)$/.test(new URL(href).pathname)) return send("begin_checkout", pathname);
      if (el.closest(".tabbar")) return send(`tab_${(el.textContent ?? "").trim().toLowerCase()}`, pathname);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [pathname]);
  return null;
}
