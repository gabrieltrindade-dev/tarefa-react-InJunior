import PerfilAdm from "../PefilPessoal";
import Posts from "../Posts";
import styles from "./styles.module.css";
import fotoC from "../../assets/caio.jpg";
import fotoH from "../../assets/henrique.jpg";
import fotoR from "../../assets/ric.jpg";
import fotoS from "../../assets/seiga.jpg";
import fotoX from "../../assets/xavi.jpg";

export default function Main() {
  const horaAtual = new Date().toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <main className={styles.main}>
      <PerfilAdm />
      <div className={styles.posts}>
        <Posts
          foto={fotoC}
          cargo="Engenheiro"
          nome="Caio Mahmoud"
          paragrafo="Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!"
          hora={horaAtual}
        />
        <Posts
          foto={fotoH}
          cargo="Jornalista"
          nome="Henrique Pereira"
          paragrafo="Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!"
          hora={horaAtual}
          comentariosIniciais={[
            {
              id: 1,
              foto: fotoS,
              nome: "João Vitor Seigarro",
              hora: horaAtual,
              texto: "Ótimo post! Muito útil",
              initialLikes: 7,
            },
            {
              id: 2,
              foto: fotoX,
              nome: "Xavier",
              hora: horaAtual,
              texto: "Muito bom!",
              initialLikes: 4,
            },
            {
              id: 3,
              foto: fotoR,
              nome: "Ricardo",
              hora: horaAtual,
              texto: "Excelente, parabéns!",
              initialLikes: 5,
            },
          ]}
        />
      </div>
    </main>
  );
}