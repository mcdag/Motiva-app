import Cookies from 'js-cookie';
import ChildHeader  from '../../components/ChildHeader';
import ChildActivity from '../../components/ChildActivity';
import LogoutIcon from '../../assets/logout-icon.svg';
import { TasksService } from '../../services/TasksService';
import { useEffect, useState } from 'react';
import { Task } from '../../interfaces/Task';
import './styles.scss';
import { UserService } from '../../services/UserService';

function ChildActivities() {
  const [dailyActivities, setDailyActivities] = useState<Task[]>([])
  const [relationshipActivities, setRelationshipActivities] = useState<Task[]>([])
  const [coin, setCoin] = useState(0);

  async function get() {
    const today = false;
    const createdForId = Cookies.get('id') as string;
    const response = await TasksService.getTasks(today, createdForId as string);
    console.log(response)
    if (response.status === 200) {
      const { data } = response;
      setDailyActivities(data?.dailyTasks);
      setRelationshipActivities(data?.relationshipTasks);
    }
    const userResponse = await UserService.getUser(createdForId);
    if (userResponse.status === 200) {
      const { data } = userResponse;
      setCoin(data.coins as number);
    }
  }

  useEffect(() => {
    get();
  }, []);

  const handleClickLogout = () => {
    Cookies.remove('id');
    Cookies.remove('name');
    Cookies.remove('type');
    window.location.replace(`${window.location.origin}/auth/choose-login`)
  }

  return (
    <>
      <ChildHeader valueCoin={coin} backButton={false} />
      <div className='child-activities-container'>
        <main className='body'>
          <div className='body-header'>
            <h1 className='title'>Atividades</h1>
            <button onClick={handleClickLogout} className='logout-button'>
              <img className='logout' src={LogoutIcon} alt="Icone de logout" />
            </button>
          </div>
          <div className='child-activities'>
            <h2 className='with-parent'>Para tentar realizar sozinho</h2>
            {dailyActivities?.map((activity) => 
              <ChildActivity key={activity.id} activityName={activity.name} activityStatus={activity.done as boolean} />
            )
            }
          </div>
          <div className='parent-activities'>
            <h2 className='with-parent'>Para realizar com o seu responsável</h2>
            {relationshipActivities.map((activity) => 
              <a key={activity.id} href={`${window.location.origin}/app/activities-instructions/${activity.id}`}>
                <ChildActivity activityName={activity.name} activityStatus={activity.done as boolean} />
              </a>
            )
            }
          </div>
        </main>
      </div>
    </>
  );
}
  
export default ChildActivities;
