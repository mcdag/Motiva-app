import ParentsRewardsList from '../../components/ParentsRewardsList';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Reward } from '../../interfaces/Rewards';
import { RewardsService } from '../../services/Rewards';

function ParentsRewards() {
  const [rewards, setRewards] = useState<Reward[]>([]);

  async function get() {
    const childId = Cookies.get('childId');
    const response = await RewardsService.importAllRewardsByChild(childId as string);
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
