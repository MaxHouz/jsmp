const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function() {
    return {
        entry: {
            admin: './src/admin/admin.js',
            visitor: './src/visitor/visitor.js'
        },
        output: {
            path: path.join(__dirname, '../dist'),
            filename: "./[name].js"
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.(ts)$/,
                    enforce: 'pre',
                    use: [
                        {
                            loader: 'tslint-loader',
                            options: {
                                rules: {
                                    configFile: '../tslint.json',
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.ts$/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: { test:  /[\\/]node_modules[\\/]/, name: 'common', chunks: "all"}
                }
            }
        },
        plugins: [
            new CopyPlugin([
                { from: './src/index.html' },
                { from: './src/admin/admin.html'},
                { from: './src/visitor/visitor.html'}
            ]),
            new MiniCssExtractPlugin({
                filename: './styles/styles.css'
            })
        ]
    };
};
