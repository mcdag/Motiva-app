import Cookies from 'js-cookie';
import ParentsActivitiesList from '../../components/ParentsActivitiesList';
import { useEffect, useState } from 'react';
import { Tasks } from '../../interfaces/Task';
import { TasksService } from '../../services/TasksService';

function ParentsActivities() {
  const [list, setList] = useState<Tasks>
  ({
    dailyTasks: [],
    relationshipTasks: [],
  }
  );
  const [updated, setUpdated] = useState<boolean>(false);
  async function get() {
    const today = false;
    const createdForId = Cookies.get('childId');

    const response = await TasksService.getTasks(today, createdForId as string);
    if (response.status === 200) {
      const { data } = response;
      setList(data);
    }
  }

  useEffect(() => {
    get();
  }, [updated]);

  return (
    <ParentsActivitiesList title={'Atividades'} checkbox={false} addButton={true} list={list as Tasks} setUpdated={() => setUpdated(!updated)} />
  );
}

export default ParentsActivities;
