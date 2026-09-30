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

export function TrackClicks() {
  const pathname = usePathname();
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("a,button");
      if (!el) return;
      const tracked = el.closest<HTMLElement>("[data-track]")?.dataset.track;
      const href = el instanceof HTMLAnchorElement ? el.href : "";
      if (tracked) return send(tracked, pathname);
      if (href.includes("whatsapp.com")) return send("wa_click", pathname);
      if (/\/(pago|en\/checkout)$/.test(href)) return send("begin_checkout", pathname);
      if (el.closest(".tabbar")) return send(`tab_${(el.textContent ?? "").trim().toLowerCase()}`, pathname);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [pathname]);
  return null;
}
