const merge = require('webpack-merge');
const devConfig = require('./webpack-configs/webpack.dev');
const prodConfig = require('./webpack-configs/webpack.prod');
const commonConfig = require('./webpack-configs/webpack.common');

module.exports = function (env, argv) {
    if (argv.mode === 'production') {
        return merge([
            commonConfig(),
            prodConfig()
        ])
    } else if (argv.mode === 'development') {
        return merge([
            commonConfig(),
            devConfig()
        ])
    }
};
