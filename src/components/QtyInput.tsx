"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

// −/+ stepper whose number can also be typed. The draft is only committed
// (clamped to [min, max], rounded to a whole number) on blur or Enter, so
// clearing the field to type "437" never snaps back mid-keystroke.
export function QtyInput({
  value,
  min,
  max,
  step = 1,
  onChange,
  label,
  decreaseLabel,
  increaseLabel,
}: {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  label: string;
  decreaseLabel: string;
  increaseLabel: string;
}) {
  const [draft, setDraft] = useState<string | null>(null);
  const clamp = (n: number) => Math.min(max, Math.max(min, n));

  const commit = (raw: string) => {
    setDraft(null);
    const n = Math.round(Number(raw));
    if (raw.trim() !== "" && Number.isFinite(n) && clamp(n) !== value) onChange(clamp(n));
  };

  const btn =
    "flex size-11 shrink-0 items-center justify-center text-ink-soft transition-colors hover:text-brand disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

  return (
    <div className="inline-flex items-center rounded-full border border-line bg-paper">
      <button type="button" onClick={() => onChange(clamp(value - step))} disabled={value <= min} aria-label={decreaseLabel} className={btn}>
        <Minus size={14} aria-hidden="true" />
      </button>
      <input
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        step={1}
        value={draft ?? String(value)}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={(e) => commit(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            commit(e.currentTarget.value);
          }
        }}
        aria-label={label}
        className="w-16 bg-transparent text-center text-sm font-semibold text-ink tabular-nums [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button type="button" onClick={() => onChange(clamp(value + step))} disabled={value >= max} aria-label={increaseLabel} className={btn}>
        <Plus size={14} aria-hidden="true" />
      </button>
    </div>
  );
}
