import React from 'react';
import './Card.scss';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    <div className='cardContainer' onClick={clickMe}>
      <CardBanner />
      <CardContent />
    </div>
  );
};

function clickMe() {
  window.open('https://www.reactjs.org');
}
export default CardContainer;
