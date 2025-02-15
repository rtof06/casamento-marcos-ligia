import Image from "next/image";
import logoInsta from "../../../public/img/Instagram_icon.png";

export default function Footer() {
  return (
    <footer className="flex bg-main-color text-white p-4 font-textFont justify-center">
      <div className="redes flex flex-col text-center justify-center items-center">
        <p className="text-2xl">Redes sociais:</p>
        <div className="links flex gap-4 items-center justify-center">
          <a
            href="https://www.instagram.com/marcosfavorito/"
            target="__blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={logoInsta}
              alt="Instagram Marcos"
              width={30}
              height={30}
            />
            <p>Marcos Paulo</p>
          </a>
          <a
            href="https://www.instagram.com/licavallari/"
            target="__blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={logoInsta}
              alt="Instagram Lígia"
              width={30}
              height={30}
            />
            <p>Lígia Cavallari</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
