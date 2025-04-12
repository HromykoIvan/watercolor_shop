"use client";

import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";
import { Playfair_Display } from 'next/font/google';
import { motion } from 'framer-motion';

const playfair = Playfair_Display({ 
  subsets: ['latin', 'cyrillic'],
  style: ['italic', 'normal']
});

// Список картин
const paintings = [
  { 
    title: "Сияние заката", 
    price: "1200 PLN", 
    image: "/paintings/123.jpg"
  },
  { 
    title: "Лесная тишина", 
    price: "1500 PLN", 
    image: "/paintings/124.jpg"
  },
  { 
    title: "Голубые цветы", 
    price: "900 PLN", 
    image: "/paintings/125.jpg"
  },
  { 
    title: "Winter", 
    price: "900 PLN", 
    image: "/paintings/4.jpeg"
  },
  { 
    title: "Flowers", 
    price: "900 PLN", 
    image: "/paintings/5.jpg"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen" style={{
      background: `linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), url('/textures/fullHD_bg.png') repeat`,
      backgroundSize: '500px'
    }}>
      {/* Верхняя секция с фоновым изображением */}
      <section className="relative w-full h-[30vh]">
        <Image
          src="/paintings/brush-hero.png"
          alt="hero background"
          fill
          priority
          className="object-cover opacity-90"
        />
        {/* Градиентный переход */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-48 z-[5]"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(10, 10, 10, 0.85))'
          }}
        />
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 flex flex-col items-end justify-center z-10 pr-4 sm:pr-12 md:pr-24 lg:pr-36 xl:pr-48 ml-auto w-[40%] sm:w-[80%] md:w-[70%]"
        >
          <motion.h1 
            variants={itemVariants}
            className={`text-[2.5rem] sm:text-[12rem] tracking-widest text-[#C0A875] text-right mb-8 w-full sm:w-3/4 md:w-2/3 italic font-serif drop-shadow-[0_8px_8px_rgba(192,168,117,0.5)] text-shadow-lg`}
            style={{
              textShadow: '2px 2px 8px rgba(192, 168, 117, 0.4), -2px -2px 8px rgba(192, 168, 117, 0.4)'
            }}
          >
            Online store of artist Tatsiana Gromyko
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className={`text-[1.4rem] sm:text-[4rem] text-[#C0A875]/80 text-right w-full sm:w-2/3 md:w-1/2 italic ${playfair.className}`}
          >
            Unique artworks inspired by nature and emotion
          </motion.p>
        </motion.div>
      </section>

      {/* Основной контент */}
      <main>
        {/* Секция со слайдером */}
        <section className="relative z-10 -mt-[5vh]">
          <ImageSlider paintings={paintings} />
        </section>
      </main>

      {/* Футер */}
      <footer className="relative z-5 mt-[50px]">
        <div className="min-h-[200px] flex flex-col justify-end pb-12">
          <p className={`text-xl text-[#C0A875]/60 text-center ${playfair.className} italic mb-2`}>
            © 2025 Watercolor Gallery • все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}
