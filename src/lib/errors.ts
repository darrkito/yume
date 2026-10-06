// Server validation messages are written in Spanish at their source; English
// shoppers get them translated here, at the edge of the API routes. Unknown
// messages fall back to a generic English line rather than leaking Spanish.
const EN: [string, string][] = [
  ["El carrito está vacío", "Your cart is empty."],
  ["Producto inválido", "Invalid product in the cart."],
  ["Producto no encontrado", "A product in your cart no longer exists."],
  ["Selecciona una opción válida", "Choose a valid option for a product in your cart."],
  ["Falta:", "A required personalization field is missing."],
  ["Fecha inválida", "The event date is not valid."],
  ["Falta información de la dirección", "The shipping address is incomplete."],
  ["El código postal", "The postal code must have 5 digits."],
  ["Falta nombre, correo", "Name, email and phone are required."],
  ["El correo no es válido", "The email address is not valid."],
  ["El teléfono debe", "The phone number must have 10 digits."],
  ["Selecciona una sucursal", "Choose a valid Casa Blanca branch."],
  ["Demasiados intentos", "Too many attempts. Wait a minute and try again."],
];

export function localizeError(message: string, lang: unknown): string {
  if (lang !== "en") return message;
  return EN.find(([es]) => message.startsWith(es))?.[1] ?? "Something went wrong with your order. Please try again or message us on WhatsApp.";
}
