import React, { useState } from 'react';
import JoseCarlos from '../../assets/josé-carlos.svg';
import ClaraMaria from '../../assets/maria-clara.svg';
import MariaVitoria from '../../assets/maria-vitoria.svg';
import LuanaMerchi from '../../assets/luana-merchi.svg';
import LucasMaggi from '../../assets/lucas-maggi.svg';
import AddBlue from '../../assets/add-blue.svg';
import Cookies from 'js-cookie'
import Button from '../../components/Button';
import './styles.scss';
import { useRouteMatch } from "react-router-dom";

interface IChild {
  image: string,
  name: string,
  id: string
}

function SelectChild() {
  const { path } = useRouteMatch();
  const [children, setChildren] = useState<IChild[]>([
    {
      image: JoseCarlos,
      name: "José Carlos",
      id: "0"
    },
    {
      image: ClaraMaria,
      name: "Clara Maria",
      id: "1"
    },
    {
      image: MariaVitoria,
      name: "Maria Vitória",
      id: "2"
    },
    {
      image: LuanaMerchi,
      name: "Luana Merchi",
      id: "3"
    },
    {
      image: LucasMaggi,
      name: "Lucas Maggi",
      id: "4"
    },
  ]);

  const handleClick = (item: IChild) => {
    Cookies.set('childName', item.name);
    Cookies.set('childId', item.id);
  }

  return (
    <section className='select-child'>
      <h1>Perfis das crianças</h1>
      <h2>Aqui você pode selecionar e adicionar novos perfis!</h2>

      <div className='children-list'>
        {children.map((item: IChild) => (
          <a href={`${window.location.origin}/app/parents-day-activities`}>
          <button key={item.id} onClick={() => handleClick(item)}>
            <img className='children-icon' src={item.image} alt="Icone da criança" />
            <p>{item.name}</p>
          </button>
          </a>
        ))}
        <a href={`${window.location.origin}/app/register-child`}>
          <button>
            <img src={AddBlue} alt="Icone de adicionar criança" />
          </button>
        </a>
      </div>
    </section>
  );
}

export default SelectChild;
