import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { MouseEventHandler } from 'react';
import ExampleAvatar from '../../assets/avatar-icon.svg';
import './styles.scss';

interface Props {
  data: string;
  open: boolean;
  handleFunction: MouseEventHandler;
}


function ConfirmationDialog({data, open, handleFunction}: Props){
  return (
    <Dialog
    sx={{opacity:1}}
    className='confirmation-dialog-container'
    open={open}
    onClose={handleFunction}
    aria-labelledby="confirmation-dialog-title"
    aria-describedby="confirmation-dialog-description"
  >
     <img className='avatar' width='35%' src={ExampleAvatar} alt="Avatar da criança" />
    <DialogTitle className='title' id="confirmation-dialog-title">
      {`Deseja mesmo excluir esta ${data}?`}
    </DialogTitle>
    <DialogContent className='content'>
      <DialogContentText id="confirmation-dialog-description">
        Caso queira ter esta {data} de novo, basta
        criá-la novamente!
      </DialogContentText>
    </DialogContent>
    <DialogActions sx={{display:'flex', justifyContent:'space-around'}}>
      <Button variant='contained' className='button' onClick={handleFunction}>Sim</Button>
      <Button variant='contained' className='button' onClick={handleFunction} autoFocus>
        Não
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default ConfirmationDialog;