"use client";

import logoNome from "../../public/img/LM - VERTICAL.png";
import Image from "next/image";
import fotoMenu from "../../public/img/foto-ligia-marcso.jpeg";
import foto1 from "../../public/img/Ligia e Marcos-101.jpeg";
import foto2 from "../../public/img/Ligia e Marcos-108.jpeg";
import foto3 from "../../public/img/Ligia e Marcos-114.jpeg";
import foto4 from "../../public/img/Ligia e Marcos-121.jpeg";
import foto5 from "../../public/img/Ligia e Marcos-15.jpeg";
import foto6 from "../../public/img/Ligia e Marcos-20.jpeg";
import foto7 from "../../public/img/Ligia e Marcos-25.jpeg";
import foto8 from "../../public/img/Ligia e Marcos-26.jpeg";
import foto9 from "../../public/img/Ligia e Marcos-36.jpeg";
import foto10 from "../../public/img/Ligia e Marcos-40.jpeg";
import foto11 from "../../public/img/Ligia e Marcos-43.jpeg";
import foto12 from "../../public/img/Ligia e Marcos-61.jpeg";
import CasalTimeline from "@/components/Timeline/CasalTimeline";
import Counter from "@/components/Counter/Counter";
import Carrossel from "@/components/Carrossel/Carrossel";
import { motion } from "framer-motion";
import Link from "next/link";

const imagens = [
  {
    src: foto1,
    alt: "Imagem de Marcos e Lígia se abraçando",
  },
  {
    src: foto2,
    alt: "Imagem de Marcos e Lígia se abraçando",
  },
  {
    src: foto3,
    alt: "Imagem de Marcos e Lígia se abraçando",
  },
  {
    src: foto4,
    alt: "Imagem de Marcos e Lígia se abraçando",
  },
  {
    src: foto5,
    alt: "Imagem de Marcos e Lígia se abraçando",
  },
  {
    src: foto6,
    alt: "Imagem de Marcos e Lígia se abraçando",
  },
  {
    src: foto7,
    alt: "Imagem de Marcos e Lígia se abraçando",
  },
  {
    src: foto8,
    alt: "Imagem de Marcos e Lígia se abraçando",
  },
  {
    src: foto9,
    alt: "Imagem de Marcos e Lígia se abraçando",
  },
  {
    src: foto10,
    alt: "Imagem de Marcos e Lígia se abraçando",
  },
  {
    src: foto11,
    alt: "Imagem de Marcos e Lígia se abraçando",
  },
  {
    src: foto12,
    alt: "Imagem de Marcos e Lígia se abraçando",
  },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="flex justify-between max-sm:justify-around items-center max-sm:flex-col h-screen max-sm:h-auto">
        <Image
          src={logoNome}
          alt="Nome Marcos & Lígia"
          className="max-sm:w-full 2xl:w-1/2 xl:w-full"
        />
        <Image
          src={fotoMenu}
          alt="Imagem de Marcos e Lígia se abraçando"
          className="w-3/5 mask-gradient-lg max-sm:rounded-none max-sm:w-full max-sm:mask-gradient-sm overflow-hidden"
        />
      </section>
      <div className="my-20 py-7 max-sm:my-0 bg-sec-green relative z-10 flex justify-center items-center flex-col">
        <Counter />
        <h1 className="bg-main-color p-5 rounded-md w-fit text-center text-3xl font-secTitleFont text-white mt-5">
          09/08/2025 às 10h
        </h1>
      </div>
      <section>
        <h1 className="title text-center text-third-green" id="historia-casal">
          História do Casal
        </h1>
        <p className="font-secTitleFont text-center">
          (Toque na imagem para ampliar)
        </p>
        <CasalTimeline />
      </section>
      <Carrossel images={imagens} />
      <section className="flex justify-center items-center m-10">
        <Link
          href="/infos-cerimonia"
          className="bg-sec-green p-5 text-2xl text-center max-sm:text-lg rounded-xl text-white font-secTitleFont hover:bg-third-green transition-all"
        >
          {" "}
          Saiba mais informações sobre a cerimônia{" "}
        </Link>
      </section>
    </motion.div>
  );
}
