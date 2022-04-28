import { Button, IconButton } from '@mui/material';
import AdultIcon from '../../assets/adult-icon.svg';
import KidIcon from '../../assets/kid-icon.svg';
import './styles.scss';

function LoginParentChild() {
  return (
    <div className='login-parent-child-container'>
      <div className='parent-login'>
        <IconButton className='icon' href='login/:parent'>
          <img src={AdultIcon} alt='Ícone adulto' />
        </IconButton>
        <p className='icon-title'> Responsável </p>
      </div>
      <div className='child-login'>
        <IconButton className='icon' href='login/:child'>
          <img src={KidIcon} alt='Ícone criança' />
        </IconButton>
        <p className='icon-title'> Criança </p>
      </div>
      <div className='login-register'>
        <p className='text'>Não tem uma conta ?</p>
        <Button sx={{ font: 'Outfit', fontWeight: '800', fontSize: '12px', lineHeight: '20px', color: '#000000'}}
         variant='text' className='button' href='register'>Registre-se agora</Button>
      </div>
    </div>
  );
}

export default LoginParentChild;