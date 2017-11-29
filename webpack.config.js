const path = require('path');
const config = require('./config');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(config.rootSrc, 'index.js'),

  output: {
    path: config.distSrc,
    filename: 'js/[name].js',
    chunkFilename: "js/[id].js",
    publicPath: '',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [config.rootSrc]
      }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(config.rootSrc, 'index.html')
    }),

    new copyWebpackPlugin([{
      to: path.resolve(config.distSrc, 'static'),
      from: path.resolve(config.rootSrc, 'static')
    }])
  ]
};