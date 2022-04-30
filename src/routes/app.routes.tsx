import React from 'react';
import { Switch, RouteProps, useRouteMatch, Redirect } from 'react-router-dom';
import {
  Home,
  Login,
} from '../views';
import AppLayout from '../components/AppLayout';
import ChildActivities from '../views/ChildActivities';
import ActivityInstructions from '../views/Instructions';
import ParentsActivities from '../views/ParentsActivities';
import ParentsDayActivities from '../views/ParentsDayActivities';
import ParentsRewards from '../views/ParentsRewards';
import ChildRewards from '../views/ChildRewards';
import Route from './Route';
import ParentsActivitiesCreate from '../views/ParentsActivitiesCreate';
import Register from '../views/Register';
import RewardRegister from '../views/RewardRegister';
import chooseLogin from '../views/chooseLogin';

const AppRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
      <Switch>
        <Route path={`${path}/parents-day-activities`} component={ParentsDayActivities} exact/>
        <Route path={`${path}/parents-activities`} component={ParentsActivities} exact/>
        <Route path={`${path}/parents-rewards`} component={ParentsRewards} exact/>
        <Route path={`${path}/child-activities`} component={ChildActivities} exact/>
        <Route path={`${path}/activities-instructions`} component={ActivityInstructions} exact/>
        <Route path={`${path}/choose-login`} component={chooseLogin} exact/>
        <Route path={`${path}/child-rewards`} component={ChildRewards} />
        <Route path={`${path}/login`} component={Login} />
        <Route path={`${path}/register`} component={Register} />
        
        {/* Rotas que terão a barra de navegação */}
        <AppLayout>
          <Route exact path={`${path}/parents-activities/create`} component={ParentsActivitiesCreate} />
          <Route path={`${path}/parents-day-activities`} component={ParentsDayActivities} />
          <Route path={`${path}/parents-rewards`} component={ParentsRewards} />
          <Route path={`${path}/reward-register`} component={RewardRegister} />
        </AppLayout>

        <Route path={`${path}/home`} component={Home} />
        <Redirect to={`${path}/home`} />
      </Switch>
  );
};

export default AppRoutes;
