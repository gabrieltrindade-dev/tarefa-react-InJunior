import paisagem from '../../assets/paisagem.jpg'
import foto from '../../assets/fotoadm.jpg'
import styles from './styles.module.css'

export default function PerfilAdm() {
    return(
        <div className={styles.cardAdm}>
            <img id={styles.paisagem} src={paisagem} alt="Paisagem" />

            <div className={styles.fotoEtexto}>

                <img id={styles.fotoAdm} src={foto} alt="Foto Adm" />
                <div className={styles.descricao}>
                    <h2>Gabriel Trindade</h2>
                    <p>Dev front-end</p>
                </div>

            </div>
        </div>
    )
}