import Image from "next/image";
import fotoMenu from "../../public/img/foto-ligia-marcso.jpeg";
import CasalTimeline from "@/components/Timeline/CasalTimeline";
import Counter from "@/components/Counter/Counter";

export default function Home() {
  return (
    <div>
      <section className="flex justify-around items-center p-8 max-sm:flex-col h-screen">
        <h1 className="font-titleFont text-6xl max-sm:text-center max-sm:text-7xl">
          Marcos & Lígia
        </h1>
        <Image
          src={fotoMenu}
          alt="Imagem de Marcos e Lígia se abraçando"
          className="w-1/3 rounded-3xl max-sm:w-96"
        />
      </section>
      <div className="my-20 py-7 bg-sec-green">
        <Counter />
      </div>
      <section>
        <h1 className="title text-center" id="historia-casal">História do Casal</h1>
        <CasalTimeline />
      </section>
    </div>
  );
}
