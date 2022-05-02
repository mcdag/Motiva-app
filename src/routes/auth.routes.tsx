import React from 'react';
import { Switch, RouteProps, useRouteMatch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import { Login } from '../views';
import Route from './Route';

const AuthRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${path}/login/:identifier`} component={Login} exact />
        <Redirect to={`${path}/login/parent`} exact />
      </Switch>
    </Router>
  );
};

export default AuthRoutes;