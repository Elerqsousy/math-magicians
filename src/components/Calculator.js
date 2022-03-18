import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="screen"><div>0</div></div>
        <button type="button" className="btn-reset light-gray">AC</button>
        <button type="button" className="btn-change light-gray">+/-</button>
        <button type="button" className="btn-0 light-gray">0</button>
        <button type="button" className="btn-dot light-gray">.</button>
        <button type="button" className="btn-equal orange">=</button>
        <button type="button" className="btn-add orange">+</button>
        <button type="button" className="btn-subtract orange">-</button>
        <button type="button" className="btn-multiply orange">*</button>
        <button type="button" className="btn-divide orange">/</button>
        <button type="button" className="btn-percent light-gray">%</button>
        <button type="button" className="btn-1 light-gray">1</button>
        <button type="button" className="btn-2 light-gray">2</button>
        <button type="button" className="btn-3 light-gray">3</button>
        <button type="button" className="btn-4 light-gray">4</button>
        <button type="button" className="btn-5 light-gray">5</button>
        <button type="button" className="btn-6 light-gray">6</button>
        <button type="button" className="btn-7 light-gray">7</button>
        <button type="button" className="btn-8 light-gray">8</button>
        <button type="button" className="btn-9 light-gray">9</button>
      </div>
    );
  }
}

export default Calculator;
