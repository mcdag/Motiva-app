import { IconButton } from '@mui/material';
import icon0 from '../../assets/child-0.svg';
import icon1 from '../../assets/child-1.svg';
import icon2 from '../../assets/child-2.svg';
import icon3 from '../../assets/child-3.svg';
import icon4 from '../../assets/child-4.svg';
import Cookies from 'js-cookie';
import './styles.scss';

interface IProps {
  children: React.ReactNode
}

function UserInfo({ children }: IProps) {
  const childName = Cookies.get('childName');
  const childIcon = Cookies.get('childIcon');

  const icons = [icon0, icon1, icon2, icon3, icon4];
  const icon = icons[parseInt(childIcon as string)];
  
  return (
    <>
      <div className='user-info-container'>
        <div className='user-info'>
          <IconButton className='avatar'>
            <img width='60px' src={icon} alt="Avatar da criança" />
          </IconButton>
          <p className='name'> {childName} </p>
        </div>
      </div>
      {children}
    </>
  )
}

export default UserInfo;

