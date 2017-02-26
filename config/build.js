var webpack = require('webpack');
var message = require('../modules/message.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
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
		
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		
		...message.getHtml()
	]
}