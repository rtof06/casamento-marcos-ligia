import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { StaticImageData } from "next/image";
import AumentarImagem from "../Aumentar/AumentarImagem";

interface ItemProps {
  ano: string;
  titulo: string;
  media: {
    type: "image" | "video";
    src: string | StaticImageData;
    alt?: string;
    poster?: string;
  };
  texto: string;
}

export default function Item({ ano, titulo, media, texto }: ItemProps) {
  return (
    <>
      <TimelineSeparator>
        <TimelineDot className="bg-main-color hover:p-2 shadow-lime-600 hover:shadow-2xl transition-all" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <div>
          <h1 className="font-secTitleFont font-normal text-2xl">{titulo}</h1>
          <h2 className="font-textFont">{ano}</h2>
        </div>
        <div className="flex flex-col items-center text-center">
          {media.type === "image" ? (
            <AumentarImagem
              img={media.src}
              alt={media.alt || "Imagem"}
              texto={texto}
            />
          ) : (
            <video
              controls
              poster={media.poster || ""}
              className="max-w-full h-auto rounded-lg shadow-lg w-4/6"
            >
              <source src={media.src as string} type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          )}
          <p className="font-textFont px-10 py-2 max-md:px-0">{texto}</p>
        </div>
      </TimelineContent>
    </>
  );
}
