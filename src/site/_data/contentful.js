require('dotenv').config()

const contentful = require("contentful");
const { BLOCKS } = require('@contentful/rich-text-types');
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');


const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN
});

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (field, next) => {
      const hasCodeSnippet = field.content[0].marks.find(mark => mark.type === 'code')

      if (field.content.length === 1 && hasCodeSnippet) {
        return `<pre><code>${field.content[0].value}</code></pre>`;
      }

      return `<p>${next(field.content)}</p>`;
    },
    [BLOCKS.EMBEDDED_ASSET]: field => {
      const { data: { target: { fields }}} = field

      if (fields.file.contentType === 'video/mp4') {
        return `<video autoplay loop muted playsinline src="${fields.file.url}">${fields.title}</video>`
      }

      return `<img src="${fields.file.url}" loading="lazy" alt="${fields.title}"/>`
    }
  },
};

module.exports = async () => {
  try {
    const entries = await client.getEntries({ content_type: 'blogPost', order: 'sys.createdAt' })

    const pages = entries.items.map(page => {
      page.fields.date = new Date(page.sys.updatedAt);
      page.fields.blogContent = documentToHtmlString(page.fields.blogContent, options);

      return {
        blog: page.fields
      };
    })

    return pages
  }
  catch(error) {
    console.error(error);
  }
};
