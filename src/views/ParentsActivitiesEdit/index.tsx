import { useEffect, useState } from 'react';
import { weekDays } from '../../global/constants';
import CoinIcon from '../../assets/coin.svg';
import WarningIcon from '../../assets/warning.svg';
import CloseIcon from '../../assets/close-icon.svg';
import Button from '../../components/Button';
import UserInfo from '../../components/UserInfo';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TasksService } from '../../services/TasksService';
import { Day, Task } from '../../interfaces/Task';
import './styles.scss';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';

interface IWeekDay {
  initials: string,
  id: string
}

interface IId {
  id: string;
}

function ParentsActivitiesCreate() {
  const [taskName, setTaskName] = useState('');
  const [reward, setReward] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [times, setTimes] = useState('1');
  const [period, setPeriod] = useState('Semanal');
  const { id }: IId = useParams();

  const handleClickSubmit = async () => {
    const week: Day[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    const days: Day[] = selectedDays.map((day) => {
      return week[parseInt(day)]
    });
  
    const parentId = Cookies.get('id');
    const childId = Cookies.get('childId');
    
    const task: Task = {
      name: taskName,
      coins: parseInt(reward),
      type: 'daily',
      days: days,
      createdById: parentId as string,
      createdForId: childId as string,
    }

    await TasksService.updateTask(id, task);
    window.location.replace(`${window.location.origin}/app/parents-activities`)
  }

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };

  const handleClick = (day: IWeekDay) => {
    const array = selectedDays;
    const index = array.indexOf(day.id);
    if (index > -1) {
      array.splice(index, 1);
    } else {
      array.push(day.id);
    }
    setSelectedDays([...array]);
  }
  const closeClick = () => {
    window.location.replace(`${window.location.origin}/app/parents-activities`)
  }

  async function get() {
    const response = await TasksService.getTask(id);
    console.log(response);
    if (response.status === 200) {
      const { data } = response;
      console.log(data);
      setTaskName(data.name);
      setReward(data.coins.toString());
      
      const parseredDay: string[] = []
      data.days.forEach((day, index) => {
        if(day === "monday") {
          parseredDay.push("0")
        }
        else if (day === "tuesday") {
          parseredDay.push("1")
        }
        else if (day === "wednesday") {
          parseredDay.push("2")
        }
        else if (day === "thursday") {
          parseredDay.push("3")
        }
        else if (day === "friday") {
          parseredDay.push("4")
        }
        else if (day === "saturday") {
          parseredDay.push("5")
        }
        else if (day === "sunday") {
          parseredDay.push("6")
        }
      });
      // @ts-ignore
      setSelectedDays([...parseredDay]);
    }   
  }

  useEffect(() => {
    get();
  }, [id]);

  return (
    <UserInfo>
      <section className="activities-create">
        <div className='close-button'>
          <button onClick={closeClick}><img src={CloseIcon} alt="" /></button>
        </div>

        <label className='activity-name'>
          <p className='title'>Nome da Atividade</p>
          <input placeholder='Escovar os dentes' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </label>

        <div className="frequency">
          <p className='title'>Frequência</p>
          <div className='week-days'>
            {weekDays.map((day: IWeekDay) => (
              <button
                key={day.id}
                onClick={() => handleClick(day)}
                className={`week-day-button ${selectedDays.indexOf(day.id) !== -1 ? 'active' : ''}`}
              >
                <p>{day.initials}</p>
              </button>
            ))}
          </div>

          <label className='times'>
            <p className="subtitle">Repetir a cada:</p>
            <div className="">
              <input placeholder='0' type="number" className='number' value={times} onChange={(e) => setTimes(e.target.value)} />
              <Select
                labelId="select"
                value={period}
                onChange={handleChange}
                autoWidth
              >
                <MenuItem value={"Semanal"}>Semanal</MenuItem>
                <MenuItem value={"Quinzenal"}>Quinzenal</MenuItem>
                <MenuItem value={"Mensal"}>Mensal</MenuItem>
              </Select>
            </div>
          </label>
        </div>

        <label className='reward-name'>
          <p className='title'>Recompensa de moedas</p>
          <div className='input-icon'>
            <img className='coin-icon' src={CoinIcon} alt="icone de moeda" />
            <input placeholder='10' className='with-icon' value={reward} onChange={(e) => setReward(e.target.value)} />
          </div>
        </label>

        <div className='footer-warning'>
          <img className='warning-icon' src={WarningIcon} alt="icone de alerta" />
          <p>
            Atividades criadas aqui serão reconhecidas como atividades para a criança tentar realizar sozinha
          </p>
        </div>

      <Button type="submit" onClick={handleClickSubmit} text="Salvar" />
    </section>
    </UserInfo>
  );
};

export default ParentsActivitiesCreate;
