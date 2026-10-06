"use client";

import { itemName } from "@/components/useAddProduct";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CreditCard, ExternalLink, Info, Lock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { useDesignFiles } from "@/components/DesignFileContext";
import { LogoUploadNote } from "@/components/LogoUploadNote";
import { MercadoPagoBrick } from "@/components/MercadoPagoBrick";
import { track } from "@/components/TrackClicks";
import { readAiSource } from "@/lib/ai-source";
import { PersonalizationFields } from "@/components/PersonalizationFields";
import type { PersonalizationInput } from "@/content/personalization";
import { clearCheckoutDraft, ShippingForm } from "@/components/ShippingForm";
import { getProduct, type Product } from "@/content/products";
import { productsEn } from "@/content/products.en";
import type { Customer, DeliveryInfo } from "@/lib/orders";
import { deliverySurcharge, type DeliveryMethod } from "@/content/shipping";
import { formatMXN } from "@/lib/format";
import { UI, type Lang } from "@/lib/i18n";

type Mode = "form" | "choose" | "onsite";
export interface DesignFileUpload {
  slug?: string;
  productName: string;
  fileName: string;
  url: string;
}

const fileKey = (f: File) => `${f.name}:${f.size}:${f.lastModified}`;

function readJson<T>(key: string, fallback: T, session = false): T {
  try {
    const raw = (session ? sessionStorage : localStorage).getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown, session = false) {
  try {
    (session ? sessionStorage : localStorage).setItem(key, JSON.stringify(value));
  } catch {}
}

export function CheckoutView({ lang = "es" }: { lang?: Lang } = {}) {
  const { items, total, ready } = useCart();
  const { getDesignFile } = useDesignFiles();
  const [mode, setMode] = useState<Mode>("form");
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [delivery, setDelivery] = useState<DeliveryInfo | null>(null);
  const [designFileUrls, setDesignFileUrls] = useState<DesignFileUpload[]>([]);
  const [redirecting, setRedirecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [settled, setSettled] = useState(false);
  const [sendDesignLater, setSendDesignLater] = useState(false);
  const [designAttempted, setDesignAttempted] = useState(false);
  // What the buyer typed survives going back, a reload and a trip to Mercado
  // Pago: personalization + note in localStorage, uploaded files (their
  // Storage links, never the File) in sessionStorage.
  const [personalization, setPersonalization] = useState<PersonalizationInput>(() => readJson("yume_personalization_v1", {}));
  const [note, setNote] = useState<string>(() => readJson("yume_order_note_v1", ""));
  const [uploaded, setUploaded] = useState<Record<string, { key: string; upload: DesignFileUpload }>>(() => readJson("yume_uploads_v1", {}, true));
  useEffect(() => writeJson("yume_personalization_v1", personalization), [personalization]);
  useEffect(() => writeJson("yume_order_note_v1", note), [note]);
  useEffect(() => writeJson("yume_uploads_v1", uploaded, true), [uploaded]);
  useEffect(() => {
    if (settled) clearCheckoutDraft();
  }, [settled]);
  // Move focus to the title when the step changes (keyboard / screen-reader
  // users otherwise stay on a button that just disappeared), and bring an
  // error into view when one appears.
  const titleRef = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    titleRef.current?.focus();
  }, [mode]);
  useEffect(() => {
    if (error) errorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [error]);
  const t = UI[lang];
  const nameOf = (p: Product) => (lang === "en" ? (productsEn[p.slug]?.name ?? p.name) : p.name);
  const designProducts = [...new Set(items.map((i) => i.slug))]
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p?.requiresImage));
  const missingDesigns = designProducts.filter((p) => !getDesignFile(p.slug) && !uploaded[p.slug]);
  // Derived live, so the message disappears as soon as the shopper fixes it.
  const designBlocked = missingDesigns.length > 0 && !sendDesignLater;
  const shopHref = lang === "en" ? "/en/products" : "/productos";
  // The option highlighted in step 1, so the summary total matches the cart's
  // before the form is submitted; the submitted `delivery` wins after that.
  const [formMethod, setFormMethod] = useState<DeliveryMethod | null>(null);
  const summaryMethod = delivery?.method ?? formMethod;
  const surcharge = summaryMethod ? deliverySurcharge(summaryMethod, total) : 0;
  const grandTotal = total + surcharge;
  const deliveryLabel = summaryMethod === "recoleccion_casablanca" ? t.casablancaPickup : t.nationalShipping;

  // Uploads happen once, at checkout submission — not when the file is
  // picked on the product page — so an abandoned cart never leaves an
  // orphaned file in storage. Any upload failure surfaces as the normal
  // checkout error instead of silently dropping the customer's file.
  const uploadDesignFiles = async (): Promise<DesignFileUpload[]> => {
    const uploads: DesignFileUpload[] = [];
    const cache = { ...uploaded };
    for (const slug of [...new Set(items.map((i) => i.slug))]) {
      const product = getProduct(slug);
      if (!product?.requiresImage) continue;
      const file = getDesignFile(slug);
      const done = cache[slug];
      // Already uploaded (same file, or the file is gone after a reload): reuse.
      if (done && (!file || done.key === fileKey(file))) {
        uploads.push(done.upload);
        continue;
      }
      if (!file) continue;
      const prep = await fetch("/api/upload-design", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName: file.name, size: file.size }),
      });
      const prepData = await prep.json().catch(() => ({}));
      if (!prep.ok) throw new Error(prepData.error ?? t.couldNotUploadFile);
      // The file goes straight to Supabase Storage (bypasses Vercel's 4.5 MB
      // request limit); same multipart shape the Supabase SDK uses.
      const form = new FormData();
      form.append("cacheControl", "3600");
      form.append("", file);
      const put = await fetch(prepData.signedUrl, { method: "PUT", body: form });
      if (!put.ok) throw new Error(t.couldNotUploadFile);
      const res = await fetch("/api/upload-design", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: prepData.path }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? t.couldNotUploadFile);
      const upload = { slug, productName: product.name, fileName: file.name, url: data.url };
      cache[slug] = { key: fileKey(file), upload };
      uploads.push(upload);
    }
    setUploaded(cache);
    return uploads;
  };

  // Once a payment resolves, MercadoPagoBrick clears the cart itself — but
  // it still needs to render its own success/pending/cash-voucher result.
  // Only fall back to the empty-cart screen while still on the first step,
  // never mid-checkout, or the result flashes to this instead.
  if (!ready) return <section className="mx-auto min-h-[60vh] max-w-2xl px-6 py-24" aria-busy="true" />;
  if (items.length === 0 && mode === "form" && !settled) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="animate-fade-up font-display text-3xl text-ink sm:text-4xl">{t.emptyCartTitle}</h1>
        <p className="animate-fade-up animate-fade-up-2 mt-4 text-sm text-ink-soft">{t.emptyCartCheckoutBody}</p>
        <Link
          href={shopHref}
          className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-deep active:scale-[0.98]"
        >
          {t.viewShop}
        </Link>
      </section>
    );
  }

  const handleCheckoutPro = async () => {
    if (!customer || !delivery) return;
    track("payment_method_chosen_pro");
    setError(null);
    setRedirecting(true);
    try {
      const res = await fetch("/api/checkout-pro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, customer, delivery, designFileUrls, personalization, note, lang, src: readAiSource() }),
      });
      const data = await res.json();
      if (!res.ok || !data.initPoint) throw new Error(data.error ?? t.couldNotStartPayment);
      try {
        localStorage.setItem("yume_last_order", data.orderId);
      } catch {}
      window.location.href = data.initPoint;
    } catch (err) {
      setError(err instanceof Error ? err.message : t.couldNotStartPayment);
      setRedirecting(false);
    }
  };

  return (
    <section className={`mx-auto px-6 py-16 sm:py-24 ${settled ? "max-w-2xl" : "max-w-2xl lg:max-w-5xl"}`}>
      <h1 ref={titleRef} tabIndex={-1} className="animate-fade-up font-display text-4xl text-ink focus:outline-none">{mode === "form" ? t.yourDetailsShipping : t.chooseHowToPay}</h1>
      {!settled && (
        <p className="animate-fade-up animate-fade-up-2 mt-2 text-xs font-semibold text-ink-soft">
          {mode === "form" ? t.checkoutStepShipping : t.checkoutStepPayment}
        </p>
      )}

      <div className={settled ? "" : "lg:grid lg:grid-cols-[1fr_360px] lg:items-start lg:gap-12"}>
        {!settled && (
          <div className="mt-8 lg:sticky lg:top-24 lg:order-2 lg:col-start-2 lg:mt-10">
            <ul className="divide-y divide-line border-y border-line text-sm">
              {items.map((item) => (
                <li key={`${item.slug}:${item.variantId ?? ""}`} className="flex items-center justify-between py-3">
                  <span className="text-ink">
                    {itemName(item, lang)} <span className="text-ink-soft">x{item.qty}</span>
                  </span>
                  <span className="font-medium text-ink">{formatMXN(item.price * item.qty)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-ink-soft">{summaryMethod ? deliveryLabel : t.deliveryMethod}</span>
              <span className="font-medium text-ink">{!summaryMethod ? t.chooseBelow : surcharge > 0 ? formatMXN(surcharge) : t.free}</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-ink-soft">{t.total}</p>
              <p className="font-display text-2xl text-ink">{formatMXN(grandTotal)} MXN</p>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-ink">
              <li className="flex items-start gap-2"><ShieldCheck size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.securePayment}</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.afterPayment}</li>
              <li className="flex items-start gap-2 text-ink-soft"><Info size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{t.noInvoice}</li>
            </ul>
          </div>
        )}

        <div className={settled ? "" : "lg:order-1 lg:col-start-1 lg:row-start-1"}>
          {error && (
            <p ref={errorRef} role="alert" className="mt-6 rounded-xl border border-line bg-paper p-4 text-sm text-ink">
              {error}
            </p>
          )}

          {/* Stays mounted (just hidden) after step 1 so "edit details" brings
              back everything typed instead of an empty form. */}
          {(
            <div className="mt-10" hidden={mode !== "form"}>
              <ShippingForm
                lang={lang}
                subtotal={total}
                onMethodChange={setFormMethod}
                beforeSubmit={
                  <>
                    <PersonalizationFields
                      items={items}
                      values={personalization}
                      onChange={(slug, id, value) => setPersonalization((p) => ({ ...p, [slug]: { ...p[slug], [id]: value } }))}
                      note={note}
                      onNoteChange={setNote}
                      lang={lang}
                      method={summaryMethod}
                    />
                  {designProducts.length > 0 && (
                    <div id="design-files">
                      <h2 className="font-display text-lg text-ink">{t.yourLogoOrDesign}</h2>
                      <p className="mt-1 text-xs leading-relaxed text-ink-soft">{t.designFilesIntro}</p>
                      {designProducts.map((p) => (
                        <div key={p.slug}>
                          <LogoUploadNote slug={p.slug} lang={lang} heading={nameOf(p)} />
                          {!getDesignFile(p.slug) && uploaded[p.slug] && (
                            <p className="mt-1 text-xs font-medium text-ink">✓ {uploaded[p.slug].upload.fileName}</p>
                          )}
                        </div>
                      ))}
                      <label className="mt-4 flex min-h-11 cursor-pointer items-center gap-3 text-sm text-ink">
                        <input
                          type="checkbox"
                          checked={sendDesignLater}
                          onChange={(e) => setSendDesignLater(e.target.checked)}
                          className="size-4 accent-brand"
                        />
                        {t.sendDesignLater}
                      </label>
                      {designAttempted && designBlocked && (
                        <p role="alert" className="mt-2 text-sm font-medium text-brand">
                          {t.designMissing.replace("{names}", missingDesigns.map(nameOf).join(", "))}
                        </p>
                      )}
                    </div>
                  )}
                  </>
                }
                onSubmit={async ({ customer: c, delivery: d }) => {
                  setError(null);
                  if (designBlocked) {
                    setDesignAttempted(true);
                    document.getElementById("design-files")?.scrollIntoView({ behavior: "smooth", block: "center" });
                    return;
                  }
                  try {
                    const uploads = await uploadDesignFiles();
                    setDesignFileUrls(uploads);
                    setCustomer(c);
                    setDelivery(d);
                    track("shipping_submitted");
                    setMode("choose");
                  } catch (err) {
                    track("upload_failed");
                    setError(err instanceof Error ? err.message : t.couldNotUploadFile);
                  }
                }}
              />
            </div>
          )}

          {mode === "choose" && (
            <div className="mt-10">
              <button type="button" onClick={() => setMode("form")} className="mb-4 inline-flex min-h-11 items-center text-xs text-ink-soft transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                {t.editShipping}
              </button>
              <div className="grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={handleCheckoutPro}
                  disabled={redirecting}
                  className="flex flex-col items-start gap-3 rounded-2xl border border-line bg-paper-raised p-6 text-left transition-colors hover:border-brand disabled:opacity-60"
                >
                  <ExternalLink size={22} className="text-brand" aria-hidden="true" />
                  <span className="font-display text-lg text-ink">{t.payWithMercadoPago}</span>
                  <span className="text-xs leading-relaxed text-ink-soft">{t.mpDescription}</span>
                  <span className="mt-auto text-xs font-semibold text-brand">
                    {redirecting ? t.redirecting : t.continueArrow}
                  </span>
                </button>

                {process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY && (
                <button
                  type="button"
                  onClick={() => {
                    track("payment_method_chosen_brick");
                    setMode("onsite");
                  }}
                  className="flex flex-col items-start gap-3 rounded-2xl border border-line bg-paper-raised p-6 text-left transition-colors hover:border-brand"
                >
                  <CreditCard size={22} className="text-brand" aria-hidden="true" />
                  <span className="font-display text-lg text-ink">{t.payHere}</span>
                  <span className="text-xs leading-relaxed text-ink-soft">{t.payHereDescription}</span>
                  <span className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-brand">
                    <Lock size={13} aria-hidden="true" /> {t.includesStorePayment}
                  </span>
                </button>
                )}
              </div>
            </div>
          )}

          {mode === "onsite" && customer && delivery && (
            <div className="mt-10">
              {!settled && (
                <button type="button" onClick={() => setMode("choose")} className="mb-4 inline-flex min-h-11 items-center text-xs text-ink-soft transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                  {t.changePaymentMethod}
                </button>
              )}
              <MercadoPagoBrick
                items={items}
                total={grandTotal}
                customer={customer}
                delivery={delivery}
                designFileUrls={designFileUrls}
                personalization={personalization}
                note={note}
                onSettled={() => setSettled(true)}
                lang={lang}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
