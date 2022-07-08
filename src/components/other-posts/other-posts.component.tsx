import React from "react";
import { BlogPost as BlogPostProps } from "../../utils/contentful/contentful";
import { BlogPost } from "../blog-post/blog-post.component";

export interface OtherPostsProps {
  posts: BlogPostProps[]
}

export const OtherPosts: React.FC<OtherPostsProps> = ({ posts }) => (
  <aside>
    <h2 className="e-heading e-heading--h3">Other Posts</h2>
    <div className="c-blog-list c-blog-list--stacked">
      {posts.map(post => (
        <React.Fragment key={post.blogSlug}>
          <BlogPost {...post} />
        </React.Fragment>
      ))}
    </div>
  </aside>
)
