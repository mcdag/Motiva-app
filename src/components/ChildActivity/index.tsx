import NoCheckIcon from '../../assets/no-check-icon.svg';
import CheckIcon from '../../assets/check-icon.svg';
import CoinIcon from '../../assets/coin-4-icon.svg';
import './styles.scss';

interface Props {
    activityStatus: boolean;
    activityName: string;
    activityCoin: string;
}

function ChildActivity({activityStatus, activityName, activityCoin} : Props) {
    return (
        <div className='child-activity-container'>
            <div className='status-name'>
                { activityStatus ?
                <><img className='activity-check' src={CheckIcon} alt="Icone de check" />
                <p className='check activity-name'>{activityName}</p>
                <div className='activity-coin'>
                    <img src={CoinIcon} alt="Icone de moeda" />
                    <p>{activityCoin}</p>
                </div>
                </>
                :<><img className='activity-check' src={NoCheckIcon} alt="Icone de no check" />
                <p className='activity-name'>{activityName}</p>
                <div className='activity-coin'>
                    <img src={CoinIcon} alt="Icone de moeda" />
                    <p>{activityCoin}</p>
                </div>
                </>
                }
                
            </div>
            <div className='line'></div>
        </div>
    );
}

export default ChildActivity;