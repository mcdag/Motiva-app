import { IconButton } from '@mui/material';
import AdultIcon from '../../assets/adult-icon.svg';
import KidIcon from '../../assets/kid-icon.svg';
import './styles.scss';

function ChooseLogin() {
  return (
    <div className='choose-login-general-container'>
      <div className='title-container'>
        <p className='title-text'> Como deseja fazer login?</p>
      </div>
      <div className='login-parent-child-container'>
        <div className='parent-login'>
          <IconButton className='icon' href='login/parent'>
            <img src={AdultIcon} alt='Ícone adulto' />
          </IconButton>
          <p className='icon-title'> Responsável </p>
        </div>
        <div className='child-login'>
          <IconButton className='icon' href='login/child'>
            <img src={KidIcon} alt='Ícone criança' />
          </IconButton>
          <p className='icon-title'> Criança </p>
        </div>
        <div className='login-register'>
          <p className='button-text'>Não tem uma conta ?</p>
          <a href={`${window.location.origin}/auth/register`}>
            <button className='button'>
              Registre-se agora
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ChooseLogin;