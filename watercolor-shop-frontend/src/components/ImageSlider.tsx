"use client";

import { useState } from "react";
import Image from "next/image";
import { Playfair_Display } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const playfair = Playfair_Display({ 
  subsets: ['latin', 'cyrillic'],
  style: ['italic', 'normal']
});

interface Painting {
  title: string;
  price: string;
  image: string;
}

interface ImageSliderProps {
  paintings: Painting[];
}

const titles = {
  "Сияние заката": "Sunset Glow",
  "Лесная тишина": "Forest Silence",
  "Голубые цветы": "Blue Flowers",
  "Winter": "Winter",
  "Flowers": "Flowers"
};

export default function ImageSlider({ paintings }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isImageError, setIsImageError] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      y: 100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 30 },
        y: { type: "spring", stiffness: 200, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      y: 100,
      opacity: 0,
      scale: 0.95
    })
  };

  const getPrevIndex = (index: number) => (index - 1 + paintings.length) % paintings.length;
  const getNextIndex = (index: number) => (index + 1) % paintings.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(getNextIndex(currentIndex));
    setIsImageError(false);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(getPrevIndex(currentIndex));
    setIsImageError(false);
  };

  return (
    <div className="w-full min-h-[800px] flex items-center justify-center py-32 relative">
      <div className="w-full max-w-[2000px] px-4 pb-24">
        <div className="relative flex items-center justify-center gap-32">
          {/* Боковая картина (предыдущая) */}
          <div 
            className="relative w-[126px] aspect-[4/5] opacity-40 hover:opacity-70 transition-opacity cursor-pointer"
            onClick={prevSlide}
          >
            <div className="relative w-full h-full">
              <div className="absolute -inset-[10%] z-20 pointer-events-none">
                <Image
                  src="/frame/frame-wood-gray.png"
                  alt="Рамка"
                  fill
                  priority
                  className="object-contain brightness-[0.75] drop-shadow-[12px_12px_4px_rgba(0,0,0,0.5)] drop-shadow-[24px_12px_6px_rgba(0,0,0,0.6)] drop-shadow-[12px_12px_px_rgba(0,0,0,3)]"
                />
              </div>
              <div className="absolute inset-[10%] z-10 bg-white overflow-hidden shadow-2xl drop-shadow-[15px_15px_4px_rgba(0,0,0,0.4)] drop-shadow-[25px_25px_25px_rgba(0,0,0,0.5)]">
                <Image
                  src={paintings[getPrevIndex(currentIndex)].image}
                  alt="Previous"
                  fill
                  sizes="126px"
                  className="object-cover p-1"
                />
              </div>
            </div>
          </div>

          {/* Центральная картина с анимацией */}
          <div className="relative w-[490px] aspect-[4/5]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
              >
                <div className="relative w-full h-full">
                  {/* Рамка */}
                  <div className="absolute -inset-[10%] z-20 pointer-events-none">
                    <Image
                      src="/frame/frame-wood-gray.png"
                      alt="Рамка"
                      fill
                      priority
                      className="object-contain brightness-[0.75] drop-shadow-[12px_12px_4px_rgba(0,0,0,0.5)] drop-shadow-[24px_12px_6px_rgba(0,0,0,0.6)] drop-shadow-[12px_12px_px_rgba(0,0,0,3)]"
                    />
                  </div>
                  {/* Картина */}
                  <div className="absolute inset-[10%] z-10 bg-white overflow-hidden shadow-2xl drop-shadow-[20px_20px_4px_rgba(0,0,0,0.5)] drop-shadow-[35px_35px_35px_rgba(0,0,0,0.6)]">
                    <Image
                      src={paintings[currentIndex].image}
                      alt={paintings[currentIndex].title}
                      fill
                      priority
                      className="object-cover p-1"
                      onError={() => setIsImageError(true)}
                    />
                    {isImageError && (
                      <div className="absolute inset-0 flex items-center justify-center text-red-500">
                        Изображение не найдено
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Боковая картина (следующая) */}
          <div 
            className="relative w-[126px] aspect-[4/5] opacity-40 hover:opacity-70 transition-opacity cursor-pointer"
            onClick={nextSlide}
          >
            <div className="relative w-full h-full">
              <div className="absolute -inset-[10%] z-20 pointer-events-none">
                <Image
                  src="/frame/frame-wood-gray.png"
                  alt="Рамка"
                  fill
                  priority
                  className="object-contain brightness-[0.75] drop-shadow-[12px_12px_4px_rgba(0,0,0,0.5)] drop-shadow-[24px_12px_6px_rgba(0,0,0,0.6)] drop-shadow-[12px_12px_px_rgba(0,0,0,3)]"
                />
              </div>
              <div className="absolute inset-[10%] z-10 bg-white overflow-hidden shadow-2xl drop-shadow-[15px_15px_4px_rgba(0,0,0,0.4)] drop-shadow-[25px_25px_25px_rgba(0,0,0,0.5)]">
                <Image
                  src={paintings[getNextIndex(currentIndex)].image}
                  alt="Next"
                  fill
                  sizes="126px"
                  className="object-cover p-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Название */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className={`text-7xl italic text-[#C0A875] ${playfair.className} mb-8`}>
            {titles[paintings[currentIndex].title as keyof typeof titles]}
          </h3>
        </motion.div>

        {/* Индикаторы */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-1px] flex justify-center gap-6">
          {paintings.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-4 h-4 rounded-full transition-colors border-2 ${
                index === currentIndex
                  ? "bg-[#C0A875] border-[#C0A875]"
                  : "bg-transparent border-[#C0A875] hover:bg-[#C0A875]/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
