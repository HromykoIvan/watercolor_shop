"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="relative w-full h-screen bg-[#0a0a0a]">
      {/* Фоновое изображение */}
      <div className="absolute inset-0">
        <Image
          src="/paintings/brush-hero.png"
          alt="background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Заголовок */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-7xl font-playfair tracking-widest text-white text-center mb-6">
          WATERCOLOR GALLERY
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 text-center max-w-2xl mx-auto px-4">
          Уникальные картины, вдохновленные природой и эмоциями
        </p>
      </div>
    </header>
  );
}
