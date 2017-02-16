var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Message = require('../modules/message.js');

var message = new Message();

module.exports = {
	entry: message.getEntries(),
	output: {
		path: path.resolve('webapp'),
		filename: '[name]/[name].js',
		chunkFilename: '[id][hash].js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: ['babel-loader'],
			exclude: [
				path.resolve("node_modules")
			]
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader']
			})
		}, {
			test: /\.vue$/,
			use: [{
				loader: 'vue-loader',
				options: {
					vue: {
						loaders: {
							css: ExtractTextPlugin.extract({
								fallback: 'style-loader',
								use: 'css-loader'
							})
						}
					}
				}
			}],
		}, {
			test: /\.(png|jpg|gif)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: 'static/images/[name]_[hash].[ext]'
				}
			}]
		}, {
			test: /\.html$/,
			use: ['html-withimg-loader']
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: 'static/font/[name]_[hash].[ext]'
				}
			}]
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',
			filename: '[name]/bundle.js',
			minChunks: 2,
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jquery': 'jquery',
			'window.$': 'jquery',
			vue: 'vue/dist/vue.common.js',
			Vue: 'vue/dist/vue.common.js',
			element: 'element-ui'
		}),
		new ExtractTextPlugin('[name]/styles.css'),
		new webpack.DefinePlugin({
			_PRODUC_: JSON.stringify(JSON.parse('false')),
			API: JSON.stringify('http://192.168.8.11/bbs_api/')
		}),
		new webpack.HotModuleReplacementPlugin(),
		...message.getHtml()
	],
	resolve: {
		modules: [
			"node_modules", path.resolve("node_modules")
		]
	}
}