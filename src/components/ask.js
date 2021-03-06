import React from 'react';
import MyAsk from './MyAsk';
import MyButton from './myButton';

const Ask = ({ setVisible }) => {
  return (
    <div className='ask container-fluid' name='task'>
      <div className='container'>
        <div className='row'>
          <div className='col-12  wow fadeInUp' data-wow-duration='2s'>
            <h2>Ответы на вопросы</h2>
            <h3>
              Можете задать вопросы по телефону
              <a href='tel:+77777777777'>+7 (777) 777 77 77</a>
              <br />
              или просто оставьте заявку и мы вам перезвоним
            </h3>
          </div>
          <div className='row'>
            <div
              className='col-12 col-md-6 ask-blocks wow fadeInLeft'
              data-wow-duration='2s'
            >
              <MyAsk
                h={'Как сильно опустится потолок?'}
                d={
                  'Потолок опустится незначительно. Натяжные потолки монтируются' +
                  ' на расстоянии 3 см от существующего потолка, если у него нет сильных перепадов.'
                }
              />

              <MyAsk
                h={'Сколько стоит натяжной потолок?'}
                d={
                  'Точная стоимость натяжного потолка будет известна ' +
                  'после проведения замеров и уточнения ваших пожеланий. Она складывается из следующих ' +
                  'факторов: стоимость материалов, площадь помещения, сложность и объем монтажа.'
                }
              />

              <MyAsk
                h='Что случится с потолками, если нас затопят?'
                d={
                  'Наши потолки выдерживают до 100 л воды на квадратный метр.' +
                  '   ' +
                  'Это спасёт ваш ремонт в случае затопления сверху. Если это' +
                  'произойдёт, просто позвоните нам. Бригада оперативно приедет' +
                  'и сольёт воду, сохранив целостность полотна.'
                }
              />
            </div>
            <div
              className='col-12 col-md-6 ask-blocks ask-blocks2 wow fadeInRight'
              data-wow-duration='2s'
            >
              <MyAsk
                h={'Какой срок изготовления и установки?'}
                d={
                  'От замера потолка до его полной установки 1-2 дня. На замер наша бригада может выехать в течении часа' +
                  ' или в любое время, когда вам удобно.'
                }
              />
              <MyAsk
                h={'Портится ли мебель и обои при монтаже?'}
                d={
                  'При монтаже температура в помещении доводится до 60 градусов. Мебель и другие предметы интерьера при ' +
                  'этом не портятся. Однако мы рекомендуем особенно ценные предметы и комнатные растения вынести из помещения.'
                }
              />

              <MyAsk
                h={'Плюсы установки натяжных потолков?'}
                d={
                  'Не нужно выравнивать потолок, никакой штукатурки, грунтовки, краски. Чистая комната без мусора, быстрая' +
                  ' установка, нет нужды перекрашивать, гарантия 10 лет.'
                }
              />
            </div>
            <div className='col-12 wow fadeInUp' data-wow-duration='2s'>
              <MyButton onClick={() => setVisible(true)}>
                ОСТАВИТЬ ЗАЯВКУ
              </MyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ask;
