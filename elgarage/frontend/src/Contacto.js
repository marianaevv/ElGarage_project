import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Contacto.css';

const Contacto = () => {
  const { register, errors, handleSubmit } = useForm({
    defaultValues: {
      nombre: '',
      correo: '',
      asunto: '',
      mensaje: ''
    }
  });

  const onSubmit = (data) => console.log(data);
  const onError = (errors) => console.error(errors);

  return (
    <div className="App">
      <h1 className="contacto-header">Contactanos</h1>
      <Container>
        <Row>
          <Col md={6} className="contacto-container">
          <div class="map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.869526589471!2d-106.01359948459186!3d28.663625089423153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea451f4be48991%3A0x9b2356d96f1aef45!2sVenice%2C%20California%20Etapa%20I%2C%20Chihuahua%2C%20Chih.!5e0!3m2!1ses!2smx!4v1602451739328!5m2!1ses!2smx" width="600" height="550" frameborder="0" style={{border: 0}} allowfullscreen="" aria-hidden="false" tabindex="0" title='map'></iframe>
          </div>

          </Col>
          <Col md={{ span: 6 }} className="contacto-container">
            <div>
              <h2>Visitanos</h2>
              <p>
                Calle Venice 9705 <br/>
                Chihuahua,Chihuahua <br/>
                Tel.6251513775
              </p>
              <h2>Envianos un Mensaje</h2>
              <Form className="contacto-form" onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                <Form.Group>
                  <Form.Label controlId="nameForm"><b>Nombre</b></Form.Label>
                  <Form.Control name="nombre" ref={register({ required: 'Esto es obligatorio' })} type="text" placeholder="Nombre" />
                  <ErrorMessage errors={errors} name="nombre" render={({ message }) => <p className='text-danger'>{message}</p>}/>
                </Form.Group>
                <Form.Group controlId="emailForm">
                  <Form.Label><b>Email</b></Form.Label>
                  <Form.Control name="correo" ref={register({ required: "Esto es obligatorio", pattern: { value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Correo inválido' }})} type="email" placeholder="name@example.com" />
                  <ErrorMessage errors={errors} name="correo" render={({ message }) => <p className='text-danger'>{message}</p>}/>
                </Form.Group>
                <Form.Group controlId="asuntoForm">
                  <Form.Label><b>Asunto</b></Form.Label>
                  <Form.Control name="asunto" ref={register({ required: 'Esto es obligatorio' })} type="text" placeholder="Asunto" />
                  <ErrorMessage errors={errors} name="asunto" render={({ message }) => <p className='text-danger'>{message}</p>}/>
                </Form.Group>
                <Form.Group controlId="mensajeForm">
                  <Form.Label><b>Mensaje</b></Form.Label>
                  <Form.Control name="mensaje" ref={register({ required: 'Esto es obligatorio' })} as="textarea" rows={3} />
                  <ErrorMessage errors={errors} name="mensaje" render={({ message }) => <p className='text-danger'>{message}</p>}/>
                </Form.Group>
                <Button variant="secondary" type="submit">Enviar</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contacto;
