const path = require('path');
const config = require('./config');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new extractTextPlugin({ filename: 'static/css/[name].css' });

module.exports = {
  entry: path.join(config.rootSrc, 'index.js'),

  output: {
    path: config.distSrc,                                   // webpack打包的模块均以该值作为目录
    filename: 'js/[name].js',
    chunkFilename: "js/[id].js",
    publicPath: '/',
  },

  module: {
    rules: [
      // js loader
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [config.rootSrc],
        exclude: [/node_modules/]
      },

      // css loader
      {
        test: /\.css$/,
        include:[config.rootSrc] ,
        use: extractPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: { plugins: [require("autoprefixer")()] }
            }
          ],
          fallback: "style-loader"
        }),
      },

      // img loader
      {
        test: /\.(png|gif|jpg|jpeg)$/,
        loader: 'url-loader',
        options: {
          limit: 9000,
          name: 'static/images/[name].[ext]'
        },
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
    }]),

    extractPlugin
  ],

  devServer: {
    port: 9000,
    host: 'localhost',
    overlay: {
      errors: true,                 // 打包出现错误时，将错误显示在浏览器端
      warnings: true,               // 打包出现警告时，将错误显示在浏览器端
    },
  }
};