"use client";

import Image from "next/image";
import mapa from "../../../public/img/mapa.jpg";
import rua from "../../../public/img/rua.png";
import praca from "../../../public/img/praca.jpeg";
import saoRoque from "../../../public/img/saoroque.jpeg";
import fotoPresente from "../../../public/img/presente.jpeg";
import BuscaConvidados from "@/components/BuscaConvidados/BuscaConvidados";
import AumentarImagem from "@/components/Aumentar/AumentarImagem";
import { motion } from "framer-motion";

export default function infoCerimonia() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="flex flex-col justify-center items-center">
        <h1 className="title pt-10 pb-5 text-third-green text-center max-md:pt-20 max-md:pb-5 max-md:text-5xl">
          Informações da cerimônia
        </h1>
        <div className="py-8 w-full text-center flex flex-col  items-center text-white bg-main-color">
          <h1 className="title text-4xl">Local do evento</h1>
          <div className="flex items-center justify-center max-md:flex-col ">
            <figure className="w-96 text-center p-6 max-md:flex max-md:flex-col max-md:items-center">
              <a
                href="https://www.google.com/maps/dir//Estrada+do+Vinho,+10051+-+Canguera,+S%C3%A3o+Roque+-+SP,+18145-002/@-23.5634688,-46.6583552,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cf736bf50bbbf5:0xb4cebfec2cba6833!2m2!1d-47.1564046!2d-23.6119997?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={mapa}
                  alt="Print da localização"
                  className="rounded-xl hover:cursor-pointer shadow-2xl hover:shadow-black hover:shadow-md transition-all w-96 max-xl:w-screen"
                />
              </a>
              <h2 className="text-xl font-textFont">
                Estrada do Vinho (Spv-077), 10051 - Canguera, São Roque - SP
              </h2>
              <p className="font-textFont mt-4">
                Clique no mapa para ir ao Google Maps e veja sua rota.
              </p>
            </figure>
            <figure className="w-80 md:w-72 text-center max-md:flex max-md:flex-col max-md:items-center">
              <AumentarImagem img={rua} alt="Foto da rua" />
              <h2 className="text-xl font-textFont pt-4">
                Henrique Restaurante - São Roque, SP
              </h2>
              <h1 className="bg-main-color p-5 rounded-md w-fit text-center text-3xl font-secTitleFont text-white mt-5">
                09/08/2025 às 10h
              </h1>
            </figure>
          </div>
        </div>
        <div className="py-8 w-full text-center flex flex-col  items-center text-white bg-main-color">
          <h1 className="title text-4xl">Sobre São Roque</h1>
          <div className="flex items-center justify-center max-md:flex-col ">
            <figure className="w-96 text-center p-6 max-md:flex max-md:flex-col max-md:items-center">
              <a
                href="https://www.instagram.com/dicasdesaoroque?igsh=MWN3NW0yczBidHE4OA=="
                target="__blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={saoRoque}
                  alt="Imagem do centro de sao roque"
                  className="rounded-xl hover:cursor-pointer shadow-2xl hover:shadow-black hover:shadow-md transition-all w-96 max-xl:w-screen"
                />
              </a>
              <h2 className="text-xl font-textFont">
                Instagram da cidade para turismo
              </h2>
              <p className="font-textFont mt-4">
                Clique na imagem para ir ao Instagram @dicasdesaoroque, para ver
                pontos turísticos da cidade.
              </p>
            </figure>
            <figure className="w-80 md:w-72 text-center max-md:flex max-md:flex-col max-md:items-center">
              <AumentarImagem img={praca} alt="Foto da rua" />
              <h2 className="text-xl font-textFont pt-4">
                Praça do centro de São Roque
              </h2>
              <a
                className="font-textFont text-white underline"
                target="__blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/dir//Centro,+S%C3%A3o+Roque+-+SP,+18130-290/@-23.5305403,-47.2178983,33356m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x94cf0d553b3aaaab:0xa7dfd9bdabd1cd5d!2m2!1d-47.1354967!2d-23.530562?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
              >
                Veja a rota no mapa para o local por aqui
              </a>
            </figure>
          </div>
        </div>
      </section>
      <section
        className="flex flex-col justify-center items-center pt-10"
        id="confirmacao-presenca"
      >
        <h1 className="title py-5 text-center text-third-green">
          Confirmação de presença
        </h1>
        <BuscaConvidados />
      </section>
      <section className="text-center py-10" id="lista-presentes">
        <h1 className="title py-5 text-third-green">Lista de presentes</h1>
        <figure className="flex flex-col items-center">
          <a
            href="https://www.mercadolivre.com.br/presentes/casamento-ligia-e-marcos-s6yvp"
            target="__blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-sec-green p-5 rounded-2xl hover:shadow-2xl transition-all"
          >
            <Image
              src={fotoPresente}
              alt="Foto de um presente"
              width={200}
              height={200}
              className="rounded-xl shadow-2xl hover:animate-pulse"
            />
            <h2 className="font-textFont text-2xl py-2 text-backgound-color text-center">
              Lista de Presentes no Mercado Livre
            </h2>
          </a>
        </figure>
      </section>
    </motion.div>
  );
}
