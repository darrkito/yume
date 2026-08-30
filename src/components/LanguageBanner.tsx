"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { enPathToEsPath, UI } from "@/lib/i18n";

// Self-gating: renders nothing outside /en/*, so it can live once in the
// root layout instead of being wired into every English page individually.
export function LanguageBanner() {
  const pathname = usePathname();
  if (!pathname.startsWith("/en")) return null;

  const esHref = enPathToEsPath(pathname);

  return (
    <div className="border-b border-line bg-brand-tint px-6 py-2 text-center text-xs text-ink">
      {UI.en.viewingInEnglish}{" "}
      <Link href={esHref} className="font-semibold text-brand underline underline-offset-2 hover:text-brand-deep">
        {UI.en.switchToSpanish}
      </Link>
    </div>
  );
}
