import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import RewardIcon from '../../assets/coin-2-icon.svg';
import { MouseEventHandler, useState } from 'react';
import './styles.scss';
import { RewardsService } from '../../services/Rewards';
import Cookies from 'js-cookie';

interface Props {
  open: boolean;
  handleFunction: MouseEventHandler;
}

function FormDialog({open, handleFunction}: Props){
  const [coins, setCoins] = useState<number>(0);

  const handleClickDebit = async (event: React.MouseEvent<Element, MouseEvent>) => {
    const childId = Cookies.get('childId') as string;
    await RewardsService.debitCoins(childId, coins);
    handleFunction(event);
  }

  return (
      <Dialog 
        PaperProps={{
          style: {
            borderRadius: '20px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          },
        }}
        className='form-dialog-container' open={open} onClose={handleFunction}>
        <div className='coin-image'>
          <img width='37.5%' src={RewardIcon} alt="Moeda" />
        </div>
        <DialogTitle className='form-dialog-title'>Débito de moedas</DialogTitle>
        <DialogContent className='form-dialog-content'>
          <DialogContentText className='form-dialog-description'>
          Insira no campo abaixo a quantidade de moedas que você quer debitar de Maurício
          </DialogContentText>
          <TextField sx={{marginTop: '10%'}}
            autoFocus
            margin="dense"
            id="name"
            type="number"
            variant="outlined"
            onChange={e => setCoins(+e.target.value)}
          />
        </DialogContent>
        <DialogActions className='buttons'>
          <Button className='button' onClick={handleFunction}>Cancelar</Button>
          <Button className='button' onClick={handleClickDebit}>Debitar</Button>
        </DialogActions>
      </Dialog>
  );
}

export default FormDialog;