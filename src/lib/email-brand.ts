import { SITE } from "@/content/site";

// Shared look for every email Yume sends: cream paper card on a blush
// background, the wordmark on top, Playfair headings, Karla body text, pill
// buttons and a blush footer band. Table-based on purpose (email clients
// don't do flex/grid) with a small media query for phones.

// Brand tokens, copied from globals.css (email clients can't read CSS variables).
export const C = {
  paper: "#fffbf3",
  raised: "#fffdf8",
  ink: "#2b211d",
  soft: "#736459",
  brand: "#7c0000",
  deep: "#560000",
  tint: "#f7e6e0",
  line: "#ecdfd0",
  lineStrong: "#d8c3ae",
};
// Playfair Display + Karla are the site's fonts. Apple Mail, iOS Mail and
// some Outlook builds load them from Google Fonts; Gmail and most others
// ignore web fonts and fall back to Georgia / Helvetica, which sit close.
export const DISPLAY = "'Playfair Display', Georgia, 'Times New Roman', serif";
export const BODY = "Karla, 'Helvetica Neue', Helvetica, Arial, sans-serif";

export const esc = (v: string) => v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
export const money = (n: number) => `$${n.toFixed(2)}`;
// Images live in /public/email as PNG/JPG (WebP is unreliable in email clients).
export const asset = (file: string) => `${SITE.url}/email/${file}`;

/** One full-width row of the card. `pad` is top/right/bottom/left padding. */
export const row = (inner: string, pad = "18px 40px 0") => `
          <tr><td class="pad" style="padding:${pad};">${inner}</td></tr>`;

export const heading1 = (html: string) =>
  `<h1 class="h1" style="margin:0;font-family:${DISPLAY};font-size:32px;line-height:1.15;font-weight:400;color:${C.ink};">${html}</h1>`;

export const heading2 = (text: string, align: "left" | "center" = "left") =>
  `<h2 style="margin:0 0 10px;font-family:${DISPLAY};font-size:22px;line-height:1.25;font-weight:400;color:${C.ink};text-align:${align};">${text}</h2>`;

export const paragraph = (html: string, opts: { color?: string; size?: number; align?: "left" | "center"; margin?: string } = {}) =>
  `<p style="margin:${opts.margin ?? "14px 0 0"};font-family:${BODY};font-size:${opts.size ?? 16}px;line-height:1.6;color:${opts.color ?? C.soft};text-align:${opts.align ?? "left"};">${html}</p>`;

/** Blush callout (notes, warnings). */
export const callout = (html: string) => `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.tint}" style="background:${C.tint};border-radius:14px;">
                <tr><td style="padding:14px 18px;font-family:${BODY};font-size:14px;line-height:1.5;color:${C.deep};">${html}</td></tr>
              </table>`;

/** Bordered white box with a Playfair title (delivery, customer, files). */
export const infoBox = (title: string, innerHtml: string) => `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.raised}" style="background:${C.raised};border:1px solid ${C.line};border-radius:18px;">
                <tr>
                  <td style="padding:18px 22px;">
                    <p style="margin:0 0 6px;font-family:${DISPLAY};font-size:18px;color:${C.ink};">${title}</p>
                    <div style="font-family:${BODY};font-size:15px;line-height:1.6;color:${C.soft};">${innerHtml}</div>
                  </td>
                </tr>
              </table>`;

interface LineItem {
  name: string;
  price: number;
  qty: number;
}

