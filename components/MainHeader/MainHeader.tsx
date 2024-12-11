import Link from 'next/link';
import styles from './MainHeader.module.css';

// header for the web page that links to Home, Task-List, and Notes
function MainHeader() {
  return (
    <header className={styles.main}>
      <Link className={styles['logo-click']} href="/">
        <p>College Digital Assistant</p>
      </Link>

      <nav className={styles['nav-list']}>
        <ul className="flex gap-3">
          <li>
            <Link href={'/'} className={''}>
              Home
            </Link>
          </li>
          <li>
            <Link href={'/task-list'} className={''}>
              Task List
            </Link>
          </li>
          <li>
            <Link href={'/notes'} className={''}>
              Notes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
