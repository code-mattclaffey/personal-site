import React from 'react'
import { Seo } from '../../components/seo/seo.component'
import { getContentfulBlogPosts, BlogPost } from '../../utils/contentful/contentful'
import { GetStaticPropsContext } from 'next'
import { getFormattedDate } from '../../utils/dates/dates'
import { Banner } from '../../components/banner/banner.component'
import { BlogList } from '../../components/blog-list/blog-list.component'

export interface BlogPageProps {
  blogPost: BlogPost
  otherPosts: BlogPost[]
}

const Post: React.FC<BlogPageProps> = ({ blogPost, otherPosts }) => (
  <>
    <Seo
      title={blogPost.blogTitle}
      description={blogPost.blogShortDescription}
      pageImageUrl={blogPost.thumbnail}
    />
    <main className="container">
      <article className="c-blog-post__main">
        <Banner
          title={blogPost.blogTitle}
          link={{
            to: '/blog',
            text: 'Back to blogs'
          }}
        >
          <p className="e-text c-banner__text u-text--larger@md">
            Date Published: <time dateTime={blogPost.publishDate}>{getFormattedDate(blogPost.publishDate)}</time>
          </p>
        </Banner>
        <div className="o-region">
          <div className="o-region__inner o-region__inner--thin c-blog-post" dangerouslySetInnerHTML={{ __html: blogPost.blogContent }} />
        </div>
        <BlogList posts={otherPosts} />
      </article>
    </main>
  </>
)

export default Post


export async function getStaticPaths() {
  const data: BlogPost[] = await getContentfulBlogPosts()

  const paths = data.map((blogPost) => ({
    params: { id: blogPost.blogSlug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const data: BlogPost[] = await getContentfulBlogPosts()

  const post = data.filter((post) => params?.id === post.blogSlug)[0]

  return {
    props: {
      blogPost: data.filter((post) => params?.id === post.blogSlug)[0],
      otherPosts: data.filter((post) => params?.id !== post.blogSlug).slice(0, 3),
      postData: {
        title: post.blogTitle,
        id: post.blogSlug,
        link: post.blogSlug,
        date: post.publishDate
      }
    }
  }
}
