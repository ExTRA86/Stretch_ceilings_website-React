import React from 'react';

const Foot = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='copy'>Натяжные потолки 2022</div>
            <div className='desc'>
              Монтаж и обслуживание натяжных
              <br />
              потолков в Москве и Московской области
            </div>
            <div className='footer-contacts' name='footer'>
              <a className='link-tel' href='tel:+77777777777'>
                <img src='/assets/images/tel.png' alt='icon' />
                +7 (777) 777 77 77
              </a>
              <a className='link-mail' href='mailto:натяжные-потолки@gmail.com'>
                <img src='/assets/images/mail.png' alt='icon' />
                натяжные-потолки@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
