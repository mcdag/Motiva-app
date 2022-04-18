import ParentsList from '../../components/ParentsList';

function ParentsActivities() {
  const list: string[] = ['Arrumar a cama', 'Escovar os dentes', 'Estudar para a prova', 'Estudar piano', 'Contar como foi o dia'];

  return (
    <ParentsList title={'Atividades'} checkbox={false} addButton={true} list={list} />
  );
}

export default ParentsActivities;
