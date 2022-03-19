import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

// calculate(obj, buttonName)

const Calculator = () => {
  const [data, updateData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [screen, updateScreen] = useState('0');

  const handleClick = (event) => {
    const buttonName = event.target.innerHTML;
    const objData = calculate(data, buttonName);
    const nullCheck = objData.next === null && objData.total === null && objData.operation === null;

    if (nullCheck || !Object.keys(objData).length) {
      updateScreen('0');
    } else if (!objData.next) {
      updateScreen(objData.total);
    } else updateScreen(objData.next);

    updateData({ ...data, ...objData });
  };

  return (
    <div className="calculator-container">
      <div className="screen">
        <div>{screen}</div>
      </div>
      <button type="button" className="btn-reset light-gray" onClick={handleClick} onKeyDown={handleClick}>AC</button>
      <button type="button" className="btn-change light-gray" onClick={handleClick} onKeyDown={handleClick}>+/-</button>
      <button type="button" className="btn-0 light-gray" onClick={handleClick} onKeyDown={handleClick}>0</button>
      <button type="button" className="btn-dot light-gray" onClick={handleClick} onKeyDown={handleClick}>.</button>
      <button type="button" className="btn-equal orange" onClick={handleClick} onKeyDown={handleClick}>=</button>
      <button type="button" className="btn-add orange" onClick={handleClick} onKeyDown={handleClick}>+</button>
      <button type="button" className="btn-subtract orange" onClick={handleClick} onKeyDown={handleClick}>-</button>
      <button type="button" className="btn-multiply orange" onClick={handleClick} onKeyDown={handleClick}>x</button>
      <button type="button" className="btn-divide orange" onClick={handleClick} onKeyDown={handleClick}>÷</button>
      <button type="button" className="btn-percent light-gray" onClick={handleClick} onKeyDown={handleClick}>%</button>
      <button type="button" className="btn-1 light-gray" onClick={handleClick} onKeyDown={handleClick}>1</button>
      <button type="button" className="btn-2 light-gray" onClick={handleClick} onKeyDown={handleClick}>2</button>
      <button type="button" className="btn-3 light-gray" onClick={handleClick} onKeyDown={handleClick}>3</button>
      <button type="button" className="btn-4 light-gray" onClick={handleClick} onKeyDown={handleClick}>4</button>
      <button type="button" className="btn-5 light-gray" onClick={handleClick} onKeyDown={handleClick}>5</button>
      <button type="button" className="btn-6 light-gray" onClick={handleClick} onKeyDown={handleClick}>6</button>
      <button type="button" className="btn-7 light-gray" onClick={handleClick} onKeyDown={handleClick}>7</button>
      <button type="button" className="btn-8 light-gray" onClick={handleClick} onKeyDown={handleClick}>8</button>
      <button type="button" className="btn-9 light-gray" onClick={handleClick} onKeyDown={handleClick}>9</button>
    </div>
  );
};

export default Calculator;
