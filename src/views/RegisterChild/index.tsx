import { useState } from 'react';
import Slider from 'react-slick';
import Button from '../../components/Button';
import icon0 from '../../assets/child-0.svg';
import icon1 from '../../assets/child-1.svg';
import icon2 from '../../assets/child-2.svg';
import icon3 from '../../assets/child-3.svg';
import icon4 from '../../assets/child-4.svg';
import LeftArrow from '../../assets/left-arrow.svg';
import RightArrow from '../../assets/right-arrow.svg';
import { TextField } from '@mui/material';
import './styles.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { UserService } from '../../services/UserService';
import Cookies from 'js-cookie';
import { User } from '../../interfaces/User';

interface IIcon {
  image: string,
  id: string
}

function RegisterChild() {
  const id = Cookies.get('id');
  const [sliderRef, setSliderRef] = useState<any>(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const icons: IIcon[] = [
    {
      image: icon0,
      id: '0'
    },
    {
      image: icon1,
      id: '1'
    },
    {
      image: icon2,
      id: '2'
    },
    {
      image: icon3,
      id: '3'
    },
    {
      image: icon4,
      id: '4'
    },
  ];

  const sliderSettings = {
    arrows: false,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const child: User = {
      name: name,
      email: email,
      icon: '1',
      password: password,
      parentId: id,
    }
    await UserService.createUser(child);
  }

  return (
    <section className='register-child'>
      <h1>Cadastre a criança</h1>
      <h2>Preencha com as informações referentes à criança!</h2>

      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <div className='carousel'>
          <button type='button' className='arrow-button' onClick={sliderRef?.slickPrev}>
            <img src={LeftArrow} alt=''/>
          </button>
          <div className='carousel-content'>
            <Slider ref={setSliderRef} {...sliderSettings}>
              {icons.map((icon) => (
                <button className='icon' key={icon.id}>
                  <img src={icon.image} alt=''/>
                </button>
              ))}
            </Slider>
          </div>
          <button type='button' className='arrow-button' onClick={sliderRef?.slickNext}>
            <img src={RightArrow} />
          </button>
        </div>

        <div className='fields'>
          <TextField required className='text-field' label='Nome' variant='outlined' onChange={(e) => setName(e.target.value)} />
          <TextField required className='text-field' label='Idade' variant='outlined' onChange={(e) => setAge(e.target.value)} />
          <TextField required className='text-field email' label='Email' variant='outlined' onChange={(e) => setEmail(e.target.value)} />
          <TextField required className='text-field' type='password' label='Senha' variant='outlined' onChange={(e) => setPassword(e.target.value)} />
        </div>
  
        <Button text='Continuar' type='submit' />
      </form>
    </section>
  );
};

export default RegisterChild;
