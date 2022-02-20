import React from 'react';
import { useObserver } from '../Hooks/useObserver';
import LinkButton from './LinkButton';
import MobileButton from './MobileButton';

const Navbar = ({ setVisible }) => {
  const [sticky, navbar] = useObserver({
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  return (
    <header name='head'>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='header col-12 d-flex justify-content-between align-items-center flex-wrap'>
              <div className='logo-block d-flex justify-content-between align-items-end flex-wrap '>
                <div>
                  <img
                    style={{ height: 90 }}
                    src='/assets/images/logo.jpg'
                    alt='logo'
                  />
                  <span>
                    Установка натяжных потолков
                    <br />в Москве и Московской обл.
                  </span>
                </div>
              </div>
              <div className='contacts d-flex justify-content-between align-items-center flex-wrap'>
                <div className='tel-block d-flex justify-content-sm-between justify-content-center align-items-end'>
                  <img src='/assets/images/phone-icon.png' alt='icon' />
                  <div>
                    <a href='tel:+77777777777'>+7 (777) 777 77 77</a>
                    <span>Без выходных с 8:00 до 23:00</span>
                  </div>
                </div>

                <button
                  data-toggle='modal'
                  data-target='#call'
                  onClick={() => setVisible(true)}
                >
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={sticky} />
      <nav className={navbar}>
        <div className='container'>
          <div className='row'>
            <MobileButton>
              <LinkButton toName={'kinds'}>Фактуры потолков</LinkButton>
              <LinkButton toName={'texnology'}>Технологии потолков</LinkButton>
              <LinkButton toName={'task'}>Ответы на вопросы</LinkButton>
              <LinkButton toName={'reviews'}>Отзывы</LinkButton>
              <LinkButton toName={'footer'}>Контакты</LinkButton>
            </MobileButton>
            <div className='col-12 d-md-flex justify-content-between align-items-center collapse '>
              <LinkButton toName={'kinds'}>Фактуры потолков</LinkButton>
              <LinkButton toName={'texnology'}>Технологии потолков</LinkButton>
              <LinkButton toName={'task'}>Ответы на вопросы</LinkButton>
              <LinkButton toName={'reviews'}>Отзывы</LinkButton>
              <LinkButton toName={'footer'}>Контакты</LinkButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
