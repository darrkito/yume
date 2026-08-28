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
- Conversión: carrito (`CartContext.tsx`, localStorage) → `/pago`, con dos formas de cobrar (ambas Mercado Pago) más la cotización por WhatsApp de siempre:
  - **Checkout Pro** (`/api/checkout-pro`): crea una Preference y redirige al checkout hospedado de Mercado Pago — incluye tarjeta, cuenta MP, SPEI y efectivo en tienda automáticamente.
  - **Checkout Bricks / Payment Brick** (`/api/checkout-payment`, `MercadoPagoBrick.tsx`): tarjeta y efectivo (ticket) embebidos en `/pago`, sin salir del sitio. La tokenización de tarjeta ocurre en iframes seguros de Mercado Pago (`@mercadopago/sdk-react`); el backend nunca ve el número de tarjeta.
  - En ambos casos el precio se recalcula en el servidor desde `src/content/products.ts` (`src/lib/mercadopago.ts`) — el cliente solo manda `slug`+`qty`, nunca el precio, para que no se pueda manipular el monto.
  - Credenciales en `.env.local` (no se sube al repo): `MERCADOPAGO_ACCESS_TOKEN` / `NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY` — ver `.env.example`. Usa credenciales TEST para probar; cámbialas por las de producción solo cuando el sitio esté listo para cobrar de verdad.
- **Flujo post-compra completo** (`src/lib/orders.ts`, `src/lib/supabase.ts`, `src/lib/email.ts`, `src/lib/email-templates.ts`, `src/components/ShippingForm.tsx`):
  - `/pago` ahora pide primero nombre/correo/teléfono y dirección de envío (`ShippingForm.tsx`) antes de mostrar los métodos de pago — necesario porque los productos son físicos y hay que enviarlos.
  - Cada intento de pago (Checkout Pro o Bricks) crea una orden `pending` en Supabase (tabla `orders`, ver `sql/schema.sql` en el historial de commits o recréala con el bloque de abajo) antes de cobrar, usando el `id` de la orden como `external_reference` en Mercado Pago.
  - `/api/mercadopago/webhook` ahora sí hace algo real: vuelve a consultar el pago directamente en la API de Mercado Pago (nunca confía en el body de la notificación), busca la orden por `external_reference`, la marca `paid`/`failed`, y dispara los dos correos (negocio + cliente) — con `emails_sent` en la orden para no duplicarlos si el webhook llega repetido.
  - El Payment Brick también finaliza la orden en la misma respuesta (no espera al webhook) ya que resuelve de forma síncrona; el webhook queda como la fuente de verdad idempotente para OXXO/pagos que se confirman después.
  - Variables de entorno nuevas necesarias — **`Supa_Store_Stor_SUPABASE_URL`** y **`Supa_Store_Stor_SUPABASE_SERVICE_ROLE_KEY`** ya están en `.env.local` y en Vercel (integración de Supabase). Faltan, y hay que agregarlas a mano: `GMAIL_USER` y `GMAIL_APP_PASSWORD` (ver abajo) — sin esas dos, el pago y la orden funcionan igual, solo no se mandan los correos (falla silenciosa y controlada, no rompe el checkout).
  - **Pendiente manual, una sola vez:** correr `sql/schema.sql` en el SQL Editor de Supabase para crear la tabla `orders` (copiar y pegar, Run). Intenté correrlo yo directo contra la base de producción con la connection string ya disponible y el clasificador de seguridad de Claude Code lo bloqueó correctamente — es justo el tipo de acción que debe confirmar una persona, no un agente.
  - Para activar los correos: activa verificación en 2 pasos en la cuenta de Gmail que quieras usar para enviar, genera una "contraseña de aplicación" (myaccount.google.com/security → Contraseñas de aplicaciones), y agrega `GMAIL_USER`/`GMAIL_APP_PASSWORD` en Vercel.
- `NotepadMark.tsx`: ilustración CSS/SVG de respaldo para productos sin foto todavía — `ProductVisual.tsx` usa la foto real (`product.image`) cuando existe, y cae a esta ilustración solo si no hay foto.
- SEO: `sitemap.ts`/`robots.ts` (convención nativa de Next.js), metadata + JSON-LD `Organization`/`Product`/`FAQPage` por página.

## Imágenes: siempre WebP (mismo criterio que Luvory)

Toda foto/logo que se sirva desde `public/` debe convertirse a `.webp` antes de commitear — no subir el PNG/JPG original al repo salvo como archivo fuente fuera de `public/` (o bórralo tras convertir). Conversión:

```bash
cwebp -q 88 -alpha_q 100 origen.png -o public/destino.webp   # fotos con transparencia
cwebp -lossless origen.png -o public/destino.webp            # logos/gráficos de pocos colores
```

**Dos excepciones deliberadas, no las conviertas:**
- `public/og-image.jpg` — el soporte de WebP en crawlers de previsualización (WhatsApp, Facebook) sigue siendo inconsistente; el social card se queda en JPG.
- `src/app/icon.png` / `src/app/apple-icon.png` — son nombres de convención especial de Next.js (`icon`/`apple-icon`) y su lista de extensiones soportadas oficialmente no incluye `.webp`.

Para todo lo demás (fotos de producto, logo, futuras imágenes de blog), usa `next/image` — ya sirve WebP/AVIF automáticamente en runtime, pero el archivo fuente en el repo también debe ser `.webp` para no inflar el repo ni el build.

## Pendiente antes de lanzar

- [x] Número de WhatsApp real en `src/content/site.ts` (+52 462 192 2778)
- [ ] Confirmar que `hola@studioyume.mx` es una bandeja real (se usó como default por convención, no verificado)
- [x] Fotografía real del recetario (`public/recetario-medico.webp`)
- [x] Pago en línea con Mercado Pago (Checkout Pro + Checkout Bricks, tarjeta + efectivo en tienda) — probado con credenciales TEST, falta cambiar a credenciales de producción antes de lanzar
- [x] Conectar dominio `studioyume.mx` en Vercel
- [x] Blog local (3 posts) + MCP server + agente A2A + GSC/Bing/IndexNow
- [x] Flujo post-compra completo: formulario de envío, orden en Supabase, webhook real, correos de confirmación — código integrado y verificado en local (falla de forma controlada porque la tabla no existe todavía)
- [ ] Correr `sql/schema.sql` en el SQL Editor de Supabase (crea la tabla `orders`) — paso manual, ver arriba
- [ ] Agregar `GMAIL_USER` / `GMAIL_APP_PASSWORD` en Vercel para activar los correos de confirmación
- [ ] Agregar `MERCADOPAGO_ACCESS_TOKEN` / `NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY` (producción) como env vars en Vercel cuando el sitio esté listo para cobrar de verdad
