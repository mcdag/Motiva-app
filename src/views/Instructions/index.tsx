// @ts-nocheck
import Instruction from '../../components/Instruction';
import loading from '../../assets/loading.png';
import BackIcon from '../../assets/arrow-back-icon.svg';
import { useParams } from 'react-router-dom';
import { TasksService } from '../../services/TasksService';
import { useState, useEffect } from 'react';
import './styles.scss';

function ActivityInstructions() {
  const [activity, setActivity] = useState();
  const { id } = useParams();

  async function get() {
    const response = await TasksService.getTask(id);
    if (response.status === 200) {
      const { data } = response;
      setActivity(data);
    }
  }

  useEffect(() => {
    get();
  }, []);

  const handleClick = () => {
    window.history.back();
}

  return (
    <div className='activities-instructions-container'>
      <button onClick={() => handleClick()} className='back-button'>
          <img src={BackIcon} alt='Icone de voltar' />
      </button>
      {activity ? (
        <div className='main-content'>
          <p className='activity-name'> {activity.name}</p>
          <div className='instructions'>
            {activity?.instructions?.map((instruction, index) => 
              <Instruction number={index+1} description={instruction} />
            )}
          </div>
        </div>
      ) : (
        <div className='loading-container'>
          <img src={loading} alt='Icone de loading' />
        </div>
      )}
    </div>
  );
}

export default ActivityInstructions;