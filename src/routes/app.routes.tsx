import React from 'react';
import { Switch, RouteProps, useRouteMatch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import {
  Home,
  ParentsActivitiesCreate,
  SelectChild,
  Login,
} from '../views';
import NoNav from '../components/NoNav';
import ChildActivities from '../views/ChildActivities';
import ActivityInstructions from '../views/Instructions';
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

        <Redirect to={`/home`} />
        <Route path={`${path}/parents-day-activities`} component={ParentsDayActivities} exact/>
        <Route path={`${path}/parents-activities`} component={ParentsActivities} exact/>
        <Route path={`${path}/parents-rewards`} component={ParentsRewards} exact/>
        <Route path={`${path}/child-activities`} component={ChildActivities} exact/>
        <Route path={`${path}/activities-instructions`} component={ActivityInstructions} exact/>
        <Route path={`${path}/chose-login`} component={choseLogin} exact/>
        <Route path={`${path}/child-rewards`} component={ChildRewards} />
        <Route path={`${path}/login`} component={Login} />
        <Route path={`${path}/register`} component={Register} />
        
        {/* Rotas que terão a barra de navegação */}
        {/* <WithNav>
          <Route exact path={`${path}/parents-activities/create`} component={ParentsActivitiesCreate} />
          <Route path={`${path}/parents-day-activities`} component={ParentsDayActivities} />
          <Route path={`${path}/parents-rewards`} component={ParentsRewards} />
          <Route path={`${path}/reward-register`} component={RewardRegister} />
        </WithNav> */}

        <Route path={`${path}/home`} component={Home} />
        <Redirect to={`${path}/home`} />
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
