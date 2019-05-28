import React from 'react';
import './Display.scss';

const CalculatorDisplay = props => {
  const { display } = props;
  return (
    <div className='calculatorDisplay'>
      <h1>{display.total}</h1>
    </div>
  );
};

export default CalculatorDisplay;
