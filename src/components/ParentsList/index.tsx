import SearchBar from '../../components/SearchBar';
import TabBar from '../../components/TabBar';
import { Checkbox, Divider, IconButton, List, ListItem } from '@mui/material';
import TrashCanIcon from '../../assets/trash-can-icon.svg';
import AddIcon from '../../assets/add-icon.svg';
import './styles.scss';
import UserInfo from '../../components/UserInfo';
import { useState } from 'react';
import ConfirmationDialog from '../../components/ConfirmationDialog';
import './styles.scss';

interface Props {
  title: string;
  checkbox: boolean;
  addButton: boolean;
  list: string[];
}

function ParentsList({title, checkbox, addButton, list}: Props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const tasksChecks = list.map(() => false);
  const [checks, setChecks] = useState<boolean[]>(tasksChecks);

  const handleChecks = (index: number) => {
    const newChecks = checks;
    newChecks[index] = !(newChecks[index]);
    setChecks(newChecks);
  };

  return (
    <TabBar >
      <UserInfo />
      <div className='parents-list'> 
        <text className='title'> {title} </text>
        <SearchBar />
        <List className='list' sx={{width: '135%'}} component='nav' aria-label='list'>
        {list.map((listObject, index) =>
            <div>
              <ListItem className='list-object'>
                <text> {listObject} </text>
                {
                checkbox ? 
                  <Checkbox sx={{
                    transform: 'scale(1.3)',
                    color: '#747474',
                    '&.Mui-checked': {
                      color: '#fa971d',
                    },
                  }} className='check-box' checked={true}
                  onClick={() => handleChecks(index)}/>
                  :
                  <><IconButton className='icon' onClick={handleClickOpen}>
                    <img src={TrashCanIcon} alt='Lata de lixo' />
                  </IconButton>
                  <ConfirmationDialog data={title.toLowerCase().substring(0, title.length-1)} open={open} handleFunction={handleClickOpen} />
                  </>
                }
              </ListItem>
              <Divider />
            </div>
          )}
        </List>
      </div>
      {
      addButton ? 
      <IconButton sx={{marginLeft: 'auto', marginTop: 'auto', padding: '4%'}}>
        <img src={AddIcon} alt='Adicionar' />
      </IconButton>
      :
      <></>
      }
    </TabBar>
  );
}

export default ParentsList;
