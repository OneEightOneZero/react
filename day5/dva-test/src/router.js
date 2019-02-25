import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>props
        <Route path="/" exact render={(props) => <IndexPage {...props} name={
          ()=>{
            console.log(1)
          }
        } />} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
