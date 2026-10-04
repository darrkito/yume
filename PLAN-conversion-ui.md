# Plan de conversión UI (pendiente: Fases 2 y 3)

Origen: auditoría completa del sitio con Impeccable `critique`, 2026-09-29. Puntuación 25/40 ("Aceptable"), 5 problemas P1, ningún P0. Reporte completo: `.impeccable/critique/2026-09-29T06-48-09Z__studioyume-mx.md`.

## Decisiones ya tomadas por el dueño

- **Política de la prueba digital:** incluye hasta 2 rondas de ajustes. No se promete reembolso (nunca escribirlo).
- **"Mucho CTA"** significa un siguiente paso claro al final de cada sección, NO más botones por tarjeta.
- **Envío:** nunca preseleccionado en carrito ni checkout.
- **Reglas de siempre:** sin testimonios/reseñas inventados; burdeos `#7c0000` como único acento; precios de stickers siempre con "Primeras 100 piezas"; sin guiones largos en copy nuevo.

## Pendiente de decisión del dueño

- **Titular del home "Sin pedidos mínimos"** (`src/app/page.tsx`, banda bajo el hero). La auditoría lo marca porque contradice "Mínimo 40/50 piezas" en las páginas de producto. Opción propuesta: "Mínimos bajos: desde 1 recetario o 40 stickers". Hoy se conserva por ser posicionamiento elegido por el dueño.

## Fase 1: HECHA (commit `918a070`, en producción)

Carrito sin envío preseleccionado + sugerencia de envío gratis; una acción por tarjeta (`ProductCard`, `Product.quickBuy` solo en NFC); política de 2 rondas en todo el sitio; checkout con header/footer reducidos; barra fija "Pagar" en carrito móvil; atajos 40/100/300 + aviso al ajustar cantidad; dropzone arriba de "Agregar"; confirmación al vaciar carrito; FAQ "cómo pedir" con carrito y WhatsApp.

## Fase 2: HECHA (commit `5eeea35`, en producción)

Los 9 ítems están implementados y verificados en producción. Notas: #9 se resolvió mostrando el tema real (derivado de `relatedProductSlugs`) en la etiqueta de tarjetas y posts en vez de editar los 24 posts; #4 son chips que llevan directo al producto, no filtros.

| # | Cambio | Dónde (archivos) | Comando Impeccable |
|---|---|---|---|
| 1 | El botón fijo del header lleva a la tienda/carrito (hoy es "Cotizar por WhatsApp", la meta secundaria). WhatsApp pasa a ícono o enlace secundario. | `src/components/Header.tsx` | layout |
| 2 | CTA al cerrar "Cómo funciona" y "Por qué Yume" (hoy terminan sin siguiente paso). | `src/app/page.tsx`, `src/app/en/page.tsx` | layout |
| 3 | Miniaturas del marquee de galería del home enlazan al producto de su categoría. | `src/components/InfiniteGalleryStrip.tsx` (reusar `productHrefFor` de `GalleryGrid.tsx`) | layout |
| 4 | Navegación por uso en la tienda: "Para tu consultorio / tu marca / regalar / más reseñas". | `src/app/productos/page.tsx`, `src/app/en/products/page.tsx` | layout |
| 5 | Respuestas del FAQ con CTA contextual (ej. precio del recetario → ver producto). | `src/content/faq.ts`, `faq.en.ts`, `src/components/FaqAccordion.tsx` | clarify |
| 6 | Blog: más nuevos primero (hoy sale del más viejo); CTA contextual después del primer H2; posts de temas fuera de catálogo (tatuajes, invitaciones, menús, tarjetas) con WhatsApp como CTA principal. | `src/components/BlogGrid.tsx`, `src/app/blog/[slug]/page.tsx` (+ EN) | layout |
| 7 | `/contacto`: WhatsApp como botón sólido con mensaje prellenado (producto / cantidad / ¿tienes diseño?). Igual en `/nosotros`. | `src/app/contacto/page.tsx`, `src/app/nosotros/page.tsx` (+ EN) | polish |
| 8 | Cross-sell relevante: para un carrito de stickers, mostrar otros stickers/NFC antes que el recetario. | `src/components/RelatedProducts.tsx` | distill |
| 9 | Etiquetas del blog: hoy todas dicen "Guías" y no filtran nada; usar temas reales. | `src/content/blog.ts`, `blog.en.ts` | clarify |

## Fase 3: imagen y sistema visual

Hechos: #10 (`HeroPhotos`: 3 fotos reales bajo el frasco, cada una enlaza a su producto), #11 solo stickers (miniaturas en la página de producto vía `ProductMedia` + `product-photos.ts`; sin recorte para no perder diseños de las planillas), #12-#16. **Pendiente:** fotos reales del recetario y las placas/stands NFC (las aporta el dueño; agregarlas a `GALLERY_SLUGS`/`extra` en `product-photos.ts`) y la decisión sobre "Sin pedidos mínimos".

| # | Cambio | Dónde | Comando |
|---|---|---|---|
| 10 | Hero con fotos reales de la galería acompañando el frasco (`HeroJar`), no reemplazándolo sin consultar. | `src/app/page.tsx` (+ EN) | bolder |
| 11 | 3-4 fotos reales por producto de stickers (ya existen en `public/gallery/`: logos Vanelia/Yume, mascotas, personajes). Fotos recortadas para llenar el marco. **Recetario y placas/stands NFC necesitan fotos reales del dueño** (hoy son renders). | `src/content/products.ts`, `ProductVisual` | bolder |
| 12 | Todo en tipo oración: quitar mayúsculas espaciadas ("VER GALERÍA COMPLETA", "RECÓGELO EN GDL", filtros de galería, etiqueta sobre el título del producto). | todo el sitio | typeset |
| 13 | Badges de 10px ("Nuevo", "Recógelo en GDL", contador del carrito) a 12px. | `ProductCard.tsx`, `PickupBadge.tsx`, `Header.tsx` | typeset |
| 14 | Contraste de `ink-soft` sobre el fondo rosado del home: 4.4:1 → mínimo 4.5:1. | `src/app/globals.css` | polish |
| 15 | Líneas de texto de más de 75 caracteres en descripciones de producto; inclinación consistente en todas las grillas; "MXN" en el hero de `/en`; quitar `llms.txt` de la 404; SVG del hero móvil se sale 15px. | varias | polish |
| 16 | Actualizar `DESIGN.md`/`PRODUCT.md`: header ahora opaco (no blur), 5 productos (no 3), fuente del cuerpo Karla vs Inter, contradicción sobre `#fff`. | docs | document |

## Cómo retomarlo

1. Pedir: "ejecuta la Fase 2 del `PLAN-conversion-ui.md`".
2. Seguir el mismo ciclo que la Fase 1: editar, typecheck + lint + build, una ronda visual desktop + móvil contra `npm run start`, un arreglo en lote, commit, push, verificar en producción.
3. Al terminar ambas fases, volver a correr `/impeccable critique` sobre `https://studioyume.mx/` para comparar contra 25/40.
