import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-5xl text-ink">404</h1>
      <p className="mt-3 text-lg font-semibold text-ink">Página no encontrada</p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
        La página que buscas no existe o fue movida. Visita nuestra tienda para ver los productos disponibles.
      </p>
      <Link href="/" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-brand hover:text-brand-deep">
        Volver al inicio
      </Link>
      <p className="mt-8 text-sm text-ink-soft">
        También puedes revisar la{" "}
        <Link href="/productos" className="underline hover:text-ink">tienda</Link>,{" "}
        <Link href="/blog" className="underline hover:text-ink">el blog</Link>,{" "}
        <a href="/sitemap.xml" className="underline hover:text-ink">el mapa del sitio</a>{" "}
        o <a href="/llms.txt" className="underline hover:text-ink">llms.txt</a> para ver todas las páginas disponibles.
      </p>
    </section>
  );
}
