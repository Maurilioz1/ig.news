import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from './styles.module.scss';

export function SignInButton() {
    const [session] = useSession();

    console.log(session);

    return session ? (
        <button type="button" className={styles.sugnInButton} onClick={() => signOut()}>
            <FaGithub color="#38A169" />
            {session.user.name}
            <FiX color="#718096" className={styles.closeIcon} />
        </button>
    ) : (
        <button type="button" className={styles.sugnInButton} onClick={() => signIn('github')}>
            <FaGithub color="#D69E2E" />
            Sign in with GitHub
        </button>
    )
}