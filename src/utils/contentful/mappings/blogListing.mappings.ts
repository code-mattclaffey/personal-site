import { getBlogEntry } from "../contentful";

export const blogListing = async (props: any) => {
  let posts: any = [];

  const totalPosts = props.fields.posts.length;

  for (let i = 0; i < totalPosts; i++) {
    // wait for the promise to resolve before advancing the for loop
    const post = await getBlogEntry(props.fields.posts[i]);
    posts.push(post);
  }

  return {
    id: 'blogListing',
    props: {
      key: props.sys.id,
      title: props.fields.title,
      posts,
    }
  };
};
