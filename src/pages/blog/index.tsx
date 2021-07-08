import React from 'react'
import { Seo } from '../../components/seo/seo.component'
import { Footer } from '../../components/footer/footer.component'
import { Header } from '../../components/header/header.component'
import { BlogPost } from '../../components/blog-post/blog-post.component'
import { getContentfulBlogPosts, BlogPosts } from '../../utils/contentful/contentful'

export interface BlogProps {
  blogPosts: BlogPosts
}

const Blog: React.FC<BlogProps> = ({ blogPosts }) => {
  return (
    <>
      <Seo
        title="✍🏻 I like to share what I learn to help others"
        description="I blog on Medium about all the things I learn and I feel that it is so important to share the knowledge with the world about the things I am passionate about."
        pageImageUrl="images/thumbnail.jpg"
      />
      <Header />
      <main className="container">
        <section className="o-region c-banner" style={{ "--region-bg": "var(--banner-bg);", "--region-text-color": "var(--banner-text)" } as any}>
          <div className="o-region__inner">
            <h1 className="e-heading e-heading--h1 c-banner__title c-banner__title--long">✍🏻 I like to share what I learn to help others</h1>
            <p className="e-text c-banner__text c-banner__text--long">
              I blog on Medium about all the things I learn and I feel that it is so important to share the knowledge with the world about the things I am passionate about.
            </p>
          </div>
        </section>
        <section className="o-region">
          <div className="o-region__inner">
            <div className="c-blog-list">
              {blogPosts.map(post => (
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

export default Blog


export async function getStaticProps() {
  const data = await getContentfulBlogPosts()

  return {
    props: {
      blogPosts: data,
    }
  }
}
