
import React from 'react';
import Container from 'react-bootstrap/Container';

import './Inicio.css';
import redCarImg from './assets/carroRojo.png';
import whiteCarImg from './assets/carroBlanco.png';

const Inicio = () => (
  <Container fluid className='d-flex justify-content-center align-items-center position-relative' style={{ height: 'calc(100vh - 60px)' }}>
    <img src={redCarImg} alt='Red car' className='top-left'/>
    <h1 className='display-3 font-weight-bold'>EL GARAGE</h1>
    <img src={whiteCarImg} alt='White car' className='bottom-right'/>
  </Container>
);

export default Inicio;
