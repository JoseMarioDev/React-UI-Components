import React from 'react';
import './Button.scss';
import NumberButton from './NumberButton';

const ActionButton = () => {
  return (
    <div>
      <div className='actionButton'>
        <div className='actionZero'>
          <p>0</p>
        </div>
      </div>
      <div className='fourthRow'>
        <NumberButton textProp='clear' buttonStyle='buttonLarge' />
        <NumberButton textProp='&divide;' buttonStyle='buttonRed' />
      </div>
    </div>
  );
};

export default ActionButton;
