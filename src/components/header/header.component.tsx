import React from 'react';
import Link from 'next/link';

export const Header = () => {
  const styles = {
    '--region-background': 'var(--base-region-bg);',
    '--region-color': 'var(--color-white);',
  };

  return (
    <>
      <header className="o-region o-region--header c-header" style={styles as any}>
        <nav className="o-region__inner">
          <ul className="c-header__navigation">
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
