import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// 首页
import IndexPage from './routes/IndexPage';
// 产品列表
import Products from './routes/Products';
import Home from './routes/Home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
