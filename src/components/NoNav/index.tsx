import React from 'react';
import './styles.scss';

interface IProps {
  children: React.ReactNode;
}

function NoNav ({ children }: IProps) {
  return (
    <div className="base-no-nav">
      {children}
    </div>
  );
}

export default NoNav;
