import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton() {
    const isUserLoggerIn = true;

    return isUserLoggerIn ? (
        <button type="button" className={styles.sugnInButton}>
            <FaGithub color="#38A169" />
            Maurilio Lucena
            <FiX color="#718096" className={styles.closeIcon} />
        </button>
    ) : (
        <button type="button" className={styles.sugnInButton}>
            <FaGithub color="#D69E2E" />
            Sign in with GitHub
        </button>
    )
}