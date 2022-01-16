const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: __dirname + '/build',
        filename: 'index.bundle.js',
    },
    module: {
            rules: [{
            test: /\.js|\.jsx$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new HTMLWebpackPlugin({template: './static/index.html'})
    ],
    devServer: {
        host: '0.0.0.0',
        port: 80,
        allowedHosts: "all"
    }
};

