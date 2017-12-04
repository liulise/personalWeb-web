var path = require("path");
var webpack = require("webpack");
const config = require('./config');

module.exports = {
  entry: {
    vendor: ['babel-polyfill', 'jquery', 'lodash', 'vue', 'vuex', 'vue-router']
  },

  output: {
    path: path.join(config.rootSrc, '/static/js'), // 打包后文件输出的位置
    filename: '[name].dll.js',
    library: '[name]_library'
    // vendor.dll.js中暴露出的全局变量名。
    // 主要是给DllPlugin中的name使用，
    // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
    // 压缩打包的文件，与该文章主线无关
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};