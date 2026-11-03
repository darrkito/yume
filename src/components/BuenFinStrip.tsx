"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BUEN_FIN_POST, UI, type Lang } from "@/lib/i18n";
import { BUEN_FIN, promoPhase } from "@/lib/promo";

export function BuenFinStrip({ lang }: { lang: Lang }) {
  const [hidden, setHidden] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- reads the visitor's clock, unknown at build time
  useEffect(() => setHidden(promoPhase() === "off"), []);
  if (hidden) return null;

  return (
    <section aria-label={UI[lang].buenFinHomeTitle} className="bg-brand-tint">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <h2 className="font-display text-xl text-ink sm:text-2xl">{UI[lang].buenFinHomeTitle}</h2>
        <p className="mt-2 text-ink-soft">{UI[lang].buenFinHomeBody.replace("{code}", BUEN_FIN.code)}</p>
        <Link href={lang === "en" ? "/en/blog/" + BUEN_FIN_POST.en : "/blog/" + BUEN_FIN_POST.es} className="btn-soft btn-soft-solid mt-4">
          {UI[lang].buenFinHomeCta}
        </Link>
      </div>
    </section>
  );
}
