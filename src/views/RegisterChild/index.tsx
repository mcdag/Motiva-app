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

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";;

interface IIcon {
  iamge: string,
  id: string
}

function RegisterChild() {
  const [sliderRef, setSliderRef] = useState<any>(null);

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

  return (
    <section className='register-child'>
      <h1>Cadastre a criança</h1>
      <h2>Preencha com as informações referentes à criança!</h2>

      <div className='carousel'>
        <button className="arrow-button" onClick={sliderRef?.slickPrev}>
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
        <button className="arrow-button" onClick={sliderRef?.slickNext}>
          <img src={RightArrow} />
        </button>
      </div>

      <Button text="Continuar" type="button" onClick={() => {}} />

    </section>
  );
};

export default RegisterChild;
