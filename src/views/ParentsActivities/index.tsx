import { useEffect, useState } from 'react';
import ParentsActivitiesList from '../../components/ParentsActivitiesList';
import { Tasks } from '../../interfaces/Task';
import { TasksService } from '../../services/TasksService';

function ParentsActivities() {
  const [list, setList] = useState<Tasks>();
  async function get() {
    const today = false;
    const response = await TasksService.getTasks(today);
    if (response.status === 200) {
      const { data } = response;
      setList(data);
    }
  }

  // useEffect(() => {
  //   get();
  // }, []);

  return (
    <ParentsActivitiesList title={'Atividades'} checkbox={false} addButton={true} list={list as Tasks} />
  );
}

export default ParentsActivities;
