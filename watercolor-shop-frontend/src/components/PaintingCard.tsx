"use client";

import Image from "next/image";

type Props = {
  title: string;
  price: string;
  image: string;
};

// Карточка картины с PNG-рамкой
export default function PaintingCard({ title, price, image }: Props) {
  return (
    <div className="relative w-full max-w-[420px] aspect-[3/4] mx-auto text-center">
      {/* PNG-рамка поверх (адаптивная) */}
      <Image
        src="/frame/wood-black.png"
        alt="Рама"
        fill
        className="object-contain pointer-events-none z-10"
      />

      {/* Картина под рамкой с внутренним отступом */}
      <div className="absolute inset-[20%] z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-sm"
        />
      </div>

      {/* Информация */}
      <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-full text-center">
        <h3 className="font-playfair text-white text-lg mt-4">{title}</h3>
        <p className="text-gray-400 mb-3">{price}</p>
        <button className="border border-white px-4 py-1 text-sm hover:bg-white hover:text-black transition">
          В корзину
        </button>
      </div>
    </div>
  );
}
