import { MapPin } from "lucide-react";
import type { Lang } from "@/lib/i18n";

// Every product can be picked up at Casa Blanca in Guadalajara, so this sits
// on every product card (top-right; the "Nuevo" badge owns top-left).
export function PickupBadge({ lang = "es" }: { lang?: Lang }) {
  return (
    <span className="absolute right-0 top-0 z-10 inline-flex items-center gap-1 rounded-full border border-brand/30 bg-paper px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand shadow-sm">
      <MapPin size={11} aria-hidden="true" />
      {lang === "en" ? "Pick up in GDL" : "Recógelo en GDL"}
    </span>
  );
}
