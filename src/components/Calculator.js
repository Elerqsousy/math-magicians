import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Btns from './Btns';

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
    const nullCheck = objData.next === null
      && objData.total === null
      && objData.operation === null;

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
      <Btns handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
