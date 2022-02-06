import React from 'react';

const ZamerForm = ({ setShow, setVisible }) => {
  function send(e) {
    e.preventDefault();
    setVisible(false);
    setShow(true);
  }
  return (
    <div
      className='modal fade show'
      id='zamer'
      role='dialog'
      style={{ display: 'block' }}
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h2 className='modal-title'>
              ЗАКАЗАТЬ
              <br />
              БЕСПЛАТНЫЙ ЗАМЕР
            </h2>
            <h4>
              Оставьте заявку и мы перезвоним
              <br />
              Вам в ближайшее время
            </h4>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={() => setVisible(false)}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <form action='' method='post' onSubmit={send}>
              <input type='hidden' className='type' value='zamer' name='type' />
              <input
                className='name'
                name='name'
                type='text'
                required
                placeholder='Ваше имя'
              />
              <input
                className='tel'
                name='tel'
                type='text'
                required
                placeholder='Ваш телефон'
              />
              <button type='submit'>ОСТАВИТЬ ЗАЯВКУ</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZamerForm;
