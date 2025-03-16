"use client";  // ✅ ОБЯЗАТЕЛЬНО ДЛЯ useContext и useState

import { createContext, useState, useContext, ReactNode } from "react";

type Painting = {
  title: string;
  price: string;
  image: string;
};

type CartContextType = {
  cart: Painting[];
  addToCart: (painting: Painting) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Painting[]>([]);

  const addToCart = (painting: Painting) => {
    setCart([...cart, painting]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}