import { TextField } from '@mui/material';
import { useState } from 'react';
import Button from '../../components/Button';
import './styles.scss'

function Register() {
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [telephoneNumber, setTelephoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangeTelephoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClick = (() => {

  })

  return (
    <div className='general-register-container'>
      <p className='title'>Crie uma conta</p>
      <p className='subtitle'> Olá, boa jornada!</p>
      <div className='text-fields'>
        <TextField sx={{marginBottom: '5%'}} className='text-field' label='Nome' variant='outlined' onChange={handleChangeName} />
        <TextField sx={{marginBottom: '5%'}} className='text-field' label='Nome de usuário' variant='outlined' onChange={handleChangeUsername} />
        <TextField sx={{marginBottom: '5%'}} className='text-field' label='Telefone' variant='outlined' onChange={handleChangeTelephoneNumber} />
        <TextField sx={{marginBottom: '5%'}} className='text-field' label='Email' variant='outlined' onChange={handleChangeEmail} />
        <TextField className='text-field' label='Senha' variant='outlined' onChange={handleChangePassword} />
      </div>
      <div className='button-register'>
        <Button type='submit' onClick={handleClick} text='Registrar'/>
      </div>
      <div className='has-login'>
        <p className='button-text'>Já tem uma conta ?</p>
        <button className='button'>
            Faça login
        </button>
      </div>
    </div>
  );
}

export default Register;
