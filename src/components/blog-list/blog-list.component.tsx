import React from 'react';
import { BlogPost as BlogPostProps } from '../../utils/contentful/contentful';
import { BlogPost } from '../blog-post/blog-post.component';
import styles from './blog-list.module.css';

export interface BlogListProps {
  posts: BlogPostProps[];
}

export const BlogList: React.FC<BlogListProps> = ({ posts }) => (
  <section className="o-region">
    <div className="o-region__inner o-region__inner--thin">
      <div className={styles.blogList}>
        {posts.map((post) => (
          <React.Fragment key={post.blogSlug}>
            <BlogPost {...post} />
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);
