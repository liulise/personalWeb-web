const path = require('path');
const config = require('./config');

module.exports = {
  entry: path.join(config.rootSrc, '/index.js'),

  output: {
    path: config.distSrc,
    filename: '[name].js',
    publicPath: config.publicPath
  },

  module: {
    rules: [
      { test: /\.js$/, include: [config.distSrc] }
    ]
  }
};