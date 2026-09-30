"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { FileText, ImageUp, X } from "lucide-react";
import { UI, type Lang } from "@/lib/i18n";
import { useDesignFiles } from "@/components/DesignFileContext";

const MAGNET_DISTANCE = 180;
const MAX_OFFSET = 10;
const MAX_SIZE_BYTES = 10 * 1024 * 1024;
// Formats a browser can actually draw in an <img>; PDF/AI/PSD get an icon.
const RENDERABLE = /^image\/(png|jpe?g|webp|gif|avif|svg\+xml)$/;

type Stage = "idle" | "near" | "over";

const STAGE_CLASSES: Record<Stage, string> = {
  idle: "border-brand/40 bg-brand-tint/30 text-brand hover:border-brand",
  near: "border-brand/50 bg-brand-tint/40 text-brand",
  over: "border-brand bg-brand-tint text-brand shadow-[0_0_0_4px_var(--brand-tint)]",
};

// Real upload target now (see /api/upload-design) — the file is uploaded
// when checkout is submitted (CheckoutView), not here. This component only
// picks the file, previews it, and hands it to DesignFileContext. The file
// itself is read back from the context (not local state), so the same pick
// shows up on the product page and at checkout.
export function LogoUploadNote({ slug, lang = "es", heading, hint }: { slug: string; lang?: Lang; heading?: string; hint?: string }) {
  const [error, setError] = useState<string | null>(null);
  const [stage, setStage] = useState<Stage>("idle");
  const t = UI[lang];
  const { getDesignFile, setDesignFile, clearDesignFile } = useDesignFiles();
  const file = getDesignFile(slug);
  const preview = useMemo(() => (file && RENDERABLE.test(file.type) ? URL.createObjectURL(file) : null), [file]);
  useEffect(() => () => { if (preview) URL.revokeObjectURL(preview); }, [preview]);
  const zoneRef = useRef<HTMLLabelElement>(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 24, mass: 0.65, stiffness: 280 });
  const springY = useSpring(y, { damping: 24, mass: 0.65, stiffness: 280 });

  useEffect(() => {
    if (reduceMotion) return; // proximity pull is a pure flourish, skip entirely
    function onDragOver(e: DragEvent) {
      const rect = zoneRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < MAGNET_DISTANCE) {
        const pull = 1 - dist / MAGNET_DISTANCE;
        x.set(dist > 0 ? (dx / dist) * pull * MAX_OFFSET : 0);
        y.set(dist > 0 ? (dy / dist) * pull * MAX_OFFSET : 0);
        const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
        setStage(inside ? "over" : "near");
      } else {
        x.set(0);
        y.set(0);
        setStage("idle");
      }
    }
    function reset() {
      x.set(0);
      y.set(0);
      setStage("idle");
    }
    window.addEventListener("dragover", onDragOver);
    window.addEventListener("drop", reset);
    window.addEventListener("dragend", reset);
    return () => {
      window.removeEventListener("dragover", onDragOver);
      window.removeEventListener("drop", reset);
      window.removeEventListener("dragend", reset);
    };
  }, [x, y, reduceMotion]);

  const validate = (file: File): boolean => {
    if (file.size > MAX_SIZE_BYTES) {
      setError(t.fileTooLarge);
      return false;
    }
    const okType = file.type.startsWith("image/") || file.type === "application/pdf";
    const okExt = /\.(ai|svg|psd|pdf)$/i.test(file.name);
    if (!okType && !okExt) {
      setError(t.fileTypeNotAllowed);
      return false;
    }
    return true;
  };

  const handleFile = (picked: File | undefined) => {
    if (!picked) return;
    setError(null);
    if (!validate(picked)) return;
    setDesignFile(slug, picked);
  };

  const clearFile = () => {
    setError(null);
    clearDesignFile(slug);
  };

  return (
    <div id={`design-${slug}`} className="mt-6 scroll-mt-24 rounded-xl border border-line bg-paper p-5">
      <p className="flex items-center gap-2 text-sm font-semibold text-ink">
        <ImageUp size={16} className="text-brand" /> {heading ?? t.yourLogoOrDesign}
      </p>
      <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
        {t.logoNoteBody}
        {hint && <> {hint}</>}
      </p>

      {file ? (
        <div className="mt-4 flex items-center gap-3">
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element -- local blob: URL preview, next/image doesn't handle these
            <img src={preview} alt={t.previewAlt} className="h-16 w-16 rounded-lg border border-line object-contain bg-paper-raised" />
          ) : (
            <span className="flex h-16 w-16 items-center justify-center rounded-lg border border-line bg-paper-raised text-brand">
              <FileText size={24} aria-hidden="true" />
            </span>
          )}
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs text-ink">{file.name}</p>
            <button type="button" onClick={clearFile} className="mt-1 flex min-h-11 items-center gap-1 text-xs text-ink-soft transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
              <X size={12} /> {t.remove}
            </button>
          </div>
        </div>
      ) : (
        <label
          ref={zoneRef}
          className={`relative mt-4 block cursor-pointer rounded-lg border border-dashed py-6 text-center text-sm font-semibold transition-colors ${STAGE_CLASSES[stage]}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleFile(e.dataTransfer.files?.[0]);
            x.set(0);
            y.set(0);
            setStage("idle");
          }}
        >
          <motion.span style={reduceMotion ? undefined : { x: springX, y: springY }} className="block">
            {stage === "over" ? t.dropOver : stage === "near" ? t.dropNear : t.chooseFile}
          </motion.span>
          <input
            type="file"
            accept="image/*,.pdf,.ai,.svg,.psd"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </label>
      )}
      {error && <p className="mt-2 text-xs text-brand">{error}</p>}
    </div>
  );
}
