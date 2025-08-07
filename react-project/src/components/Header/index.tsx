import logo from '../../assets/logoIn.svg'
import styles from './styles.module.css'

export default function Header() {
    return(
        <header className={styles.header}>
            <img src={logo} alt="Logo InJunior"/>
            <h1>Feed</h1>
        </header>
    )
}