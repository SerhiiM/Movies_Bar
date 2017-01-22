var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./js/app.js",
    devtool: "inline-sourcemap",
    context: path.join(__dirname, "src"),
    output: {
        path: __dirname + "/bin/",
        filename: 'app.bundle.js',
    },
    watch:true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                },
            },
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.html$/, loader: 'html' }
        ]
    }
}
// var webpack = require('webpack');
// var path = require('path');

// module.exports = {
//   entry: [
//     'webpack-dev-server/client?http://localhost:8080',
//     'webpack/hot/only-dev-server',
//     './js/app.js'
//     ],
//   module: {
//     loaders: [{
//       test: /\.jsx?$/,
//       exclude: /node_modules/,
//       loader: 'react-hot!babel'
//     }]
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   devtool: "inline-sourcemap",
//   context: path.join(__dirname, "src"),
//   watch:true,
//   output: {
//     path: __dirname + '/bin',
//     publicPath: '/',
//     filename: 'app.bundle.js'
//   },
//   devServer: {
//     contentBase: './bin',
//     hot: true
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin()
//   ]
// };