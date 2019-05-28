import React from 'react';
import './Card.scss';

const CardContent = () => {
  return (
    <div className='cardContent'>
      <h2>Get started with React</h2>
      <p>
        React makes it painless to create interactive UIs. Design simple views
        for reach state in your application.
      </p>
      <p className='lightText'>reactjs.org</p>
    </div>
  );
};

export default CardContent;
