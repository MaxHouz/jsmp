const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: './[name].js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        compress: true,
        port: 9000
    },
    plugins: [
        new CopyPlugin([
            { from: './src/index.html' }
        ]),
        new MiniCssExtractPlugin({
            filename: './styles.css'
        })
    ]
};
