import nodemailer from "nodemailer";
import type { Order } from "@/lib/orders";
import { businessNotificationEmail, customerConfirmationEmail } from "@/lib/email-templates";
import { SITE } from "@/content/site";

function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return null;
  return nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
}

// Both emails are best-effort — a missing Gmail app password (not configured
// yet) or a transient SMTP failure must never break the checkout/webhook
// flow itself, since the order and payment are already correctly recorded
// regardless of whether the notification email goes out. Errors are logged,
// not thrown.
export async function sendOrderEmails(order: Order): Promise<void> {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn("[email] GMAIL_USER/GMAIL_APP_PASSWORD no configurados — omitiendo envío de correos.");
    return;
  }

  const business = businessNotificationEmail(order);
  const customer = customerConfirmationEmail(order);

  const results = await Promise.allSettled([
    transporter.sendMail({ from: `"Ventas Web ${SITE.name}" <${process.env.GMAIL_USER}>`, to: SITE.email, ...business }),
    transporter.sendMail({ from: `"${SITE.name}" <${process.env.GMAIL_USER}>`, to: order.customer_email, ...customer }),
  ]);

  for (const r of results) {
    if (r.status === "rejected") console.error("[email] Error enviando correo:", r.reason);
  }
}
