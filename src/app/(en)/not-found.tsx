import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-xs font-semibold text-ink-soft">404</p>
      <h1 className="mt-2 font-display text-4xl text-ink text-balance sm:text-5xl">This page was left blank</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist or has moved. What&apos;s still here: all of our products, from $140.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/en/products" className="btn-soft btn-soft-solid">
          See the shop
        </Link>
        <Link href="/en" className="btn-soft btn-soft-outline">
          Back to home
        </Link>
      </div>
    </section>
  );
}
