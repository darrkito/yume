import Link from "next/link";
import { SITE, waLink } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-raised">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl tracking-[0.2em] text-ink">{SITE.name.toUpperCase()}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              {SITE.tagline}. Piezas hechas sobre pedido en {SITE.city}, {SITE.state} — con envíos a todo México.
            </p>
          </div>
          <nav aria-label="Enlaces" className="text-sm text-ink-soft">
            <p className="mb-3 text-xs uppercase tracking-[0.15em] text-ink">Explora</p>
            <ul className="space-y-2">
              <li>
                <Link href="/productos" className="hover:text-brand transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="hover:text-brand transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-sm text-ink-soft">
            <p className="mb-3 text-xs uppercase tracking-[0.15em] text-ink">Contacto</p>
            <ul className="space-y-2">
              <li>
                <a href={waLink("Hola, me interesa cotizar un producto de Yume.")} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-brand transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-line pt-6 text-xs text-ink-soft">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Hecho en {SITE.city}, {SITE.state}, México.{" "}
            <a href="https://dizayn.com.mx/" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline">
              Web diseñada por Dizayn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
