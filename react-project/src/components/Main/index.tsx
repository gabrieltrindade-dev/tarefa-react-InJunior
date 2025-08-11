import PerfilAdm from "../PefilPessoal";
import Posts from "../Posts";
import styles from "./styles.module.css";
import fotoC from "../../assets/caio.jpg";
import fotoH from "../../assets/henrique.jpg";
import fotoR from "../../assets/ric.jpg";
import fotoS from "../../assets/seiga.jpg";
import fotoX from "../../assets/xavi.jpg";

export default function Main() {
  // Gera a hora atual no formato 'HH:mm'
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
          hora={horaAtual} // Passando a hora atual para o Post
        />
        <Posts
          foto={fotoH}
          cargo="Jornalista"
          nome="Henrique Pereira"
          paragrafo="Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!"
          hora={horaAtual} // Passando a hora atual para o Post
          comentariosIniciais={[
            {
              id: 1,
              foto: fotoS,
              nome: "João Vitor Seigarro",
              hora: horaAtual, // Passando a hora atual para o Comentário
              texto: "Ótimo post! Muito útil",
              initialLikes: 7,
            },
            {
              id: 2,
              foto: fotoX,
              nome: "Xavier",
              hora: horaAtual, // Passando a hora atual para o Comentário
              texto: "Muito bom!",
              initialLikes: 4,
            },
            {
              id: 3,
              foto: fotoR,
              nome: "Ricardo",
              hora: horaAtual, // Passando a hora atual para o Comentário
              texto: "Excelente, parabéns!",
              initialLikes: 5,
            },
          ]}
        />
      </div>
    </main>
  );
}