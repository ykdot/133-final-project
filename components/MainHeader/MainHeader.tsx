'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './MainHeader.module.css';
import { Button } from '../ui/button';
import Image from 'next/image';
import hamburgerIcon from '../../public/hamburger-icon.svg';

// header for the web page that links to Home, Task-List, and Notes
function MainHeader() {
  const [mobileList, setMobileList] = useState(false);

  let mobileShow = '';
  // show list or not for mobile version
  if (mobileList) {
    mobileShow = 'show-list';
  }
  const handleRemoveMobileList = () => {
    if (mobileShow === 'show-list') {
      setMobileList(false);
    }
  };

  return (
    <header className={styles.main}>
      <Link className={styles['logo-click']} href="/">
        <p>College Digital Assistant</p>
      </Link>

      <Button
        className={`${styles['hamburger-icon']} bg-transparent w-1px hover:bg-transparent p-0 shadow-transparent `}
        onClick={() => setMobileList(!mobileList)}
      >
        <Image src={hamburgerIcon} alt="hamburger icon" width={50} />
      </Button>

      <nav className={`z-50 ${styles['nav-list']}`}>
        <ul className={`z-50 ${styles['nav-list']} ${styles[mobileShow]}`}>
          <li>
            <Link href={'/'} className={''} onClick={handleRemoveMobileList}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href={'/task-list'}
              className={''}
              onClick={handleRemoveMobileList}
            >
              Task List
            </Link>
          </li>
          <li>
            <Link
              href={'/notes'}
              className={''}
              onClick={handleRemoveMobileList}
            >
              Notes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
