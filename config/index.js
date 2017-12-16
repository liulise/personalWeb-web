const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const isDevelop = NODE_ENV === 'develop';

module.exports = {
  port: 9000,
  rootSrc: path.resolve('src'),
  distSrc: path.resolve('dist'),
  publicPath: isDevelop ? '/' : '',
  NODE_ENV: JSON.stringify(NODE_ENV),
  devtool: isDevelop ? 'cheap-module-eval-source-map' : 'source-map'
};