import React from 'react';
import { useObserver } from '../Hooks/useObserver';
import LinkButton from './LinkButton';

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
            <button
              className='d-md-none navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                version='1.1'
                id='Capa_1'
                x='0px'
                y='0px'
                width='512px'
                height='512px'
                viewBox='0 0 124 124'
                style={{ background: 'aqua' }}
                xmlSpace='preserve'
              >
                <g>
                  <path
                    d='M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z'
                    fill='#FFFFFF'
                  />
                  <path
                    d='M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z'
                    fill='#FFFFFF'
                  />
                  <path
                    d='M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z'
                    fill='#FFFFFF'
                  />
                </g>
              </svg>
            </button>
            <div
              className='col-12 d-md-flex justify-content-between align-items-center collapse '
              id='navbarToggleExternalContent'
            >
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
