"use client";

import { useEffect, useRef } from "react";

// Description + specs + bullets: always open on tablet/desktop, folded behind
// one tap on phones so the buy box, gallery and FAQ aren't buried under a
// wall of text. Rendered open in the HTML (no desktop layout shift, and the
// text stays crawlable); phones fold it right after hydration, below the fold.
export function ProductDetails({ title, children }: { title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (ref.current && window.matchMedia("(max-width: 639px)").matches) ref.current.open = false;
  }, []);
  return (
    <details ref={ref} open className="group mt-6">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between border-y border-line py-2 font-display text-lg text-ink sm:hidden [&::-webkit-details-marker]:hidden">
        {title}
        <span aria-hidden="true" className="text-brand transition-transform group-open:rotate-45">+</span>
      </summary>
      {children}
    </details>
  );
}
