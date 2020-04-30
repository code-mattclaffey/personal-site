const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssImport = require('postcss-import');
const customMedia = require('postcss-custom-media');
const stylelint = require('stylelint');
const mqpacker = require('mqpacker');
const pxtorem = require('postcss-pxtorem');

// the file name as an entry point for postcss compilation
// also used to define the output filename in our output /css folder.
const fileName = 'styles.css';

module.exports = class {
    async data() {
        const rawFilepath = path.join(__dirname, `../_includes/css/${fileName}`);

        return {
            permalink: `css/${fileName}`,
            rawFilepath,
            rawCss: await fs.readFileSync(rawFilepath),
        };
    }

    async render({ rawCss, rawFilepath }) {
        return await postcss([
            postcssImport({
                plugins: [stylelint()],
            }),
            postcssCustomProperties(),
            autoprefixer({
                flexbox: 'no-2009',
            }),
            cssnano(),
            customMedia(),
            mqpacker({
                sort: true,
            }),
            pxtorem(),
        ])
            .process(rawCss, { from: rawFilepath })
            .then((result) => result.css);
    }
};
