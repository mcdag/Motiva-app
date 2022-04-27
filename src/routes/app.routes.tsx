import React from 'react';
import { Switch, RouteProps, useRouteMatch, Redirect } from 'react-router-dom';
import {
  Home,
} from '../views';
import ChildActivities from '../views/ChildActivities';
import ActivityInstructions from '../views/Instructions';
import LoginParentChild from '../views/LoginParentChild';
import ParentsActivities from '../views/ParentsActivities';
import ParentsDayActivities from '../views/ParentsDayActivities';
import ParentsRewards from '../views/ParentsRewards';
import ChildRewards from '../views/ChildRewards';
import Route from './Route';

const AppRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
      <Switch>
        <Route path={`${path}/parents-day-activities`} component={ParentsDayActivities} exact/>
        <Route path={`${path}/parents-activities`} component={ParentsActivities} exact/>
        <Route path={`${path}/parents-rewards`} component={ParentsRewards} exact/>
        <Route path={`${path}/child-activities`} component={ChildActivities} exact/>
        <Route path={`${path}/activities-instructions`} component={ActivityInstructions} exact/>
        <Route path={`${path}/login-parent-child`} component={LoginParentChild} exact/>
        <Route path={`${path}/child-rewards`} component={ChildRewards} />
        <Route path={`${path}/home`} component={Home} />
        <Redirect to={`${path}/home`} />
      </Switch>
  );
};

export default AppRoutes;
