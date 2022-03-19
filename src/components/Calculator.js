import React from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

// calculate(obj, buttonName)
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      data: {
        total: null,
        next: null,
        operation: null,
      },
      screen: '0',
    };
  }

  handleClick(event) {
    const buttonName = event.target.innerHTML;
    const { data } = this.state;
    const objData = calculate(data, buttonName);
    let screenUpdate;
    const nullCheck = objData.next === null && objData.total === null && objData.operation === null;
    function updateScreen() {
      if (nullCheck || !Object.keys(objData).length) {
        screenUpdate = '0';
      } else if (!objData.next) {
        screenUpdate = objData.total;
      } else screenUpdate = objData.next;
    }
    updateScreen();
    this.setState({
      data: { ...data, ...objData },
      screen: screenUpdate,
    });
  }

  render() {
    const { screen } = this.state;
    return (
      <div className="calculator-container">
        <div className="screen">
          <div>{screen}</div>
        </div>
        <button type="button" className="btn-reset light-gray" onClick={this.handleClick} onKeyDown={this.handleClick}>AC</button>
        <button type="button" className="btn-change light-gray" onClick={this.handleClick} onKeyDown={this.handleClick}>+/-</button>
        <button type="button" className="btn-0 light-gray" onClick={this.handleClick} onKeyDown={this.handleClick}>0</button>
        <button type="button" className="btn-dot light-gray" onClick={this.handleClick} onKeyDown={this.handleClick}>.</button>
        <button type="button" className="btn-equal orange" onClick={this.handleClick} onKeyDown={this.handleClick}>=</button>
        <button type="button" className="btn-add orange" onClick={this.handleClick} onKeyDown={this.handleClick}>+</button>
        <button type="button" className="btn-subtract orange" onClick={this.handleClick} onKeyDown={this.handleClick}>-</button>
        <button type="button" className="btn-multiply orange" onClick={this.handleClick} onKeyDown={this.handleClick}>x</button>
        <button type="button" className="btn-divide orange" onClick={this.handleClick} onKeyDown={this.handleClick}>÷</button>
        <button type="button" className="btn-percent light-gray" onClick={this.handleClick} onKeyDown={this.handleClick}>%</button>
        <button type="button" className="btn-1 light-gray" onClick={this.handleClick} onKeyDown={this.handleClick}>1</button>
        <button type="button" className="btn-2 light-gray" onClick={this.handleClick} onKeyDown={this.handleClick}>2</button>
        <button type="button" className="btn-3 light-gray" onClick={this.handleClick} onKeyDown={this.handleClick}>3</button>
        <button type="button" className="btn-4 light-gray" onClick={this.handleClick} onKeyDown={this.handleClick}>4</button>
        <button type="button" className="btn-5 light-gray" onClick={this.handleClick} onKeyDown={this.handleClick}>5</button>
        <button type="button" className="btn-6 light-gray" onClick={this.handleClick} onKeyDown={this.handleClick}>6</button>
        <button type="button" className="btn-7 light-gray" onClick={this.handleClick} onKeyDown={this.handleClick}>7</button>
        <button type="button" className="btn-8 light-gray" onClick={this.handleClick} onKeyDown={this.handleClick}>8</button>
        <button type="button" className="btn-9 light-gray" onClick={this.handleClick} onKeyDown={this.handleClick}>9</button>
      </div>
    );
  }
}

export default Calculator;
