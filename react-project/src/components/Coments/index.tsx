import styles from "./styles.module.css";
import useLike from "../../hooks/useLike";
import likeImg from "../../assets/Like.png";
import lixeiraImg from "../../assets/Trash.png";

interface ComentarioProps {
  foto: string;
  nome: string;
  hora: string;
  texto: string;
  initialLikes: number;
  onExcluir?: () => void;
}

export default function Comentario({
  foto,
  nome,
  hora,
  texto,
  initialLikes,
  onExcluir,
}: ComentarioProps) {
  const { likes, curtido, toggleLike } = useLike(initialLikes);

  return (
    <div className={styles.comentario}>
      <img className={styles.fotoPerfil} src={foto} alt={`Foto de ${nome}`} />

      <div className={styles.corpo}>
        <div className={styles.cabecalho}>
          <div>
            <h4 className={styles.nome}>{nome}</h4>
            <span className={styles.hora}>{hora}</span> {}
          </div>
          <button
            className={styles.botaoExcluir}
            onClick={onExcluir}
            title="Excluir comentário"
          >
            <img src={lixeiraImg} alt="Excluir" />
          </button>
        </div>

        <p className={styles.texto}>{texto}</p>

        {}
        <div className={`${styles.rodape} ${curtido ? styles.curtido : ""}`}>
          <button className={styles.botaoLike} onClick={toggleLike}>
            <img src={likeImg} alt="Like" />
          </button>
          <div className={styles.likeInfo}>
            <p>Like</p>
            <span className={styles.separador}>•</span>
            <span className={styles.likesCount}>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}