import type { Order } from "@/lib/orders";
import { SITE, waLink } from "@/content/site";

// Brand tokens, copied from globals.css (email clients can't read CSS variables).
const C = {
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
const DISPLAY = "'Playfair Display', Georgia, 'Times New Roman', serif";
const BODY = "Karla, 'Helvetica Neue', Helvetica, Arial, sans-serif";

const esc = (v: string) => v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const money = (n: number) => `$${n.toFixed(2)}`;
// Images live in /public/email as PNG/JPG (WebP is unreliable in email clients).
const asset = (file: string) => `${SITE.url}/email/${file}`;

// "Bulletproof" pill button: the colored <td> keeps the background in Outlook
// (which ignores padding/radius on <a>); everyone else gets the rounded pill.
function button(href: string, label: string, kind: "solid" | "outline"): string {
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

function itemRows(order: Order): string {
  return order.items
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
}

function photo(file: string, alt: string): string {
  return `
        <td width="33%" style="padding:0 5px;" valign="top">
          <a href="${SITE.url}/galeria" target="_blank"><img src="${asset(file)}" width="160" alt="${esc(alt)}" style="display:block;width:100%;max-width:160px;height:auto;border-radius:14px;border:1px solid ${C.line};" /></a>
        </td>`;
}

/** The single "you left something unpaid" reminder, in the brand's own look:
 * cream paper card on a blush background, wordmark up top, Playfair headings,
 * pill buttons, real photos of past work. Spanish first with a short English
 * line (orders do not record the language they were placed in). */
export function abandonedCheckoutEmail(order: Order): { subject: string; html: string } {
  const name = esc(order.customer_name.split(" ")[0] || order.customer_name);
  const lines = order.items.map((i) => `- ${i.name} x${i.qty}`).join("\n");
  const waHref = waLink(`Hola, empecé un pedido en ${SITE.name} y tengo una duda antes de pagar:\n${lines}`);
  const subject = `Tu pedido en ${SITE.name} sigue esperándote`;
  const preheader = "Empezaste un pedido y el pago no se completó. Aquí tienes el resumen y una forma fácil de terminarlo.";

  const html = `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
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

          <!-- Heading + intro -->
          <tr>
            <td class="pad" style="padding:30px 40px 6px;">
              <h1 class="h1" style="margin:0;font-family:${DISPLAY};font-size:32px;line-height:1.15;font-weight:400;color:${C.ink};">Hola ${name}, tu pedido <em style="color:${C.brand};">sigue esperándote</em>.</h1>
              <p style="margin:16px 0 0;font-family:${BODY};font-size:16px;line-height:1.6;color:${C.soft};">Empezaste un pedido en ${SITE.name}, pero el pago no se completó. Esto es lo que elegiste:</p>
            </td>
          </tr>

          <!-- Order summary -->
          <tr>
            <td class="pad" style="padding:18px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.raised}" style="background:${C.raised};border:1px solid ${C.line};border-radius:18px;">
                <tr>
                  <td style="padding:8px 22px 18px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      ${itemRows(order)}
                      <tr>
                        <td style="padding:16px 0 0;font-family:${DISPLAY};font-size:20px;color:${C.ink};">Total</td>
                        <td align="right" style="padding:16px 0 0 12px;font-family:${DISPLAY};font-size:22px;color:${C.brand};white-space:nowrap;">${money(order.total)} <span style="font-family:${BODY};font-size:13px;color:${C.soft};">MXN</span></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- OXXO / SPEI note -->
          <tr>
            <td class="pad" style="padding:16px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.tint}" style="background:${C.tint};border-radius:14px;">
                <tr><td style="padding:14px 18px;font-family:${BODY};font-size:14px;line-height:1.5;color:${C.deep};">¿Ya pagaste en OXXO o por SPEI? Ignora este correo: tu pago puede tardar un poco en reflejarse.</td></tr>
              </table>
            </td>
          </tr>

          <!-- Help + buttons -->
          <tr>
            <td align="center" class="pad" style="padding:30px 40px 6px;">
              <h2 style="margin:0;font-family:${DISPLAY};font-size:24px;line-height:1.25;font-weight:400;color:${C.ink};">¿Te ayudamos a terminarlo?</h2>
              <p style="margin:10px 0 22px;font-family:${BODY};font-size:16px;line-height:1.6;color:${C.soft};">Si tuviste algún problema o una duda sobre tu diseño, la cantidad o la entrega, cuéntanos por WhatsApp y lo resolvemos contigo.</p>
              ${button(waHref, "Escribir por WhatsApp", "solid")}
              ${button(`${SITE.url}/productos`, "Volver a la tienda", "outline")}
            </td>
          </tr>

          <!-- Reassurance -->
          <tr>
            <td class="pad" style="padding:14px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${C.line};border-bottom:1px solid ${C.line};">
                <tr>
                  <td align="center" style="padding:16px 0;font-family:${BODY};font-size:14px;line-height:1.6;color:${C.ink};">
                    Apruebas tu diseño antes de imprimir<br />
                    <span style="color:${C.soft};">Hecho en Guadalajara &nbsp;·&nbsp; Pagas con tarjeta, OXXO o SPEI</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Real work -->
          <tr>
            <td align="center" class="pad" style="padding:30px 40px 0;">
              <h2 style="margin:0 0 16px;font-family:${DISPLAY};font-size:22px;line-height:1.25;font-weight:400;color:${C.ink};">Así quedan nuestros trabajos</h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-left:-5px;margin-right:-5px;width:calc(100% + 10px);">
                <tr>
                  ${photo("sticker-1.jpg", "Planilla de stickers de personajes en vinil")}
                  ${photo("sticker-2.jpg", "Stickers de mascotas hechos con fotos reales")}
                  ${photo("sticker-3.jpg", "Etiquetas con logo de negocio")}
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr><td style="height:34px;line-height:34px;font-size:1px;">&nbsp;</td></tr>
          <tr>
            <td align="center" class="pad foot" bgcolor="${C.tint}" style="background:${C.tint};border-radius:0 0 23px 23px;padding:28px 40px 30px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <p style="margin:0;font-family:${DISPLAY};font-size:20px;color:${C.brand};">${SITE.name}</p>
                    <p style="margin:4px 0 14px;font-family:${BODY};font-size:13px;line-height:1.5;color:${C.soft};">${SITE.tagline}<br />${SITE.city}, ${SITE.state} &nbsp;·&nbsp; Envíos a todo México</p>
                    <p style="margin:0 0 14px;font-family:${BODY};font-size:13px;line-height:1.8;">
                      <a href="${waHref}" style="color:${C.brand};font-weight:700;text-decoration:none;">WhatsApp</a> &nbsp;·&nbsp;
                      <a href="${SITE.instagram}" style="color:${C.brand};font-weight:700;text-decoration:none;">Instagram</a> &nbsp;·&nbsp;
                      <a href="mailto:${SITE.email}" style="color:${C.brand};font-weight:700;text-decoration:none;">Correo</a> &nbsp;·&nbsp;
                      <a href="${SITE.url}/privacidad" style="color:${C.brand};font-weight:700;text-decoration:none;">Privacidad</a>
                    </p>
                    <p style="margin:0;font-family:${BODY};font-size:12px;line-height:1.6;color:${C.soft};">Este es el único recordatorio que enviamos por este pedido; no te escribiremos más por esto.</p>
                    <p style="margin:10px 0 0;font-family:${BODY};font-size:11px;line-height:1.6;color:${C.soft};">English: you started an order at ${SITE.name} but the payment was not completed. If you already paid by OXXO or SPEI, ignore this email. Questions? Message us on WhatsApp. This is the only reminder we send for this order.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html };
}
