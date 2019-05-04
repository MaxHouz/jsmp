const path = require('path');

module.exports = {
    entry: path.join(__dirname, './src/app.ts'),
    output: {
        filename: './dist/app.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                enforce: 'pre',
                loader: 'tslint-loader'
            },
            {
                test: /\.(ts)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};
