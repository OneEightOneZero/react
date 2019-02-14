import React from 'react';
import ReactDOM from 'react-dom';
// redux的核心文件
import {createStore} from 'redux';
// 提供对react支持的库
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
  
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// createStore是帮我们react创建一个存放数据的仓库
// createStore第一个参数是仓库里面的值，都放在state里面
// state,mutation,action,getter (Vue)
// state,action
// createStore第二个参数是action，是触发state更改的函数，异步放action,触发mumatation
// action在react里面就是直接拿来定义更改state的函数
// 所有组件的全局变量，共有数据
// react是没有getters，也没有mutation，getters是用connect配个props来获取值得
let store = createStore((state = {
    author: "lemon",
    age: 19,
    skill: ['ps','css','js']
}, action) => {
    switch (action.type) {
        // case 'INCREMENT':
        // return state + 1
        // case 'DECREMENT':
        // return state - 1
        // 更改state里面的值，获取
        case 'setAuthor':
        // state.author = action.author
        // return state
        return {
            // 首先继承原来的state仓库
            ...state,
            // 再更改仓库的author值
            author: action.author
        }
        // 最后返回一个新的state，仓库更新了
        default:
        return state
    }
})
// 用Provider把整个<App />包裹，那现在整个react项目都可以调用store仓库里面的值
// 把createStore创建的store放到Provider组件的store属性值里面
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
