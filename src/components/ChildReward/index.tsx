import React from 'react';
import './styles.scss';

import RewardIcon from '../../assets/child-reward-icon.svg';
import CoinIcon from '../../assets/coin-3-icon.svg';

interface Props {
    rewardValue: number;
    rewardName: string;
}

function ChildReward({rewardValue, rewardName} : Props) {

    return (
        <div className='child-reward-container'>
            <div className='reward'>
                <img className='reward-icon' src={RewardIcon} alt="Icone de recompensas" />
                <p className='reward-name'>{rewardName}</p>
                <div className='coin-cointainer'>
                    <img className='coin-icon' src={CoinIcon} alt="Icone de moeda" />
                    <p className='coin-value'>{rewardValue}</p>
                </div>
            </div>
            <div className='line'></div>
        </div>
    );
}

export default ChildReward;