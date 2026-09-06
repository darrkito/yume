"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqCategory, FaqItem } from "@/content/faq";

// Client-side accordion (button + aria-expanded) instead of native
// <details> — needed so the expand/collapse can animate smoothly via the
// grid-template-rows trick in globals.css. Native <details> snaps open
// instantly with no way to transition it cross-browser.
export function FaqQuestion({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left font-display text-lg text-ink"
      >
        {item.q}
        <ChevronDown
          size={18}
          className={`shrink-0 text-brand transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <div id={panelId} className="faq-panel" data-open={open} aria-hidden={!open}>
        <div>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category.label}>
          <h2 className="text-xs uppercase tracking-[0.2em] text-brand">{category.label}</h2>
          <div className="mt-4 divide-y divide-line border-y border-line">
            {category.items.map((item) => (
              <FaqQuestion key={item.q} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
