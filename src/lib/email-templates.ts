import type { Order } from "@/lib/orders";
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
  const uploaded = new Set((order.design_file_urls ?? []).map((f) => f.productName));
  return [...new Set(order.items.map((i) => i.slug))]
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p?.requiresImage) && !uploaded.has(p!.name))
    .map((p) => p.name);
}

/** Delivery details box: pickup branch or shipping address (all escaped). */
function deliveryBox(order: Order): string {
  if (order.delivery_method === "recoleccion_casablanca") {
    const branch = order.casablanca_branch ? getCasablancaBranch(order.casablanca_branch) : undefined;
    return infoBox(
      "Entrega",
      `Recolección en sucursal Casa Blanca (Guadalajara)<br /><strong style="color:${C.ink};">${esc(branch?.name ?? order.casablanca_branch ?? "")}</strong><br />${esc(branch?.address ?? "")}<br />${esc(branch?.hours ?? "")}`,
    );
  }
  const addr = order.shipping_address;
  if (!addr) return "";
  return infoBox(
    "Dirección de envío",
    `${esc(addr.street)} ${esc(addr.number)}<br />${esc(addr.neighborhood)}<br />${esc(addr.city)}, ${esc(addr.state)}, CP ${esc(addr.zip)}${
      addr.references ? `<br />Referencias: ${esc(addr.references)}` : ""
    }`,
  );
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

/** The customer's order confirmation, in the same brand look as the reminder. */
export function customerConfirmationEmail(order: Order): { subject: string; html: string } {
  const isPickup = order.delivery_method === "recoleccion_casablanca";
  const orderShort = order.id.slice(0, 8);
  const firstName = esc(order.customer_name.split(" ")[0] || order.customer_name);

  const waHref = waLink(`Hola! Tengo una duda sobre mi pedido #${orderShort}`);
  const missing = missingDesignNames(order);
  const designWaHref = waLink(`Hola! Les mando el diseño de mi pedido #${orderShort} (${missing.join(", ")}).`);
  const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent(`Duda sobre mi pedido #${orderShort}`)}`;

  const subject = `Tu pedido #${orderShort} en ${SITE.name} fue confirmado ✅`;

  const rows =
    row(
      heading1(`¡Gracias por tu compra, <em style="color:${C.brand};">${firstName}</em>!`) +
        paragraph("Tu pago fue confirmado y ya estamos preparando tu pedido.", { margin: "16px 0 0" }),
      "30px 40px 6px",
    ) +
    row(callout(`<strong>Número de orden:</strong> #${orderShort}`), "16px 40px 0") +
    row(heading2("Resumen de tu pedido") + orderBox(order.items, order.total), "26px 40px 0") +
    (missing.length
      ? row(
          callout(
            `<strong>Falta tu diseño</strong> para: ${esc(missing.join(", "))}. Mándanoslo por <a href="${designWaHref}" style="color:${C.brand};font-weight:700;">WhatsApp</a> para preparar tu prueba digital; sin él no podemos empezar.`,
          ),
          "16px 40px 0",
        )
      : "") +
    row(deliveryBox(order), "16px 40px 0") +
    row(
      heading2("Qué sigue") +
        steps([
          "Te contactamos por WhatsApp o correo para confirmar los detalles de tu pedido.",
          "Apruebas tu prueba digital (incluye hasta 2 rondas de ajustes). No imprimimos nada sin tu aprobación.",
          isPickup
            ? "Producimos tu pedido (3-5 días hábiles) y lo dejamos en tu sucursal Casa Blanca (1 día hábil más). Te avisamos por WhatsApp y correo, con el comprobante que necesitas presentar para recogerlo."
            : "Producimos tu pedido (3-5 días hábiles) y lo enviamos (2-5 días hábiles). Te avisamos por WhatsApp y correo cuando salga rumbo a tu domicilio.",
        ]),
      "28px 40px 0",
    ) +
    row(
      `<div style="text-align:center;">${heading2("¿Tienes alguna duda?", "center")}${paragraph("Contáctanos por el medio que prefieras:", {
        align: "center",
        margin: "0 0 20px",
      })}${button(waHref, "Escribir por WhatsApp", "solid")}${button(mailtoHref, "Escribir por correo", "outline")}</div>`,
      "30px 40px 0",
    );

  const html = emailShell({
    subject,
    preheader: `Pago confirmado. Tu pedido #${orderShort} ya está en preparación.`,
    rows,
    waHref,
    footerNotes: footerNote(`Este correo confirma tu compra #${orderShort} en ${SITE.name}. Consérvalo como comprobante.`),
  });

  return { subject, html };
}

// The branded abandoned-checkout reminder lives in its own module.
export { abandonedCheckoutEmail } from "@/lib/email-abandoned";
