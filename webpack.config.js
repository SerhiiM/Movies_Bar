const debug = process.env.NODE_ENV !== "production";

console.log('process.env.NODE_ENV',process.env.NODE_ENV)
console.log('debug',debug)

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: "./js/app.js",
    devtool: debug ? "inline-sourcemap": false,
    context: path.join(__dirname, "src"),
    output: {
        path: __dirname + "/bin",
        publicPath: '/bin/',
        filename: 'app.bundle.js',
    },
    watch:true,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                options: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            },
            { 
                test: /\.scss$/, 
                use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader' 
                ]
            },
            {
                test: /\.css$/, 
                use: [
                        'style-loader',
                        'css-loader',
                    ]
                },
            { 
                test: /\.html$/, 
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            joi: 'joi-browser'
        }
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        inline: true
    },  
    plugins: debug ? 
    [
        new webpack.HotModuleReplacementPlugin()
    ] : 
    [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
  ]
}