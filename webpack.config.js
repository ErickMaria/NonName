"use strict";

const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

require('dotenv').config({path: `${__dirname}/.env.production`});

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const BUNDLE_PATH = "./build"
const BUNDLE_FILE = "game.bundle.js";

module.exports = {
    
    mode: 'none',
    
    node: {
        fs: "empty"
    },  

    entry: './src/game.bootstrap.js',
    
    output: {
      path: path.resolve(__dirname, BUNDLE_PATH),
      filename: BUNDLE_FILE
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    },

    module: {
        rules: [
            { 
                test: /\.js$/ ,
                exclude: [
                    /node_modules/,
                    /src\/bin/
                ],
                use: 'babel-loader'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ],

    devServer: {
        host: HOST,
        port: PORT
    },
}
