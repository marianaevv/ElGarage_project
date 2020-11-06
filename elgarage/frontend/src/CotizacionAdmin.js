import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CotizacionesAdmin.css';
import logo from './assets/Logo.png';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
function App() {
	const [quotes, setQuotes] = useState(null);

	useEffect(() => {
		const fetchQuotes = async () => {
			const { data } = await axios('http://localhost:8000/api/cotizaciones');
			const { quotes, paginas } = data;
			// const quotesChunks = splitQuotes(projects);
			console.log(data);
			setQuotes(quotes);
		};

		fetchQuotes();
	}, []);

	return !quotes ? (
		<Loader />
	) : (
		<div className="App">
			<Container fluid style={{ marginTop: 20 }}>
				<Row>
					<Col md={4}>
					<img src={logo} alt='Red car'className="logoCot"/>
					
					</Col>
					<Col md={{ span: 4, offset: 4 }}>
						<h1 className="display-4 font-weight-bold cotizaciones-dashboard">COTIZACIONES</h1>
					</Col>
				</Row>
				<Row>
					<Col md={6} style={{ marginTop: 50 }}>
						<Form>
							<Row>
								<Col md="auto">
									<h3 className="cotizaciones-dashboard">Buscar</h3>
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
							<th className="thc">Nombre</th>
							<th className="thc">Correo</th>
							<th className="thc">Telefono</th>
							<th className="thc">Placas</th>
							<th className="thc">Marca del Auto</th>
							<th className="thc">Año del Auto</th>
							<th className="thc">Kilometraje</th>
							<th className="thc">Tamaño del motor</th>
							<th className="thc">Servicios</th>
							<th className="thc">Otro</th>
						</tr>
						{quotes.map((quote) => (
							<tr>
								<th>{quote.nombre}</th>
								<th>{quote.correo}</th>
								<th>{quote.telefono}</th>
								<th>{quote.placas}</th>
								<th>{quote.marcaauto}</th>
								<th>{quote.añoauto}</th>
								<th>{quote.kilometraje}</th>
								<th>{quote.tamañomotor}</th>
								<th>{quote.servicio}</th>
								<th>{quote.otro}</th>
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

/*
{quotes.map(quote =><li key={quote.nombre}>{quote.nombre}</li>)}  */
