import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import ParentsActivitiesList from '../../components/ParentsActivitiesList';
import { Tasks } from '../../interfaces/Task';
import { TasksService } from '../../services/TasksService';


function ParentsDayActivities() {
  const [list, setList] = useState<Tasks>({
    dailyTasks: [],
    relationshipTasks: []
  });

  async function get() {
    const today = true;
    const createdForId = Cookies.get('childId');
    console.log(createdForId)
    const response = await TasksService.getTasks(today, createdForId as string);
    console.log(response.data)
    if (response.status === 200) {
      const { data } = response;
      setList(data);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <ParentsActivitiesList title={'Atividades do dia'} checkbox={true} addButton={false} list={list as Tasks} />
  );
}

export default ParentsDayActivities;
