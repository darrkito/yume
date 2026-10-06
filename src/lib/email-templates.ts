import { orderLocale, type Order } from "@/lib/orders";
import { getProduct, type Product } from "@/content/products";
import { getCasablancaBranch } from "@/content/shipping";
import { SITE, waLink } from "@/content/site";
import {
  C,
  button,
  callout,
  emailShell,
  esc,
  footerNote,
  heading1,
  heading2,
  infoBox,
  orderBox,
  paragraph,
  row,
  steps,
} from "@/lib/email-brand";

// Products that need the customer's design but got no uploaded file — the
// customer ticked "I'll send it on WhatsApp" at checkout. Derived from the
// order itself (server-side catalog + stored uploads), not a client flag.
function missingDesignNames(order: Order): string[] {
  const uploaded = new Set((order.design_file_urls ?? []).flatMap((f) => [f.productName, f.slug ?? ""]));
  return [...new Set(order.items.map((i) => i.slug))]
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p?.requiresImage) && !uploaded.has(p!.name) && !uploaded.has(p!.slug))
    .map((p) => p.name);
}

/** Delivery details box: pickup branch or shipping address (all escaped). */
function deliveryBox(order: Order, en = false): string {
  if (order.delivery_method === "recoleccion_casablanca") {
    const branch = order.casablanca_branch ? getCasablancaBranch(order.casablanca_branch) : undefined;
    return infoBox(
      en ? "Delivery" : "Entrega",
      `${en ? "Pickup at the Casa Blanca branch (Guadalajara)" : "Recolección en sucursal Casa Blanca (Guadalajara)"}<br /><strong style="color:${C.ink};">${esc(branch?.name ?? order.casablanca_branch ?? "")}</strong><br />${esc(branch?.address ?? "")}<br />${esc(branch?.hours ?? "")}`,
    );
  }
  const addr = order.shipping_address;
  if (!addr) return "";
  return infoBox(
    en ? "Shipping address" : "Dirección de envío",
    `${esc(addr.street)} ${esc(addr.number)}<br />${esc(addr.neighborhood)}<br />${esc(addr.city)}, ${esc(addr.state)}, CP ${esc(addr.zip)}${
      addr.references ? `<br />${en ? "Notes" : "Referencias"}: ${esc(addr.references)}` : ""
    }`,
  );
}

/** What the buyer wrote for each product (name on the box, license no...) and
 * the order note, grouped under their line. */
function personalizationBox(order: Order, en = false): string {
  const lines = order.items.filter((i) => i.personalization?.length);
  if (!lines.length) return "";
  const html = lines
    .map(
      (i) =>
        `<p style="margin:0 0 4px;"><strong style="color:${C.ink};">${esc(i.name)}</strong></p><ul style="margin:0 0 10px;padding-left:18px;">${i
          .personalization!.map((p) => `<li>${esc(p.label)}: <strong style="color:${C.ink};">${esc(p.value)}</strong></li>`)
          .join("")}</ul>`,
    )
    .join("");
  return infoBox(en ? "Personalization" : "Personalización", html);
}

function designFilesBox(order: Order): string {
  if (!order.design_file_urls?.length) return "";
  const items = order.design_file_urls
    .map(
      (f) =>
        `<li style="margin-bottom:6px;"><strong style="color:${C.ink};">${esc(f.productName)}:</strong> <a href="${esc(f.url)}" style="color:${C.brand};">${esc(f.fileName)}</a></li>`,
    )
    .join("");
  return infoBox("Logo/diseño del cliente", `<ul style="margin:0;padding-left:18px;">${items}</ul>`);
}

