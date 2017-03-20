const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.ts'
    },
    output: {
        filename: 'bundle.js',
        path: 'dist'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        loaders: [
            { test: /.ts$/, loader: 'awesome-typescript-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Tree-shaking' })
    ]
}