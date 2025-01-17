import Image from "next/image";
import mapa from "../../../public/img/mapa.jpg";
import rua from "../../../public/img/rua.jpg";
import fotoPresente from "../../../public/img/presente.jpeg";
import BuscaConvidados from "@/components/BuscaConvidados/BuscaConvidados";
import AumentarImagem from "@/components/AumentarImagem/AumentarImagem";

export default function infoCerimonia() {
  return (
    <div>
      <section className="flex flex-col justify-center items-center">
        <h1 className="title pt-10 pb-5 text-center max-md:pt-20 max-md:pb-0 max-md:text-4xl">
          Informações da cerimônia
        </h1>
        <div className="py-8 w-full rounded-2xl text-center flex flex-col items-center">
          <h1 className="title text-4xl">Local do evento</h1>
          <div className="flex items-center justify-center max-md:flex-col">
            <figure className="w-96 text-center p-6 max-md:flex max-md:flex-col max-md:items-center">
              <h2 className="text-xl font-textFont">
                R. Ceará, 15 - Ressaca, Ibiúna
              </h2>
              <a
                href="https://www.google.com/maps/dir//-23.6721922,-47.303065"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={mapa}
                  alt="Print da localização"
                  className="rounded-xl hover:cursor-pointer shadow-2xl hover:shadow-black hover:shadow-md transition-all max-sm:w-64"
                />
              </a>
              <p className="font-textFont mt-4">
                Clique no mapa para ir ao Google Maps e veja sua rota.
              </p>
            </figure>
            <figure className="w-96 text-center max-md:flex max-md:flex-col max-md:items-center">
              <AumentarImagem img={rua} alt="Foto da rua" />
              <h2 className="text-xl font-textFont pt-4">
                Sítio Vacance - Ibiúna
              </h2>
            </figure>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <h1 className="title py-5 text-center">Confirmação de presença</h1>
        <BuscaConvidados />
      </section>
      <section className="text-center py-10" id="lista-presentes">
        <h1 className="title py-5">Lista de presentes</h1>
        <figure className="flex flex-col items-center">
          <a
            href="[link mercado livre]"
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
    </div>
  );
}
