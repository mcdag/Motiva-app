import { useState } from 'react';
import Button from '../../components/Button';
import CoinIcon from '../../assets/coin.svg';
import CloseIcon from '../../assets/close-icon.svg';

import { RewardsService } from '../../services/Rewards';

import './styles.scss'
import UserInfo from '../../components/UserInfo';
import { Reward } from '../../interfaces/Rewards';
import { useParams } from 'react-router-dom';

function RewardRegister() {

  const [rewardTitle, setRewardTitle] = useState('');
  const [reward, setReward] = useState('');

  const handleClick = (() => {
    //Mudar as duas linhas abaixo para pegar essas informações de um context
    const childId = "37e393a5-3065-41db-a5fa-7ed5c33b80d2";
    const parentId = "fd30edfd-263f-442c-8458-a2322e11e1e6";
    const newReward:Reward = {
      name: rewardTitle,
      cost: +reward,
      createdById: parentId,
      createdForId: childId,
    }
    const response = RewardsService.createReward(newReward);
  })

  return (
    <UserInfo>
      <div className='reward-register-container'>
        <div className='close-button'>
          <button><img src={CloseIcon} alt="" /></button>
        </div>
        <label className='reward-title'>
          <p className='title'>Título da recompensa</p>
          <input placeholder='Ir para o cinema' value={rewardTitle} onChange={(e) => setRewardTitle(e.target.value)} />
        </label>

        <label className='reward-value'>
          <p className='title'>Recompensa de moedas</p>
          <div className='input-icon'>
            <img className='coin-icon' src={CoinIcon} alt="icone de moeda" />
            <input placeholder='10' className='with-icon' value={reward} onChange={(e) => setReward(e.target.value)} />
          </div>
        </label>
        <div className='save-button'>
          <Button type="submit" onClick={handleClick} text="Salvar" />
        </div>
      </div>
    </UserInfo>
  );
}

export default RewardRegister;
