var path = require('path');
var webpack=require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Message=require('../modules/message.js');

var message=new Message();

module.exports = {
	entry: message.getEntries(),
	output: {
		path: path.resolve('webapp'),
		filename: '[name]/[name].js',
		chunkFilename: '[id][hash].js'
	},
	module: {
		loaders: [{
			test:/\.js$/,
			loader:'babel-loader',
			exclude:/node_modules/
		}, {
			test: /\.css$/,
			loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
		}, {
			test: /\.vue$/,
			loader: 'vue'
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url?limit=8192&&name=static/images/[name]_[hash].[ext]'
		}, {
			test: /\.html$/,
			loader: 'html-withimg-loader'
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
			loader: 'file-loader?name=static/font/[name]_[hash].[ext]'
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
		    name: 'commons',
		    filename: '[name]/bundle.js',
		    minChunks: 2,
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings:false
			}
		}),
		new webpack.ProvidePlugin({
			$:'jquery',
			jQuery:'jquery',
			'window.jquery':'jquery',
			'window.$':'jquery',
			vue:'vue/dist/vue.common.js',
			Vue:'vue/dist/vue.common.js',
			element:'element-ui'
		}),
		new ExtractTextPlugin('[name]/styles.css'),
		new webpack.DefinePlugin({
		    _PRODUC_:JSON.stringify(JSON.parse('false')),
		    API:JSON.stringify('http://192.168.8.11/bbs_api/')
		}),
		...message.getHtml()
	]
}