/** Internal "new sale" email to the business, in the same brand look. */
export function businessNotificationEmail(order: Order): { subject: string; html: string } {
  const isPickup = order.delivery_method === "recoleccion_casablanca";
  const missing = missingDesignNames(order);
  const orderShort = order.id.slice(0, 8);
  const subject = `🛒 Nueva venta #${orderShort} - $${order.total.toFixed(2)} MXN`;
  // A ready chat with the customer: 10-digit Mexican numbers get the 52 prefix.
  const digits = (order.customer_phone ?? "").replace(/\D/g, "");
  const customerChat =
    digits.length === 10 || (digits.startsWith("52") && digits.length >= 12)
      ? `https://api.whatsapp.com/send?phone=${digits.length === 10 ? `52${digits}` : digits}&text=${encodeURIComponent(`Hola ${order.customer_name.split(" ")[0]}, te escribo de ${SITE.name} sobre tu pedido #${orderShort}.`)}`
      : null;

  const rows =
    row(
      heading1(`Nueva venta <em style="color:${C.brand};">confirmada</em>`) +
        paragraph(
          `<strong style="color:${C.ink};">Orden:</strong> ${esc(order.id)}<br /><strong style="color:${C.ink};">Fecha:</strong> ${esc(new Date(order.updated_at).toLocaleString("es-MX"))}<br /><strong style="color:${C.ink};">ID de pago Mercado Pago:</strong> ${esc(order.mp_payment_id ?? "N/A")}`,
          { size: 15, margin: "16px 0 0" },
        ),
      "30px 40px 6px",
    ) +
    row(
      infoBox(
        "Cliente",
        `${esc(order.customer_name)}<br />${esc(order.customer_email)}${order.customer_phone ? `<br />Tel: ${esc(order.customer_phone)}` : ""}`,
      ),
    ) +
    row(deliveryBox(order), "14px 40px 0") +
    (order.items.some((i) => i.personalization?.length) ? row(personalizationBox(order), "14px 40px 0") : "") +
    row(orderBox(order.items, order.total), "14px 40px 0") +
    (order.design_file_urls?.length ? row(designFilesBox(order), "14px 40px 0") : "") +
    (missing.length
      ? row(
          callout(
            `<strong>⚠️ Diseño pendiente:</strong> ${esc(missing.join(", "))}. El cliente eligió mandarlo por WhatsApp: pídeselo antes de producir.`,
          ),
          "14px 40px 0",
        )
      : "") +
    row(
      heading2("Qué sigue") +
        steps([
          "Confirmar el diseño/personalización con el cliente antes de imprimir.",
          "Preparar y empacar el pedido.",
          ...(isPickup
            ? [
                "Llevar el paquete a la sucursal Casa Blanca elegida y guardar el comprobante.",
                "Enviar el comprobante de recolección al cliente por WhatsApp y correo.",
              ]
            : [
                "Generar guía de envío con la dirección de arriba.",
                "Avisar al cliente cuando salga a reparto (por WhatsApp y correo).",
              ]),
        ]),
      "26px 40px 0",
    );

  const html = emailShell({
    subject,
    preheader: `Nueva venta #${orderShort} por $${order.total.toFixed(2)} MXN de ${order.customer_name}.`,
    rows,
    waHref: customerChat ?? waLink(`Hola, sobre el pedido #${orderShort}`),
    footerNotes: footerNote(
      customerChat
        ? "Correo interno de ventas web. El enlace de WhatsApp del pie abre un chat con el cliente."
        : "Correo interno de ventas web.",
    ),
  });

  return { subject, html };
}

/** The customer's order confirmation, in the same brand look as the reminder,
 * in the language the order was placed in. */
