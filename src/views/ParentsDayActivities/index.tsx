import ParentsActivitiesList from '../../components/ParentsActivitiesList';
import { Activity, ActivityList } from '../../interfaces/Activities';

function ParentsDayActivities() {
  const aloneList: Activity[] = [
    {id:1, name: 'Arrumar a cama', status: false },
    {id:2, name: 'Escovar os dentes', status: true },
    {id:3, name: 'Estudar para a prova', status: false },
  ];
  const parentList: Activity[] = [
    {id:4, name: 'Contar como foi o dia', status: false },
  ];

  const list: ActivityList = {
    alone: aloneList,
    parent:parentList
  };

  return (
    <ParentsActivitiesList title={'Atividades do dia'} checkbox={true} addButton={false} list={list} />
  );
}

export default ParentsDayActivities;
