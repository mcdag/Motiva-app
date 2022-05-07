import SearchBar from '../../components/SearchBar';
import { Checkbox, Divider, IconButton, List, ListItem } from '@mui/material';
import TrashCanIcon from '../../assets/trash-can-icon.svg';
import AddIcon from '../../assets/add-icon.svg';
import WithNav from '../WithNavHeader';
import { useEffect, useState } from 'react';
import ConfirmationDialog from '../../components/ConfirmationDialog';
import { Task, Tasks } from '../../interfaces/Task';
import './styles.scss';
import { TasksService } from '../../services/TasksService';


interface Props {
  title: string;
  checkbox: boolean;
  addButton: boolean;
  list: Tasks;
  setUpdated: Function;
}

function ParentsActivitiesList({title, checkbox, addButton, list, setUpdated}: Props) {
  const [openTrashDialog, setOpenTrashDialog] = useState(false);
  
  const handleClickOpenTrashDialog = () => {
    setOpenTrashDialog(!openTrashDialog);
    setUpdated();
  };

  const clickButton = () => {
    window.location.replace(`${window.location.origin}/app/parents-activities-create`)
  }

  const [checksDailyActivities, setChecksDailyActivities] = useState<boolean[]>([]);
  const [checksRelationshipActivities, setChecksRelationshipActivities] = useState<boolean[]>([]);
  
  const handleChecksDailyActivities = async (index: number, task: Task) => {
    task.done = !task.done;
    await TasksService.updateTask(task.id as string, task)

    const newChecks = checksDailyActivities;
    newChecks[index] = !(newChecks[index]);
    setChecksDailyActivities([...newChecks]);
  };

  const handleChecksRelationshipActivities = async (index: number, task: Task) => {
    task.done = !task.done;
    await TasksService.updateTask(task.id as string, task)
    const newChecks = checksRelationshipActivities;
    newChecks[index] = !(newChecks[index]);
    setChecksRelationshipActivities([...newChecks]);
  };

  useEffect(() => {
    const oldChecksDailyActivities = list?.dailyTasks?.map((element) => element.done as boolean);
    const oldChecksRelationshipActivities = list?.relationshipTasks?.map((element) => element.done as boolean);

    setChecksDailyActivities(oldChecksDailyActivities);
    setChecksRelationshipActivities(oldChecksRelationshipActivities);
  }, [list])

  return (
    <WithNav>
      <div className='parents-list'> 
        <p className='activities-title'> {title} </p>
        <SearchBar />
        <List className='activities-list' sx={{width: '135%'}} component='nav' aria-label='list'>
        <p className='activities-subtitle'> Para a criança tentar sozinha</p>
        {list?.dailyTasks?.map((activity, index) =>
            <div>
              <ListItem className='activity'>
                <p> {activity.name} </p>
                {
                checkbox ? 
                  <Checkbox sx={{
                    transform: 'scale(1.3)',
                    color: '#747474',
                    '&.Mui-checked': {
                      color: '#fa971d',
                    },
                  }} className='check-box' checked={checksDailyActivities[index] || activity.done}
                  onClick={() => handleChecksDailyActivities(index, activity)}/>
                  :
                  <><IconButton className='icon' onClick={handleClickOpenTrashDialog}>
                    <img src={TrashCanIcon} alt='Lata de lixo' />
                  </IconButton>
                  {openTrashDialog && (
                    <ConfirmationDialog id={activity.id as string} data={title.toLowerCase().substring(0, title.length-1)} handleFunction={handleClickOpenTrashDialog} />
                  )}
                  </>
                }
              </ListItem>
              <Divider />
            </div>
          )}
        </List>
        <List className='activities-list' sx={{width: '135%'}} component='nav' aria-label='list'>
        <div className='activities-subtitle'> Para realizar com a criança</div>
        {list?.relationshipTasks.map((activity, index) =>
            <div>
              <ListItem className='activity'>
                <p> {activity.name} </p>
                {
                checkbox ? 
                  <Checkbox sx={{
                    transform: 'scale(1.3)',
                    color: '#747474',
                    '&.Mui-checked': {
                      color: '#fa971d',
                    },
                  }} className='check-box' checked={checksRelationshipActivities[index] || activity.done}
                  onClick={() => handleChecksRelationshipActivities(index, activity)}/>
                  :
                  <></>
                }
              </ListItem>
              <Divider />
            </div>
          )}
        </List>
      </div>
      <div className='button-activities-padding'/>
      <button className='button-activities'>
        {addButton && 
          <IconButton sx={{marginLeft: 'auto'}} onClick={()=>clickButton()}>
            <img src={AddIcon} alt='Adicionar' />
          </IconButton>
        }
      </button>
    </WithNav>
  );
}

export default ParentsActivitiesList;
