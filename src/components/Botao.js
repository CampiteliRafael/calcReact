import React from 'react';
import './Botao.css';

const Botao = ({ onClick, className, label }) => {
  return (
    <button 
      className={`botao ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Botao;