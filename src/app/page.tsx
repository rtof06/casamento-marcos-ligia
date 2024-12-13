import Image from "next/image";
import fotoMenu from "@/public/img/foto-menu.jpg";
import { Cinzel_Decorative } from "next/font/google";

// const cinzel = Cinzel({subsets: ['latin']});
const cinzelDecorative = Cinzel_Decorative({subsets: ['latin'], weight: ['400']});

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen">
      <h1 className={`${cinzelDecorative.className} text-4xl text-center`}>Marcos & Lígia</h1>
      <Image
        src={fotoMenu}
        alt="Imagem de Marcos e Lígia se abraçando"
        className="w-auto"
      />
    </div>
  );
}
