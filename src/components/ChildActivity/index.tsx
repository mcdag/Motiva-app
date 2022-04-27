import NoCheckIcon from '../../assets/no-check-icon.svg';
import CheckIcon from '../../assets/check-icon.svg';
import './styles.scss';

interface Props {
    activityStatus: boolean;
    activityName: string;
}

function ChildActivity({activityStatus, activityName} : Props) {
    return (
        <div className='child-activity-container'>
            <div className='status-name'>
                { activityStatus ?
                <><img className='activity-check' src={CheckIcon} alt="Icone de check" />
                <p className='check activity-name'>{activityName}</p></>
                :<><img className='activity-check' src={NoCheckIcon} alt="Icone de no check" />
                <p className='activity-name'>{activityName}</p></>
                }
                
            </div>
            <div className='line'></div>
        </div>
    );
}

export default ChildActivity;