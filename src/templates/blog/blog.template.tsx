import { getFormattedDate } from '../../utils/dates/dates';
import { Banner } from '../../components/banner/banner.component';

export const BlogComponent = ({ blogPost }: any) => {
  return (
    <section className="container">
      <article className="c-blog-post__main">
        <Banner
          title={blogPost.blogTitle}
          link={{
            to: '/blog',
            text: 'Back to blogs',
          }}
        >
          <p className="e-text c-banner__text u-text--larger@md">
            Date Published:{' '}
            <time dateTime={blogPost.publishDate}>{getFormattedDate(blogPost.publishDate)}</time>
          </p>
        </Banner>
        <div className="o-region">
          <div
            className="o-region__inner o-region__inner--thin c-blog-post"
            dangerouslySetInnerHTML={{ __html: blogPost.blogContent }}
          />
        </div>
      </article>
    </section>
  );
};