export function customerConfirmationEmail(order: Order): { subject: string; html: string } {
  const en = orderLocale(order) === "en";
  const isPickup = order.delivery_method === "recoleccion_casablanca";
  const orderShort = order.id.slice(0, 8);
  const firstName = esc(order.customer_name.split(" ")[0] || order.customer_name);
  const missing = missingDesignNames(order);

  const waHref = waLink(en ? `Hi! I have a question about my order #${orderShort}` : `Hola! Tengo una duda sobre mi pedido #${orderShort}`);
  const designWaHref = waLink(
    en ? `Hi! Sending the design for my order #${orderShort} (${missing.join(", ")}).` : `Hola! Les mando el diseño de mi pedido #${orderShort} (${missing.join(", ")}).`,
  );
  const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent(en ? `Question about my order #${orderShort}` : `Duda sobre mi pedido #${orderShort}`)}`;

  const subject = en ? `Your ${SITE.name} order #${orderShort} is confirmed ✅` : `Tu pedido #${orderShort} en ${SITE.name} fue confirmado ✅`;

  const rows =
    row(
      heading1(
        en
          ? `Thank you for your order, <em style="color:${C.brand};">${firstName}</em>!`
          : `¡Gracias por tu compra, <em style="color:${C.brand};">${firstName}</em>!`,
      ) + paragraph(en ? "Your payment is confirmed and we are already preparing your order." : "Tu pago fue confirmado y ya estamos preparando tu pedido.", { margin: "16px 0 0" }),
      "30px 40px 6px",
    ) +
    row(callout(`<strong>${en ? "Order number" : "Número de orden"}:</strong> #${orderShort}`), "16px 40px 0") +
    row(heading2(en ? "Your order summary" : "Resumen de tu pedido") + orderBox(order.items, order.total), "26px 40px 0") +
    (missing.length
      ? row(
          callout(
            en
              ? `<strong>We still need your design</strong> for: ${esc(missing.join(", "))}. Send it to us on <a href="${designWaHref}" style="color:${C.brand};font-weight:700;">WhatsApp</a> so we can prepare your digital proof; we can't start without it.`
              : `<strong>Falta tu diseño</strong> para: ${esc(missing.join(", "))}. Mándanoslo por <a href="${designWaHref}" style="color:${C.brand};font-weight:700;">WhatsApp</a> para preparar tu prueba digital; sin él no podemos empezar.`,
          ),
          "16px 40px 0",
        )
      : "") +
    row(deliveryBox(order, en), "16px 40px 0") +
    (order.items.some((i) => i.personalization?.length) ? row(personalizationBox(order, en), "14px 40px 0") : "") +
    row(
      heading2(en ? "What happens next" : "Qué sigue") +
        steps(
          en
            ? [
                "We contact you on WhatsApp or by email to confirm your order details.",
                "You approve your digital proof within 24 hours (it includes up to 2 rounds of adjustments). We print nothing without your approval.",
                isPickup
                  ? "We produce your order (3-5 business days) and drop it at your Casa Blanca branch (1 more business day). We let you know by WhatsApp and email, with the receipt you need to show when picking it up."
                  : "We produce your order (3-5 business days) and ship it (2-5 business days). We let you know by WhatsApp and email when it is on its way.",
              ]
            : [
                "Te contactamos por WhatsApp o correo para confirmar los detalles de tu pedido.",
                "Recibes tu prueba digital en un máximo de 24 horas y la apruebas (incluye hasta 2 rondas de ajustes). No imprimimos nada sin tu aprobación.",
                isPickup
                  ? "Producimos tu pedido (3-5 días hábiles) y lo dejamos en tu sucursal Casa Blanca (1 día hábil más). Te avisamos por WhatsApp y correo, con el comprobante que necesitas presentar para recogerlo."
                  : "Producimos tu pedido (3-5 días hábiles) y lo enviamos (2-5 días hábiles). Te avisamos por WhatsApp y correo cuando salga rumbo a tu domicilio.",
              ],
        ),
      "28px 40px 0",
    ) +
    row(
      `<div style="text-align:center;">${heading2(en ? "Any questions?" : "¿Tienes alguna duda?", "center")}${paragraph(
        en ? "Reach us whichever way you prefer:" : "Contáctanos por el medio que prefieras:",
        { align: "center", margin: "0 0 20px" },
      )}${button(waHref, en ? "Message us on WhatsApp" : "Escribir por WhatsApp", "solid")}${button(mailtoHref, en ? "Send an email" : "Escribir por correo", "outline")}</div>`,
      "30px 40px 0",
    );

  const html = emailShell({
    subject,
    preheader: en ? `Payment confirmed. Your order #${orderShort} is now being prepared.` : `Pago confirmado. Tu pedido #${orderShort} ya está en preparación.`,
    rows,
    waHref,
    lang: en ? "en" : "es",
    footerNotes: footerNote(
      en
        ? `This email confirms your purchase #${orderShort} at ${SITE.name}. Keep it as your receipt. We do not issue invoices (CFDI).`
        : `Este correo confirma tu compra #${orderShort} en ${SITE.name}. Consérvalo como comprobante. No emitimos factura (CFDI).`,
    ),
  });

  return { subject, html };
}

// The branded abandoned-checkout reminder lives in its own module.
export { abandonedCheckoutEmail } from "@/lib/email-abandoned";
