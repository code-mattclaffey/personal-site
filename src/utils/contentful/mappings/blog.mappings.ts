import { getBlogEntry } from "../contentful";

export const blogPost = async (entry: any) => {
  const blogPostProps = await getBlogEntry(entry);

  return {
    id: 'blogPost',
    props: { blogPost: blogPostProps },
  }
}
