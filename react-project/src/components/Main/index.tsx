import PerfilAdm from "../PefilPessoal";
import Posts from "../Posts"
import styles from "./styles.module.css"
import foto1post from "../../assets/fotoadm.jpg"
import foto2post from "../../assets/paisagem.jpg"

export default function Main() {
    return(
        <main className={styles.main}>
            <PerfilAdm/>
            <div className={styles.posts}>
                <Posts foto={foto1post} cargo="Engenheiro" nome="Caio Mahmoud" paragrafo="fjdaslfjlasjflsjdsjflkajklfjdskl fjklafjdaslfjlasjflsjdsjflkajklfjdsklfjk ladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjdsjflk ajklfjdsklfjkladsjflkjflkdsjfjdslfjdsklf jdaslfjlasjflsjdsjflkajklfjdsklfjkladsjflkjflkdsjfjds lfjdsklfjdaslfjlasjflsjdsjflkajklfjdsklfj kladsjflkjflkdsjfjdslfjdsklfjdas lfjlasjflsjdsjflkajklfjdsklfjkladsjflkjf lkdsjfjdslfjdsklfjdaslfjlasjfls jdsjflkajklfjdsklfjkladsjflkjflkdsjfj dslfjdsklfjdaslfjlasjflsjdsjflkajklfjds klfjkladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjd sjflkajklfjdsklfjkladsjflkjflkdsj fjdslfjdskldsjflkjflkd sjfjdslfjdsklfjd jfjdaslfjlasjflsjdsjflkajklfjdskl fjklafjdaslfjlasjflsjdsjflkajklfjdsklfjk ladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjdsjflk ajklfjdsklfjkladsjflkjflkdsjfjdslfjdsklf jdaslfjlasjflsjdsjflkajklfjdsklfjkladsjflkjflkdsjfjds lfjdsklfjdaslfjlasjflsjdsjflkajklfjdsklfj kladsjflkjflkdsjfjdslfjdsklfjdas lfjlasjflsjdsjflkajklfjdsklfjkladsjflkjf lkdsjfjdslfjdsklfjdaslfjlasjfls jdsjflkajklfjdsklfjkladsjflkjflkdsjfj dslfjdsklfjdaslfjlasjflsjdsjflkajklfjds klfjkladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjd sjflkajklfjdsklfjkladsjflkjflkdsj fjdslfjdskldsjflkjflkd sjfjdslfjdsklfjds" hora="1h"/>
                <Posts foto={foto2post} cargo="Jornalista" nome="Henrique Pereira" paragrafo="fjdaslfjlasjflsjdsjflkajklfjdskl fjklafjdaslfjlasjflsjdsjflkajklfjdsklfjk ladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjdsjflk ajklfjdsklfjkladsjflkjflkdsjfjdslfjdsklf jdaslfjlasjflsjdsjflkajklfjdsklfjkladsjflkjflkdsjfjds lfjdsklfjdaslfjlasjflsjdsjflkajklfjdsklfj kladsjflkjflkdsjfjdslfjdsklfjdas lfjlasjflsjdsjflkajklfjdsklfjkladsjflkjf lkdsjfjdslfjdsklfjdaslfjlasjfls jdsjflkajklfjdsklfjkladsjflkjflkdsjfj dslfjdsklfjdaslfjlasjflsjdsjflkajklfjds klfjkladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjd sjflkajklfjdsklfjkladsjflkjflkdsj fjdslfjdskldsjflkjflkd sjfjdslfjdsklfjd jfjdaslfjlasjflsjdsjflkajklfjdskl fjklafjdaslfjlasjflsjdsjflkajklfjdsklfjk ladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjdsjflk ajklfjdsklfjkladsjflkjflkdsjfjdslfjdsklf jdaslfjlasjflsjdsjflkajklfjdsklfjkladsjflkjflkdsjfjds lfjdsklfjdaslfjlasjflsjdsjflkajklfjdsklfj kladsjflkjflkdsjfjdslfjdsklfjdas lfjlasjflsjdsjflkajklfjdsklfjkladsjflkjf lkdsjfjdslfjdsklfjdaslfjlasjfls jdsjflkajklfjdsklfjkladsjflkjflkdsjfj dslfjdsklfjdaslfjlasjflsjdsjflkajklfjds klfjkladsjflkjflkdsjfjdslfjdsklfjdaslfjlasjflsjd sjflkajklfjdsklfjkladsjflkjflkdsj fjdslfjdskldsjflkjflkd sjfjdslfjdsklfjds" hora="1h"/>
            </div>
        </main>
    )
}