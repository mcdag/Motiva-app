import ParentsRewardsList from "../../components/ParentsRewardsList";

function ParentsRewards() {
  const list: string[] = ['Ir para cinema', 'Ir para o estádio', 'Jogar Xbox por 2 horas', 'Jogar Xbox por 1 hora'];

  return (
    <ParentsRewardsList title={'Recompensas'} list={list} />
  );
}

export default ParentsRewards;
