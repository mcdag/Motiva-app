import InputAdornment from '@mui/material/InputAdornment';
import DeleteIcon from '../../assets/delete-icon.svg';
import SearchIcon from '../../assets/magnifier-icon.svg';
import { IconButton, TextField } from '@mui/material';
import { useState } from 'react';
import './styles.scss';

function SearchBar() {
  const [text, setText] = useState<string>('');

  const handleClickDelete = () => {
    setText('');
  };

  return (
    <div className='search-bar-container'>
      <TextField
        className='search-bar'
        id="search-bar"
        InputProps={{
          startAdornment: 
            <InputAdornment position="start"> 
              <img className='search-icon' src={SearchIcon} alt="Lupa" />
            </InputAdornment>,
          endAdornment: 
            <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickDelete}
                  edge="end"
                >
                <img className='delete-icon' src={DeleteIcon} alt="Icone de Deletar" />
              </IconButton>
            </InputAdornment>
        }} />
    </div>
  )
}

export default SearchBar;

