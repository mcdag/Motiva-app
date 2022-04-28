import SearchBar from '../../components/SearchBar';
import AppLayout from '../../components/AppLayout';
import { Divider, IconButton, List, ListItem } from '@mui/material';
import TrashCanIcon from '../../assets/trash-can-icon.svg';
import RewardIcon from '../../assets/coin-2-icon.svg';
import AddIcon from '../../assets/add-icon.svg';
import UserInfo from '../../components/UserInfo';
import { useState } from 'react';
import ConfirmationDialog from '../../components/ConfirmationDialog';
import FormDialog from '../FormDialog';
import './styles.scss';


interface Props {
  title: string;
  list: string[];
}

function ParentsRewardsList({title, list}: Props) {
  const [openTrashDialog, setOpenTrashDialog] = useState(false);
  
  const handleClickOpenTrashDialog = () => {
    setOpenTrashDialog(!openTrashDialog);
  };

  const [openRewardsDialog, setOpenRewardsDialog] = useState(false);
  
  const handleClickOpenRewardsDialog = () => {
    setOpenRewardsDialog(!openRewardsDialog);
  };

  return (
    <div className='main-content'>
      {/* <UserInfo /> */}
      <div className='rewards'> 
        <text className='rewards-title'> {title} </text>
        <SearchBar />
        <List className='rewards-list' sx={{width: '135%'}} component='nav' aria-label='list'>
        {list.map((rewards, index) =>
            <div>
              <ListItem className='reward'>
                <text> {rewards} </text>      
                <><IconButton className='icon' onClick={handleClickOpenTrashDialog}>
                  <img src={TrashCanIcon} alt='Lata de lixo' />
                </IconButton>
                <ConfirmationDialog data={title.toLowerCase().substring(0, title.length-1)} open={openTrashDialog} handleFunction={handleClickOpenTrashDialog} />
                </>
              </ListItem>
              <Divider />
            </div>
          )}
        </List>
      </div>
      <div className='rewards-buttons'>
      <>
        <IconButton onClick={handleClickOpenRewardsDialog}>
          <img src={RewardIcon} alt='Recompensas' />
        </IconButton>
        <FormDialog open={openRewardsDialog} handleFunction={handleClickOpenRewardsDialog} />
      </>
      <IconButton sx={{marginLeft: 'auto'}}>
        <img src={AddIcon} alt='Adicionar' />
      </IconButton>
      </div>
    </div>
  );
}

export default ParentsRewardsList;