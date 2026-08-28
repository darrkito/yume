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
- [ ] Decidir método de pago: ¿solo WhatsApp + transferencia/efectivo, o agregar Stripe Checkout (tarjeta + OXXO)?
- [ ] Conectar dominio `studioyume.mx` en Vercel
