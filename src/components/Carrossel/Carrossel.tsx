"use client";

import Image, { StaticImageData } from "next/image";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

type ImageCarouselProps = {
  images: {
    src: StaticImageData;
    alt: string;
  }[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        className="max-w-lg w-full h-[500px] border-hover-color border-5 rounded-xl bg-slate-100"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center h-full">
            <div className="flex justify-center items-center w-full h-full p-4">
              <Image
                src={image.src}
                alt={image.alt}
                className="object-contain rounded-md"
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
