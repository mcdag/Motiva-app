import SearchBar from '../../components/SearchBar';
import { Checkbox, Divider, IconButton, List, ListItem } from '@mui/material';
import TrashCanIcon from '../../assets/trash-can-icon.svg';
import AddIcon from '../../assets/add-icon.svg';
import WithNav from '../WithNavHeader';
import { useState } from 'react';
import ConfirmationDialog from '../../components/ConfirmationDialog';
import { Task, Tasks } from '../../interfaces/Task';
import './styles.scss';
import { TasksService } from '../../services/TasksService';


interface Props {
  title: string;
  checkbox: boolean;
  addButton: boolean;
  list: Tasks;
}

function ParentsActivitiesList({title, checkbox, addButton, list}: Props) {
  const [openTrashDialog, setOpenTrashDialog] = useState(false);
  
  const handleClickOpenTrashDialog = () => {
    setOpenTrashDialog(!openTrashDialog);
  };

  const oldChecksDailyActivities = list?.dailyTasks?.map((element) => element.status as boolean);
  const oldChecksRelationshipActivities = list?.relationshipTasks?.map((element) => element.status as boolean);

  const [checksDailyActivities, setChecksDailyActivities] = useState<boolean[]>(oldChecksDailyActivities);
  const [checksRelationshipActivities, setChecksRelationshipActivities] = useState<boolean[]>(oldChecksRelationshipActivities);

  const handleChecksDailyActivities = async (index: number, task: Task) => {
    task.status = !task.status;
    await TasksService.updateTask(task.id as string, task)

    const newChecks = checksDailyActivities;
    newChecks[index] = !(newChecks[index]);
    setChecksDailyActivities([...newChecks]);
  };

  const handleChecksRelationshipActivities = async (index: number, task: Task) => {
    task.status = !task.status;
    await TasksService.updateTask(task.id as string, task)
    
    const newChecks = checksRelationshipActivities;
    newChecks[index] = !(newChecks[index]);
    setChecksRelationshipActivities([...newChecks]);
  };

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
                  }} className='check-box' checked={checksDailyActivities[index]}
                  onClick={() => handleChecksDailyActivities(index, activity)}/>
                  :
                  <><IconButton className='icon' onClick={handleClickOpenTrashDialog}>
                    <img src={TrashCanIcon} alt='Lata de lixo' />
                  </IconButton>
                  <ConfirmationDialog data={title.toLowerCase().substring(0, title.length-1)} open={openTrashDialog} handleFunction={handleClickOpenTrashDialog} />
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
                  }} className='check-box' checked={checksRelationshipActivities[index]}
                  onClick={() => handleChecksRelationshipActivities(index, activity)}/>
                  :
                  <><IconButton className='icon' onClick={handleClickOpenTrashDialog}>
                    <img src={TrashCanIcon} alt='Lata de lixo' />
                  </IconButton>
                  <ConfirmationDialog data={title.toLowerCase().substring(0, title.length-1)} open={openTrashDialog} handleFunction={handleClickOpenTrashDialog} />
                  </>
                }
              </ListItem>
              <Divider />
            </div>
          )}
        </List>
      </div>
      <div className='button-activities-padding'/>
      <div className='button-activities'>
        {addButton && 
          <IconButton sx={{marginLeft: 'auto'}}>
            <img src={AddIcon} alt='Adicionar' />
          </IconButton>
        }
      </div>
    </WithNav>
  );
}

export default ParentsActivitiesList;
