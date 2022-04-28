import React from 'react';
import HomeIcon from '../../assets/home-icon.svg';
import TasksIcon from '../../assets/tasks-icon.svg';
import RewardIcon from '../../assets/reward-icon.svg';
import ProfileIcon from '../../assets/profile-icon.svg';
import AvatarIcon from '../../assets/avatar-icon.svg';
import './styles.scss';

interface Props {
  children: React.ReactNode;
}

function AppLayout({ children }: Props) {
  return (
    <div className="main-layout">
      <header>
        <button className='header-profile' onClick={() => {}}>
          <img src={AvatarIcon} alt="ícone de avatar" />
        </button>
        <p>Maurício Carlos</p>
      </header>
      <div className="content">
        {children}
      </div>
      <nav className="main-nav">
        <img className='nav-icon' src={HomeIcon} alt="Icone da home" />
        <img className='nav-icon' src={TasksIcon} alt="Icone de tasks" />
        <img className='nav-icon' src={RewardIcon} alt="Icone de recompensas" />
        <img className='nav-icon' src={ProfileIcon} alt="Icone de perfil" />
      </nav>
    </div>
  );
}

export default AppLayout;
