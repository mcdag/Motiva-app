import { Avatar, Divider, List } from '@mui/material';
import ExampleAvatar from '../../assets/avatar-example.svg';
import './styles.scss';

function UserInfo() {

  return (
    <div className='user-info-container'>
      <List>
        <div className='user-info'>
          <Avatar className='avatar' alt="Avatar da criança" src={ExampleAvatar} />
          <text className='name'> José Carlos </text>
        </div>
        <Divider />
      </List>
    </div>
  )
}

export default UserInfo;

