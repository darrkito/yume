"use client";

import { useEffect, useState } from "react";
import { track } from "@/components/TrackClicks";
import { activePromo, promoLive, type Promo } from "@/lib/promo";
import { UI, type Lang } from "@/lib/i18n";

const KEY = "yume_promo_v1";

/** Applied coupon, kept in sessionStorage so the cart and checkout share it.
 * Re-validated on load (dates), never trusted: the server re-checks it anyway. */
export function usePromo() {
  const [promo, setPromoState] = useState<Promo | null>(null);
  useEffect(() => {
    try { setPromoState(activePromo(sessionStorage.getItem(KEY))); } catch {}
  }, []);
  const setPromo = (p: Promo | null) => {
    setPromoState(p);
    try { if (p) sessionStorage.setItem(KEY, p.code); else sessionStorage.removeItem(KEY); } catch {}
  };
  return [promo, setPromo] as const;
}

export function PromoField({ promo, setPromo, lang, id }: { promo: Promo | null; setPromo: (p: Promo | null) => void; lang: Lang; id: string }) {
  const t = UI[lang];
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  if (promo)
    return (
      <button type="button" onClick={() => setPromo(null)} className="mt-3 inline-flex min-h-11 items-center text-xs text-ink-soft transition-colors hover:text-brand">
        {t.promoRemove}
      </button>
    );
  return (
    <form
      className="mt-4"
      onSubmit={(e) => {
        e.preventDefault();
        const p = activePromo(input);
        setPromo(p);
        setError(!p);
        if (p) track("promo_applied");
      }}
    >
      <label htmlFor={id} className="text-xs font-medium text-ink-soft">{t.promoLabel}</label>
      <div className="mt-1 flex gap-2">
        <input
          id={id}
          value={input}
          onChange={(e) => { setInput(e.target.value); setError(false); }}
          autoCapitalize="off"
          autoComplete="off"
          spellCheck={false}
          placeholder={promoLive() ? "YumeBuenFin" : undefined}
          className="min-h-11 w-full rounded-xl border border-line bg-paper-raised px-3 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
        />
        <button type="submit" className="min-h-11 shrink-0 rounded-xl border border-line px-4 text-sm font-semibold text-ink transition-colors hover:border-brand">
          {t.promoApply}
        </button>
      </div>
      {error && <p role="alert" className="mt-1 text-xs font-medium text-brand">{t.promoInvalid}</p>}
    </form>
  );
}
