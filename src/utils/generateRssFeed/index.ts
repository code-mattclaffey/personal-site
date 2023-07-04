import fs from 'fs';
import RSS from 'rss';

export default async function generateRssFeed(contentfulPosts: any) {
  const site_url = 'https://mattclaffey.co.uk';

 const feedOptions = {
  title: 'Matt Claffey | RSS Feed',
  description: 'A feed about frontend technology and easy guides.',
  site_url: site_url,
  feed_url: `${site_url}/rss.xml`,
  image_url: `${site_url}/logo.png`,
  pubDate: new Date(),
  copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
 };

 const feed = new RSS(feedOptions);

 contentfulPosts.forEach((post: any) => {
  feed.item({
      title: post.blogTitle,
      guid: `${site_url}/blog/${post.blogSlug}`,
      url: `${site_url}/blog/${post.blogSlug}`,
      description: post.blogContent,
      date: new Date(post.publishDate),
  })
 })

 fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
