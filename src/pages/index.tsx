import React from 'react'
import { Seo } from '../components/seo/seo.component'

export default function Home() {
  return (
    <>
      <Seo
        title="Matt Claffey - Manchester Based - Frontend Developer"
        description="Hi I'm Matt, I have been a frontend developer for around 6 years, I've done work for multiple agencies, consulted for clients, and collaborated with talented people to create digital products."
        pageImageUrl="images/thumbnail.jpg"
      />
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </>
  )
}

