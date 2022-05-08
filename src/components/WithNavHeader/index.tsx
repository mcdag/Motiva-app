import Cookies from 'js-cookie';
import HomeIcon from '../../assets/home-icon.svg';
import TasksIcon from '../../assets/tasks-icon.svg';
import LogoutIcon from '../../assets/logout-icon.svg';
import RewardIcon from '../../assets/reward-icon.svg';
import ProfileIcon from '../../assets/profile-icon.svg';
import icon0 from '../../assets/child-0.svg';
import icon1 from '../../assets/child-1.svg';
import icon2 from '../../assets/child-2.svg';
import icon3 from '../../assets/child-3.svg';
import icon4 from '../../assets/child-4.svg';
import LogoutDialog from '../../components/LogoutDialog';
import { useRouteMatch } from 'react-router';
import './styles.scss';
import { useState } from 'react';

interface IProps {
  children: React.ReactNode;
}

function WithNav({ children }: IProps) {
  const [logoutDialog, setLogoutDialog] = useState(false);
  const { path } = useRouteMatch();
  const childName = Cookies.get('childName');

  const icons = [icon0, icon1, icon2, icon3, icon4];
  const childIcon = Cookies.get('childIcon');
  const icon = icons[parseInt(childIcon as string)];

  const handleClick = () => {
    Cookies.remove('childId');
    Cookies.remove('childName');
    Cookies.remove('childIcon');
  }

  const handleClickLogout = () => {
    Cookies.remove('id');
    Cookies.remove('childId');
    Cookies.remove('childName');
    Cookies.remove('childIcon');
    Cookies.remove('name');
    Cookies.remove('type');
    window.location.replace(`${window.location.origin}/auth/choose-login`);
  }

  const handleClickOpenLogoutDialog = () => {
    setLogoutDialog(!logoutDialog);
  };

  return (
    <div className='main-layout'>
      <header>
        <div className='header-profile'>
          <a href={`${window.location.origin}/app/home`} onClick={() => handleClick()}>
            <button className='profile-button'>
              <img width='60px' src={icon} alt='ícone de avatar' />
            </button>
          </a>
          <p>{childName}</p>
        </div>
        <div className='header-logout'>
          <button onClick={handleClickOpenLogoutDialog} className='logout-button'>
            <img width='35px' src={LogoutIcon} alt='botão de logout' />
          </button>
          {logoutDialog && (
            <LogoutDialog handleFunction={handleClickOpenLogoutDialog} handleLogout={handleClickLogout} />
          )}
        </div>
      </header>
      <div className='content'>
        {children}
      </div>
      <nav className='main-nav'>
        <a className={path === `/app/parents-day-activities` ? 'selected' : ''} href={`${window.location.origin}/app/parents-day-activities`}>
          <img className='nav-icon' src={HomeIcon} alt='Icone da home' />
        </a>
        <a className={path === `/app/parents-activities` ? 'selected' : ''} href={`${window.location.origin}/app/parents-activities`}>
          <img className='nav-icon' src={TasksIcon} alt='Icone de tasks' />
        </a>
        <a className={path === `/app/parents-rewards` ? 'selected' : ''} href={`${window.location.origin}/app/parents-rewards`}>
          <img className='nav-icon' src={RewardIcon} alt='Icone de recompensas' />
        </a>
        <a className={path === `/app/profile` ? 'selected' : ''} href={`${window.location.origin}/app/profile`}>
          <img className='nav-icon' src={ProfileIcon} alt='Icone de perfil' />
        </a>
      </nav>
    </div>
  );
}

export default WithNav;
