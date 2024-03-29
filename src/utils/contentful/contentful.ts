const contentful = require("contentful");
const { BLOCKS } = require('@contentful/rich-text-types');
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE as string,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN as string
});

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (field: any, next: any) => {
      const hasCodeSnippet = field.content[0].marks.find((mark: any) => mark.type === 'code')

      if (field.content.length === 1 && hasCodeSnippet) {
        return `<pre>${next(field.content)}</pre>`;
      }

      return `<p>${next(field.content)}</p>`;
    },
    [BLOCKS.EMBEDDED_ASSET]: (currentField: any) => {
      const { data: { target: { fields } } } = currentField

      if (fields.file.contentType === 'video/mp4') {
        return `<video autoplay loop muted playsinline src="${fields.file.url}">${fields.title}</video>`
      }

      return `<img src="${fields.file.url}" loading="lazy" alt="${fields.title}"/>`
    }
  },
};

export type BlogPost = {
  blogTitle: string
  blogShortDescription: string
  blogContent: string
  publishDate: string
  updatedDate: string
  blogSlug: string
  thumbnail: string
}

export const getAllContentfulPages = async () => {
  try {
    const entries = await client.getEntries({ content_type: 'page', order: 'sys.createdAt' })

    return entries;
  } catch (error) {
    console.error(error);
  }
};

export const getContentfulPage = async (slug: string) => {
  const entries = await client.getEntries({ content_type: 'page', order: 'sys.createdAt' })

  return entries.items.find((page: any) => {
    return page.fields.pageSlug === slug;
  });
};

export const getBlogEntry = async (post: any) => {
  const entry = await client.getEntry(post.sys.id);

  return {
    blogTitle: entry.fields.blogTitle,
    blogSlug: entry.fields.blogSlug,
    blogShortDescription: entry.fields.blogShortDescription,
    publishDate: entry.fields.publishDate,
    updatedDate: entry.sys.updatedAt,
    blogContent: documentToHtmlString(entry.fields.blogContent, options)
  };
}

export const getContentfulBlogPosts = async () => {
  try {
    const entries = await client.getEntries({ content_type: 'blogPost', order: 'sys.createdAt' });

    const pages = entries.items.map((page: any) => {
      page.fields.publishDate = page.fields.publishDate;
      page.fields.updatedDate = page.sys.updatedAt;
      page.fields.blogContent = documentToHtmlString(page.fields.blogContent, options);

      return page.fields
    });

    // @ts-ignore
    return pages.sort((a: any, b: any) => new Date(b.publishDate) - new Date(a.publishDate))
  } catch (error) {
    console.error(error);
  }
};
