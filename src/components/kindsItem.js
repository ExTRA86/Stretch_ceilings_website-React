import React from 'react';
import MyButton from './myButton';

const KindsItem = ({ className, srcImg, price, kindsName, setVisible }) => {
  return (
    <div className={className} data-wow-duration='2s'>
      <img className='img' src={srcImg} alt='img' />
      <div className='wrap'>
        <h3>{kindsName}</h3>
        <span className='item-price'>от {price} руб</span>
        <div>
          <span>
            <img src='/assets/images/chech1.png' alt='img' />
            Бесплатный cервис
          </span>
          <span>
            <img src='/assets/images/chech1.png' alt='img' />С установкой
          </span>
        </div>
        <MyButton onClick={() => setVisible(true)}>Оставить заявку</MyButton>
      </div>
    </div>
  );
};

export default KindsItem;
