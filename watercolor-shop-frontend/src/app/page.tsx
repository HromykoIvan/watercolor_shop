"use client";

import Image from "next/image";
import PaintingCard from "@/components/PaintingCard";

// Список картин
const paintings = [
  { title: "Сияние заката", price: "1200 PLN", image: "/paintings/123.jpg" },
  { title: "Лесная тишина", price: "1500 PLN", image: "/paintings/124.jpg" },
  { title: "Голубые цветы", price: "900 PLN", image: "/paintings/125.jpg" },
];

export default function GalleryPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a0a] text-white font-inter">
  {/* Hero-секция */}
  <section className="relative h-[40vh] w-full">
    <Image
      src="/paintings/brush-hero.png"
      alt="hero"
      fill
      priority
      className="object-[center_top] opacity-60 z-0"
    />
    <div className="absolute bottom-6 right-6 z-10 text-right max-w-[80%] sm:max-w-[60%]">
      <h1 className="text-3xl sm:text-5xl font-playfair tracking-widest text-white mb-2">
        WATERCOLOR GALLERY
      </h1>
      <p className="text-sm sm:text-lg text-gray-300 leading-snug">
        Уникальные картины, вдохновленные природой и эмоциями
      </p>
    </div>
  </section>

  {/* Галерея с авто-высотой */}
  <section className="flex-grow w-full max-w-7xl mx-auto px-6 py-20">
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-12">
      {paintings.map((painting, index) => (
        <PaintingCard
          key={index}
          image={painting.image}
          title={painting.title}
          price={painting.price}
        />
      ))}
    </div>
  </section>

  {/* Футер всегда внизу */}
  <footer className="bg-black text-center py-6 text-sm text-gray-500">
    <p>© 2025 Watercolor Gallery — все права защищены.</p>
  </footer>
</main>

  );
}
