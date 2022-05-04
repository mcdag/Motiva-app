/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './styles.scss';
import Slider from "react-slick";
import Button from '../../components/Button';
import icon1 from '../../assets/josé-carlos.svg';
import icon2 from '../../assets/maria-clara.svg';
import icon3 from '../../assets/maria-vitoria.svg';
import icon4 from '../../assets/luana-merchi.svg';
import icon5 from '../../assets/lucas-maggi.svg';
import LeftArrow from '../../assets/left-arrow.svg';
import RightArrow from '../../assets/right-arrow.svg';
import { Alert, TextField } from '@mui/material';

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";;

interface IIcon {
  iamge: string,
  id: string
}

function RegisterChild() {
  const [sliderRef, setSliderRef] = useState<any>(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const icons = [
    {
      image: icon1,
      id: "0"
    },
    {
      image: icon2,
      id: "1"
    },
    {
      image: icon3,
      id: "2"
    },
    {
      image: icon4,
      id: "3"
    },
    {
      image: icon5,
      id: "4"
    },
  ];

  const sliderSettings = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submited")
  }

  return (
    <section className='register-child'>
      <h1>Cadastre a criança</h1>
      <h2>Preencha com as informações referentes à criança!</h2>

      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <div className='carousel'>
          <button type="button" className="arrow-button" onClick={sliderRef?.slickPrev}>
            <img src={LeftArrow} />
          </button>
          <div className='carousel-content'>
            <Slider ref={setSliderRef} {...sliderSettings}>
              {icons.map((icon) => (
                <button className="icon" key={icon.id}>
                  <img src={icon.image} />
                </button>
              ))}
            </Slider>
          </div>
          <button type="button" className="arrow-button" onClick={sliderRef?.slickNext}>
            <img src={RightArrow} />
          </button>
        </div>

        <div className='fields'>
          <TextField required className='text-field' label='Nome' variant='outlined' onChange={(e) => setName(e.target.value)} />
          <TextField required className='text-field' label='Idade' variant='outlined' onChange={(e) => setAge(e.target.value)} />
          <TextField required className='text-field' label='Gênero' variant='outlined' onChange={(e) => setGender(e.target.value)} />

          <TextField required className='text-field email' label='Email' variant='outlined' onChange={(e) => setEmail(e.target.value)} />
          <TextField required className='text-field' type="password" label='Senha' variant='outlined' onChange={(e) => setPassword(e.target.value)} />
        </div>

        <Button text="Continuar" type="submit" />
      </form>
    </section>
  );
};

export default RegisterChild;
