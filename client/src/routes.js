import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </App>
);

export default AppRoutes;
