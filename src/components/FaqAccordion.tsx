import { ChevronDown } from "lucide-react";
import type { FaqCategory, FaqItem } from "@/content/faq";

// Native <details>/<summary> — opens/closes per question with zero JS,
// consistent with the rest of the site's accordion patterns.
export function FaqQuestion({ item }: { item: FaqItem }) {
  return (
    <details className="group py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink marker:content-none [&::-webkit-details-marker]:hidden">
        {item.q}
        <ChevronDown size={18} className="shrink-0 text-brand transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.a}</p>
    </details>
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
