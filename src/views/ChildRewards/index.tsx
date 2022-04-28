import ChildHeader  from '../../components/ChildHeader';
import ChildReward from '../../components/ChildReward';

import CoinIcon from '../../assets/icon-icon.svg';
import './styles.scss';

interface Reward {
  id: number;
  name: string;
  value: number;
}

function ChildRewards() {
    const rewards: Reward[] = [
      {id:1, name: 'Ir para o cinema', value: 350 },
      {id:2, name: 'Ir paar o estádio de futebol', value: 300 },
      {id:3, name: 'Jogar Xbox por 2 horas', value: 250 },
      {id:3, name: 'Jogar Xbox por 1 horas', value: 125 },
    ];

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
              <ChildReward rewardName={reward.name} rewardValue={reward.value}/>
            )
            }
          </div>
        </main>
      </div>
    );
  }
  
  export default ChildRewards;