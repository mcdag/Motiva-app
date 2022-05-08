import Button from '../../components/Button';
import Cookies from 'js-cookie'
import { Alert, TextField } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Auth} from '../../interfaces/User';
import { UserService } from '../../services/UserService';
import './styles.scss'

interface IProps {
  identifier: string;
}

function Login() {
  const { identifier }:IProps = useParams();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

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
    if (response.status !== 200) {
      setError(true)
    } else {
      Cookies.set('name', response.data.name);
      Cookies.set('id', response.data.id);
      if(identifier === 'parent'){
        window.location.replace(`${window.location.origin}/app/select-child`);
        Cookies.set('type', 'parent');
      } else {
        window.location.replace(`${window.location.origin}/app/child-activities`);
        Cookies.set('type', 'child');
        Cookies.set('childIcon', response.data.icon);
      }
    }
  })

  return (
    <div className='general-login-container'>
      <p className='title'>Faça o login</p>
      <p className='subtitle'> Bem-vindo de volta!</p>
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
        <TextField type="password" className='text-field' label='Senha' variant='outlined' onChange={handleChangePassword} />
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
        <Button type='submit' onClick={handleClick} text='Entrar'/>
      </div>
      <div className='child-or-parent'>
        {
          identifier === 'parent' ?
          <div className='parent'>
            <div className='parent-text'>
              <p className='button-text'>É uma criança ?</p>
              <a href={`${window.location.origin}/auth/login/child`}>
                <button className='button'>
                  Entre como uma
                </button>
              </a>
            </div>
            <div className='parent-text'>
              <p className='button-text'>Não tem uma conta ?</p>
              <a href={`${window.location.origin}/auth/register`}>
                <button className='button'>
                  Registre-se agora
                </button>
              </a>
            </div>
          </div>
          :
          <div className='child'>
            <p className='child-text'>É um responsável ?</p>
            <a href={`${window.location.origin}/auth/login/parent`}>
              <button className='button'>
                Entre como um
              </button>
            </a>
          </div>
        }
      </div>
    </div>
  );
}

export default Login;
