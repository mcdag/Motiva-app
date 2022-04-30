import React from 'react';
import { Switch, RouteProps, useRouteMatch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import {
  Home,
  ParentsActivitiesCreate,
  SelectChild
} from '../views';
import WithNav from '../components/WithNav';
import NoNav from '../components/NoNav';
import ChildActivities from '../views/ChildActivities';
import ActivityInstructions from '../views/Instructions';
import LoginParentChild from '../views/LoginParentChild';
import ParentsActivities from '../views/ParentsActivities';
import ParentsDayActivities from '../views/ParentsDayActivities';
import ParentsRewards from '../views/ParentsRewards';
import ChildRewards from '../views/ChildRewards';
import RegisterChild from '../views/RegisterChild';

import HomeIcon from '../assets/home-icon.svg';
import TasksIcon from '../assets/tasks-icon.svg';
import RewardIcon from '../assets/reward-icon.svg';
import ProfileIcon from '../assets/profile-icon.svg';
import AvatarIcon from '../assets/avatar-icon.svg';
import './styles.scss';
import Route from './Route';

const AppRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${path}/parents-activities`} component={ParentsActivities}/>
        <Route path={`${path}/child-activities`} component={ChildActivities}/>
        <Route path={`${path}/activities-instructions`} component={ActivityInstructions}/>
        <Route path={`${path}/login-parent-child`} component={LoginParentChild}/>
        <Route path={`${path}/child-rewards`} component={ChildRewards} />

        <Route path={`${path}/parents-activities-create`} component={ParentsActivitiesCreate} />
        <Route path={`${path}/parents-day-activities`} component={ParentsDayActivities} />
        <Route path={`${path}/parents-rewards`} component={ParentsRewards} />
        <Route path={`${path}/select-child`} component={SelectChild} />
        <Route path={`${path}/register-child`} component={RegisterChild} />
        
        {/* Rotas que terão a barra de navegação */}
        {/* <Route
          path={[`${path}/parents-activities-create`, `${path}/parents-day-activities`, `${path}/parents-rewards`]}
          component={WithBar}
        /> */}

        <Route path={`${path}/home`} component={Home} />

        <Redirect to={`/home`} />
      </Switch>
    </Router>
  );
};

const WithBar = () => {
  const { path } = useRouteMatch();

  return (
    <div className="main-layout">
      <header>
        <button className='header-profile' onClick={() => {}}>
          <img src={AvatarIcon} alt="ícone de avatar" />
        </button>
        <p>Maurício Carlos</p>
      </header>
      <div className="content">
        <Switch>
          <Route path={`${path}/parents-activities-create`} component={ParentsActivitiesCreate} />
          <Route path={`${path}/parents-day-activities`} component={ParentsDayActivities} />
          <Route path={`${path}/parents-rewards`} component={ParentsRewards} />
        </Switch>
      </div>
      <nav className="main-nav">
        <img className='nav-icon' src={HomeIcon} alt="Icone da home" />
        <img className='nav-icon' src={TasksIcon} alt="Icone de tasks" />
        <img className='nav-icon' src={RewardIcon} alt="Icone de recompensas" />
        <img className='nav-icon' src={ProfileIcon} alt="Icone de perfil" />
      </nav>
    </div>
  )
};

export default AppRoutes;
