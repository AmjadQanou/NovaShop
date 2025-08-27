import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const add = (product) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const remove = (id) => setItems((prev) => prev.filter((p) => p.id !== id));
  const dec = (id) => setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p)));
  const inc = (id) => setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));
  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((s, p) => s + p.price * p.qty, 0), [items]);
  const count = useMemo(() => items.reduce((s, p) => s + p.qty, 0), [items]);

  return (
    <CartContext.Provider value={{ items, add, remove, dec, inc, clear, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
