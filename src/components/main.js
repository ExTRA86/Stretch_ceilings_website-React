import React from 'react';
import Maps from './Maps';
import MyButton from './myButton';
import KindsItem from './kindsItem';
import Ask from './ask';

const Main = ({ setVisible, setShow }) => {
  function send(e) {
    e.preventDefault();
    setVisible(false);
    setShow(true);
  }

  return (
    <main>
      <div className='first-block'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='h1-block'>
                <h1>Натяжные потолки</h1>
                <h2>Со 100 летней гарантией от 1 100 руб/м²</h2>
                <span className='d-flex justify-content-center align-items-center'>
                  Дарим подарки!
                </span>
                <p>
                  Скидка на каждый 3-й натяжной потолок 20%!
                  <br />
                  Каждый 5-й светильник в подарок!
                </p>
              </div>
              <div className='calculate'>
                <div className='calculate-head'>
                  <h2>Калькулятор</h2>
                </div>
                <hr />
                <div className='calculate-body'>
                  <form action='' method='post' onSubmit={send}>
                    <input
                      type='hidden'
                      className='type'
                      value='calculate'
                      name='type'
                    />
                    <div>
                      <label>Площадь потолка (м2):</label>
                      <input
                        name='square'
                        type='text'
                        id='square'
                        required
                        value='32'
                      />
                    </div>
                    <div>
                      <label>Стоимость (руб):</label>
                      <input
                        type='text'
                        name='price'
                        id='price'
                        required
                        value='35200'
                      />
                    </div>
                    <div>
                      <label>Ваш телефон:</label>
                      <input
                        type='text'
                        id='phone'
                        name='tel'
                        required
                        className='tel'
                      />
                    </div>
                    <p>
                      Наш специалист свяжется с вами и договорится об удобном
                      времени замера и консультации
                    </p>
                    <button type='submit'>Оставить заявку</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='characteristics col-12'>
            <h2 className='wow fadeInDown' data-wow-duration='2s'>
              Быстро, чисто, безопасно!
            </h2>
            <div className='grid'>
              <div className='item item1 wow fadeInLeft' data-wow-duration='2s'>
                <div className='img-block'>
                  <img src='/assets/images/item1.png' alt='icon' />
                </div>
                <div className='desc'>
                  <h3>Выгодная цена</h3>
                  <span>Лучшее соотношение цены и качества в Росии!</span>
                </div>
              </div>
              <div className='item item2 wow fadeInUp' data-wow-duration='2s'>
                <div className='img-block'>
                  <img src='/assets/images/item2.png' alt='icon' />
                </div>
                <div className='desc'>
                  <h3>Профессионализм</h3>
                  <span>
                    Опытная бригада монтажников и современное оборудование
                  </span>
                </div>
              </div>
              <div
                className='item item3 wow fadeInRight'
                data-wow-duration='2s'
              >
                <div className='img-block'>
                  <img src='/assets/images/item3.png' alt='icon' />
                </div>
                <div className='desc'>
                  <h3>Богатый ассортимент</h3>
                  <span>Более 3000 цветов, любые виды, любые фактуры</span>
                </div>
              </div>
              <div className='item item4 wow fadeInLeft' data-wow-duration='2s'>
                <div className='img-block'>
                  <img src='/assets/images/item4.png' alt='icon' />
                </div>
                <div className='desc'>
                  <h3>Лучшие материалы</h3>
                  <span>
                    Используем только качественные экологичные плёнки БЕЗ запаха
                  </span>
                </div>
              </div>
              <div className='item item5 wow fadeInUp' data-wow-duration='2s'>
                <div className='img-block'>
                  <img src='/assets/images/item5.png' alt='icon' />
                </div>
                <div className='desc'>
                  <h3>Гарантия 100 лет!</h3>
                  <span>
                    Наши потолки НЕ провисают НЕ выцветают и НЕ портятся
                  </span>
                </div>
              </div>
              <div
                className='item item6 wow fadeInRight'
                data-wow-duration='2s'
              >
                <div className='img-block'>
                  <img src='/assets/images/item6.png' alt='icon' />
                </div>
                <div className='desc'>
                  <h3>Заключение договора</h3>
                  <span>
                    Работаем официально, есть все необходимые сертификаты
                  </span>
                </div>
              </div>
              <div className='item item7 wow fadeInLeft' data-wow-duration='2s'>
                <div className='img-block'>
                  <img src='/assets/images/item7.png' alt='icon' />
                </div>
                <div className='desc'>
                  <h3>Бесплатный замер</h3>
                  <span>
                    Выезжаем в течении 1 часа или в др. удобное вам время
                  </span>
                </div>
              </div>
              <div className='item item8 wow fadeInUp' data-wow-duration='2s'>
                <div className='img-block'>
                  <img src='/assets/images/item8.png' alt='icon' />
                </div>
                <div className='desc'>
                  <h3>Ценим ваше время</h3>
                  <span>
                    Изготовление потолка 1-2 дня, установка за пару часов
                  </span>
                </div>
              </div>
              <div
                className='item item9 wow fadeInRight'
                data-wow-duration='2s'
              >
                <div className='img-block'>
                  <img src='/assets/images/item9.png' alt='icon' />
                </div>
                <div className='desc'>
                  <h3>Аккуратный монтаж</h3>
                  <span>После установки выполняем уборку помещения</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='kinds container-fluid' name='Kids'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='wow fadeInDown' data-wow-duration='2s'>
                Фактуры натяжных потолков
              </h2>
              <div className='grid'>
                <KindsItem
                  className={'item item2 wow fadeInUp'}
                  srcImg={'/assets/images/kids-item2.jpg'}
                  price={1100}
                  kindsName={'Матовые потолки'}
                  setVisible={setVisible}
                />

                <KindsItem
                  className={'item item3 wow fadeInRight'}
                  srcImg={'/assets/images/kids-item3.jpg'}
                  price={1200}
                  kindsName={'Сатиновые потолки'}
                  setVisible={setVisible}
                />

                <KindsItem
                  className={'item item1 wow fadeInLeft'}
                  srcImg={'/assets/images/kids-item1.jpg'}
                  price={1300}
                  kindsName={'Глянцевые потолки'}
                  setVisible={setVisible}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='texnology col-12' name='texnology'>
            <h2 className='wow fadeInUp' data-wow-duration='2s'>
              Технологии натяжных потолков
            </h2>
            <div className='grid'>
              <div className='wow fadeInLeft' data-wow-duration='2s'>
                <img src='/assets/images/texnology-item1.jpg' alt='img' />
                <h3>Двухуровневые</h3>
              </div>
              <div className='wow fadeInUp' data-wow-duration='2s'>
                <img src='/assets/images/texnology-item2.jpg' alt='img' />
                <h3>Светопропускающие</h3>
              </div>
              <div className='wow fadeInUp' data-wow-duration='2s'>
                <img src='/assets/images/texnology-item3.jpg' alt='img' />
                <h3>С фотопечатью</h3>
              </div>
              <div className='wow fadeInRight' data-wow-duration='2s'>
                <img src='/assets/images/texnology-item4.jpg' alt='img' />
                <h3>Звездное небо</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='zamer container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-between align-items-center flex-wrap'>
              <div className='h2-block wow fadeInLeft' data-wow-duration='2s'>
                <h2>
                  Закажите бесплатный
                  <br />
                  замер прямо сейчас!
                </h2>
                <span className='first'>
                  <img src='/assets/images/check.png' alt='icon' />
                  Скидка на каждый третий
                  <br />
                  натяжной потолок 20%
                </span>
                <span>
                  <img src='/assets/images/check.png' alt='icon' />
                  Каждый 5-й светильник
                  <br />в подарок
                </span>
              </div>
              <div className='form wow fadeInRight' data-wow-duration='2s'>
                <h3>ВЫЗВАТЬ ЗАМЕРЩИКА</h3>
                <span>БЕСПЛАТНО УЖЕ СЕГОДНЯ!</span>
                <h4>+ ПОДАРКИ ПО АКЦИИ</h4>
                <form action='' method='post' onSubmit={send}>
                  <input
                    type='hidden'
                    className='type'
                    value='zamer2'
                    name='type'
                  />
                  <input
                    type='text'
                    name='tel'
                    placeholder='Ваш телефон'
                    required
                    className='tel'
                  />
                  <button type='submit'>Оставить заявку</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='potolki-for container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='wow fadeInUp' data-wow-duration='2s'>
              Технологии натяжных потолков
            </h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 grid'>
            <div className='item wow fadeInLeft' data-wow-duration='2s'>
              <img src='/assets/images/for-item1.jpg' alt='img' />
              <span>Спальни</span>
            </div>
            <div className='item wow fadeInUp' data-wow-duration='2s'>
              <img src='/assets/images/for-item2.jpg' alt='img' />
              <span>Гостинной</span>
            </div>
            <div className='item wow fadeInRight' data-wow-duration='2s'>
              <img src='/assets/images/for-item3.jpg' alt='img' />
              <span>Детской</span>
            </div>
            <div className='item wow fadeInLeft' data-wow-duration='2s'>
              <img src='/assets/images/for-item4.jpg' alt='img' />
              <span>Кухни</span>
            </div>
            <div className='item wow fadeInUp' data-wow-duration='2s'>
              <img src='/assets/images/for-item5.jpg' alt='img' />
              <span>Ванной и туалета</span>
            </div>
            <div className='item wow fadeInRight' data-wow-duration='2s'>
              <img src='/assets/images/for-item6.jpg' alt='img' />
              <span>Офиса</span>
            </div>
          </div>
        </div>
      </div>
      <Ask setVisible={setVisible} />
      <div className='reviews container' name='reviews'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='wow fadeInUp' data-wow-duration='2s'>
              Что говорят о нас клиенты
            </h2>
            <div className='items'>
              <div className='item item1 wow fadeInLeft' data-wow-duration='2s'>
                <img src='/assets/images/avatar1.jpg' alt='img' />
                <h5>Валентина Николаева</h5>
                <span>
                  Срочно были нужны потолки. Наткнулась в интернете на сайт,
                  позвонила и записалась на замер, объяснила, что срочно надо.
                  Через час приехал замерщик, приятный молодой человек, показал
                  образцы материала, проконсультировал. Все быстренько померил,
                  посчитал, цена понравилась, помог определиться с выбором
                  светильников, заключили договор.
                </span>
              </div>
              <div className='item item2 wow fadeInUp' data-wow-duration='2s'>
                <img src='/assets/images/avatar2.jpg' alt='img' />
                <h5>Сергей Артемьев</h5>
                <span>
                  У нас был ограничен бюджет, поэтому выбирали очень долго.
                  Вызвали несколько замерщиков. В этой компании оказалась самая
                  хорошая цена, поэтому и остановили выбор на них. Ни грамма не
                  пожалели. Всем рекомендую. Отдельно хочу поблагодарить бригаду
                  монтажников. Все сделали аккуратно и быстро, спасибо огромное!
                </span>
              </div>
              <div
                className='item item3 wow fadeInRight'
                data-wow-duration='2s'
              >
                <img src='/assets/images/avatar3.jpg' alt='img' />
                <h5>Андрей Чудинов</h5>
                <span>
                  Хорошая компания. Заказывал натяжной потолок на кухню и в
                  спальню. Получилось очень красиво и современно. Большой
                  ассортимент и нормальные цены. Отношение к клиенту человечное.
                  Сделали быстро, после себя убрали, ничего не испортили в
                  квартире, хотя опасения были на этот счет, т.к. работа такая.
                  В общем одни положительные эмоции.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='call wow fadeInUp' data-wow-duration='2s'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>
                Вызовите замерщика в любой день,
                <br />
                мы работаем без выходных!
              </h2>
              <h3>
                Произведем замер, поможем определиться с фактурой
                <br className='d-none d-md-block' /> и цветом, рассчитаем точную
                стоимость.
              </h3>
              <MyButton onClick={() => setVisible(true)}>
                ОСТАВИТЬ ЗАЯВКУ
              </MyButton>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-15'>
            <div className='places'>
              <img
                className='places-logo'
                style={{ height: 60 }}
                src='/assets/images/logo.jpg'
                alt='logo'
              />
              <span>г. Москва, Красная площадь, с лева</span>
              <div>
                <img src='/assets/images/phone-icon.png' alt='img' />
                <a href='tel:+77777777777'>+7 (777) 777 77 77</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Maps />
    </main>
  );
};

export default Main;
