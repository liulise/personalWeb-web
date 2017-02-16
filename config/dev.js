var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval-source-map',
	devServer:{
		contentBase:'./webapp',
		port:5000,
		hot:true,
		inline:true
	}
}