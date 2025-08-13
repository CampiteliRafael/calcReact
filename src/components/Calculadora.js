import React, { useState } from 'react';
import Display from './Display';
import Botao from './Botao';
import './Calculadora.css';

const Calculadora = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const inputNumber = (num) => {
    if (waitingForNewValue) {
      setDisplayValue(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(num) : displayValue + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplayValue('0.');
      setWaitingForNewValue(false);
    } else if (displayValue.indexOf('.') === -1) {
      setDisplayValue(displayValue + '.');
    }
  };

  const clear = () => {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(displayValue);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplayValue(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleEqual = () => {
    const inputValue = parseFloat(displayValue);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplayValue(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handlePercentage = () => {
    const value = parseFloat(displayValue);
    setDisplayValue(String(value / 100));
  };

  const handleToggleSign = () => {
    const value = parseFloat(displayValue);
    setDisplayValue(String(value * -1));
  };

  return (
    <div className="calculadora">
      <Display value={displayValue} />
      
      <div className="botoes">
        <div className="linha">
          <Botao 
            onClick={clear} 
            className="botao-funcao" 
            label="C" 
          />
          <Botao 
            onClick={handleToggleSign} 
            className="botao-funcao" 
            label="±" 
          />
          <Botao 
            onClick={handlePercentage} 
            className="botao-funcao" 
            label="%" 
          />
          <Botao 
            onClick={() => performOperation('/')} 
            className="botao-operacao" 
            label="÷" 
          />
        </div>

        <div className="linha">
          <Botao 
            onClick={() => inputNumber(7)} 
            className="botao-numero" 
            label="7" 
          />
          <Botao 
            onClick={() => inputNumber(8)} 
            className="botao-numero" 
            label="8" 
          />
          <Botao 
            onClick={() => inputNumber(9)} 
            className="botao-numero" 
            label="9" 
          />
          <Botao 
            onClick={() => performOperation('*')} 
            className="botao-operacao" 
            label="×" 
          />
        </div>

        <div className="linha">
          <Botao 
            onClick={() => inputNumber(4)} 
            className="botao-numero" 
            label="4" 
          />
          <Botao 
            onClick={() => inputNumber(5)} 
            className="botao-numero" 
            label="5" 
          />
          <Botao 
            onClick={() => inputNumber(6)} 
            className="botao-numero" 
            label="6" 
          />
          <Botao 
            onClick={() => performOperation('-')} 
            className="botao-operacao" 
            label="−" 
          />
        </div>

        <div className="linha">
          <Botao 
            onClick={() => inputNumber(1)} 
            className="botao-numero" 
            label="1" 
          />
          <Botao 
            onClick={() => inputNumber(2)} 
            className="botao-numero" 
            label="2" 
          />
          <Botao 
            onClick={() => inputNumber(3)} 
            className="botao-numero" 
            label="3" 
          />
          <Botao 
            onClick={() => performOperation('+')} 
            className="botao-operacao" 
            label="+" 
          />
        </div>

        <div className="linha">
          <Botao 
            onClick={() => inputNumber(0)} 
            className="botao-numero botao-zero" 
            label="0" 
          />
          <Botao 
            onClick={inputDecimal} 
            className="botao-numero" 
            label="," 
          />
          <Botao 
            onClick={handleEqual} 
            className="botao-operacao" 
            label="=" 
          />
        </div>
      </div>
    </div>
  );
};

export default Calculadora;