import { Avatar, Stack } from "@mui/material";
import './styles.scss';

interface Props {
  number: number;
  description: string;
}

function Instruction({number, description} : Props) {
  return (
    <Stack className='instruction-container' direction="column" spacing={0}>
      <Stack className='instruction-header' direction="row" spacing={2}>
      { number % 2 !== 0 ?
          <div className='header-left'>
            <Avatar sx={{ bgcolor: '#ffffff', color: '#E37209', fontSize: '25px', fontWeight: '700' }}>{number}</Avatar>
            <p className='instruction-title'> Instrução </p>
          </div>
          :
          <div className='header-right'>
            <p className='instruction-title'> Instrução </p>
            <Avatar sx={{ bgcolor: '#ffffff', color: '#E37209', fontSize: '25px', fontWeight: '700' }}>{number}</Avatar>
          </div>
        }
      </Stack>
      <p className='instruction-description'>{description}</p>
    </Stack>
  )
}

export default Instruction;