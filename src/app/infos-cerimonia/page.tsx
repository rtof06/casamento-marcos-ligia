import Image from "next/image";
import mapa from "@/public/img/mapa.jpg";
import rua from "@/public/img/rua.jpg";

export default function infoCerimonia() {
  return (
    <div>
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-5xl p-8">Informações da cerimônia</h1>
        <div className="bg-main-color p-8 rounded-2xl text-center">
          <h1 className="">Local do evento</h1>
          <figure className="w-96 text-center p-6">
            <h2>Rua Ceará, 15 / Sítio Vacance - Ibiúna</h2>
            <Image src={mapa} alt="Print da localização" />
          </figure>
          <figure className="w-96 text-center">
            <a href="https://maps.app.goo.gl/SnuKypvJJRY3z3Wc6?g_st=aw" target="__blank" rel="noopener noreferrer" >
              <Image
                src={rua}
                alt="Print da rua"
                className="rounded-xl hover:cursor-pointer hover:shadow-lg transition-all"
              />
              </a>
              <h2>Se precisar, clique na rua para ir no Google Street</h2>            
          </figure>
        </div>
      </section>
    </div>
  );
}
