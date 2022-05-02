import ChildHeader  from '../../components/ChildHeader';
import ChildActivity from '../../components/ChildActivity';
import LogoutIcon from '../../assets/logout-icon.svg';
import { TasksService } from '../../services/TasksService';
import { useEffect, useState } from 'react';
import { Task } from '../../interfaces/Task';
import './styles.scss';

function ChildActivities() {
  const [dailyActivities, setDailyActivities] = useState<Task[]>([])
  const [relationshipActivities, setRelationshipActivities] = useState<Task[]>([])

  async function get() {
    const today = false;
    const response = await TasksService.getTasks(today);
    if (response.status === 200) {
      const { data } = response;
      setDailyActivities(data?.dailyTasks);
      setRelationshipActivities(data?.relationshipTasks);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <div className='child-activities-container'>
      <ChildHeader valueCoin={350} backButton={false} />
      <main className='body'>
        <div className='body-header'>
          <h1 className='title'>Atividades</h1>
          <img className='logout' src={LogoutIcon} alt="Icone de logout" />
        </div>
        <div className='child-activities'>
          <h2 className=''>Para tentar realizar sozinho</h2>
          {dailyActivities?.map((activity) => 
            <ChildActivity activityName={activity.name} activityStatus={activity.status as boolean} />
          )
          }
        </div>
        <div className='parent-activities'>
          <h2 className=''>Para tentar realizar sozinho</h2>
          {relationshipActivities.map((activity) => 
            <ChildActivity activityName={activity.name} activityStatus={activity.status as boolean} />
          )
          }
        </div>
      </main>
    </div>
  );
}
  
  export default ChildActivities;
