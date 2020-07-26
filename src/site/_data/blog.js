const axios = require('axios').default;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

module.exports = async () => {
  const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mattclaffey');

  const posts = response.data.items.map((post) => {
    const newPost = { ...post };
    const date = new Date(newPost.pubDate);
    newPost.pubDate = date;

    const dom = new JSDOM(`<!DOCTYPE html> ${newPost.content}`);
    const intro = dom.window.document.querySelector('p:not(.medium-feed-image)').outerHTML;

    newPost.shortDescription = intro.replace(/<img[^>]*>/g, '').replace(/<figure.*>.*?<\/figure>/gi, '');

    return newPost;
  });

  return {
    posts,
    latestPosts: posts.slice(0, 3),
  };
};
