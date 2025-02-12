'use client'
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ImageProps {
  img: string | StaticImageData;
  alt: string;
  texto?: string;
}

export default function AumentarImagem({ img, alt, texto }: ImageProps) {
  const [destaque, setDestaque] = useState(false);

  function handleImageClick() {
    setDestaque(!destaque);
  }

  return (
    <div
      className={`${
        destaque ? "fixed inset-0 flex max-md:flex-col justify-center items-center bg-black bg-opacity-80 z-50" : ""
      }`}
      onClick={() => destaque && setDestaque(false)} 
    >
      <Image
        src={img}
        alt={alt}
        className={`cursor-pointer w-96 ${
          destaque ? "w-3/6 m-10 max-sm:w-full max-sm:px-2 h-auto" : "rounded-xl max-md:96 hover:shadow-2xl  transition-all duration-300"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          handleImageClick();
        }}
      />
      <p className={`${destaque ? "text-backgound-color font-textFont mx-5 text-xl" : "hidden"}`}>{texto}</p>
    </div>
  );
}
