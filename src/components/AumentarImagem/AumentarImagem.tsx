'use client'
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ImageProps {
  img: StaticImageData;
  alt: string;
}

export default function AumentarImagem({ img, alt }: ImageProps) {
  const [destaque, setDestaque] = useState(false);

  function handleImageClick() {
    setDestaque(!destaque);
  }

  return (
    <div
      className={`${
        destaque ? "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50" : ""
      }`}
      onClick={() => destaque && setDestaque(false)} 
    >
      <Image
        src={img}
        alt={alt}
        className={`cursor-pointer ${
          destaque ? "w-1/2 max-sm:w-full max-sm:px-2 h-auto" : "rounded-xl max-md:96"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          handleImageClick();
        }}
      />
    </div>
  );
}
