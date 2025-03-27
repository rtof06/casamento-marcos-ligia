'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'

type ImageCarouselProps = {
  images: {
    src: StaticImageData
    alt: string
  }[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const offsetX = info.offset.x
    if (offsetX < -100) {
      goToNext()
    } else if (offsetX > 100) {
      goToPrevious()
    }
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg my-10 px-4 select-none">
      <div className="relative w-full flex justify-center items-center bg-black bg-opacity-10 rounded-xl h-[80vh]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            custom={direction}
            initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? 200 : -200, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full flex justify-center items-center"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-contain rounded-lg"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Botões de navegação */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full transition-all z-10"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full transition-all z-10"
      >
        <ChevronRight />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-110' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
