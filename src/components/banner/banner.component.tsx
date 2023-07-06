import Link from 'next/link';
import React from 'react';
import styles from './banner.module.css';

export interface BannerProps {
  title: string;
  link?: {
    to: string;
    text: string;
  };
}

export const Banner: React.FC<BannerProps> = ({ title, children, link }) => {
  return (
    <section className={`${styles.banner} o-region o-region--py-large`}>
      <div className="o-region__inner">
        {link && (
          <Link href={link.to} className="c-link c-link--alt">
            {link.text}
          </Link>
        )}
        <h1 className={`e-heading e-heading--h1 ${styles.bannerTitle}`}>{title}</h1>
        {children}
      </div>
    </section>
  );
};
