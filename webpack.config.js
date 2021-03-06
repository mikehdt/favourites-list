"use strict";

var path = require('path');
var webpack = require('webpack');

// var definePlugin = new webpack.DefinePlugin({
//     // __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
//     // __STAGING__: JSON.stringify(JSON.parse(process.env.BUILD_STAGING || 'false')),
//     // __PRODUCTION__: JSON.stringify(JSON.parse(process.env.BUILD_PRODUCTION || 'false'))
// });
// Let's keep it tidy for now :)

module.exports = {
    // As we specify extensions later, we could drop .scss or .js here, but I
    // feel that it's more important to be explicit than implicit...
    entry: [
        './app/main.js',
        // 'webpack-dev-server/client?http://localhost:8081'
    ],

    output: {
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: '/',
        filename: '[name].js'
    },

    devServer: {
        contentBase: './src'
    },

    // Can also be inline-source-map if we really wanted
    devtool: 'source-map',

    module: {
        preLoaders: [
            {
                test: /\.js$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "eslint-loader"
            }
        ],
        loaders: [
            {
                test: /.*\.js$/,
                include: path.join(__dirname, 'app'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                drop_debugger: false,
                screw_ie8: true // lulz
            }
        })
    ],

    // Allow these extensions to be dropped in our require()s (teaches webpack)
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    }

    // debug: true
};