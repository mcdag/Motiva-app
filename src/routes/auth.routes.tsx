import React from 'react';
import { Switch, RouteProps, useRouteMatch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Register from '../views/Register';
import { Login } from '../views';
import Route from './Route';
import chooseLogin from '../views/chooseLogin';

const AuthRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${path}/login/:identifier`} component={Login} exact />
        <Route path={`${path}/register`} component={Register} exact />
        <Route path={`${path}/choose-login`} component={chooseLogin} exact/>
        <Redirect to={`${path}/choose-login`} exact />
      </Switch>
    </Router>
  );
};

export default AuthRoutes;