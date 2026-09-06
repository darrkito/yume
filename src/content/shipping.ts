// Real local pickup option for Guadalajara-area customers via Casa Blanca,
// a small ZMG parcel network with branch-to-branch drop-off/pickup — not a
// courier Yume has an API integration with. Real price ($20 MXN) and real
// branch addresses/hours, verified against cbpaqueteria.com in 2026-09.
export const CASABLANCA_PRICE = 20;

// National paquetería shipping — a flat estimate (actual carrier cost varies
// by destination/weight), charged at checkout same as the Casa Blanca
// surcharge rather than left as an after-the-fact WhatsApp negotiation.
export const NATIONAL_SHIPPING_PRICE = 150;

export interface CasablancaBranch {
  id: string;
  name: string;
  address: string;
  hours: string;
}

export const CASABLANCA_BRANCHES: CasablancaBranch[] = [
  { id: "juarez", name: "Juárez (matriz)", address: "Pedro Moreno 776 int. B, Col. Centro (frente al Parque Rojo)", hours: "L-V 11:00-20:00 · Sáb 10:00-17:00 · Dom 11:00-15:00" },
  { id: "aviacion", name: "Aviación", address: "Av. Base Aérea #980, Col. Nuevo México, Zapopan", hours: "L-V 11:00-19:00 · Sáb 11:00-17:00 · Dom cerrado" },
  { id: "periferico-norte", name: "Periférico Norte", address: "Calzada Federalismo #690 (detrás de la estación Periférico Norte)", hours: "L-V 11:00-20:00 · Sáb 11:00-17:00 · Dom cerrado" },
  { id: "sur", name: "Sur", address: "Av. Cristóbal Colón 6030, Local 6, Santa María Tequepexpan", hours: "L-V 11:00-19:00 · Sáb 11:00-17:00 · Dom cerrado" },
  { id: "oblatos", name: "Oblatos", address: "Av. Artesanos 1135 L1 (zona Circunvalación Oblatos)", hours: "L-V 11:00-19:00 · Sáb 11:00-17:00 · Dom cerrado" },
  { id: "tetlan", name: "Tetlán", address: "Av. Presa Laurel #118 Local 4, Plaza Victoria", hours: "L-V 11:00-18:00 · Sáb 11:00-17:00 · Dom cerrado" },
  { id: "tonala", name: "Tonalá", address: "Calle Nicolás Bravo #40 D, Tonalá Centro", hours: "L-V 11:00-18:00 · Sáb 11:00-17:00 · Dom cerrado" },
  { id: "tlaquepaque-parian", name: "Tlaquepaque-Parían", address: "Av. Río Nilo #2329, Local 2 PB, Plaza Cumbres", hours: "L-V 11:00-18:00 · Sáb 11:00-17:00 · Dom cerrado" },
  { id: "tlajomulco", name: "Tlajomulco", address: "C.C. San Sebastián #1915-1 Local F2 (arriba de Coppel)", hours: "L-V 11:00-18:00 · Sáb 11:00-17:00 · Dom cerrado" },
  { id: "tesistan", name: "Tesistán", address: "Av. Palmas #3420, Palermo, Zapopan (esq. Carretera Colotlán)", hours: "L-V 11:00-19:00 · Sáb 11:00-17:00 · Dom cerrado" },
  { id: "zapopan-centro", name: "Zapopan Centro", address: "Av. Hidalgo #241, Zapopan", hours: "L-V 11:00-19:00 · Sáb 11:00-17:00 · Dom cerrado" },
];

export const getCasablancaBranch = (id: string) => CASABLANCA_BRANCHES.find((b) => b.id === id);

export type DeliveryMethod = "envio_nacional" | "recoleccion_casablanca";

// Pure lookup, safe to import from client components (e.g. to show the
// surcharge in the order summary) — kept out of orders.ts, which imports
// the server-only Supabase client and must never reach a client bundle.
export function deliverySurcharge(method: DeliveryMethod): number {
  return method === "recoleccion_casablanca" ? CASABLANCA_PRICE : NATIONAL_SHIPPING_PRICE;
}
