import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Loader from '../components/Loader';
import { Form, Button } from 'react-bootstrap';
import '../citas.css';
class FormSlots extends React.Component {
	state = {
		isLoading: true,
		avSlots: [],
		error: null,
	};
	continue = (e) => {
		e.preventDefault();
		//PROCESS FORM
		this.props.nextStep();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};
	fetchSlots() {
		// Where we're fetching data from
		fetch(`http://localhost:8000/api/slotsPorDia/${this.props.values.fecha}`)
			// We get the API response and receive data in JSON format...
			.then((response) => response.json())
			// ...then we update the users state
			.then((data) =>
				this.setState({
					avSlots: data.slots,
					isLoading: false,
				})
			)
			// Catch any errors we hit and update the app
			.catch((error) => this.setState({ error, isLoading: false }));
	}
	componentDidMount() {
		this.fetchSlots();
	}
	selectedTime(i) {
		//const slotSelected = i.hora;
		this.props.selectedTime(i);
	}

	render() {
		const { values, handleChange } = this.props;
		const { isLoading, avSlots, error } = this.state;
		// console.log(this.props.slot)
		return (
			<div className="d-md-flex h-md-100 leftside align-items-center">
				<div className="col-md-6 p-0 leftside h-md-100">
					<div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
						<div className="logoarea pt-5 pb-5">
							<h1>PASO 2</h1>
						</div>
					</div>
				</div>
				<div className="col-md-6 p-0 bg-white h-md-100 ">
					<div className=" align-items-center h-md-100 p-5 justify-content-center">
						<React.Fragment>
							<h1 className="mb-0 cotheader">SELECCIONA HORARIO</h1>
							{error ? <p>{error.message}</p> : null}
							{!isLoading ? (
								avSlots.map((slot) => {
									const { id, dia, hora } = slot;
									return (
										<div key={id}>
											<a
												href="#"
                        className="slotLink"
                       	onClick={this.selectedTime.bind(this, slot)}
											>
												<li className="slotList"> {hora}</li>{' '}
											</a>
											<hr />
										</div>
									);
								})
							) : (
								<h3>Loading...</h3>
							)}
							<Form.Group controlId="formBasicEmail">
								<Form.Label className="labelSelectedSlot">HORARIO SELECCIONADO</Form.Label>
								<Form.Control
									type="text"
                  name="hora"
									onChange={handleChange('hora')}
									defaultValue={values.hora}
									disabled
								/>
							</Form.Group>
							<div className="form-group row">
								<div className="col-sm-12 btnCot">
									<button className="btn btn-primary btnCitas" onClick={this.back} type="submit">
										Regresar
									</button>
									<button className="btn btn-primary btnCitas" onClick={this.continue} type="submit">
										Continuar
									</button>
								</div>
							</div>
						</React.Fragment>
					</div>
				</div>
			</div>
		);
	}
}

const styles = {
	button: {
		margin: 15,
	},
};
export default FormSlots;
