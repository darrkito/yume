"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Check, Link2, Mail, Send, Share2, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { UI } from "@/lib/i18n";

// Amazon/Mercado Libre-style share. On phones the OS share sheet does the job
// (WhatsApp, Messenger, Instagram, Telegram, AirDrop...). Where the browser has
// no Web Share API (most desktops) a small dialog offers WhatsApp, Facebook,
// Telegram, email and copy-link. Instagram and Messenger have no web share URL,
// so on desktop the link is copied instead.
export function ShareButton({ name }: { name: string }) {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const t = UI[lang];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState(false);
  // Links need window.location, so the menu is only built once opened (never during SSR).
  const [menuOpen, setMenuOpen] = useState(false);

  const url = () => `${window.location.origin}${window.location.pathname}`;
  const text = () => t.shareText.replace("{name}", name);

  const open = async () => {
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title: name, text: text(), url: url() });
      } catch {
        // dismissed by the user, nothing to do
      }
      return;
    }
    setCopied(false);
    setMenuOpen(true);
    dialogRef.current?.showModal();
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url());
      setCopied(true);
    } catch {
      window.prompt(t.copyLink, url());
    }
  };

  const item =
    "flex min-h-12 w-full items-center gap-3 rounded-xl px-3 text-left text-base text-ink transition-colors hover:bg-brand-tint focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand";
  const enc = (v: string) => encodeURIComponent(v);
  const links = () => [
    { label: "WhatsApp", href: `https://wa.me/?text=${enc(`${text()} ${url()}`)}`, icon: <span className="text-brand"><WhatsAppIcon size={20} /></span> },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url())}`, icon: <Share2 size={20} className="text-brand" aria-hidden="true" /> },
    { label: "Telegram", href: `https://t.me/share/url?url=${enc(url())}&text=${enc(text())}`, icon: <Send size={20} className="text-brand" aria-hidden="true" /> },
    { label: t.shareEmail, href: `mailto:?subject=${enc(name)}&body=${enc(`${text()}\n${url()}`)}`, icon: <Mail size={20} className="text-brand" aria-hidden="true" /> },
  ];

  return (
    <>
      <button
        type="button"
        onClick={open}
        data-track="share"
        aria-label={t.shareTitle}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-4 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <Share2 size={16} aria-hidden="true" /> {t.share}
      </button>
      <dialog
        ref={dialogRef}
        aria-label={t.shareTitle}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        onClose={() => setMenuOpen(false)}
        className="share-dialog"
      >
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-ink">{t.shareTitle}</h2>
            <button type="button" onClick={() => dialogRef.current?.close()} aria-label={t.closeSheet} className="flex size-11 items-center justify-center text-ink-soft">
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          {menuOpen && (
          <ul className="mt-2">
            {links().map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className={item}>
                  {l.icon} {l.label}
                </a>
              </li>
            ))}
            <li>
              <button type="button" onClick={copy} className={item}>
                {copied ? <Check size={20} className="text-brand" aria-hidden="true" /> : <Link2 size={20} className="text-brand" aria-hidden="true" />}
                <span role="status">{copied ? t.linkCopied : t.copyLink}</span>
              </button>
            </li>
          </ul>
          )}
        </div>
      </dialog>
    </>
  );
}
