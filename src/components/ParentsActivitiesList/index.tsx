import SearchBar from '../../components/SearchBar';
import { Checkbox, Divider, IconButton, List, ListItem } from '@mui/material';
import TrashCanIcon from '../../assets/trash-can-icon.svg';
import AddIcon from '../../assets/add-icon.svg';
import WithNav from '../WithNavHeader';
import { useEffect, useState } from 'react';
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

  const oldChecksAlone = list.alone.map((element) => element.status);
  const oldChecksParents = list.parent.map((element) => element.status);

  const [checksAlone, setChecksAlone] = useState<boolean[]>(oldChecksAlone);
  const [checksParent, setChecksParent] = useState<boolean[]>(oldChecksParents);

  const handleChecksAlone = (index: number) => {
    const newChecks = checksAlone;
    newChecks[index] = !(newChecks[index]);
    setChecksAlone([...newChecks]);
  };

  const handleChecksParent = (index: number) => {
    const newChecks = checksParent;
    newChecks[index] = !(newChecks[index]);
    setChecksParent([...newChecks]);
  };

  return (
    <WithNav>
      <div className='parents-list'> 
        <p className='activities-title'> {title} </p>
        <SearchBar />
        <List className='activities-list' sx={{width: '135%'}} component='nav' aria-label='list'>
        <p className='activities-subtitle'> Para a criança tentar sozinha</p>
        {list.alone.map((activity, index) =>
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
                  }} className='check-box' checked={checksAlone[index]}
                  onClick={() => handleChecksAlone(index)}/>
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
                <p> {activity.name} </p>
                {
                checkbox ? 
                  <Checkbox sx={{
                    transform: 'scale(1.3)',
                    color: '#747474',
                    '&.Mui-checked': {
                      color: '#fa971d',
                    },
                  }} className='check-box' checked={checksParent[index]}
                  onClick={() => handleChecksParent(index)}/>
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
