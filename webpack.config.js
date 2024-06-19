const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: './public/index.js',
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
},
module: {
    rules: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
        },
    },
    {
        test: /\.css$/, // правило для обработки файлов CSS
        use: ['style-loader', 'css-loader'],
    },
    ],
},
plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html',
    }),
],
devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
},
};