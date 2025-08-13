import React from 'react';
import './Display.css';

const Display = ({ value }) => {
  // Formatar o valor para exibição
  const formatValue = (val) => {
    // Converter para número e verificar se é válido
    const num = parseFloat(val);
    
    if (isNaN(num)) return '0';
    
    // Se for um número muito grande, usar notação científica
    if (Math.abs(num) > 999999999) {
      return num.toExponential(2);
    }
    
    // Limitar casas decimais para caber no display
    const str = num.toString();
    if (str.length > 12) {
      return num.toPrecision(8);
    }
    
    return str;
  };

  return (
    <div className="display">
      <span className="display-value">
        {formatValue(value)}
      </span>
    </div>
  );
};

export default Display;