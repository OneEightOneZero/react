import React, { Component } from 'react';
// 路由模块提供了三个组件
// Router路由的容器 <router-view>
// Route是要放在Router组件里面的，用来定义路由规则
// Link相当于a标签，用来声明式导航，你可以用JS的编程式导航取代
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Mine from './pages/Mine';

class App extends Component {
  render() {
    return (
      <Router>
        {/* 最外层需要用Router组件包裹 */}
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mine">Mine</Link>
            </li>
          </ul>
          {/*如果匹配到* / 那在这里加载Home组件*/}
          <Route exact path="/" component={Home}  />
          {/*如果匹配到* /mine 那在这里加载Mine组件*/}
          <Route path="/mine" component={Mine}  />
        </div>
      </Router>
      );
  }
}

export default App;
