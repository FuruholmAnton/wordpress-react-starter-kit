"use strict";

var webpack = require('webpack');
const path = require('path');
var loaders = require('./webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "public/[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development",
    allChunks: true
});

loaders.push({ 
  test: /\.scss$/, 
  loader: extractSass.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }),
  exclude: ['node_modules']
});

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './main.js',
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js',
  },
  devtool: "source-map",
  module: {
    loaders
  },
  plugins: [
      // output a separate css bundle
      // new ExtractTextPlugin({ filename: 'public/[name].css', disable: false, allChunks: true }),
      extractSass,

      // reloads browser when the watched files change
      new BrowserSyncPlugin({
        // use existing Apache virtual host
        proxy: 'http://reactwp.dev/',
        tunnel: true,
        // watch the built files and the index file
        files: ['src/*', 'index.php']
      }),

      // set node env
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ], 
};
