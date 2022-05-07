import CoinIcon from '../../assets/coin-icon.svg';
import BackIcon from '../../assets/arrow-back-icon.svg';
import './styles.scss';

interface Props {
    valueCoin: number;
    backButton: boolean;
}

function ChildHeader({valueCoin, backButton} : Props) {
    const handleClick = () => {
        window.history.back();
    }

    return (
        <nav className='child-header-container'>
            <div className='content'>
                { backButton && (
                    <button onClick={() => handleClick()} className='back-button'>
                        <img src={BackIcon} alt="Icone de voltar" />
                    </button>
                )}
                <a href={`${window.location.origin}/app/child-rewards`}>
                    <button onClick={() => {}} className='coin'>
                        <img className='coin-icon' src={CoinIcon} alt="Icone de moeda" />
                        <p className='value'>{valueCoin}</p>
                    </button>
                </a>
            </div>
        </nav>
    );
  }
  
  export default ChildHeader;