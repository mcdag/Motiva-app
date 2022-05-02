import React from 'react';
import './styles.scss';

interface IButtonProps {
  type: "submit" | "button",
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  text: string
}

function Button({ type, onClick, text }: IButtonProps) {
  return (
    <button type={type} onClick={onClick} className='main-button'>
      {text}
    </button>
  );
};

export default Button;
