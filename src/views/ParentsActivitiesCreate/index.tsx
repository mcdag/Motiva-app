import { useState } from 'react';
import { weekDays } from '../../global/constants';
import CoinIcon from '../../assets/coin.svg';
import WarningIcon from '../../assets/warning.svg';
import CloseIcon from '../../assets/close-icon.svg';
import Button from '../../components/Button';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TasksService } from '../../services/TasksService';
import { Day, Task } from '../../interfaces/Task';
import './styles.scss';

interface IWeekDay {
  initials: string,
  id: string
}

function ParentsActivitiesCreate() {
  const [taskName, setTaskName] = useState('');
  const [reward, setReward] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [times, setTimes] = useState('');
  const [period, setPeriod] = useState('Semanal');

  const handleClickSubmit = async () => {
    const week: Day[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    const days: Day[] = selectedDays.map((day) => {
      return week[parseInt(day)]
    });
  
    const task: Task = {
      name: taskName,
      coins: parseInt(reward),
      days: days,
      createdById: '',
      createdForId: '',
      type: 'daily'
    }
    await TasksService.createTask(task);
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

  return (
    <section className="activities-create">
      <div className='close-button'>
        <button><img src={CloseIcon} alt="" /></button>
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
  );
};

export default ParentsActivitiesCreate;
