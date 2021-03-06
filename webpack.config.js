const path = require('path');
const config = require('./config');
const webpack = require('webpack');
const manifest = require('./vendor-manifest.json');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new extractTextPlugin({ filename: 'static/css/[name].[contenthash:8].css' });

module.exports = {
  entry: {
    index: [
      path.join(config.rootSrc, 'index.jsx')
    ]
  },

  output: {
    // webpack打包的模块均以该值作为目录
    path: config.distSrc,
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].js',
    publicPath: config.publicPath,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",                     // 匹配到ext为js文件，先eslint检测
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      // js loader
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [config.rootSrc],
        exclude: [/node_modules/]
      },

      // css loader
      {
        test: /\.css$/,
        include:[config.rootSrc] ,
        use: extractPlugin.extract({
          fallback: 'style-loader',
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
                plugins: [require('autoprefixer')({ browsers: 'ie >= 9' })]
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
          limit: 8000,
          name: 'static/images/[name].[hash:8].[ext]'
        },
      },

      // font loader
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      }
    ]
  },

  plugins: [
    extractPlugin,

    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(config.rootSrc, 'index.html'),

      title: '一抹萧然',
      lodash: `<script src="${config.publicPath}static/js/lodash.min.js"></script>`,
      vendor: `<script src="${config.publicPath}static/js/vendor.dll.js"></script>`,
      bootstrap: `<link href="${config.publicPath}static/css/bootstrap.css" type="text/css" rel="stylesheet" />`
    }),

    new copyWebpackPlugin([{
      to: path.resolve(config.distSrc, 'static'),
      from: path.resolve(config.rootSrc, 'static')
    }]),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 2                    // 当至少2个模块包含js库时，将其打包为公共库vendor
    }),

    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   sourceMap: false
    // }),

    new webpack.DefinePlugin({
      env: config.NODE_ENV
    }),

    new webpack.DllReferencePlugin({
      manifest,
      context: __dirname
    })
  ],

  devServer: {
    port: config.port,
    host: 'localhost',
    overlay: {
      errors: true,                 // 打包出现错误时，将错误显示在浏览器端
      //warnings: true,               // 打包出现警告时，将错误显示在浏览器端
    },
  },

  resolve: {
    modules: [config.rootSrc, 'node_modules'],  // 如果指定modules，引入模块只会 modules 下的目录查找
    extensions: ['.js', '.json'],
    alias: { src: config.rootSrc }
  },

  externals: {
    'lodash': '_'           // externals中不会被webpack打包，_为lodash库暴露到全局的变量
  },

  devtool: 'source-map' || config.devtool
};
