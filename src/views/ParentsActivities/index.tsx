import { useEffect } from 'react';
import ParentsActivitiesList from '../../components/ParentsActivitiesList';
import { Activity, ActivityList } from '../../interfaces/Activities';
import { ParentsActivitiesService } from '../../services/ParentesActivitiesService';

function ParentsActivities() {
  async function get() {
    const response = await ParentsActivitiesService.importActivities();
    //now is importing the users to test
    if (response.status === 200) {
      const { data } = response;
      console.log('TÁ AQUI O QUE VOCÊ PEDIU JOHNNY: ', data);
    }
  }

  useEffect(() => {
    get();
  }, []);

  const aloneList: Activity[] = [
    {id:1, name: 'Arrumar a cama', status: false },
    {id:2, name: 'Escovar os dentes', status: true },
    {id:3, name: 'Estudar para a prova', status: false },
  ];
  const parentList: Activity[] = [
    {id:4, name: 'Contar como foi o dia', status: false },
    {id:5, name: 'yyy', status: false },
    {id:6, name: 'zzz', status: false },
    {id:7, name: 'www', status: false }
  ];
  const list: ActivityList = {alone:aloneList, parent:parentList};

  return (
    <ParentsActivitiesList title={'Atividades'} checkbox={false} addButton={true} list={list} />
  );
}

export default ParentsActivities;
