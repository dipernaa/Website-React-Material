import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppContainer from './layout/AppContainer';
import Home from './home/Home';
import Resume from './resume/Resume';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={Home}/>
      <Route path="resume" component={Resume}/>
    </Route>
  </Router>
);

export default routes;
