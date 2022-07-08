import React from 'react'
import { Seo } from '../../components/seo/seo.component'
import { BlogPost } from '../../components/blog-post/blog-post.component'
import { getContentfulBlogPosts, BlogPost as BlogPostProps } from '../../utils/contentful/contentful'
import { Banner } from '../../components/banner/banner.component'

export interface BlogProps {
  blogPosts: BlogPostProps[]
}

const Blog: React.FC<BlogProps> = ({ blogPosts }) => {
  return (
    <>
      <Seo
        title="✍🏻 I like to share what I learn to help others"
        description="I blog on Medium about all the things I learn and I feel that it is so important to share the knowledge with the world about the things I am passionate about."
        pageImageUrl="images/thumbnail.jpg"
      />
      <main className="container">
        <Banner title="✍🏻 I like to share what I learn to help others">
          <p className="e-text c-banner__text c-banner__text--long">
            I blog on Medium about all the things I learn and I feel that it is so important to share the knowledge with the world about the things I am passionate about.
          </p>
        </Banner>
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
