import nodemailer from "nodemailer";
import type { Order } from "@/lib/orders";
import { abandonedCheckoutEmail, businessNotificationEmail, customerConfirmationEmail } from "@/lib/email-templates";
import { SITE } from "@/content/site";

function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return null;
  return nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
}

// Never throws: the order and payment are already recorded regardless of
// whether the notification goes out. Returns true only when both emails were
// accepted, so the caller can release its claim and let the next webhook retry.
export async function sendOrderEmails(order: Order): Promise<boolean> {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn("[email] GMAIL_USER/GMAIL_APP_PASSWORD no configurados — omitiendo envío de correos.");
    return false;
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
  return results.every((r) => r.status === "fulfilled");
}

/** Sends the single abandoned-checkout reminder. Returns whether it went out
 * (the cron releases its claim on failure so tomorrow's run can retry). */
export async function sendAbandonedReminder(order: Order): Promise<boolean> {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn("[email] GMAIL_USER/GMAIL_APP_PASSWORD no configurados — no se envía el recordatorio.");
    return false;
  }
  try {
    await transporter.sendMail({
      from: `"${SITE.name}" <${process.env.GMAIL_USER}>`,
      to: order.customer_email,
      replyTo: SITE.email,
      ...abandonedCheckoutEmail(order),
    });
    return true;
  } catch (err) {
    console.error("[email] Error enviando recordatorio:", err);
    return false;
  }
}
