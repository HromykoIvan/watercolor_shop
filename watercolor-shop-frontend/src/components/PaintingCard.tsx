"use client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

type PaintingProps = {
  title: string;
  price: string;
  image: string;
};

export default function PaintingCard({ title, price, image }: PaintingProps) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <Image src={image} alt={title} width={300} height={300} className="rounded-md" />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-lg text-gray-600">{price}</p>
      <button
        onClick={() => addToCart({ title, price, image })}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        В корзину 🛒
      </button>
    </div>
  );
}