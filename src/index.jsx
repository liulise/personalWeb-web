import 'src/assets/css/index.css';// 使用 css-loader 只能处理相对路径的文件

import React from 'react';
import ReactDOM from 'react-dom';
import World from 'src/pages/home/index.jsx';

ReactDOM.render(<World />, document.querySelector('#root'));
