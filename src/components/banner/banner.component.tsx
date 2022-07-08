import Link from "next/link";
import React from "react";

export interface BannerProps {
  title: string;
  link?: {
    to: string;
    text: string;
  }
}

export const Banner: React.FC<BannerProps> = ({ title, children, link }) => {
  const styles = {
    '--region-background': 'var(--base-region-bg);',
    '--region-color': 'var(--color-white);',
  };

  return (
    <section className="o-region o-region--py-large" style={styles as any}>
      <div className="o-region__inner">
        {link && (
          <Link href={link.to}>
            <a className="c-link c-link--alt">{link.text}</a>
          </Link>
        )}
        <h1 className="e-heading e-heading--h1 c-banner__title">{title}</h1>
        {children}
      </div>
    </section>
  )
}
