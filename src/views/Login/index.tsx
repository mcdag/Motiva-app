import { Alert, TextField } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { Auth, User } from '../../interfaces/User';
import { UserService } from '../../services/UserService';
import './styles.scss'

function Login() {
  let identifier = 'parent';
  // identifier = 'child';


  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClick = (async () => {
    const login: Auth = {
      email: email,
      password: password,
    }
    const response = await UserService.getLogin(login);
    if(response.status !== 200){
      setError(true)
    }else {
      setUser(response.data)
    }
  })

  if(user) {
    <Link to={{pathname: '/parents-day-activities' }}> </Link>
  }

  return (
    <div className='general-login-container'>
      <p className='title'>Faça o login</p>
      <p className='subtitle'> Bem-vindo de volta,</p>
      <p className='subtitle'> Nós sentimos sua falta </p>
      <div className='invalid-auth'>
        {
          error ?
          <Alert sx={{width: '100%', justifyContent: 'center'}} severity='error'>Email ou senha inválidos</Alert> :
          <></>
        }
      </div>
      <div className='text-fields'>
        <TextField sx={{marginBottom: '5%'}} className='text-field' label='Email' variant='outlined' onChange={handleChangeEmail} />
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
        <Button type='submit' onClick={handleClick} text='Salvar'/>
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

export default Login;
