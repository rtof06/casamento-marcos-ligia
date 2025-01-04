import Image from "next/image";
import mapa from "@/public/img/mapa.jpg";
import rua from "@/public/img/rua.jpg";

export default function infoCerimonia() {
  return (
    <div>
      <section className="flex flex-col justify-center items-center">
        <h1 className="title py-5">Informações da cerimônia</h1>
        <div className="bg-main-color py-8 px-36 rounded-2xl text-center flex flex-col items-center">
          <h1 className="title">Local do evento</h1>
          <figure className="w-96 text-center p-6">
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
                className="rounded-xl hover:cursor-pointer shadow-2xl hover:shadow-lime-950 transition-all"
              />
            </a>
            <p className="font-textFont mt-4">
              Clique no mapa para ir ao Google Maps e veja sua rota.
            </p>
          </figure>
          <figure className="w-96 text-center">
            <Image src={rua} alt="Print da rua" className="rounded-xl" />
            <h2 className="text-3xl font-textFont pt-4">
              Sítio Vacance - Ibiúna
            </h2>
          </figure>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <h1 className="title py-5">Confirmação de presença</h1>
        <div className="bg-main-color py-8 px-36 rounded-2xl text-center flex flex-col items-center"></div>
      </section>
    </div>
  );
}
