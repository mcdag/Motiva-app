import React from 'react';
import { Switch, RouteProps, useRouteMatch, Redirect } from 'react-router-dom';
import {
  Home,
  ParentsActivitiesCreate
} from '../views';
import AppLayout from '../components/AppLayout';
import ChildActivities from '../views/ChildActivities';
import ParentsActivities from '../views/ParentsActivities';
import ParentsDayActivities from '../views/ParentsDayActivities';
import ParentsRewards from '../views/ParentsRewards';
import Route from './Route';

const AppRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
      <Switch>
        <Route exact path={`${path}/parents-activities`} component={ParentsActivities} />
        <Route path={`${path}/child-activities`} component={ChildActivities} />
        <Route path={`${path}/home`} component={Home} />
        
        {/* Rotas que terão a barra de navegação */}
        <AppLayout>
          <Route exact path={`${path}/parents-activities/create`} component={ParentsActivitiesCreate} />
          <Route path={`${path}/parents-day-activities`} component={ParentsDayActivities} />
          <Route path={`${path}/parents-rewards`} component={ParentsRewards} />
        </AppLayout>

        <Redirect to={`${path}/home`} />
      </Switch>
  );
};

export default AppRoutes;
