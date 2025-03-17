"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-center mb-8">🛒 Ваша корзина</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Корзина пуста</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div key={item.title} className="border p-4 rounded-lg shadow-md bg-white">
              <Image src={item.image} alt={item.title} width={200} height={200} className="rounded-md" />
              <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
              <p className="text-lg text-gray-600">{item.price}</p>
              <button
                onClick={() => removeFromCart(item.title)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                aria-label={`Удалить ${item.title} из корзины`}
              >
                Удалить ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}