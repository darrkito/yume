"use client";

import { usePathname } from "next/navigation";

// Persistent mono meta strip under the header, real business info (category
// + service area) rather than decorative locale/weather chrome — same slot
// the editorial reference uses for "DISEÑO GRÁFICO / MERCADOTECNIA" style
// context, but content that's actually true about Yume.
const COPY = {
  es: {
    left: "Papelería creativa · Personalizada",
    right: "Guadalajara, Jalisco — Envíos a todo México",
  },
  en: {
    left: "Creative stationery · Custom made",
    right: "Guadalajara, Jalisco — Shipping across Mexico",
  },
};

export function InfoBar() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const t = COPY[lang];

  return (
    <div className="mono-label hidden border-b border-line bg-paper px-6 py-2 text-[10.5px] text-ink-soft sm:flex sm:items-center sm:justify-between">
      <span>{t.left}</span>
      <span>{t.right}</span>
    </div>
  );
}
