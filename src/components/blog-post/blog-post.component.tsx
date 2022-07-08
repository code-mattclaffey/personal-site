import React from 'react'
import Link from 'next/link'
import { BlogPost as BlogPostProps } from '../../utils/contentful/contentful'
import { getFormattedDate } from '../../utils/dates/dates'


export const BlogPost: React.FC<BlogPostProps> = ({ blogSlug, blogTitle, publishDate, blogShortDescription }) => (
  <article>
    <div className="e-box">
      <h3 className="e-heading e-heading--h4">{blogTitle}</h3>
      <p>
        <time dateTime={publishDate}>
          {getFormattedDate(publishDate)}
        </time>
      </p>
      <p>{blogShortDescription}</p>
      <Link href={`/blog/${blogSlug}`}>
        <a className="c-blog-list__link">
          Read more
          <span className="c-blog-list__link-text">
            about {blogTitle}
          </span>
        </a>
      </Link>
    </div>
  </article>
)
