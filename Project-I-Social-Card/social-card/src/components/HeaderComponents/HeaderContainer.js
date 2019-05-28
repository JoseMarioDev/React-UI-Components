import React from 'react';
import './Header.scss';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
  return (
    <div className='headerContainer'>
      <div className='headerLeft'>
        <ImageThumbnail />
      </div>
      <div className='headerRight'>
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;
