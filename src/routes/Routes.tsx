import React from 'react';
import { Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Cookies from 'js-cookie';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import Route from './Route';

const Routes: React.FC = () => {
  const id = Cookies.get('id');
  return (
    <Switch>
      <Route path="/app" component={AppRoutes} isPrivate />
      <Route path="/auth" component={AuthRoutes} />
      <Redirect to={(id) ? '/app' : '/auth'} />
    </Switch>
  );
};

export default Routes;