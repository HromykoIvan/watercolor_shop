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
  removeFromCart: (title: string) => void; // ✅ Добавлено
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Painting[]>([]);

  const addToCart = (painting: Painting) => {
    setCart([...cart, painting]);
  };

  const removeFromCart = (title: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.title !== title)); // ✅ Удаление товара из корзины
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
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