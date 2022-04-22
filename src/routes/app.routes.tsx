import React from 'react';
import { Switch, RouteProps, useRouteMatch, Redirect } from 'react-router-dom';

import {
  AppLayout,
  Home,
} from '../views';
import ChildTasks from '../views/ChildTasks';

import Route from './Route';

const AppRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
    <AppLayout>
      <Switch>
        <Route path={`${path}/home`} component={Home} />
        <Route path={`${path}/child-task`} component={ChildTasks} />
        <Redirect to={`${path}/home`} />
      </Switch>
    </AppLayout>
  );
};

export default AppRoutes;
