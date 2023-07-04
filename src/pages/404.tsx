import React from 'react';
import Link from 'next/link';
import { Seo } from '../components/seo/seo.component';
import { Header } from '../components/header/header.component';
import { Footer } from '../components/footer/footer.component';

const Custom404Page = () => (
  <>
    <Seo
      title="😕 Opps, looks like you got lost"
      description="Don't worry about it! Happens to the best of us, let's get you back on track."
      pageImageUrl="images/thumbnail.jpg"
    />
    <Header />
    <main className="o-region c-banner c-banner--tall">
      <div className="o-region__inner">
        <h1 className="e-heading e-heading--h1 c-banner__title">
          😕 Opps, looks like you got lost
        </h1>
        <p className="e-text c-banner__text u-text--larger@md">
          Don't worry about it! Happens to the best of us, let's get you back on track.
        </p>
        <Link href="/">Return home</Link>
      </div>
    </main>
    <Footer />
  </>
);

export default Custom404Page;
