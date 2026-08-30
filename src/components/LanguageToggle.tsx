"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { esPathToEnPath, enPathToEsPath } from "@/lib/i18n";

// Pure URL-derived language, no context/localStorage — navigates to the
// real sibling URL for the current route rather than flipping client state.
export function LanguageToggle({ className }: { className?: string }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const target = isEn ? enPathToEsPath(pathname) : esPathToEnPath(pathname);

  return (
    <Link
      href={target}
      className={className ?? "flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-brand"}
      aria-label={isEn ? "Cambiar a español" : "Switch to English"}
    >
      <Languages size={14} aria-hidden="true" />
      {isEn ? "ES" : "EN"}
    </Link>
  );
}
