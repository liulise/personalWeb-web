const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const isDevelop = NODE_ENV === 'develop';

module.exports = {
  rootSrc: path.resolve('src'),
  distSrc: path.resolve('dist'),
  publicPath: isDevelop ? '/' : ''
};