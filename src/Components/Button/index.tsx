import React from "react";

import './button.css';

interface IProps {
  label?: string;
  children?: React.ReactNode;
  isActive?: boolean;
  handleClick: (isActive: boolean) => void
}

const ButtonComponent = ({ 
  label, 
  children, 
  isActive, 
  handleClick }: IProps) => {
    
  return (
    <button 
      onClick={() => handleClick(!isActive)}
      className={`button ${isActive ? 'active' : ''}`}>
      {children ? children : label}
    </button>
  )
}

export default ButtonComponent;