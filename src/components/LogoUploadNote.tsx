"use client";

import { useState } from "react";
import { ImageUp, X } from "lucide-react";
import { UI, type Lang } from "@/lib/i18n";

// No upload backend exists yet — this only lets the customer confirm which
// file they intend to send (client-side preview) and makes clear it still
// has to be attached manually in the WhatsApp chat, since a wa.me link can
// only pre-fill text, never an attachment. Honest about the limitation
// rather than implying an automatic upload that doesn't exist.
export function LogoUploadNote({ lang = "es" }: { lang?: Lang } = {}) {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const t = UI[lang];

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const clearFile = () => {
    setPreview(null);
    setFileName(null);
  };

  return (
    <div className="mt-6 rounded-xl border border-line bg-paper p-5">
      <p className="flex items-center gap-2 text-sm font-semibold text-ink">
        <ImageUp size={16} className="text-brand" /> {t.yourLogoOrDesign}
      </p>
      <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{t.logoNoteBody}</p>

      {preview ? (
        <div className="mt-4 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element -- local data: URL preview, next/image doesn't handle these */}
          <img src={preview} alt={t.previewAlt} className="h-16 w-16 rounded-lg border border-line object-contain bg-paper-raised" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs text-ink">{fileName}</p>
            <button type="button" onClick={clearFile} className="mt-1 flex items-center gap-1 text-xs text-ink-soft hover:text-brand transition-colors">
              <X size={12} /> {t.remove}
            </button>
          </div>
        </div>
      ) : (
        <label className="mt-4 flex cursor-pointer items-center justify-center rounded-lg border border-dashed border-line py-4 text-xs text-ink-soft transition-colors hover:border-brand hover:text-brand">
          <input type="file" accept="image/*,.pdf,.ai,.svg" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />
          {t.chooseFile}
        </label>
      )}
    </div>
  );
}
