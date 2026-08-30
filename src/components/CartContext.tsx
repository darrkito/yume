"use client";

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  qty: number;
  /** Set when the product has purchase options (e.g. with/without design) —
   * two variants of the same product are kept as separate line items. */
  variantId?: string;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (slug: string, variantId?: string) => void;
  updateQty: (slug: string, qty: number, variantId?: string) => void;
  clear: () => void;
  count: number;
  total: number;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "yume_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage once on mount (client-only — avoids an SSR/hydration
  // mismatch, same pattern as other client-only widgets in this project).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore — worst case the cart starts empty
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore — storage may be unavailable (private mode, quota, etc.)
    }
  }, [items, hydrated]);

  const addItem = useCallback((item: Omit<CartItem, "qty">, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === item.slug && i.variantId === item.variantId);
      if (existing) {
        return prev.map((i) =>
          i.slug === item.slug && i.variantId === item.variantId ? { ...i, qty: i.qty + qty } : i,
        );
      }
      return [...prev, { ...item, qty }];
    });
  }, []);

  const removeItem = useCallback((slug: string, variantId?: string) => {
    setItems((prev) => prev.filter((i) => !(i.slug === slug && i.variantId === variantId)));
  }, []);

  const updateQty = useCallback((slug: string, qty: number, variantId?: string) => {
    setItems((prev) =>
      prev.map((i) => (i.slug === slug && i.variantId === variantId ? { ...i, qty: Math.max(1, qty) } : i)),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const total = useMemo(() => items.reduce((sum, i) => sum + i.qty * i.price, 0), [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clear, count, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
