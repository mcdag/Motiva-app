import React from 'react';
import './styles.scss';

import CoinIcon from '../../assets/coin-icon.svg';
import BackIcon from '../../assets/arrow-back-icon.svg';

function ChildHeader() {
    return (
        <nav className='child-header-container'>
            <div className='content'>
                <div className='back-button'>
                    <img src={BackIcon} alt="Icone de voltar" />
                </div>
                <div className='coin'>
                    <img className='coin-icon' src={CoinIcon} alt="Icone de moeda" />
                    <p className='value'>400</p>
                </div>
            </div>
            <div className='line'></div>
        </nav>
    );
  }
  
  export default ChildHeader;