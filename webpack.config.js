const path = require('path');
const config = require('./config');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new extractTextPlugin({ filename: 'static/css/[name].css' });

module.exports = {
  // babel-polyfill解决promise等API
  entry: {
    index: ['babel-polyfill', path.join(config.rootSrc, 'index.js')]
  },

  output: {
    // webpack打包的模块均以该值作为目录
    path: config.distSrc,
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
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              // 0 => 无 loader(默认); 1 => postcss-loader
              // 指代应用于 @import 时会应用的后面的loader
              options: { importLoaders: 1 }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [require("autoprefixer")({ browsers: 'ie >= 9' })]
              }
            }
          ]
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
      },

      // font loader
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'static/fonts/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    extractPlugin,

    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(config.rootSrc, 'index.html')
    }),

    new copyWebpackPlugin([{
      to: path.resolve(config.distSrc, 'static'),
      from: path.resolve(config.rootSrc, 'static')
    }]),

    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: 2                    // 当至少2个模块包含js库时，将其打包为公共库vendor
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),

    new webpack.DefinePlugin({
      env: config.NODE_ENV
    })
  ],

  devServer: {
    port: 9000,
    host: 'localhost',
    overlay: {
      errors: true,                 // 打包出现错误时，将错误显示在浏览器端
      warnings: true,               // 打包出现警告时，将错误显示在浏览器端
    },
  },

  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'src': config.rootSrc,
    }
  },

  devtool: config.devtool
};