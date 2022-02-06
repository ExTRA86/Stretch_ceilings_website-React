import React from 'react';

const Success = ({ show, setShow }) => {
  return (
    <div>
      {show ? (
        <div className='success'>
          <div>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={() => setShow(false)}
            >
              <span>&times;</span>
            </button>
          </div>

          <p>Ваша заявка отправлена!</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Success;
