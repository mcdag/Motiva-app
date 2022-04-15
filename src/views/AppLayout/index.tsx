import React from 'react';
import HomeIcon from '../../assets/home-icon.svg';
import TasksIcon from '../../assets/tasks-icon.svg';
import RewardIcon from '../../assets/reward-icon.svg';
import ProfileIcon from '../../assets/profile-icon.svg';
import './styles.scss';

interface Props {
  children: React.ReactNode;
}

function AppLayout({ children }: Props) {
  return (
    <div className="main-layout">
      {children}
    <footer>
      <img className='nav-icon' src={HomeIcon} alt="Icone da home" />
      <img className='nav-icon' src={TasksIcon} alt="Icone de tasks" />
      <img className='nav-icon' src={RewardIcon} alt="Icone de recompensas" />
      <img className='nav-icon' src={ProfileIcon} alt="Icone de perfil" />
    </footer>
    </div>
  );
}

export default AppLayout;
