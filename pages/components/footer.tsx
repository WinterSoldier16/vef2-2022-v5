import Link from 'next/link';
import styles from '../../styles/footer.module.css';

export default function Footer() {
  if (typeof window !== 'undefined') {
    const loggedInToken = localStorage.getItem('loggedInToken');
    const loggedInUser = localStorage.getItem('loggedInUser');
  }
  
  if (loggedInToken) {
    return (
      <footer className={styles.footer}>
        <li className={styles.list}>
          <Link href={`/index`}>
            <a className={styles.link}>Forsíða</a>
          </Link>
        </li>
        <h2>Skráður inn sem {loggedInUser}</h2>
      </footer>
    );
  } else {
    return (
      <footer className={styles.footer}>
        <li className={styles.list}>
          <Link href={`/index`}>
            <a className={styles.link}>Forsíða</a>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href={`/login`}>
            <a className={styles.link}>Innskráning</a>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href={`/signup`}>
            <a className={styles.link}>Nýskráning</a>
          </Link>
        </li>    
      </footer>
    );
  }
} 