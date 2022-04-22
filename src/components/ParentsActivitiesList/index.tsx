import SearchBar from '../../components/SearchBar';
import TabBar from '../../components/TabBar';
import { Checkbox, Divider, IconButton, List, ListItem } from '@mui/material';
import TrashCanIcon from '../../assets/trash-can-icon.svg';
import AddIcon from '../../assets/add-icon.svg';
import UserInfo from '../../components/UserInfo';
import { useState } from 'react';
import ConfirmationDialog from '../../components/ConfirmationDialog';
import { ActivityList } from '../../interfaces/Activities';
import './styles.scss';


interface Props {
  title: string;
  checkbox: boolean;
  addButton: boolean;
  list: ActivityList;
}

function ParentsActivitiesList({title, checkbox, addButton, list}: Props) {
  const [openTrashDialog, setOpenTrashDialog] = useState(false);
  
  const handleClickOpenTrashDialog = () => {
    setOpenTrashDialog(!openTrashDialog);
  };

  const [checks, setChecks] = useState<boolean[]>([]);

  const handleChecks = (index: number) => {
    const newChecks = checks;
    newChecks[index] = !(newChecks[index]);
    setChecks(newChecks);
  };

  return (
    <TabBar >
      <UserInfo />
      <div className='parents-list'> 
        <text className='activities-title'> {title} </text>
        <SearchBar />
        <List className='activities-list' sx={{width: '135%'}} component='nav' aria-label='list'>
        <p className='activities-subtitle'> Para a criança tentar sozinha</p>
        {list.alone.map((activity, index) =>
            <div>
              <ListItem className='activity'>
                <text> {activity.name} </text>
                {
                checkbox ? 
                  <Checkbox sx={{
                    transform: 'scale(1.3)',
                    color: '#747474',
                    '&.Mui-checked': {
                      color: '#fa971d',
                    },
                  }} className='check-box' checked={activity.status}
                  onClick={() => handleChecks(index)}/>
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
        {list.parent.map((activity, index) =>
            <div>
              <ListItem className='activity'>
                <text> {activity.name} </text>
                {
                checkbox ? 
                  <Checkbox sx={{
                    transform: 'scale(1.3)',
                    color: '#747474',
                    '&.Mui-checked': {
                      color: '#fa971d',
                    },
                  }} className='check-box' checked={activity.status}
                  onClick={() => handleChecks(index)}/>
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
      {
      addButton ? 
      <IconButton sx={{marginLeft: 'auto'}}>
        <img src={AddIcon} alt='Adicionar' />
      </IconButton>
      :
      <></>
      }
      </div>
    </TabBar>
  );
}

export default ParentsActivitiesList;
