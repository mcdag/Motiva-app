import ChildHeader  from '../../components/ChildHeader';
import ChildReward from '../../components/ChildReward';
import { RewardsService } from '../../services/Rewards';

import { useEffect, useState } from 'react';
import CoinIcon from '../../assets/icon-icon.svg';
import './styles.scss';
import { Reward } from '../../interfaces/Rewards';


function ChildRewards() {

    const [rewards, setRewards] = useState<Reward[]>([]);

    async function get() {
      //trocar essa linha de childId para buscar do context
      const childId = "e8d43690-a6ce-4b91-ba17-c082ed290f71";
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
      <div className='child-rewardss-container'>
        <ChildHeader valueCoin={350} backButton={true} />
        <main className='body'>
          <div className='body-header'>
            <h1 className='title'>Recompensas</h1>
            <h2 className='subtitle'>Quando conseguir a quantia necessária para uma recompensa, fale com seu responsável</h2>
          </div>
          <div className='child-rewards'>
            {rewards.map((reward, index) => 
              <ChildReward rewardName={reward.name} rewardValue={reward.cost}/>
            )
            }
          </div>
        </main>
      </div>
    );
  }
  
  export default ChildRewards;