import React, { useState } from 'react';

const MyAsk = ({ h, d }) => {
  const [classNameH4, setClassNameH4] = useState('');

  const activate = () => {
    classNameH4 === '' ? setClassNameH4('active') : setClassNameH4('');
  };

  return (
    <div className='item' onClick={() => activate()}>
      <h4 className={classNameH4}>{h}</h4>
      <div className={classNameH4}>{d}</div>
    </div>
  );
};

export default MyAsk;
