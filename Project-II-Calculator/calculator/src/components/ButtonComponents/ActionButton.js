import React from 'react';
import './Button.scss';

const ActionButton = props => {
  const { action } = props;
  return (
    <div className='action-button'>
      <div className='clear'>
        <button>{action.zero}</button>
      </div>
    </div>
  );
};

export default ActionButton;
