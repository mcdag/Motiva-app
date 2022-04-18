import ParentsList from '../../components/ParentsList';

function ParentsRewards() {
  const list: string[] = ['Ir para cinema', 'Ir para o estádio', 'Jogar Xbox por 2 horas', 'Jogar Xbox por 1 hora'];

  return (
    <ParentsList title={'Recompensas'} checkbox={false} addButton={true} list={list} />
  );
}

export default ParentsRewards;
