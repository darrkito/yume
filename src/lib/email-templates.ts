import type { Order } from "@/lib/orders";
import { SITE, waLink } from "@/content/site";

function itemsRows(order: Order): string {
  return order.items
    .map(
      (item) => `
      <tr>
        <td style="padding:8px;border-bottom:1px solid #eee;">${item.name}</td>
        <td style="padding:8px;border-bottom:1px solid #eee;text-align:center;">${item.qty}</td>
        <td style="padding:8px;border-bottom:1px solid #eee;text-align:right;">$${item.price.toFixed(2)}</td>
      </tr>`
    )
    .join("");
}

function itemsTable(order: Order): string {
  return `
    <table style="width:100%;border-collapse:collapse;">
      <thead>
        <tr>
          <th style="text-align:left;padding:8px;border-bottom:2px solid #333;">Producto</th>
          <th style="text-align:center;padding:8px;border-bottom:2px solid #333;">Cant.</th>
          <th style="text-align:right;padding:8px;border-bottom:2px solid #333;">Precio</th>
        </tr>
      </thead>
      <tbody>${itemsRows(order)}</tbody>
    </table>
    <p style="text-align:right;font-size:18px;margin-top:12px;">
      <strong>Total: $${order.total.toFixed(2)} MXN</strong>
    </p>`;
}

export function businessNotificationEmail(order: Order): { subject: string; html: string } {
  const addr = order.shipping_address;
  const subject = `🛒 Nueva venta #${order.id.slice(0, 8)} - $${order.total.toFixed(2)} MXN`;

  const html = `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#222;">
    <h2 style="color:#111;">Nueva venta confirmada — ${SITE.name}</h2>
    <p><strong>Orden:</strong> ${order.id}</p>
    <p><strong>Fecha:</strong> ${new Date(order.updated_at).toLocaleString("es-MX")}</p>
    <p><strong>ID de pago Mercado Pago:</strong> ${order.mp_payment_id ?? "N/A"}</p>

    <h3>Cliente</h3>
    <p>
      ${order.customer_name}<br/>
      ${order.customer_email}<br/>
      ${order.customer_phone ? `Tel: ${order.customer_phone}<br/>` : ""}
    </p>

    <h3>Dirección de envío</h3>
    <p>
      ${addr.street} ${addr.number}<br/>
      ${addr.neighborhood}<br/>
      ${addr.city}, ${addr.state}, CP ${addr.zip}<br/>
      ${addr.references ? `Referencias: ${addr.references}` : ""}
    </p>

    <h3>Productos</h3>
    ${itemsTable(order)}

    <h3>Qué sigue</h3>
    <ol>
      <li>Confirmar el diseño/personalización con el cliente antes de imprimir.</li>
      <li>Preparar y empacar el pedido.</li>
      <li>Generar guía de envío con la dirección de arriba.</li>
      <li>Avisar al cliente cuando salga a reparto (por WhatsApp).</li>
    </ol>
  </div>`;

  return { subject, html };
}

export function customerConfirmationEmail(order: Order): { subject: string; html: string } {
  const addr = order.shipping_address;
  const orderShort = order.id.slice(0, 8);
  const firstName = order.customer_name.split(" ")[0];

  const waHref = waLink(`Hola! Tengo una duda sobre mi pedido #${orderShort}`);
  const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent(`Duda sobre mi pedido #${orderShort}`)}`;

  const subject = `Tu pedido #${orderShort} en ${SITE.name} fue confirmado ✅`;

  const html = `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#222;">
    <h2 style="color:#111;">¡Gracias por tu compra, ${firstName}!</h2>
    <p>Tu pago fue confirmado y ya estamos preparando tu pedido.</p>

    <p style="background:#f6f6f6;padding:12px;border-radius:8px;">
      <strong>Número de orden:</strong> #${orderShort}
    </p>

    <h3>Resumen de tu pedido</h3>
    ${itemsTable(order)}

    <h3>Se enviará a</h3>
    <p>
      ${addr.street} ${addr.number}<br/>
      ${addr.neighborhood}<br/>
      ${addr.city}, ${addr.state}, CP ${addr.zip}
    </p>

    <p>Te avisaremos cuando tu pedido salga rumbo a tu domicilio.</p>

    <h3>¿Tienes alguna duda?</h3>
    <p>Contáctanos por el medio que prefieras:</p>
    <div style="margin:20px 0;">
      <a href="${waHref}"
         style="background:#25D366;color:#fff;text-decoration:none;padding:12px 20px;border-radius:6px;font-weight:bold;display:inline-block;margin-right:10px;">
        💬 Escribir por WhatsApp
      </a>
      <a href="${mailtoHref}"
         style="background:#333;color:#fff;text-decoration:none;padding:12px 20px;border-radius:6px;font-weight:bold;display:inline-block;">
        ✉️ Escribir por correo
      </a>
    </div>

    <p style="color:#888;font-size:12px;margin-top:30px;">
      Este correo confirma tu compra #${orderShort} en ${SITE.name}. Consérvalo como comprobante.
    </p>
  </div>`;

  return { subject, html };
}
