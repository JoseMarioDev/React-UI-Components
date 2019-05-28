import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  const NumProfile = {
    divide: '/',
    seven: 7,
    eight: 8,
    nine: 9,
    times: 'X',
    four: 4,
    five: 5,
    six: 6,
    minus: '-',
    one: 1,
    two: 2,
    three: 3,
    plus: '+',
    equal: '=',
  };

  const ActionProfile = {
    clear: 'clear',
    zero: 0,
  };

  const DisplayProfile = {
    total: 0,
  };

  return (
    <div className='app'>
      <CalculatorDisplay display={DisplayProfile} />
      <NumberButton number={NumProfile} />
      <ActionButton action={ActionProfile} />
    </div>
  );
};

export default App;
