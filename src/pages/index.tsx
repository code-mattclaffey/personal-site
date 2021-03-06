import React from 'react'
import { Seo } from '../components/seo/seo.component'
import Link from 'next/link'
import { Footer } from '../components/footer/footer.component'
import { Header } from '../components/header/header.component'
import { BlogPost } from '../components/blog-post/blog-post.component'
import { getContentfulBlogPosts, BlogPosts } from '../utils/contentful/contentful'
import WebDevSvg from '../../public/web-dev.svg'

export interface HomeProps {
  blogPosts: BlogPosts
}

const Home: React.FC<HomeProps> = ({ blogPosts }) => {
  const latestPosts = blogPosts.slice(0, 4)
  return (
    <>
      <Seo
        title="Matt Claffey - Manchester Based - Frontend Developer"
        description="Hi I'm Matt, I have been a frontend developer for around 6 years, I've done work for multiple agencies, consulted for clients, and collaborated with talented people to create digital products."
        pageImageUrl="images/thumbnail.jpg"
      />
      <Header />
      <main className="container">
        <section className="o-region">
          <div className="o-region__inner">
            <h1 className="e-heading e-heading--h1 c-banner__title">Matthew Claffey</h1>
            <p className="c-banner__text">
              👨🏻‍💻 Frontend Engineer (sometimes UI Designer), based in Manchester.
            </p>
          </div>
        </section>

        <section className="o-region">
          <div className="o-region__inner">
            <div className="e-box e-box--pastal-blue e-box--vertical-xl c-about-me">
              <WebDevSvg />
              <div>
                <h2 className="e-heading e-heading--h3">
                  About Me
                </h2>
                <p>
                  Hi! I'm Matt, I specialise in in HTML5, CSS3, JavaScript/React and have experience working with .NET & PHP Platforms. I am currently working as a Software Engineer at Cinch, who are based in Manchester.
                </p>

                <p>
                  I have over 6 years professional experience in front-end development working with multiple agencies & in house companies — helping teams collaborate, work better together, streamline workflow, and deliver quality websites and applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="o-region">
          <div className="o-region__inner o-region__inner--thin">
            <div className="c-blog-list__header">
              <h2 className="e-heading e-heading--h3">✍🏻 I like to share what I learn to help others</h2>
              <p>
                I blog on Medium about all the things I learn and I feel that it is so important to share the knowledge with the world about the things I am passionate about.
              </p>
              <Link href="/blog">Browse posts</Link>
            </div>
            <div className="c-blog-list">
              {latestPosts.map(post => (
                <React.Fragment key={post.blogSlug}>
                  <BlogPost {...post} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

    </>
  )
}

export default Home


export async function getStaticProps() {
  const data = await getContentfulBlogPosts()

  return {
    props: {
      blogPosts: data
    }
  }
}
