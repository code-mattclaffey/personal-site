import React from 'react';
import Link from 'next/link';
import { BlogPost as BlogPostProps } from '../../utils/contentful/contentful';
import { getFormattedDate } from '../../utils/dates/dates';
import styles from './blog-post.module.css';

export const BlogPost: React.FC<BlogPostProps> = ({
  blogSlug,
  blogTitle,
  publishDate,
  blogShortDescription,
}) => (
  <article className={styles.blogPost}>
    <div className="e-box">
      <h2 className="e-heading e-heading--h3">{blogTitle}</h2>
      <p>
        <time dateTime={publishDate}>{getFormattedDate(publishDate)}</time>
      </p>
      <p>{blogShortDescription}</p>
      <Link href={`/blog/${blogSlug}`}>
        Read more
        <span className={styles.blogPostLinkText}>about {blogTitle}</span>
      </Link>
    </div>
  </article>
);
