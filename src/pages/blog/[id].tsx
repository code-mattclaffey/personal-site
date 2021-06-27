import React from 'react'
import { Seo } from '../../components/seo/seo.component'
import Link from 'next/link'
import { Footer } from '../../components/footer/footer.component'
import { Header } from '../../components/header/header.component'
import { BlogPost, getFormattedDate } from '../../components/blog-post/blog-post.component'
import { getContentfulBlogPosts, BlogPost as BlogPostProps, BlogPosts } from '../../utils/contentful/contentful'
import { GetStaticPropsContext } from 'next'
import WebDevSvg from '../../../public/web-dev.svg'

export interface HomeProps {
  blogPost: BlogPostProps
  allPosts: BlogPosts
}

const Post: React.FC<HomeProps> = ({ blogPost, allPosts }) => {
  return (
    <>
      <Seo
        title={blogPost.blogTitle}
        description={blogPost.blogShortDescription}
        pageImageUrl={blogPost.thumbnail}
      />
      <Header />
      <main className="container">
        <div className="o-region">
          <div className="o-region__inner">
            <div className="c-blog-post">
              <article className="c-blog-post__main">
                <header>
                  <h1 className="e-heading e-heading--h1 c-banner__title">{blogPost.blogTitle}</h1>
                  <p className="e-text c-banner__text u-text--larger@md">
                    Date Published: <time dateTime={blogPost.publishDate}>{getFormattedDate(blogPost.publishDate)}</time>
                  </p>
                </header>
                <div dangerouslySetInnerHTML={{ __html: blogPost.blogContent }} />
                <p>
                  <Link href="/blog">
                    <a className="c-button c-button--outline">Back to blogs</a>
                  </Link>
                </p>
              </article>
              <aside>
                <WebDevSvg />
                <br />
                <br />
                <div className="e-box">
                  <h2 className="e-heading e-heading--h4">Written By</h2>
                  <p>Matthew Claffey <a href="https://twitter.com/MattClaffey1" target="_blank" rel="noopener norefferer"><abbr title="Matt Claffey 1 is his twitter handle">@mattclaffey1</abbr></a></p>
                  <p>
                    Hi! I'm Matt, I specialise in in HTML5, CSS3, JavaScript/React and have experience working with .NET & PHP Platforms. I am currently working as a Software Engineer at Cinch, who are based in Manchester.
                  </p>
                </div>
                <br />
                <h2 className="e-heading e-heading--h3">Other Posts</h2>
                <div className="c-blog-list c-blog-list--stacked">
                  {allPosts.map(post => (
                    <React.Fragment key={post.blogSlug}>
                      <BlogPost {...post} />
                    </React.Fragment>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />

    </>
  )
}

export default Post


export async function getStaticPaths() {
  const data: BlogPosts = await getContentfulBlogPosts()

  const paths = data.map((blogPost) => ({
    params: { id: blogPost.blogSlug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const data: BlogPosts = await getContentfulBlogPosts()

  const post = data.filter((post) => params?.id === post.blogSlug)[0]

  return {
    props: {
      blogPost: data.filter((post) => params?.id === post.blogSlug)[0],
      allPosts: data.filter((post) => params?.id !== post.blogSlug).slice(0, 4),
      postData: {
        title: post.blogTitle,
        id: post.blogSlug,
        link: post.blogSlug,
        date: post.publishDate
      }
    }
  }
}
