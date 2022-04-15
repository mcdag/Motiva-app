import React from 'react';
import { Switch, RouteProps, useRouteMatch, Redirect } from 'react-router-dom';

import { Login } from '../views';
import Route from './Route';

const AuthRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/signin`} component={Login} />
      <Redirect to={`${path}/signin`} />
    </Switch>
  );
};

export default AuthRoutes;