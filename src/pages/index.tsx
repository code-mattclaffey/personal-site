import React from 'react'
import { Seo } from '../components/seo/seo.component'
import { getContentfulBlogPosts, BlogPost as BlogPostProps } from '../utils/contentful/contentful'
import { Banner } from '../components/banner/banner.component'
import { BlogList } from '../components/blog-list/blog-list.component'

export interface HomeProps {
  blogPosts: BlogPostProps[]
}

const Home: React.FC<HomeProps> = ({ blogPosts }) => {
  return (
    <>
      <Seo
        title="Matt Claffey - Manchester Based - Frontend Developer"
        description="Hi I'm Matt, I have been a frontend developer for around 6 years, I've done work for multiple agencies, consulted for clients, and collaborated with talented people to create digital products."
        pageImageUrl="images/thumbnail.jpg"
      />
      <main className="container">
        <Banner title="Matthew Claffey">
          <p className="e-text c-banner__text c-banner__text--long">
            I blog on Medium about all the things I learn and I feel that it is so important to share the knowledge with the world about the things I am passionate about.
          </p>
        </Banner>
        {/* <section className="o-region">
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
        </section> */}

        {/* <section className="o-region">
          <div className="o-region__inner o-region__inner--thin">
            <div className="c-blog-list__header">
              <h2 className="e-heading e-heading--h3">✍🏻 I like to share what I learn to help others</h2>
              <p>
                I blog on Medium about all the things I learn and I feel that it is so important to share the knowledge with the world about the things I am passionate about.
              </p>
              <Link href="/blog">Browse posts</Link>
            </div>
          </div>
        </section> */}
        <BlogList posts={blogPosts} />
      </main>
    </>
  )
}

export default Home


export async function getStaticProps() {
  const data = await getContentfulBlogPosts()

  return {
    props: {
      blogPosts: data.slice(0, 4)
    }
  }
}
