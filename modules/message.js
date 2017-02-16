var path=require('path');
var fs=require('fs');
var htmlWebpackPlugin = require('html-webpack-plugin');

class Message {
	constructor() {
		this._path = path.resolve('src', 'pages');
		this.dirList = fs.readdirSync(this._path);
	}

	/*
	 *获得所有js入口文件
	 * */
	getEntries() {
		let _entry = Object.create(null);
		this.dirList.forEach(con => {
			_entry[con] = path.join(this._path, con, con + '.js');
		});
		return _entry;
	}
	
	/*
	 *获得所有html模板文件
	 * */
	getHtml(){
		let _html=[];
		this.dirList.forEach((con)=>{
			_html.push(new htmlWebpackPlugin({
				template:path.join(this._path,con,'index.html'),
				filename:`${con}/index.html`,
				chunks:['commons',con]
			}));
		});
		return _html;
	}
}

module.exports=Message;