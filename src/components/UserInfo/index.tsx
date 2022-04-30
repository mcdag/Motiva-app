import { IconButton } from '@mui/material';
import ExampleAvatar from '../../assets/avatar-icon.svg';
import './styles.scss';

interface IProps {
  children: React.ReactNode
}

function UserInfo({ children }: IProps) {

  return (
    <>
      <div className='user-info-container'>
        <div className='user-info'>
          <IconButton className='avatar'>
            <img src={ExampleAvatar} alt="Avatar da criança" />
          </IconButton>
          <text className='name'> José Carlos </text>
        </div>
      </div>
      {children}
    </>
  )
}

export default UserInfo;