/** The order lines plus a big Total, inside a rounded box. */
export function orderBox(items: LineItem[], total: number): string {
  const rows = items
    .map(
      (item) => `
                      <tr>
                        <td style="padding:12px 0;border-bottom:1px solid ${C.line};font-family:${BODY};font-size:15px;line-height:1.4;color:${C.ink};">${esc(item.name)}${
                          item.qty > 1 ? ` <span style="color:${C.soft};">×${item.qty}</span>` : ""
                        }</td>
                        <td align="right" style="padding:12px 0 12px 12px;border-bottom:1px solid ${C.line};font-family:${BODY};font-size:15px;font-weight:700;color:${C.ink};white-space:nowrap;">${money(item.price * item.qty)}</td>
                      </tr>`,
    )
    .join("");
  return `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.raised}" style="background:${C.raised};border:1px solid ${C.line};border-radius:18px;">
                <tr>
                  <td style="padding:8px 22px 18px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      ${rows}
                      <tr>
                        <td style="padding:16px 0 0;font-family:${DISPLAY};font-size:20px;color:${C.ink};">Total</td>
                        <td align="right" style="padding:16px 0 0 12px;font-family:${DISPLAY};font-size:22px;color:${C.brand};white-space:nowrap;">${money(total)} <span style="font-family:${BODY};font-size:13px;color:${C.soft};">MXN</span></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`;
}

/** Numbered steps, like the site's "Qué sigue" list. */
export function steps(list: string[]): string {
  return `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                ${list
                  .map(
                    (text, i) => `
                <tr>
                  <td width="34" valign="top" style="padding:6px 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" width="26" height="26" bgcolor="${C.brand}" style="width:26px;height:26px;border-radius:13px;background:${C.brand};font-family:${BODY};font-size:13px;font-weight:700;color:#ffffff;line-height:26px;">${i + 1}</td></tr></table>
                  </td>
                  <td valign="top" style="padding:6px 0 6px 4px;font-family:${BODY};font-size:15px;line-height:1.55;color:${C.ink};">${text}</td>
                </tr>`,
                  )
                  .join("")}
              </table>`;
}

// "Bulletproof" pill button: the colored <td> keeps the background in Outlook
// (which ignores padding/radius on <a>); everyone else gets the rounded pill.
export function button(href: string, label: string, kind: "solid" | "outline"): string {
  const solid = kind === "solid";
  return `
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 12px;">
                <tr>
                  <td align="center" bgcolor="${solid ? C.brand : C.paper}" style="border-radius:999px;border:1.5px solid ${solid ? C.brand : C.lineStrong};">
                    <a href="${href}" target="_blank" style="display:inline-block;padding:14px 32px;font-family:${BODY};font-size:16px;font-weight:700;line-height:1.2;color:${solid ? "#ffffff" : C.ink};text-decoration:none;border-radius:999px;">${label}</a>
                  </td>
                </tr>
              </table>`;
}

/** "Approve before printing / made in Guadalajara / payment methods" strip. */
export const reassurance = () => `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${C.line};border-bottom:1px solid ${C.line};">
                <tr>
                  <td align="center" style="padding:16px 0;font-family:${BODY};font-size:14px;line-height:1.6;color:${C.ink};">
                    Apruebas tu diseño antes de imprimir<br />
                    <span style="color:${C.soft};">Hecho en Guadalajara &nbsp;·&nbsp; Pagas con tarjeta, OXXO o SPEI</span>
                  </td>
                </tr>
              </table>`;

function photo(file: string, alt: string): string {
  return `
                  <td width="33%" style="padding:0 5px;" valign="top">
                    <a href="${SITE.url}/galeria" target="_blank"><img src="${asset(file)}" width="160" alt="${esc(alt)}" style="display:block;width:100%;max-width:160px;height:auto;border-radius:14px;border:1px solid ${C.line};" /></a>
                  </td>`;
}

/** Three real photos of past work, linking to the gallery. */
export const photosRow = () => `
              <div style="text-align:center;">${heading2("Así quedan nuestros trabajos", "center")}</div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:6px -5px 0;width:calc(100% + 10px);">
                <tr>
                  ${photo("sticker-1.jpg", "Planilla de stickers de personajes en vinil")}
                  ${photo("sticker-2.jpg", "Stickers de mascotas hechos con fotos reales")}
                  ${photo("sticker-3.jpg", "Etiquetas con logo de negocio")}
                </tr>
              </table>`;

