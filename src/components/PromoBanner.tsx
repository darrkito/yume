"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BUEN_FIN, promoPhase, type PromoPhase } from "@/lib/promo";
import { BUEN_FIN_POST, UI, type Lang } from "@/lib/i18n";

// Pages are static, so the date check runs in the browser after mount
// (rendering it on the server would freeze it at build time).
export function PromoBanner({ lang }: { lang: Lang }) {
  const [phase, setPhase] = useState<PromoPhase>("off");
  // eslint-disable-next-line react-hooks/set-state-in-effect -- reads the visitor's clock, unknown at build time
  useEffect(() => setPhase(promoPhase()), []);
  if (phase === "off") return null;
  return (
    <p className="bg-brand px-4 py-2 text-center text-sm font-semibold text-white">
      {(phase === "teaser" ? UI[lang].promoTeaser : UI[lang].promoBanner).replace("{code}", BUEN_FIN.code)}
      <Link href={lang === "en" ? "/en/blog/" + BUEN_FIN_POST.en : "/blog/" + BUEN_FIN_POST.es} className="ml-2 underline">
        {UI[lang].promoLearnMore}
      </Link>
    </p>
  );
}
