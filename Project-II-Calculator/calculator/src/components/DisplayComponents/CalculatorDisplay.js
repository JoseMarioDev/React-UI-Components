import React from 'react';
import './Display.scss';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay = () => {
  return (
    <div className='calculatorDisplay'>
      <ActionButton />
      <div className='firstRow'>
        <NumberButton textProp='7' buttonStyle='button' />
        <NumberButton textProp='8' buttonStyle='button' />
        <NumberButton textProp='9' buttonStyle='button' />
        <NumberButton textProp='x' buttonStyle='buttonRed' />
      </div>

      <div className='secondRow'>
        <NumberButton textProp='4' buttonStyle='button' />
        <NumberButton textProp='5' buttonStyle='button' />
        <NumberButton textProp='6' buttonStyle='button' />
        <NumberButton textProp='-' buttonStyle='buttonRed' />
      </div>

      <div className='thirdRow'>
        <NumberButton textProp='1' buttonStyle='button' />
        <NumberButton textProp='2' buttonStyle='button' />
        <NumberButton textProp='3' buttonStyle='button' />
        <NumberButton textProp='+' buttonStyle='buttonRed' />
      </div>

      <div className='fourthRow bold'>
        <NumberButton textProp='0' buttonStyle='buttonLarge' />
        <NumberButton textProp='=' buttonStyle='buttonRed' />
      </div>
    </div>
  );
};

export default CalculatorDisplay;
