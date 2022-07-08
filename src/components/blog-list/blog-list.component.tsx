import React from "react";
import { BlogPost as BlogPostProps } from "../../utils/contentful/contentful";
import { BlogPost } from "../blog-post/blog-post.component";

export interface BlogListProps {
  posts: BlogPostProps[]
}

export const BlogList: React.FC<BlogListProps> = ({ posts }) => (
  <div>
    <h2 className="e-heading e-heading--h3">Other Posts</h2>
    <div className="c-blog-list">
      {posts.map(post => (
        <React.Fragment key={post.blogSlug}>
          <BlogPost {...post} />
        </React.Fragment>
      ))}
    </div>
  </div>
)
