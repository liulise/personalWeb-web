<<<<<<< HEAD
import 'lodash';
import './assets/css/index.css';                    // 使用 css-loader 只能处理相对路径的文件
=======
import _ from 'lodash';
import 'src/assets/css/index.css';                    // 使用 css-loader 只能处理相对路径的文件
>>>>>>> master

// 在js中如果想要获取图片地址，只能手动import，所以尽量使用背景和CDN
import imgSrc from "src/assets/images/bg.jpg";

console.log(imgSrc);

document.body.onclick = () =>
{
  // 通用的异步加载某模块, vue, react 有自己的加载方式
  require.ensure(['src/part'], () =>
  {
    console.log(require('src/part').a());
  });
};

if (env === 'develop')                // 通过 DefinePlugin 去除冗余代码
{
  console.log('develop');
}
else {
  console.log('production');
}

console.log(_);