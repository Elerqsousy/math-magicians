import React from 'react';
import PropTypes from 'prop-types';

const Btns = (props) => {
  const btnArray = [
    { name: 'AC', className: 'btn-reset light-gray' },
    { name: '+/-', className: 'btn-change light-gray' },
    { name: '0', className: 'btn-0 light-gray' },
    { name: '.', className: 'btn-dot light-gray' },
    { name: '=', className: 'btn-equal orange' },
    { name: '+', className: 'btn-add orange' },
    { name: '-', className: 'btn-subtract orange' },
    { name: 'x', className: 'btn-multiply orange' },
    { name: '÷', className: 'btn-divide orange' },
    { name: '%', className: 'btn-percent light-gray' },
    { name: '1', className: 'btn-1 light-gray' },
    { name: '2', className: 'btn-2 light-gray' },
    { name: '3', className: 'btn-3 light-gray' },
    { name: '4', className: 'btn-4 light-gray' },
    { name: '5', className: 'btn-5 light-gray' },
    { name: '6', className: 'btn-6 light-gray' },
    { name: '7', className: 'btn-7 light-gray' },
    { name: '8', className: 'btn-8 light-gray' },
    { name: '9', className: 'btn-9 light-gray' },
  ];

  const { handleClick } = props;

  return (
    <>
      {btnArray.map((btn) => (
        <button
          key={btn.name}
          type="button"
          className={btn.className}
          onClick={handleClick}
          onKeyDown={handleClick}
        >
          {btn.name}
        </button>
      ))}
    </>
  );
};

Btns.propTypes = {
  handleClick: PropTypes.func,
};

Btns.defaultProps = {
  handleClick(e) { return e; },
};

export default Btns;
