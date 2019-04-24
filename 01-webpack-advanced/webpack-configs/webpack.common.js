const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function() {
    return {
        entry: {
            common: './src/common/common.js',
            admin: './src/admin/admin.js',
            visitor: './src/visitor/visitor.js'
        },
        output: {
            path: path.join(__dirname, '../dist'),
            filename: "./[name]/[name].js"
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
        plugins: [
            new CopyPlugin([
                { from: './src/index.html' },
                { from: './src/admin/admin.html', to: './admin' },
                { from: './src/visitor/visitor.html', to: './visitor' }
            ]),
            new MiniCssExtractPlugin({
                filename: './styles/styles.css'
            })
        ]
    };
};
