import React from 'react';
import './Button.scss';

const NumberButton = props => {
  return <button className={props.buttonStyle}>{props.textProp}</button>;
};

export default NumberButton;
