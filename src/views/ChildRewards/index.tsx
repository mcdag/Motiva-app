import ChildHeader  from '../../components/ChildHeader';
import ChildReward from '../../components/ChildReward';
import { RewardsService } from '../../services/Rewards';
import { useEffect, useState } from 'react';
import { Reward } from '../../interfaces/Rewards';
import './styles.scss';
import Cookies from 'js-cookie';
import { UserService } from '../../services/UserService';


function ChildRewards() {

    const [rewards, setRewards] = useState<Reward[]>([]);
    const [coin, setCoin] = useState(0);

    async function get() {
      const createdForId = Cookies.get('id') as string;
      const response = await RewardsService.importAllRewardsByChild(createdForId);
      if (response.status === 200) {
        const { data } = response;
        setRewards(data);
      }
      const userResponse = await UserService.getUser(createdForId);
      if (userResponse.status === 200) {
        const { data } = userResponse;
        setCoin(data.coins as number);
      }
    }
  
    useEffect(() => {
      get();
    }, []);

    return (
      <div className='child-rewardss-container'>
        <ChildHeader valueCoin={coin} backButton={true} />
        <main className='body'>
          <div className='body-header'>
            <h1 className='title'>Recompensas</h1>
            <h2 className='subtitle'>Quando conseguir a quantia necessária para uma recompensa, fale com seu responsável</h2>
          </div>
          <div className='child-rewards'>
            {rewards.map(reward => 
              <ChildReward rewardName={reward.name} rewardValue={reward.cost}/>
            )}
          </div>
        </main>
      </div>
    );
  }
  
  export default ChildRewards;