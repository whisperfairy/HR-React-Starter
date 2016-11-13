var path = require('path');
var webpack = require('webpack');
const config = require('../config/config');
var autoprefixer =require('autoprefixer');
var precss =require('precss');
var smart_import =require('postcss-smart-import')
var ExtractTextPlugin =require('extract-text-webpack-plugin')
var baseConfig = {
    target: 'web',
    context:path.join(__dirname,'..'),
    entry: {
       index: [path.join(config.appDir,'index.js')],
       vendor: ['moment','react','react-router','react-dom','react-redux']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    module:{
        rules:[{
             test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, "../app")
            ],
            exclude: [
                path.resolve(__dirname, "../node_modules")
            ],
            loader:'babel-loader'
        }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'] ,
            minChunks: Infinity
        }),
        ]


};

module.exports = baseConfig;