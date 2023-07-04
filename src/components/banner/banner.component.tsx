import Link from 'next/link';
import React from 'react';

export interface BannerProps {
  title: string;
  link?: {
    to: string;
    text: string;
  };
}

export const Banner: React.FC<BannerProps> = ({ title, children, link }) => {
  return (
    <section className="c-banner o-region o-region--py-large">
      <div className="o-region__inner">
        {link && (
          <Link href={link.to} className="c-link c-link--alt">
            {link.text}
          </Link>
        )}
        <h1 className="e-heading e-heading--h1 c-banner__title">{title}</h1>
        {children}
      </div>
    </section>
  );
};
