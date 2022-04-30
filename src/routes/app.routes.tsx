import React from 'react';
import { Switch, RouteProps, useRouteMatch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import {
  Home,
  ParentsActivitiesCreate,
  SelectChild,
  Login,
} from '../views';
import ChildActivities from '../views/ChildActivities';
import ActivityInstructions from '../views/Instructions';
import ParentsActivities from '../views/ParentsActivities';
import ParentsDayActivities from '../views/ParentsDayActivities';
import ParentsRewards from '../views/ParentsRewards';
import ChildRewards from '../views/ChildRewards';
import RegisterChild from '../views/RegisterChild';

import './styles.scss';
import Route from './Route';
import Register from '../views/Register';
import choseLogin from '../views/choseLogin';
import RewardRegister from '../views/RewardRegister';

const AppRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${path}/parents-activities-create`} component={ParentsActivitiesCreate} />
        <Route path={`${path}/select-child`} component={SelectChild} />
        <Route path={`${path}/register-child`} component={RegisterChild} />
        <Route path={`${path}/parents-day-activities`} component={ParentsDayActivities} exact/>
        <Route path={`${path}/parents-activities`} component={ParentsActivities} exact/>
        <Route path={`${path}/parents-rewards`} component={ParentsRewards} exact/>
        <Route path={`${path}/child-activities`} component={ChildActivities} exact/>
        <Route path={`${path}/activities-instructions`} component={ActivityInstructions} exact/>
        <Route path={`${path}/chose-login`} component={choseLogin} exact/>
        <Route path={`${path}/child-rewards`} component={ChildRewards} />
        <Route path={`${path}/login`} component={Login} />
        <Route path={`${path}/register`} component={Register} />
        <Route path={`${path}/reward-register`} component={RewardRegister} />

        <Route path={`${path}/home`} component={Home} />
        <Redirect to={`${path}/home`} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
