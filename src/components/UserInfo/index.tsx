import { Divider, IconButton, List } from '@mui/material';
import ExampleAvatar from '../../assets/avatar-icon.svg';
import './styles.scss';

function UserInfo() {

  return (
    <div className='user-info-container'>
      <List>
        <div className='user-info'>
          <IconButton className='avatar'>
            <img src={ExampleAvatar} alt="Avatar da criança" />
          </IconButton>
          <text className='name'> José Carlos </text>
        </div>
        <Divider />
      </List>
    </div>
  )
}

export default UserInfo;

