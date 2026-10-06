import { orderLocale, type Order } from "@/lib/orders";
import { unsubscribeUrl } from "@/lib/unsubscribe";
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

/** The single "you left something unpaid" reminder, in the brand's own look
 * and in the language the order was placed in, with a one-click opt-out. */
export function abandonedCheckoutEmail(order: Order): { subject: string; html: string } {
  const en = orderLocale(order) === "en";
  const name = esc(order.customer_name.split(" ")[0] || order.customer_name);
  const lines = order.items.map((i) => `- ${i.name} x${i.qty}`).join("\n");
  const waHref = waLink(
    en ? `Hi, I started an order at ${SITE.name} and have a question before paying:\n${lines}` : `Hola, empecé un pedido en ${SITE.name} y tengo una duda antes de pagar:\n${lines}`,
  );
  const subject = en ? `Your ${SITE.name} order is still waiting for you` : `Tu pedido en ${SITE.name} sigue esperándote`;
  const shopUrl = en ? `${SITE.url}/en/products` : `${SITE.url}/productos`;
  const optOut = unsubscribeUrl(order.customer_email);

  const rows =
    row(
      heading1(
        en
          ? `Hi ${name}, your order is <em style="color:${C.brand};">still waiting for you</em>.`
          : `Hola ${name}, tu pedido <em style="color:${C.brand};">sigue esperándote</em>.`,
      ) +
        paragraph(
          en ? `You started an order at ${SITE.name}, but the payment was not completed. Here is what you chose:` : `Empezaste un pedido en ${SITE.name}, pero el pago no se completó. Esto es lo que elegiste:`,
          { margin: "16px 0 0" },
        ),
      "30px 40px 6px",
    ) +
    row(orderBox(order.items, order.total)) +
    row(
      callout(
        en
          ? "Already paid at OXXO or by SPEI? Ignore this email: your payment can take a little while to show up."
          : "¿Ya pagaste en OXXO o por SPEI? Ignora este correo: tu pago puede tardar un poco en reflejarse.",
      ),
      "16px 40px 0",
    ) +
    row(
      `<div style="text-align:center;">${heading2(en ? "Can we help you finish it?" : "¿Te ayudamos a terminarlo?", "center")}${paragraph(
        en
          ? "If you ran into a problem or have a question about your design, the quantity or delivery, tell us on WhatsApp and we will sort it out with you."
          : "Si tuviste algún problema o una duda sobre tu diseño, la cantidad o la entrega, cuéntanos por WhatsApp y lo resolvemos contigo.",
        { align: "center", margin: "0 0 22px" },
      )}${button(waHref, en ? "Message us on WhatsApp" : "Escribir por WhatsApp", "solid")}${button(shopUrl, en ? "Back to the shop" : "Volver a la tienda", "outline")}</div>`,
      "30px 40px 6px",
    ) +
    (en ? "" : row(reassurance(), "14px 40px 0")) +
    row(photosRow(), "30px 40px 0");

  const html = emailShell({
    subject,
    preheader: en
      ? "You started an order and the payment was not completed. Here is the summary and an easy way to finish it."
      : "Empezaste un pedido y el pago no se completó. Aquí tienes el resumen y una forma fácil de terminarlo.",
    rows,
    waHref,
    lang: en ? "en" : "es",
    footerNotes:
      footerNote(
        en
          ? "This is the only reminder we send for this order; we will not write to you again about it."
          : "Este es el único recordatorio que enviamos por este pedido; no te escribiremos más por esto.",
      ) +
      (optOut
        ? footerNote(
            en
              ? `<a href="${optOut}" style="color:${C.soft};">Don't send me cart reminders</a>`
              : `<a href="${optOut}" style="color:${C.soft};">No quiero más recordatorios de carrito</a>`,
            11,
          )
        : ""),
  });

  return { subject, html };
}
