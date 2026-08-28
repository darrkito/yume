"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE, waLink } from "@/content/site";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Tienda" },
  { href: "/#faq", label: "Preguntas" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label={`${SITE.name} — Inicio`} onClick={() => setOpen(false)}>
          <Image src="/logo-yume-wordmark.webp" alt={SITE.name} width={215} height={80} className="h-10 w-auto sm:h-12" priority />
        </Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-8 text-sm uppercase tracking-[0.15em] text-ink-soft sm:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-brand transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={waLink("Hola, me interesa cotizar un producto de Yume.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep sm:inline-block"
          >
            Contactar
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="p-2 text-ink sm:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Navegación móvil" className="border-t border-line bg-paper px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-4 text-sm uppercase tracking-[0.15em] text-ink-soft">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand transition-colors" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={waLink("Hola, me interesa cotizar un producto de Yume.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Contactar
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
