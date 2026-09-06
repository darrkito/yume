"use client";

import { useRef } from "react";
import type { ComponentProps, MouseEvent } from "react";

// Directional hover-aware fill: the brand-color fill sweeps in from
// whichever side the cursor entered, instead of the previous flat
// hover:text-brand color swap. Pure CSS transform on a pseudo-element,
// only the entry-side calculation needs JS.
export function CtaFillLink({ className = "", children, ...props }: ComponentProps<"a">) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const fromLeft = e.clientX - rect.left < rect.width / 2;
    el.style.setProperty("--fx", fromLeft ? "0%" : "100%");
  };

  return (
    <a ref={ref} className={`cta-fill ${className}`} onMouseEnter={handleEnter} {...props}>
      <span>{children}</span>
    </a>
  );
}
