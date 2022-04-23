import React from 'react';
import { Switch, RouteProps, useRouteMatch, Redirect } from 'react-router-dom';
import {
  Home,
} from '../views';
import ParentsActivities from '../views/ParentsActivities';
import ParentsDayActivities from '../views/ParentsDayActivities';
import ParentsRewards from '../views/ParentsRewards';
import ChildTasks from '../views/ChildTasks';

import Route from './Route';

const AppRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
      <Switch>
        <Route path={`${path}/parents-day-activities`} component={ParentsDayActivities} />
        <Route path={`${path}/parents-activities`} component={ParentsActivities} />
        <Route path={`${path}/parents-rewards`} component={ParentsRewards} />
        <Route path={`${path}/home`} component={Home} />
        <Route path={`${path}/child-task`} component={ChildTasks} />
        <Redirect to={`${path}/home`} />
      </Switch>
  );
};

export default AppRoutes;
