import React from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './App.css';
import './components/Login.css'
import { Redirect } from 'react-router-dom';
function Login() {
  return (
    <div className="login-page">
      <div className="App">
      <div>
        <h1 className="login-titulo">EL GARAGE</h1>
      </div>
      <Container>
      <Row>
            <Col md={{ span: 4, offset: 4 }} className="login-container">
              <h3 className="login-text">Bienvenido, por favor inicie sesión</h3>
              <Form className="login-form">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label><b>Nombre de Usuario</b><span className="login-require"><b>*</b></span></Form.Label>
                  <Form.Control type="email" placeholder="Usuario" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label><b>Contraseña</b><span className="login-require"><b>*</b></span></Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="login-button">
                  <b>Iniciar Sesion</b>
                </Button>
              </Form>
            </Col>
      </Row>
      </Container>
      </div>
    </div>
  );
}

export default Login;
