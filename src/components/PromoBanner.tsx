"use client";

import { useEffect, useState } from "react";
import { BUEN_FIN, promoLive } from "@/lib/promo";
import { UI, type Lang } from "@/lib/i18n";

// Pages are static, so the date check runs in the browser after mount
// (rendering it on the server would freeze it at build time).
export function PromoBanner({ lang }: { lang: Lang }) {
  const [live, setLive] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- reads the visitor's clock, unknown at build time
  useEffect(() => setLive(promoLive()), []);
  if (!live) return null;
  return (
    <p className="bg-brand px-4 py-2 text-center text-sm font-semibold text-white">
      {UI[lang].promoBanner.replace("{code}", BUEN_FIN.code)}
    </p>
  );
}
