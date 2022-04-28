import { TextField } from '@mui/material';
import { useState } from 'react';
import ButtonProject from '../../components/Button';
import './styles.scss'

function LoginParentAndChild() {
  let identifier = 'parent';
  // identifier = 'child';


  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClick = (() => {

  })

  return (
    <div className='general-login-container'>
      <p className='title'>Faça o login</p>
      <p className='subtitle'> Bem-vindo de volta,</p>
      <p className='subtitle'> Nós sentimos sua falta </p>
      <div className='text-fields'>
        <TextField sx={{marginBottom: '5%'}} className='text-field' label='Login' variant='outlined' onChange={handleChangeLogin} />
        <TextField className='text-field' label='Senha' variant='outlined' onChange={handleChangePassword} />
      </div>
      <div className='forgot-password'>
        {
          identifier === 'parent' ?
          <button className='button-forget-password'>
            Esqueceu a senha?
          </button> :
          <></>
        }
      </div>
      <div className='button-submit'>
        <ButtonProject type='submit' onClick={handleClick} text='Salvar'/>
      </div>
      <div className='child-or-parent'>
        {
          identifier === 'parent' ?
          <div className='parent'>
            <div className='parent-text'>
              <p className='button-text'>É uma criança ?</p>
              <button className='button'>
              Entre como uma
              </button>
            </div>
            <div className='parent-text'>
              <p className='button-text'>Não tem uma conta ?</p>
              <button className='button'>
              Registre-se agora
              </button>
            </div>
          </div>
          :
          <div className='child'>
            <p className='child-text'>É um reponsável ?</p>
            <button className='button'>
              Entre como um
            </button>
          </div>
        }
      </div>
    </div>
  );
}

export default LoginParentAndChild;
