import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// 首页
import IndexPage from './routes/IndexPage';
// 产品列表
import Products from './routes/Products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
