import React from 'react';
import HomeIcon from '../../assets/home-icon.svg';
import TasksIcon from '../../assets/tasks-icon.svg';
import RewardIcon from '../../assets/reward-icon.svg';
import ProfileIcon from '../../assets/profile-icon.svg';
import AvatarIcon from '../../assets/avatar-icon.svg';
import Cookies from 'js-cookie';
import './styles.scss';
import { useRouteMatch } from 'react-router';

interface IProps {
  children: React.ReactNode;
}

function WithNav({ children }: IProps) {
  const { path } = useRouteMatch();
  const childName = Cookies.get('childName');

  const handleClick = () => {
    Cookies.remove('childName');
    Cookies.remove('childId');
  }

  return (
    <div className="main-layout">
      <header>
      <a href={`${window.location.origin}/app/home`} onClick={() => handleClick()}>
        <button className='header-profile'>
          <img src={AvatarIcon} alt="ícone de avatar" />
        </button>
      </a>
        <p>{childName}</p>
      </header>
      <div className="content">
        {children}
      </div>
      <nav className="main-nav">
        <a className={path === `/app/parents-day-activities` ? 'selected' : ''} href={`${window.location.origin}/app/parents-day-activities`}>
          <img className='nav-icon' src={HomeIcon} alt="Icone da home" />
        </a>
        <a className={path === `/app/parents-activities` ? 'selected' : ''} href={`${window.location.origin}/app/parents-activities`}>
          <img className='nav-icon' src={TasksIcon} alt="Icone de tasks" />
        </a>
        <a className={path === `/app/parents-rewards` ? 'selected' : ''} href={`${window.location.origin}/app/parents-rewards`}>
          <img className='nav-icon' src={RewardIcon} alt="Icone de recompensas" />
        </a>
        <a className={path === `/app/profile` ? 'selected' : ''} href={`${window.location.origin}/app/profile`}>
          <img className='nav-icon' src={ProfileIcon} alt="Icone de perfil" />
        </a>
      </nav>
    </div>
  );
}

export default WithNav;
