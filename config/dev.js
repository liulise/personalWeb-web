var path = require('path');
var webpack = require('webpack');
var cProcess=require('child_process');

module.exports =config= {
	devtool: 'eval-source-map',
	devServer:{
		contentBase:'./webapp',
		port:5000,
//		hot:true,
		inline:true,
		publicPath:'http://localhost:5000'
	}
}

cProcess.exec('start '+config.devServer.publicPath+'/resume');
