import { useEffect, useState } from "react";
import ParentsRewardsList from "../../components/ParentsRewardsList";
import { Reward } from "../../interfaces/Rewards";
import { RewardsService } from "../../services/Rewards";

function ParentsRewards() {
  const list: string[] = ['Ir para cinema', 'Ir para o estádio', 'Jogar Xbox por 2 horas', 'Jogar Xbox por 1 hora'];
  const [rewards, setRewards] = useState<Reward[]>([]);

  async function get() {
    //trocar essa linha de childId para buscar do context
    const childId = "37e393a5-3065-41db-a5fa-7ed5c33b80d2";
    const response = await RewardsService.importAllRewardsByChild(childId);
    if (response.status === 200) {
      const { data } = response;
      setRewards(data);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <ParentsRewardsList title={'Recompensas'} list={rewards} />
  );
}

export default ParentsRewards;
