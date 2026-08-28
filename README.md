# Yume — studioyume.mx

Tienda de papelería y artículos personalizados (recetarios médicos, stickers, plantillas, botellas). Next.js 16 (App Router, TS, Tailwind v4), pensado para desplegarse en Vercel.

## Comandos

```bash
npm run dev            # localhost:3000
npm run build
npx tsc --noEmit        # solo type-check
```

## Arquitectura

- Catálogo de productos: `src/content/products.ts` — un archivo tipado, no un backend de e-commerce aparte. Cada producto trae su propio FAQ (alimenta tanto el texto visible como el JSON-LD `FAQPage`).
- Datos del negocio (WhatsApp, email, redes): `src/content/site.ts` — **`whatsappNumber` es un placeholder, reemplazar con el número real antes de lanzar**.
- Conversión: por ahora todo el flujo de compra es "cotizar por WhatsApp" (mismo patrón que Luvory) — no hay checkout con tarjeta todavía.
- `NotepadMark.tsx`: ilustración CSS/SVG del recetario, no es foto real del producto — reemplazar con fotografía real cuando esté disponible.
- SEO: `sitemap.ts`/`robots.ts` (convención nativa de Next.js), metadata + JSON-LD `Organization`/`Product`/`FAQPage` por página.

## Pendiente antes de lanzar

- [x] Número de WhatsApp real en `src/content/site.ts` (+52 462 192 2778)
- [ ] Confirmar que `hola@studioyume.mx` es una bandeja real (se usó como default por convención, no verificado)
- [ ] Fotografía real del recetario (reemplaza `NotepadMark`)
- [ ] Decidir método de pago: ¿solo WhatsApp + transferencia/efectivo, o agregar Stripe Checkout (tarjeta + OXXO)?
- [ ] Conectar dominio `studioyume.mx` en Vercel
