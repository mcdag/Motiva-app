import React from 'react';
import './styles.scss';

import CoinIcon from '../../assets/coin-icon.svg';
import BackIcon from '../../assets/arrow-back-icon.svg';

interface Props {
    valueCoin: number;
    backButton: boolean;
}

function ChildHeader({valueCoin, backButton} : Props) {
    return (
        <nav className='child-header-container'>
            <div className='content'>
                { backButton ?
                <div className='back-button'>
                    <img src={BackIcon} alt="Icone de voltar" />
                </div>
                : <></>}
                <div className='coin'>
                    <img className='coin-icon' src={CoinIcon} alt="Icone de moeda" />
                    <p className='value'>{valueCoin}</p>
                </div>
            </div>
            <div className='line'></div>
        </nav>
    );
  }
  
  export default ChildHeader;