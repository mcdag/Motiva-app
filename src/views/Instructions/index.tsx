// @ts-nocheck
import Instruction from '../../components/Instruction';
import { useParams } from 'react-router-dom';
import { TasksService } from '../../services/TasksService';
import loading from '../../assets/loading.png';
import './styles.scss';
import { useState, useEffect } from 'react';

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

  return (
    <div className='activities-instructions-container'>
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
        <img src={loading} alt="Icone de loading" />
      )}
    </div>
  );
}

export default ActivityInstructions;