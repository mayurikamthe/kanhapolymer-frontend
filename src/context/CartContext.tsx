import React, { createContext, useContext, useEffect, useState } from "react";

interface Bag {
  id: number;
  img: string;
  price: string | number;
  desc: string;
  name?: string;
  qty?: number;
}

interface CartContextType {
  items: Bag[];
  addItem: (b: Bag) => void;
  removeItem: (id: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Bag[]>(() => {
    try {
      const raw = localStorage.getItem("kp_cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("kp_cart", JSON.stringify(items));
  }, [items]);

  // listen to simple window event from BagCard / ProductPage
  useEffect(() => {
    const handler = (e: Event) => {
      // @ts-ignore
      const detail = e?.detail;
      if (detail && detail.id) addItem(detail);
    };
    window.addEventListener("add-to-cart", handler as EventListener);
    return () => window.removeEventListener("add-to-cart", handler as EventListener);
  }, []);

  const addItem = (b: Bag) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === b.id);
      if (found) return prev.map((p) => (p.id === b.id ? { ...p, qty: (p.qty || 1) + 1 } : p));
      return [...prev, { ...b, qty: 1 }];
    });
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const clear = () => setItems([]);

  return <CartContext.Provider value={{ items, addItem, removeItem, clear }}>{children}</CartContext.Provider>;
};
