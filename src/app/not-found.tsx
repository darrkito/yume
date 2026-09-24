import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-xs font-semibold text-ink-soft">404</p>
      <h1 className="mt-2 font-display text-4xl text-ink text-balance sm:text-5xl">Esta hoja se quedó en blanco</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
        La página que buscas no existe o cambió de lugar. Lo que sí sigue aquí: todos nuestros productos, con precios desde $100.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/productos" className="btn-soft btn-soft-solid">
          Ver la tienda
        </Link>
        <Link href="/" className="btn-soft btn-soft-outline">
          Volver al inicio
        </Link>
      </div>
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
