import type { MetadataRoute } from "next";

// Installable from the browser's "Add to Home Screen". No service worker on
// purpose: checkout needs the network, and a stale cache on a live store
// costs more than offline support would ever earn.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yume: papelería creativa y artículos personalizados",
    short_name: "Yume",
    description: "Stickers, recetarios y papelería personalizada desde $140. Hecho en Guadalajara, envíos a todo México.",
    start_url: "/?source=pwa",
    display: "standalone",
    background_color: "#fffbf3",
    theme_color: "#fffbf3",
    lang: "es-MX",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcuts: [
      { name: "Tienda", url: "/productos" },
      { name: "Carrito", url: "/carrito" },
    ],
  };
}
