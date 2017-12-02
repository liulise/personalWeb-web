import './assets/css/index.css';                    // 使用 css-loader 只能处理相对路径的文件
import './assets/css/key.css';

// 在js中如果想要获取图片地址，只能手动import，所以尽量使用背景和CDN
import imgSrc from "./assets/images/bg.jpg";

const a = 123;
console.log(imgSrc);