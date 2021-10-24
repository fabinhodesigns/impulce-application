import { VscGithubInverted } from 'react-icons/vsc'
import styles from './styles.module.scss'

export function LoginBox() {
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe a sua mensagem</strong>
            <a href="#" className={styles.signInWithGithub}>
                <VscGithubInverted size="24" />
                Entrar com o Git Hub
            </a>
        </div>
    )
}