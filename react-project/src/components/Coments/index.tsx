import styles from "./styles.module.css";
import useLike from "../../hooks/useLike";
import likeImg from "../../assets/Like.png"
import lixeiraImg from "../../assets/Trash.png"

interface ComentarioProps {
  foto: string;
  nome: string;
  hora: string;
  texto: string;
  onExcluir?: () => void;
}

export default function Comentario({ foto, nome, hora, texto, onExcluir }: ComentarioProps) {
  const { likes, curtido, toggleLike } = useLike();

  return (
    <div className={styles.comentario}>
      <img className={styles.fotoPerfil} src={foto} alt={`Foto de ${nome}`} />

      <div className={styles.corpo}>
        <div className={styles.cabecalho}>
          <div>
            <h4 className={styles.nome}>{nome}</h4>
            <span className={styles.hora}>Cerca de {hora}</span>
          </div>
          <button className={styles.botaoExcluir} onClick={onExcluir} title="Excluir comentário">
            <img src={lixeiraImg} alt="Excluir" />
          </button>
        </div>

        <p className={styles.texto}>{texto}</p>

        <div className={styles.rodape}>
          <button
            className={`${styles.botaoLike} ${curtido ? styles.curtido : ""}`}
            onClick={toggleLike}
          >
            <img src={likeImg} alt="Like" />
            <span>{likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
