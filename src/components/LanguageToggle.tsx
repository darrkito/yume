"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { esPathToEnPath, enPathToEsPath } from "@/lib/i18n";

// Pure URL-derived language, no context/localStorage — the inactive
// language navigates to the real sibling URL for the current route rather
// than flipping client state. "ES / EN" with the current one highlighted,
// matching the toggle pattern used on the user's other bilingual sites.
export function LanguageToggle({ className }: { className?: string }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const esHref = isEn ? enPathToEsPath(pathname) : pathname;
  const enHref = isEn ? pathname : esPathToEnPath(pathname);

  return (
    <span className={className ?? "flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em]"}>
      {isEn ? (
        <Link href={esHref} className="text-ink-soft transition-colors hover:text-brand" aria-label="Cambiar a español">
          ES
        </Link>
      ) : (
        <span className="text-ink" aria-current="true">
          ES
        </span>
      )}
      <span className="text-ink-soft" aria-hidden="true">
        /
      </span>
      {isEn ? (
        <span className="text-ink" aria-current="true">
          EN
        </span>
      ) : (
        <Link href={enHref} className="text-ink-soft transition-colors hover:text-brand" aria-label="Switch to English">
          EN
        </Link>
      )}
    </span>
  );
}
