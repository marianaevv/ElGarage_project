/*import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Form, Button } from 'react-bootstrap';
import { List, ListItem } from 'material-ui/List';
export class Confirm extends Component {

	continue = (e) => {
		e.preventDefault();
		//PROCESS FORM
		this.props.nextStep();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	deleteSlot() {
		// Where we're fetching data from
		fetch(`http://localhost:8000/api/deleteSlot/${this.props.values.id}`)
			// We get the API response and receive data in JSON format...
			.then((response) => response.json())
			// ...then we update the users state
			.then((result) => {})
			// Catch any errors we hit and update the app
			.catch((error) => this.setState({ error, isLoading: false }));
	}

	handleSubmit(data) {
		console.log("aqui");
		fetch(`http://localhost:8000/api/citas`,{...data})
		.then(resp => {})
		.catch(err => err.response ? err.response.data.message : err.message);
	}

	render() {
		const {
			values: { dia, hora },
		} = this.props;

		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="CONFIRM" />
					<Form onSubmit={this.handleSubmit()} >

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Nombre</Form.Label>
							<Form.Control type="text" name="nombre" placeholder="Enter email" value={this.props.values.nombre}/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Correo</Form.Label>
							<Form.Control type="text" name="correo" placeholder="Enter email" value={this.props.values.correo}/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Teléfono</Form.Label>
							<Form.Control type="text" name="telefono" placeholder="Enter email" value={this.props.values.telefono}/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Placas</Form.Label>
							<Form.Control type="text" name="placas" placeholder="Enter email" value={this.props.values.placas}/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Día</Form.Label>
							<Form.Control type="text" name="fecha" placeholder="Enter email" value={this.props.values.fecha}/>
						</Form.Group>

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Hora</Form.Label>
							<Form.Control type="text" name="hora" placeholder="Enter email" value={this.props.values.slot}/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Descripción</Form.Label>
							<Form.Control type="text" name="descripcion" placeholder="Enter email" value={this.props.values.descripcion}/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
					<List>
						<ListItem primaryText="Día" secondaryText={this.props.values.fecha} />
						<ListItem primaryText="Hora" secondaryText={this.props.values.slot} />
						<ListItem primaryText="Nombre" secondaryText={this.props.values.nombre} />
						<ListItem primaryText="Correo" secondaryText={this.props.values.correo} />
						<ListItem primaryText="Teléfono" secondaryText={this.props.values.telefono} />
						<ListItem primaryText="Placas" secondaryText={this.props.values.placas} />
						<ListItem primaryText="Descripción" secondaryText={this.props.values.descripcion} />
						<ListItem primaryText="ID" secondaryText={this.props.values.slotID} />
					</List>

					<RaisedButton  label="CONFIRM" primary={true} style={styles.button} />
					<RaisedButton label="Back" primary={false} style={styles.button} onClick={this.back} />
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

const styles = {
	button: {
		margin: 15,
	},
};
export default Confirm;*/

import React, { useReducer, useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Form, Button } from 'react-bootstrap';
import { List, ListItem } from 'material-ui/List';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import URI from '../URI';
import '../citas.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Confirm = (props, {history}) => {
	console.log(props);
	const back = (e)=>{
		e.preventDefault();
		props.prevStep()
	}
		const postAppointment = async (e) => {
		e.preventDefault();
		let respError = await _postAppointmentHandler();
		if (respError) {
			console.log("NOTCOOL",respError);
		
		} else {
			console.log("cool")
			return props.history.push('/Success');
			//props.history.push('/', {sucess: "Registro éxitoso"});
		}
	};
	
	const _postAppointmentHandler = (_) => {
			let {nombre,correo,telefono,placas,fecha,hora,descripcion,} = props.values;
			console.log(nombre,correo,telefono,placas,fecha,hora,descripcion);
			return axios
				.post(`http://localhost:8000/api/citas`, {nombre,correo,telefono,placas,fecha,hora,descripcion})
				.then((response) => {
					return axios.delete(`http://localhost:8000/api/deleteSlot/${props.values.slotID}`)
			})
				.catch((error) => {

				});
	};

	return (
		<div className="d-md-flex h-md-100 leftside align-items-center">
		<div className="col-md-6 p-0 leftside h-md-100">
			<div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
				<div className="logoarea pt-5 pb-5">
				<h1 className="mb-0 cotheader">CONFIRMAR DATOS</h1>
				</div>
			</div>
		</div>
		<div className="col-md-6 p-0 bg-white h-md-100 ">
			<div className=" align-items-center h-md-100 p-5 justify-content-center">
		<MuiThemeProvider>
				<React.Fragment>
					<Form >
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Nombre</Form.Label>
							<Form.Control required type="text" name="nombre" value={props.values.nombre}/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Correo</Form.Label>
							<Form.Control type="text" name="correo" value={props.values.correo}/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Teléfono</Form.Label>
							<Form.Control type="text" name="telefono" value={props.values.telefono}/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Placas</Form.Label>
							<Form.Control type="text" name="placas" value={props.values.placas}/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Día</Form.Label>
							<Form.Control type="text" name="fecha" value={props.values.fecha}/>
						</Form.Group>

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Hora</Form.Label>
							<Form.Control type="text" name="hora" value={props.values.hora}/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Descripción</Form.Label>
							<Form.Control type="text" name="descripcion" value={props.values.descripcion}/>
						</Form.Group>
						<div className="form-group row">
								<div className="col-sm-12 btnCot">
								<Button className="btnCitas" variant="primary" onClick={back}  type="submit">
							Regresar
						</Button>
							<Button className="btnCitas" variant="primary" onClick={postAppointment} type="submit">
							Submit
						</Button>
								</div>
							</div>
						
					</Form>
				{/*	<List>
						<ListItem primaryText="Día" secondaryText={props.values.fecha} />
						<ListItem primaryText="Hora" secondaryText={props.values.hora} />
						<ListItem primaryText="Nombre" secondaryText={props.values.nombre} />
						<ListItem primaryText="Correo" secondaryText={props.values.correo} />
						<ListItem primaryText="Teléfono" secondaryText={props.values.telefono} />
						<ListItem primaryText="Placas" secondaryText={props.values.placas} />
						<ListItem primaryText="Descripción" secondaryText={props.values.descripcion} />
						<ListItem primaryText="ID" secondaryText={props.values.slotID} />
				</List>*/}
					</React.Fragment>
			</MuiThemeProvider>
			</div>
			</div>
		</div>
	);
};
const styles = {
	button: {
		margin: 15,
	},
};
export default Confirm;