const pluginPWA = require('eleventy-plugin-pwa');
const pluginRss = require("@11ty/eleventy-plugin-rss");

const { DateTime } = require('luxon');

module.exports = function (config) {
  config.addPlugin(pluginRss);
  config.addPlugin(pluginPWA, {
    swDest: './dist/service-worker.js',
    globDirectory: './dist',
  });

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');

  // minify the html output
  config.addTransform('htmlmin', require('./src/utils/minify-html.js'));

  config.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('dd LLL yyyy');
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  config.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  // pass some assets right through
  config.addPassthroughCopy('./src/site/images');
  config.addPassthroughCopy('./src/site/js');
  config.addPassthroughCopy('./src/site/manifest.json');
  config.addPassthroughCopy('./src/site/favicon.ico');
  config.addPassthroughCopy('./src/site/robots.txt');
  config.addPassthroughCopy('./src/site/.htaccess');

  // make the seed target act like prod
  return {
    dir: {
      input: 'src/site',
      output: 'dist',
      data: `_data/`,
    },
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};
