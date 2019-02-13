import React from 'react';
import ReactDOM from 'react-dom';
// 全局样式
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';
// 引入App组件
import App from './App';
// 让程序高效
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
