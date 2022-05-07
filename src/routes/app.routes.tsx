import React from 'react';
import { Switch, RouteProps, useRouteMatch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import {
  Home,
  ParentsActivitiesCreate,
  Login,
} from '../views';
import ChildActivities from '../views/ChildActivities';
import ActivityInstructions from '../views/Instructions';
import ParentsActivities from '../views/ParentsActivities';
import ParentsDayActivities from '../views/ParentsDayActivities';
import ParentsRewards from '../views/ParentsRewards';
import ChildRewards from '../views/ChildRewards';
import RegisterChild from '../views/RegisterChild';
import ParentsActivitiesEdit from '../views/ParentsActivitiesEdit';

import './styles.scss';
import Route from './Route';
import RewardRegister from '../views/RewardRegister';
import SelectChild from '../views/SelectChild';

const AppRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${path}/child-activities`} component={ChildActivities} exact/>
        <Route path={`${path}/parents-activities-create`} component={ParentsActivitiesCreate} exact />
        <Route path={`${path}/parents-activities-edit/:id`} component={ParentsActivitiesEdit} exact/>
        <Route path={`${path}/register-child`} component={RegisterChild} exact />
        <Route path={`${path}/parents-day-activities`} component={ParentsDayActivities} exact/>
        <Route path={`${path}/parents-activities`} component={ParentsActivities} exact/>
        <Route path={`${path}/parents-rewards`} component={ParentsRewards} exact/>
        <Route path={`${path}/activities-instructions/:id`} component={ActivityInstructions} exact/>
        <Route path={`${path}/child-rewards`} component={ChildRewards} />
        <Route path={`${path}/reward-register`} component={RewardRegister} />
        <Route path={`${path}/home`} component={SelectChild} exact />
        <Redirect to={`${path}/home`} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
