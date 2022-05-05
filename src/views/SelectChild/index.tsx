import { useEffect, useState } from 'react';
import child0 from '../../assets/child-0.svg';
import child1 from '../../assets/child-1.svg';
import child2 from '../../assets/child-2.svg';
import child3 from '../../assets/child-3.svg';
import child4 from '../../assets/child-4.svg';
import AddBlue from '../../assets/add-blue.svg';
import Cookies from 'js-cookie'
import './styles.scss';
import { useRouteMatch } from 'react-router-dom';
import { UserService } from '../../services/UserService';

interface IChild {
  id: string;
  name: string;
  icon: string;
}

function SelectChild() {
  const [children, setChildren] = useState<IChild[]>([]);
  const icons = [child0, child1, child2, child3, child4]

  async function get () {
    const id = Cookies.get('id');
    const response = await UserService.getUser(id as string);
    if (response.status === 200) {
      const { data } = response
      if(data.children){
        const children: IChild[] = data.children.map((el) => {
          return {
            id: el.id as string,
            name: el.name,
            icon: icons[parseInt(el.icon as string)],
          }
        })
        setChildren(children);
      }
    }   
  }

  useEffect(() => {
    get();
  }, [])

  // const { path } = useRouteMatch();

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
              <img className='children-icon' src={item.icon} alt="Icone da criança" />
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
