import Cookies from 'js-cookie';
import UserInfo from '../../components/UserInfo';
import Button from '../../components/Button';
import CoinIcon from '../../assets/coin.svg';
import CloseIcon from '../../assets/close-icon.svg';
import { RewardsService } from '../../services/Rewards';
import { useState } from 'react';
import { Reward } from '../../interfaces/Rewards';
import './styles.scss'

function RewardRegister() {

  const [rewardTitle, setRewardTitle] = useState('');
  const [reward, setReward] = useState('');

  const clickClose = () => {
    window.location.replace(`${window.location.origin}/app/parents-rewards`)
  }

  const handleClick = (async () => {
    const childId = Cookies.get('childId');
    const parentId = Cookies.get('id');

    const newReward: Reward = {
      name: rewardTitle,
      cost: +reward,
      createdById: parentId as string,
      createdForId: childId as string,
    }
    await RewardsService.createReward(newReward);
    window.location.replace(`${window.location.origin}/app/parents-rewards`)
  })

  return (
    <UserInfo>
      <div className='reward-register-container'>
        <div className='close-button'>
          <button><img src={CloseIcon} alt="" onClick={clickClose} /></button>
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
