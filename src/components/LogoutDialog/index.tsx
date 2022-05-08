import Cookies from 'js-cookie';
import icon0 from '../../assets/child-0.svg';
import icon1 from '../../assets/child-1.svg';
import icon2 from '../../assets/child-2.svg';
import icon3 from '../../assets/child-3.svg';
import icon4 from '../../assets/child-4.svg';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { MouseEventHandler } from 'react';
import { RewardsService } from '../../services/Rewards';
import { TasksService } from '../../services/TasksService';
import './styles.scss';

interface Props {
  handleFunction: MouseEventHandler;
  handleLogout: MouseEventHandler;
}


function ConfirmationDialog({handleFunction, handleLogout}: Props) {
  const icons = [icon0, icon1, icon2, icon3, icon4];
  const childIcon = Cookies.get('childIcon') as string;
  const icon = icons[parseInt(childIcon)];

  return (
    <Dialog
    hideBackdrop={true}
    PaperProps={{
      style: {
        borderRadius: '20px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        overflowY: 'unset'
      },
    }}
    className='confirmation-dialog-container'
    open={true}
    onClose={handleFunction}
    aria-labelledby='confirmation-dialog-title'
    aria-describedby='confirmation-dialog-description'
  >
     <img className='avatar' width='37.5%' src={icon} alt='Avatar da criança' />
    <DialogTitle className='title' id='confirmation-dialog-title'>
      {`Deseja mesmo sair do aplicativo?`}
    </DialogTitle>
    <DialogContent className='content'>
      <DialogContentText id='confirmation-dialog-description'>
        Caso queira sair, você pode acessar sua conta novamente realizando login! 
      </DialogContentText>
    </DialogContent>
    <DialogActions sx={{display:'flex', justifyContent:'space-around'}}>
      <Button variant='contained' className='button' onClick={handleLogout}>Sim</Button>
      <Button variant='contained' className='button' onClick={handleFunction} autoFocus>
        Não
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default ConfirmationDialog;