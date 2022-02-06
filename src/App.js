import React, { useState } from 'react';
import MyModal from './components/myModal';
import CallForm from './components/callForm';
import ZamerForm from './components/zamerForm';
import '../src/css/style.css';

import Navbar from './components/Navbar';
import Main from './components/main';
import Foot from './components/foot';
import LinkButton from './components/LinkButton';
import Success from './components/success';

function App() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <MyModal visible={modal1} setVisible={setModal1}>
        <CallForm setShow={setShow} setVisible={setModal1} />
      </MyModal>
      <MyModal visible={modal2} setVisible={setModal2}>
        <ZamerForm setShow={setShow} setVisible={setModal2} />
      </MyModal>
      <MyModal visible={show} setVisible={setShow}>
        <Success show={show} setShow={setShow} />
      </MyModal>

      <Navbar setVisible={setModal1} />
      <Main setVisible={setModal2} setShow={setShow} />
      <Foot />

      <LinkButton toName={'head'}>
        <p className='up'>
          <img src='/assets/images/chevron-up.png' alt='icon' />
        </p>
      </LinkButton>

      <LinkButton toName={'footer'}>
        <p className='down'>
          <img src='/assets/images/chevron-up.png' alt='icon' />
        </p>
      </LinkButton>
    </React.Fragment>
  );
}

export default App;
