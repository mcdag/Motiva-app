import ParentsList from '../../components/ParentsList';

function ParentsDayActivities() {
  const list: string[] = ['Arrumar a cama', 'Escovar os dentes', 'Estudar para a prova', 'Estudar piano', 'Contar como foi o dia'];

  return (
    <ParentsList title={'Atividades do dia'} checkbox={true} addButton={false} list={list} />
  );
}

export default ParentsDayActivities;
