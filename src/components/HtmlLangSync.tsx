"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// The root <html lang> stays static ("es-MX") so the whole site keeps full
// static generation — making it request-dynamic just for this would be a
// real, unrequested infra cost (see the Dizayn precedent this mirrors).
// hreflang/alternates.languages is what search engines actually use for
// language targeting; this is a best-effort correction for real
// users/JS-executing crawlers on the /en/* routes.
export function HtmlLangSync() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith("/en") ? "en" : "es-MX";
  }, [pathname]);

  return null;
}
