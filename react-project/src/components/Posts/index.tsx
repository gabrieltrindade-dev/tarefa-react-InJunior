import styles from './styles.module.css'

interface PostsProps {
    foto: string;
    nome: string;
    cargo: string;
    paragrafo: string;
    hora: string;
}

export default function Posts(props: PostsProps) {
    return(
        <div className={styles.post}>
            <div className={styles.identificacao}>
                <div className={styles.perfil}> 
                    <img src={props.foto} alt="Foto de perfil" />
                    <div className={styles.textoPerfil}>
                        <h3>{props.nome}</h3>
                        <p>{props.cargo}</p>
                    </div>
                </div>
                <p id={styles.horaPost}>Publicado há {props.hora}</p>
            </div>

             <div className={styles.textoPost}>
                <p>{props.paragrafo}</p>
            </div>

            <form className={styles.form}>
                <h3>Deixe seu feedback</h3>
                <textarea placeholder="Escreva um comentário..." /> 
                <button type="submit">Comentar</button>
            </form>
        </div>
    )
}