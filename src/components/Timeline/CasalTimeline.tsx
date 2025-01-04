import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import Item from "./Item";
import foto1 from "@/public/img/foto-ligia-marcso.jpeg"

export default function CasalTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <Item titulo="Primeiro registro" ano="2006" img={foto1} alt="foto dos dois" texto="Esta foto reprensenta o primeiro registro dos dois juntos."/>
      </TimelineItem>
      <TimelineItem>
        <Item titulo="Amizade Intencional" ano="2023" img={foto1} alt="foto dos dois" texto="Nesta foto os dois estão juntos."/>
      </TimelineItem>
      <TimelineItem>
        <Item titulo="Pedido de Casamento" ano="2024" img={foto1} alt="foto dos dois" texto="Nesta foto os dois estão juntos."/>
      </TimelineItem>
      <TimelineItem>
        <Item titulo="Almoço de Noivado" ano="2024" img={foto1} alt="foto dos dois" texto="Nesta foto os dois estão juntos."/>
      </TimelineItem>
    </Timeline>
  );
}
