import SearchBar from '../../components/SearchBar';
import TrashCanIcon from '../../assets/trash-can-icon.svg';
import RewardIcon from '../../assets/coin-2-icon.svg';
import CoinIcon from '../../assets/coin-4-icon.svg';
import AddIcon from '../../assets/add-icon.svg';
import ConfirmationDialog from '../../components/ConfirmationDialog';
import FormDialog from '../FormDialog';
import WithNav from '../WithNavHeader';
import { Divider, IconButton, List, ListItem } from '@mui/material';
import { useState } from 'react';
import { Reward } from '../../interfaces/Rewards';
import './styles.scss';


interface Props {
  title: string;
  list: Reward[];
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
    <WithNav>
      <div className='main-content'>
        <div className='rewards'> 
          <p className='rewards-title'> {title} </p>
          <SearchBar />
          <List className='rewards-list' sx={{width: '135%'}} component='nav' aria-label='list'>
          {list.map((rewards, index) =>
              <div key={index}>
                <ListItem className='reward'>
                  <div className='coin-reward'>
                    <div className='coin-text'>
                      <img src={CoinIcon} alt='Ícone da moeda' />
                      <p>{rewards.cost}</p>
                    </div>
                    <p className='reward-title'> {rewards.name} </p>         
                  </div>
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
    </WithNav>
  );
}

export default ParentsRewardsList;
