import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cookies from 'js-cookie';
import Slider from 'react-slick';
import Button from '../../components/Button';
import icon0 from '../../assets/child-0.svg';
import icon1 from '../../assets/child-1.svg';
import icon2 from '../../assets/child-2.svg';
import icon3 from '../../assets/child-3.svg';
import icon4 from '../../assets/child-4.svg';
import LeftArrow from '../../assets/left-arrow.svg';
import RightArrow from '../../assets/right-arrow.svg';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { UserService } from '../../services/UserService';
import { User } from '../../interfaces/User';
import './styles.scss';

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
  const [icon, setIcon] = useState(0);

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
      name,
      email,
      icon: icon.toString(),
      password,
      parentId: id,
    }
    await UserService.createUser(child);
    window.location.replace(`${window.location.origin}/home`)
  }

  const handleNext = () => {
    if (icon === 4) {
      setIcon(0);
    } else {
      setIcon(icon + 1);
    }

    sliderRef?.slickNext();
  }

  const handlePrev = () => {
    if (icon === 0) {
      setIcon(4);
    } else {
      setIcon(icon - 1);
    }

    sliderRef?.slickPrev();
  }

  return (
    <section className='register-child'>
      <h1>Cadastre a criança</h1>
      <h2>Preencha com as informações referentes à criança!</h2>

      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <div className='carousel'>
          <button type='button' className='arrow-button' onClick={handlePrev}>
            <img src={LeftArrow} alt='seta esquerda'/>
          </button>
          <div className='carousel-content'>
            <Slider ref={setSliderRef} {...sliderSettings}>
              {icons.map((icon) => (
                <button type="button" className='icon' key={icon.id}>
                  <img src={icon.image} alt=''/>
                </button>
              ))}
            </Slider>
          </div>
          <button type='button' className='arrow-button' onClick={handleNext}>
            <img src={RightArrow} alt="seta direita" />
          </button>
        </div>

        <div className='fields'>
          <TextField required className='text-field' label='Nome' variant='outlined' onChange={(e) => setName(e.target.value)} />
          <TextField required className='text-field' label='Idade' variant='outlined' onChange={(e) => setAge(e.target.value)} />
          <TextField required className='text-field email' label='Email' variant='outlined' onChange={(e) => setEmail(e.target.value)} />
          <TextField required className='text-field' type='password' label='Senha' variant='outlined' onChange={(e) => setPassword(e.target.value)} />
        </div>
  
        <Button text='Continuar' type='submit'/>
      </form>
    </section>
  );
};

export default RegisterChild;
