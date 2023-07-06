import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';

export const Header = () => {
  return (
    <>
      <header className={`o-region o-region--header ${styles.header}`}>
        <nav className="o-region__inner">
          <ul className={styles.headerNavigation}>
            <li>
              <Link href="/" className="e-logo">
                mattc.
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
