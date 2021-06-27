const contentful = require("contentful");
const { BLOCKS } = require('@contentful/rich-text-types');
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');

const client = contentful.createClient({
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

export type BlogPosts = Array<{
  title: string
  blogShortDescription: string
  blogSlug: string
}>

export const getContentfulBlogPosts = async () => {
  try {
    const entries = await client.getEntries({ content_type: 'blogPost', order: 'sys.createdAt' })

    const pages = entries.items.map((page: any) => {
      page.fields.publishDate = new Date(page.fields.publishDate);
      page.fields.updatedDate = new Date(page.sys.updatedAt);
      page.fields.updatedAtUTC = page.fields.updatedDate.toUTCString();
      page.fields.blogContent = documentToHtmlString(page.fields.blogContent, options);

      return {
        title: page.fields.blogTitle,
        blogShortDescription: page.fields.blogShortDescription,
        blogSlug: page.fields.blogSlug,
      }
    })

    return pages.sort((a: any, b: any) => b.publishDate - a.publishDate)
  } catch (error) {
    console.error(error);
  }
};
