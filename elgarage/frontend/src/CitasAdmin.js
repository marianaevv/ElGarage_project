import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loader from './components/Loader';
import Button from 'react-bootstrap/Button'
import './CitasAdmin.css';

import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
function App() {
	const [citas, setAppointments] = useState(null);

	useEffect(() => {
		const fetchAppointments = async () => {
			const { data } = await axios.get('/api/citas');
			const { citas, paginas } = data;
			// const quotesChunks = splitQuotes(projects);
			setAppointments(citas);
		};

		fetchAppointments();
	}, []);
	const confirmarCita = (appointment) =>{
		let url = '/api/citas/confirmar';

    let data = {
        id : appointment.id,
		nombre : appointment.nombre,
		correo : appointment.correo,
		telefono : appointment.telefono,
		placas : appointment.placas,
		fecha : appointment.fecha,
		hora : appointment.hora,
		descripcion : appointment.descripcion
    }

    let settings = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify( data )
    }

    fetch( url, settings )
        .then( response => {
            if( response.ok ){
				alert("se confirmo la cita y se le informo al cliente")
				window.location.reload()
			}
			else{

				throw new Error( response.statusText );
			}
        })
        .catch( err => {
            alert("Something happend,Try again");
            console.log(err);
        });
	}

	return !citas ? (
		<Loader />
	) : (
		<div className="App">
			<Container fluid style={{ marginTop: 20 }}>
				<Row>
					<Col md={4}>
						<h1 className="display-4 font-weight-bold titulo-dashboard">EL GARAGE</h1>
					</Col>
					<Col md={{ span: 4, offset: 4 }}>
						<h1 className="display-4 font-weight-bold cita-dashboard">CITAS</h1>
					</Col>
				</Row>
				<Row>
					<Col md={6} style={{ marginTop: 50 }}>
						<Form>
							<Row>
								<Col md="auto">
									<h3 className="cita-dashboard">Buscar</h3>
								</Col>
								<Col md="5">
									<Form.Control></Form.Control>
								</Col>
							</Row>
						</Form>
					</Col>
				</Row>

				<Table striped bordered hover responsive style={{ marginTop: 10 }}>
					<thead>
						<tr>
							<th className="th">Nombre</th>
							<th className="th">Correo</th>
							<th className="th">Telefono</th>
							<th className="th">Placas</th>
							<th className="th">Fecha</th>
							<th className="th">Hora</th>
							<th className="th">Descripción de la falla o servicio</th>
							<th className="th">Confirmado</th>
						</tr>
						{citas.map((appointment) => (
							<tr>
								<th>{appointment.nombre}</th>
								<th>{appointment.correo}</th>
								<th>{appointment.telefono}</th>
								<th>{appointment.placas}</th>
								<th>{appointment.fecha}</th>
								<th>{appointment.hora}</th>
								<th>{appointment.descripcion}</th>
								<th>{appointment.confirm ? <Button variant="secondary" disabled>Confirmada</Button> :<Button variant="success" onClick={() => confirmarCita(appointment)}>Confirmar</Button> }</th>
							</tr>
						))}
					</thead>
					<tbody></tbody>
				</Table>
			</Container>
		</div>
	);
}
export default App;