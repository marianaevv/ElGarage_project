import React from 'react';
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './App.css';
import './LoginAdmin.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy redirect for now
    window.location.href = '/admin/citas';
  }

  return (
    <div className="login-page">
      <Container fluid>
        <Row>
          <Col>
            <h1 className="display-4 font-weight-bold login-titulo">EL GARAGE</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={5} md={7} className="login-box">
            <h3 className="login-text">Bienvenido, por favor inicie sesión</h3>
            <Form className="login-form" onSubmit={handleSubmit}>
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
  );
}

export default Login;
