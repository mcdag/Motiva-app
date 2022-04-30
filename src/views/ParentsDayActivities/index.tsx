import { useEffect, useState } from 'react';
import ParentsActivitiesList from '../../components/ParentsActivitiesList';
import { Tasks } from '../../interfaces/Task';
import { TasksService } from '../../services/TasksService';


function ParentsDayActivities() {
  const [list, setList] = useState<Tasks>();

  async function get() {
    const today = true;
    const response = await TasksService.getTasks(today);
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
