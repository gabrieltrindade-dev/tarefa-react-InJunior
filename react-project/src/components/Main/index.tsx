import PerfilAdm from "../PefilPessoal";
import Posts from "../Posts"
import styles from "./styles.module.css"
import fotoC from "../../assets/fotoC.jpg"
import fotoH from "../../assets/fotoH.jpg"

export default function Main() {
    return(
        <main className={styles.main}>
            <PerfilAdm/>
            <div className={styles.posts}>
                <Posts foto={fotoC} cargo="Engenheiro" nome="Caio Mahmoud" paragrafo="fjdaslfjlasjflsjdsjflkajklfjdskl fjklafjdaslfjlasjflsjdsjflkajklfjdsklfjk ladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjdsjflk ajklfjdsklfjkladsjflkjflkdsjfjdslfjdsklf jdaslfjlasjflsjdsjflkajklfjdsklfjkladsjflkjflkdsjfjds lfjdsklfjdaslfjlasjflsjdsjflkajklfjdsklfj kladsjflkjflkdsjfjdslfjdsklfjdas lfjlasjflsjdsjflkajklfjdsklfjkladsjflkjf lkdsjfjdslfjdsklfjdaslfjlasjfls jdsjflkajklfjdsklfjkladsjflkjflkdsjfj dslfjdsklfjdaslfjlasjflsjdsjflkajklfjds klfjkladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjd sjflkajklfjdsklfjkladsjflkjflkdsj fjdslfjdskldsjflkjflkd sjfjdslfjdsklfjd jfjdaslfjlasjflsjdsjflkajklfjdskl fjklafjdaslfjlasjflsjdsjflkajklfjdsklfjk ladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjdsjflk ajklfjdsklfjkladsjflkjflkdsjfjdslfjdsklf jdaslfjlasjflsjdsjflkajklfjdsklfjkladsjflkjflkdsjfjds lfjdsklfjdaslfjlasjflsjdsjflkajklfjdsklfj kladsjflkjflkdsjfjdslfjdsklfjdas lfjlasjflsjdsjflkajklfjdsklfjkladsjflkjf lkdsjfjdslfjdsklfjdaslfjlasjfls jdsjflkajklfjdsklfjkladsjflkjflkdsjfj dslfjdsklfjdaslfjlasjflsjdsjflkajklfjds klfjkladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjd sjflkajklfjdsklfjkladsjflkjflkdsj fjdslfjdskldsjflkjflkd sjfjdslfjdsklfjds" hora="1h"/>
                <Posts foto={fotoH} cargo="Jornalista" nome="Henrique Pereira" paragrafo="fjdaslfjlasjflsjdsjflkajklfjdskl fjklafjdaslfjlasjflsjdsjflkajklfjdsklfjk ladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjdsjflk ajklfjdsklfjkladsjflkjflkdsjfjdslfjdsklf jdaslfjlasjflsjdsjflkajklfjdsklfjkladsjflkjflkdsjfjds lfjdsklfjdaslfjlasjflsjdsjflkajklfjdsklfj kladsjflkjflkdsjfjdslfjdsklfjdas lfjlasjflsjdsjflkajklfjdsklfjkladsjflkjf lkdsjfjdslfjdsklfjdaslfjlasjfls jdsjflkajklfjdsklfjkladsjflkjflkdsjfj dslfjdsklfjdaslfjlasjflsjdsjflkajklfjds klfjkladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjd sjflkajklfjdsklfjkladsjflkjflkdsj fjdslfjdskldsjflkjflkd sjfjdslfjdsklfjd jfjdaslfjlasjflsjdsjflkajklfjdskl fjklafjdaslfjlasjflsjdsjflkajklfjdsklfjk ladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjdsjflk ajklfjdsklfjkladsjflkjflkdsjfjdslfjdsklf jdaslfjlasjflsjdsjflkajklfjdsklfjkladsjflkjflkdsjfjds lfjdsklfjdaslfjlasjflsjdsjflkajklfjdsklfj kladsjflkjflkdsjfjdslfjdsklfjdas lfjlasjflsjdsjflkajklfjdsklfjkladsjflkjf lkdsjfjdslfjdsklfjdaslfjlasjfls jdsjflkajklfjdsklfjkladsjflkjflkdsjfj dslfjdsklfjdaslfjlasjflsjdsjflkajklfjds klfjkladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjd sjflkajklfjdsklfjkladsjflkjflkdsj fjdslfjdskldsjflkjflkd sjfjdslfjdsklfjds" hora="1h" 
                comentariosIniciais={[
                    {
                    foto: fotoC,
                    nome: "João Vitor Seigarro",
                    hora: "2h",
                    texto: "Ótimo post! Muito útil"
                    },
                    {
                    foto: fotoH,
                    nome: "Xavier",
                    hora: "1h",
                    texto: "Muito bom!"
                    },
                    {
                    foto: fotoC,
                    nome: "Ricardo",
                    hora: "30min",
                    texto: "Excelente, parabéns!"
                    }
                ]}/>
            </div>
        </main>
    )
}