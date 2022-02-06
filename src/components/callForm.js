import React from 'react';

const CallForm = ({ setShow, setVisible }) => {
  function send(e) {
    e.preventDefault();
    setVisible(false);
    setShow(true);
  }

  return (
    <div
      className='modal fade show'
      id='call'
      role='dialog'
      style={{ display: 'block' }}
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h2 className='modal-title'>Обратный звонок</h2>
            <h4>
              Заполните поля и мы перезвоним
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
              <input type='hidden' className='type' value='call' name='type' />
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
              <button type='submit'>Перезвоните мне</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForm;
