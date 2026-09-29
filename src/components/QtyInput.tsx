"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

// −/+ stepper whose number can also be typed. The draft is only committed
// (clamped to [min, max], rounded to a whole number) on blur or Enter, so
// clearing the field to type "437" never snaps back mid-keystroke. When a
// typed value gets clamped, `minNote`/`maxNote` explain why instead of the
// number silently changing under the shopper.
export function QtyInput({
  value,
  min,
  max,
  step = 1,
  onChange,
  label,
  decreaseLabel,
  increaseLabel,
  minNote,
  maxNote,
}: {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  label: string;
  decreaseLabel: string;
  increaseLabel: string;
  minNote?: string;
  maxNote?: string;
}) {
  const [draft, setDraft] = useState<string | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const clamp = (n: number) => Math.min(max, Math.max(min, n));

  const commit = (raw: string) => {
    setDraft(null);
    const n = Math.round(Number(raw));
    if (raw.trim() === "" || !Number.isFinite(n)) return;
    setNote(n < min ? (minNote ?? null) : n > max ? (maxNote ?? null) : null);
    if (clamp(n) !== value) onChange(clamp(n));
  };

  const stepBy = (delta: number) => {
    setNote(null);
    onChange(clamp(value + delta));
  };

  const btn =
    "flex size-11 shrink-0 items-center justify-center text-ink-soft transition-colors hover:text-brand disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

  return (
    <span className="inline-flex flex-col items-start">
      <span className="inline-flex items-center rounded-full border border-line bg-paper">
        <button type="button" onClick={() => stepBy(-step)} disabled={value <= min} aria-label={decreaseLabel} className={btn}>
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
        <button type="button" onClick={() => stepBy(step)} disabled={value >= max} aria-label={increaseLabel} className={btn}>
          <Plus size={14} aria-hidden="true" />
        </button>
      </span>
      <span role="status" className="text-xs text-brand-deep [&:not(:empty)]:mt-1.5">
        {note}
      </span>
    </span>
  );
}
