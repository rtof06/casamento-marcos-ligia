import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import Item from "./Item";
import fotoKid from "../../../public/img/foto-encontro.jpg"
import fotoAmigo from "../../../public/img/foto-amigo.jpg"
import fotoNamoro from "../../../public/img/foto-namoro.jpg"
import fotoPedido from "../../../public/img/foto-alianca-perto.jpeg"
import fotoNoivado from "../../../public/img/foto-noivado.jpg"

export default function CasalTimeline() {
  return (
    <Timeline position="alternate-reverse">
      <TimelineItem>
        <Item titulo="Primeiro registro" ano="2006" img={fotoKid} alt="foto de várias crianças em um encontro onde mostra os dois" texto="Observe bem esta foto. Observou? Agora identifique um moleque saindo do meio mato e uma menina de regata laranja. Esses são o Marcos e a Lígia."/>
      </TimelineItem>
      <TimelineItem>
        <Item titulo="Amigos" ano="2023" img={fotoAmigo} alt="Nesta foto os dois estão juntos." texto="Esta foto foi tirada no Imersão, retiro de 1 semana do Grupo. Podemos reconhecer o Marcos Paulo sem barba e aparelho logo atrás da Lígia, quando eles nem imaginavam que iriam casar um dia."/>
      </TimelineItem>
      <TimelineItem>
        <Item titulo="Namoro" ano="2023" img={fotoNamoro} alt="Nesta foto os dois estão juntos." texto="Aqui foi a primeira foto postava por eles, anunciando que estavam namorando."/>
      </TimelineItem>
      <TimelineItem>
        <Item titulo="Pedido de Casamento" ano="2024" img={fotoPedido} alt="Nesta foto os dois estão juntos com a Lígia mostrando a aliança de noivado." texto="Nesta foto os dois estão juntos com a Lígia mostrando a aliança de noivado."/>
      </TimelineItem>
      <TimelineItem>
        <Item titulo="Almoço de Noivado" ano="2024" img={fotoNoivado} alt="foto dos dois" texto="Esse foi o dia do almoço de noivado, onde pudemos louvar a Deus, orar e comer todos juntos reunidos."/>
      </TimelineItem>
    </Timeline>
  );
}
