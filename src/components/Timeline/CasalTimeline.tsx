import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import Item from "./Item";
import fotoNamoro from "../../../public/img/foto-namoro.jpg"
import fotoPedido from "../../../public/img/foto-alianca-perto.jpeg"
import fotoNoivado from "../../../public/img/foto-noivado.jpg"

export default function CasalTimeline() {
  return (
    <Timeline position="alternate-reverse">
      <TimelineItem>
        <Item titulo="Primeiro registro" ano="2006" img={fotoNamoro} alt="foto de várias crianças em um encontro onde mostra os dois" texto="Esta foto reprensenta o primeiro registro dos dois juntos."/>
      </TimelineItem>
      <TimelineItem>
        <Item titulo="Amigos" ano="2023" img={fotoNamoro} alt="Nesta foto os dois estão juntos." texto="Nesta foto os dois estão juntos."/>
      </TimelineItem>
      <TimelineItem>
        <Item titulo="Namoro" ano="2023" img={fotoNamoro} alt="Nesta foto os dois estão juntos." texto="Nesta foto os dois estão juntos."/>
      </TimelineItem>
      <TimelineItem>
        <Item titulo="Pedido de Casamento" ano="2024" img={fotoPedido} alt="Nesta foto os dois estão juntos com a Lígia mostrando a aliança de noivado." texto="Nesta foto os dois estão juntos com a Lígia mostrando a aliança de noivado."/>
      </TimelineItem>
      <TimelineItem>
        <Item titulo="Almoço de Noivado" ano="2024" img={fotoNoivado} alt="foto dos dois" texto="Nesta foto os dois estão juntos."/>
      </TimelineItem>
    </Timeline>
  );
}
