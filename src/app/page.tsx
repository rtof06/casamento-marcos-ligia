"use client"

import logoNome from "../../public/img/LM - VERTICAL.png"
import Image from "next/image";
import fotoMenu from "../../public/img/foto-ligia-marcso.jpeg";
import CasalTimeline from "@/components/Timeline/CasalTimeline";
import Counter from "@/components/Counter/Counter";
import {motion} from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <section className="flex justify-center items-center p-8 max-sm:p-0 max-sm:flex-col h-screen">
        <Image src={logoNome} alt="Nome Marcos & Lígia" className="max-sm:w-full"/>
        <Image
          src={fotoMenu}
          alt="Imagem de Marcos e Lígia se abraçando"
          className="w-1/3 rounded-3xl max-sm:rounded-none max-sm:w-full max-sm:mask-gradient"
        />
      </section>
      <div className="my-20 py-7 max-sm:my-0 bg-sec-green">
        <Counter />
      </div>
      <section>
        <h1 className="title text-center text-third-green" id="historia-casal">História do Casal</h1>
        <p className="font-secTitleFont text-center">(Toque na imagem para ampliar)</p>
        <CasalTimeline />
      </section>
      <section className="flex justify-center items-center m-10">
        <Link href="/infos-cerimonia" className="bg-sec-green p-5 text-2xl text-center max-sm:text-lg rounded-xl text-white font-secTitleFont hover:bg-third-green transition-all" > Saiba mais informações sobre a cerimônia </Link>
      </section>
    </motion.div>
  );
}
