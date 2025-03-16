"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <h1 className="text-xl font-bold">Watercolor Art Shop</h1>
      <div className="space-x-4">
        <Link href="/">Главная</Link>
        <Link href="/gallery">Галерея</Link>
        <Link href="/cart">Корзина ({cart.length})</Link>
      </div>
    </nav>
  );
}
