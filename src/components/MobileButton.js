import React, { useState } from 'react';

const MobileButton = ({ children }) => {
  const [menu, setMenu] = useState('mobile_menu');

  const activate = () => {
    menu === 'mobile_menu'
      ? setMenu('mobile_menu active')
      : setMenu('mobile_menu');
  };

  return (
    <div>
      <button className='menu-button' onClick={activate}>
        =
      </button>
      <div className={menu}>{children}</div>
    </div>
  );
};

export default MobileButton;
