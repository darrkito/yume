"use client";

import { forwardRef, useState } from "react";
import { ImageUp, X } from "lucide-react";
import { designFileProblem } from "@/components/LogoUploadNote";
import { UI, type Lang } from "@/lib/i18n";

// The explicit "design or later?" decision before buying a product that needs
// the customer's artwork. Picking a file or choosing "later" both resolve it,
// so buying without a design is always a deliberate choice, never a default.
export const DesignSheet = forwardRef<HTMLDialogElement, { lang: Lang; onFile: (file: File) => void; onLater: () => void }>(
  function DesignSheet({ lang, onFile, onLater }, ref) {
    const t = UI[lang];
    const [error, setError] = useState<string | null>(null);
    const close = () => (ref as React.RefObject<HTMLDialogElement>).current?.close();

    return (
      <dialog ref={ref} aria-label={t.designSheetTitle} onClick={(e) => e.target === (ref as React.RefObject<HTMLDialogElement>).current && close()} className="share-dialog">
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-ink">{t.designSheetTitle}</h2>
            <button type="button" onClick={close} aria-label={t.closeSheet} className="flex size-11 items-center justify-center text-ink-soft">
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.designSheetBody}</p>
          <label className="btn-soft btn-soft-solid mt-4 w-full cursor-pointer">
            <ImageUp size={18} aria-hidden="true" /> {t.chooseFile}
            <input
              type="file"
              accept="image/*,.pdf,.ai,.svg,.psd"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                e.target.value = "";
                if (!file) return;
                const problem = designFileProblem(file);
                if (problem) return setError(t[problem]);
                setError(null);
                onFile(file);
              }}
            />
          </label>
          {error && (
            <p role="alert" className="mt-2 text-sm text-brand-deep">
              {error}
            </p>
          )}
          <button type="button" onClick={onLater} className="btn-soft btn-soft-outline mt-3 w-full">
            {t.designLater}
          </button>
        </div>
      </dialog>
    );
  },
);
