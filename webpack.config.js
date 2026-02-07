const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const glob = require('glob');

// Automatski pronađi sve blokove sa src/index.js
const entries = {};
const blocks = glob.sync('./block/*/src/index.js');

blocks.forEach((blockPath) => {
    const blockName = blockPath.match(/\.\/block\/(.+?)\/src/)[1];
    entries[`${blockName}/build/index`] = blockPath;
});

module.exports = {
    ...defaultConfig,
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'block'),
        filename: '[name].js',
    },
    resolve: {
        ...defaultConfig.resolve,
        alias: {
            ...defaultConfig.resolve.alias,
            '@styles': path.resolve(__dirname, 'src'),
        },
    },
};
