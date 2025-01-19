import React from 'react'

interface VideoProps {
  src: string;
  poster: string;
}

export default function AumentarVideo({src, poster}: VideoProps) {
  return (
    <video src={src} poster={poster} controls className="w-96 h-auto rounded-xl max-md:96">
      Seu navegador não suporta a tag de vídeo.
    </video>
  )
}
