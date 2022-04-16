import React from 'react';
import { Switch, RouteProps, useRouteMatch, Redirect } from 'react-router-dom';
import {
  Home,
} from '../views';
import ParentTasks from '../views/ParentTasks';
import Route from './Route';

const AppRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
      <Switch>
        <Route path={`${path}/parent-tasks`} component={ParentTasks} />
        <Redirect to={`${path}/parent-tasks`} />
        <Route path={`${path}/home`} component={Home} />
        <Redirect to={`${path}/home`} />
      </Switch>
  );
};

export default AppRoutes;