/** The whole email: doctype, fonts, blush background, wordmark card, footer. */
export function emailShell({
  subject,
  preheader,
  rows,
  footerNotes,
  waHref,
  lang = "es",
}: {
  subject: string;
  preheader: string;
  /** Concatenated `row(...)` strings for the card body. */
  rows: string;
  /** Extra small paragraphs in the footer (promises, English line...). */
  footerNotes: string;
  waHref: string;
  lang?: "es" | "en";
}): string {
  const en = lang === "en";
  return `<!DOCTYPE html>
<html lang="${lang}" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>${esc(subject)}</title>
  <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Playfair+Display:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
  <style>
    body { margin: 0; padding: 0; }
    a { color: ${C.brand}; }
    @media only screen and (max-width: 620px) {
      .card { width: 100% !important; border-radius: 0 !important; border-left: 0 !important; border-right: 0 !important; }
      .pad { padding-left: 22px !important; padding-right: 22px !important; }
      .foot { border-radius: 0 !important; }
      .h1 { font-size: 27px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${C.tint};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${C.tint};font-size:1px;line-height:1px;">${esc(preheader)}&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.tint}" style="background:${C.tint};">
    <tr>
      <td align="center" style="padding:28px 12px;">
        <table role="presentation" class="card" width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.paper}" style="width:600px;max-width:600px;background:${C.paper};border:1px solid ${C.line};border-radius:24px;">

          <!-- Wordmark -->
          <tr>
            <td align="center" class="pad" style="padding:34px 40px 10px;">
              <a href="${SITE.url}" target="_blank"><img src="${asset("logo-yume-wordmark.png")}" width="150" alt="${SITE.name}" style="display:block;width:150px;height:auto;border:0;" /></a>
            </td>
          </tr>
          <tr><td class="pad" style="padding:14px 40px 0;"><div style="height:1px;line-height:1px;background:${C.line};font-size:1px;">&nbsp;</div></td></tr>
          ${rows}
          <tr><td style="height:34px;line-height:34px;font-size:1px;">&nbsp;</td></tr>

          <!-- Footer -->
          <tr>
            <td align="center" class="pad foot" bgcolor="${C.tint}" style="background:${C.tint};border-radius:0 0 23px 23px;padding:28px 40px 30px;">
              <p style="margin:0;font-family:${DISPLAY};font-size:20px;color:${C.brand};">${SITE.name}</p>
              <p style="margin:4px 0 14px;font-family:${BODY};font-size:13px;line-height:1.5;color:${C.soft};">${SITE.tagline}<br />${SITE.city}, ${SITE.state} &nbsp;·&nbsp; ${en ? "Shipping across Mexico" : "Envíos a todo México"}</p>
              <p style="margin:0 0 14px;font-family:${BODY};font-size:13px;line-height:1.8;">
                <a href="${waHref}" style="color:${C.brand};font-weight:700;text-decoration:none;">WhatsApp</a> &nbsp;·&nbsp;
                <a href="${SITE.instagram}" style="color:${C.brand};font-weight:700;text-decoration:none;">Instagram</a> &nbsp;·&nbsp;
                <a href="mailto:${SITE.email}" style="color:${C.brand};font-weight:700;text-decoration:none;">${en ? "Email" : "Correo"}</a> &nbsp;·&nbsp;
                <a href="${SITE.url}${en ? "/en/privacy" : "/privacidad"}" style="color:${C.brand};font-weight:700;text-decoration:none;">${en ? "Privacy" : "Privacidad"}</a>
              </p>
              ${footerNotes}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Small grey footer paragraph. */
export const footerNote = (html: string, size = 12) =>
  `<p style="margin:10px 0 0;font-family:${BODY};font-size:${size}px;line-height:1.6;color:${C.soft};">${html}</p>`;
