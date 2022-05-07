import Cookies from 'js-cookie';
import ParentsActivitiesList from '../../components/ParentsActivitiesList';
import { useEffect, useState } from 'react';
import { Tasks } from '../../interfaces/Task';
import { TasksService } from '../../services/TasksService';


function ParentsDayActivities() {
  const [list, setList] = useState<Tasks>({
    dailyTasks: [],
    relationshipTasks: []
  });
  const [updated, setUpdated] = useState<boolean>(false);

  async function get() {
    const today = true;
    const createdForId = Cookies.get('childId');
    const response = await TasksService.getTasks(today, createdForId as string);

    if (response.status === 200) {
      const { data } = response;
      setList(data);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <ParentsActivitiesList title={'Atividades do dia'} checkbox={true} addButton={false} list={list as Tasks} setUpdated={() => setUpdated(!updated)} />
  );
}

export default ParentsDayActivities;
