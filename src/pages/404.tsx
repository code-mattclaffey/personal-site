import React from 'react'
import { Seo } from '../components/seo/seo.component'
import Link from 'next/link'

const Custom404Page = () => (
  <>
    <Seo
      title="😕 Opps, looks like you got lost"
      description="Don't worry about it! Happens to the best of us, let's get you back on track."
      pageImageUrl="images/thumbnail.jpg"
    />

    <section className="o-region c-banner c-banner--tall">
      <div className="o-region__inner">
        <h1 className="e-heading e-heading--h1 c-banner__title">😕 Opps, looks like you got lost</h1>
        <p className="e-text c-banner__text u-text--larger@md">
          Don't worry about it! Happens to the best of us, let's get you back on track.
        </p>
        <Link href="/">
          <a className="c-button c-button--primary c-button--large">Return home</a>
        </Link>
      </div>
    </section>
  </>
)

export default Custom404Page
