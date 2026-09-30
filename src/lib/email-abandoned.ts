import type { Order } from "@/lib/orders";
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
  orderBox,
  paragraph,
  photosRow,
  reassurance,
  row,
} from "@/lib/email-brand";

/** The single "you left something unpaid" reminder, in the brand's own look.
 * Spanish first with a short English line (orders do not record the language
 * they were placed in). */
export function abandonedCheckoutEmail(order: Order): { subject: string; html: string } {
  const name = esc(order.customer_name.split(" ")[0] || order.customer_name);
  const lines = order.items.map((i) => `- ${i.name} x${i.qty}`).join("\n");
  const waHref = waLink(`Hola, empecé un pedido en ${SITE.name} y tengo una duda antes de pagar:\n${lines}`);
  const subject = `Tu pedido en ${SITE.name} sigue esperándote`;

  const rows =
    row(
      heading1(`Hola ${name}, tu pedido <em style="color:${C.brand};">sigue esperándote</em>.`) +
        paragraph(`Empezaste un pedido en ${SITE.name}, pero el pago no se completó. Esto es lo que elegiste:`, { margin: "16px 0 0" }),
      "30px 40px 6px",
    ) +
    row(orderBox(order.items, order.total)) +
    row(callout("¿Ya pagaste en OXXO o por SPEI? Ignora este correo: tu pago puede tardar un poco en reflejarse."), "16px 40px 0") +
    row(
      `<div style="text-align:center;">${heading2("¿Te ayudamos a terminarlo?", "center")}${paragraph(
        "Si tuviste algún problema o una duda sobre tu diseño, la cantidad o la entrega, cuéntanos por WhatsApp y lo resolvemos contigo.",
        { align: "center", margin: "0 0 22px" },
      )}${button(waHref, "Escribir por WhatsApp", "solid")}${button(`${SITE.url}/productos`, "Volver a la tienda", "outline")}</div>`,
      "30px 40px 6px",
    ) +
    row(reassurance(), "14px 40px 0") +
    row(photosRow(), "30px 40px 0");

  const html = emailShell({
    subject,
    preheader: "Empezaste un pedido y el pago no se completó. Aquí tienes el resumen y una forma fácil de terminarlo.",
    rows,
    waHref,
    footerNotes:
      footerNote("Este es el único recordatorio que enviamos por este pedido; no te escribiremos más por esto.") +
      footerNote(
        `English: you started an order at ${SITE.name} but the payment was not completed. If you already paid by OXXO or SPEI, ignore this email. Questions? Message us on WhatsApp. This is the only reminder we send for this order.`,
        11,
      ),
  });

  return { subject, html };
}
