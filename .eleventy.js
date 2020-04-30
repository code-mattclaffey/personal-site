const pluginPWA = require("eleventy-plugin-pwa");

module.exports = function (config) {
    config.addPlugin(pluginPWA, {
        swDest: "./dist/service-worker.js",
        globDirectory: "./dist"
    });

    // Layout aliases can make templates more portable
    config.addLayoutAlias('default', 'layouts/base.njk');

    // minify the html output
    config.addTransform('htmlmin', require('./src/utils/minify-html.js'));

    config.addFilter("jsmin", function(code) {
        const Terser = require("terser");
        let minified = Terser.minify(code);
            if( minified.error ) {
                console.log("Terser error: ", minified.error);
                return code;
            }

            return minified.code;
    });

    // pass some assets right through
    config.addPassthroughCopy('./src/site/images');
    config.addPassthroughCopy('./src/site/manifest.json');
    config.addPassthroughCopy('./src/site/favicon.ico');

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