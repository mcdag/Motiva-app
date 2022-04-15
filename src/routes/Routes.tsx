import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import Route from './Route';

const Routes: React.FC = () => {
  // const token = Cookies.get('token');

  const token = true;

  return (
    <Switch>
      <Route path="/app" component={AppRoutes} isPrivate />
      <Route path="/auth" component={AuthRoutes} />
      <Redirect to={token ? '/app' : '/auth'} />
    </Switch>
  );
};

export default Routes;