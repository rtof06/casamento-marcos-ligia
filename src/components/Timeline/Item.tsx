import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { StaticImageData } from "next/image";
import AumentarImagem from "../AumentarImagem/AumentarImagem";

interface ItemProps {
  ano: string;
  titulo: string;
  img: string | StaticImageData;
  alt: string;
  texto: string;
}

export default function Item({ ano, titulo, img, texto, alt }: ItemProps) {
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
          <AumentarImagem img={img} alt={alt} texto={texto} />
          <p className="font-textFont px-10 py-2 max-md:px-0">{texto}</p>
        </div>
      </TimelineContent>
    </>
  );
}
