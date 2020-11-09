import React, { Component } from 'react';
import FormCalendar from './components/FormCalendar';
import FormSlots from './components/FormSlots';
import Confirm from './components/Confirm';
import Sucess from './components/Sucess';
import './citas.css';
import FormUserInfo from './components/FormUserInfo';

export class Citas extends Component {
	constructor() {
		super();
this.state = {
		step: 1,
		fecha: null,
		slotID: '',
		hora: '',
		nombre: '',
		correo:'',
		telefono: '',
		placas: '',
		descripcion: '',
	};

	this.selectedTime = this.selectedTime.bind(this);
	}
	

	//Process to next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1,
		});
	};

	//Go back to previous to next step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1,
		});
	};

	//Handle fields change
	handleChange = (input) => (e) => {
		this.setState({ [input]: e.target.value });
	};
	selectedTime(i) {
		this.setState({ hora: i.hora, slotID:i.id})
	
	  }

	render() {
		const { step } = this.state;
		const { fecha, hora, slotID, nombre, correo, telefono, placas, descripcion } = this.state;
		const values = { fecha, hora,slotID, nombre, correo, telefono, placas, descripcion };
	
		switch (step) {
			case 1:
				return <FormCalendar nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
			case 2:
				return (
					<FormSlots selectedTime={this.selectedTime} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values}/>
				);
			case 3:
				return <FormUserInfo nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />;
			case 4:
				return <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} />;
			case 5:
				return <Sucess/>
		}
	}
};
export default Citas;

/*import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import moment from 'moment';
import Calendar from 'react-calendar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Loader from './components/Loader';
import URI from './URI';
import './Cotizacion.css';

const Citas = ({ history }) => {
	const [date, setDate] = useState(new Date());
	const [slots, setSlot] = useState(null);
	const { register, errors, getValues, handleSubmit } = useForm({
		defaultValues: {
			nombre: '',
			correo: '',
			telefono: '',
			placas: '',
			fecha: '',
			hora: '',
			descripcion: '',
		},
	});



	const onSubmit = (data) => {
		console.log(data);
		return axios
			.post(`${URI.base}${URI.routes.postApppointment}`, { ...data })
			.then((resp) => {
				toast.warning('Cita agendada éxitosamente', {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
				});
				console.log(resp);
				//history.push('/');
			})
			.catch((err) => (err.response ? err.response.data.message : err.message));
	};

	useEffect(() => {
		const fetchSlots = async () => {
			const { data } = await axios.get(`http://localhost:8000/api/slotsPorDia/${date}`);
			const { slots, paginas } = data;
			console.log(slots);
			// const quotesChunks = splitQuotes(projects);
			setSlot(slots);
		};

		fetchSlots();
	}, []);

	const onChange = (date, slot) => {
		setDate(date);
		//setSlot(slot);
	};
	const onError = (errors) => console.error(errors);

	return !slots ? (
		<Loader/>
		):(
		<div className="d-md-flex h-md-100 align-items-center">
			<div className="col-md-6 p-0 leftside h-md-100">
				<div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
					<div className="logoarea pt-5 pb-5">
						<h1>Seleccionar fecha</h1>
						<div className="divCalendar">
							<Calendar onChange={onChange} value={date} className="calendar" />
						</div>
						{slots.map((slot) => (
							<li 
							key={slot} 
						/*onClick=/*{this.selectedTime.bind(this, el)}>*/
/*		<a href="#" value=""> {slot.hora}</a>
						  </li>
						))}
					</div>
				</div>
			</div>

			<div className="col-md-6 p-0 bg-white h-md-100 ">
				<div className=" align-items-center h-md-100 p-5 justify-content-center">
					<ToastContainer draggable={false} autoClose={4000} />

					<h1 className="mb-0 cotheader">¿Necesita hacer una cita?</h1>
					<form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
						<div className="form-group">
							<label htmlFor="inputName">Nombre Completo</label>
							<input
								name="nombre"
								ref={register({ required: 'Esto es obligatorio' })}
								className="form-control"
								id="inputName"
							/>
							<ErrorMessage
								errors={errors}
								name="nombre"
								render={({ message }) => <p className="text-danger">{message}</p>}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="inputEmail">Correo Electrónico</label>
							<input
								name="correo"
								ref={register({
									required: 'Esto es obligatorio',
									pattern: {
										value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
										message: 'Correo inválido',
									},
								})}
								type="email"
								className="form-control"
								id="inputEmail"
							/>
							<ErrorMessage
								errors={errors}
								name="correo"
								render={({ message }) => <p className="text-danger">{message}</p>}
							/>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputPhone">Teléfono</label>
								<input
									name="telefono"
									ref={register({
										required: 'Esto es obligatorio',
										pattern: { value: /[0-9]{10,}/, message: 'Numero inválido' },
									})}
									type="text"
									className="form-control"
									id="inputPhone"
								/>
								<ErrorMessage
									errors={errors}
									name="telefono"
									render={({ message }) => <p className="text-danger">{message}</p>}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPlate">Placas</label>
								<input
									name="placas"
									ref={register({ required: 'Esto es obligatorio' })}
									type="text"
									className="form-control"
									id="inputPlate"
								/>
								<ErrorMessage
									errors={errors}
									name="placas"
									render={({ message }) => <p className="text-danger">{message}</p>}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputPlate">Fecha</label>
								<input
									name="fecha"
									value={date.toLocaleDateString}
									ref={register({ required: 'Esto es obligatorio' })}
									type="text"
									className="form-control"
									id="inputPlate"
									disabled
								/>

								<ErrorMessage
									errors={errors}
									name="fecha"
									render={({ message }) => <p className="text-danger">{message}</p>}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputTime">Hora</label>
								<input
									name="hora"
									value=""
									ref={register({ required: 'Esto es obligatorio' })}
									type="text"
									className="form-control"
									id="inputPlate"
									disabled
								/>
								<ErrorMessage
									errors={errors}
									name="hora"
									render={({ message }) => <p className="text-danger">{message}</p>}
								/>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputDescription">Descripción de Servicio o Falla</label>
							<textarea
								name="descripcion"
								ref={register({ required: 'Esto es obligatorio' })}
								className="form-control"
								id="inputDescription"
								rows="3"
							></textarea>
							<ErrorMessage
								errors={errors}
								name="descripcion"
								render={({ message }) => <p className="text-danger">{message}</p>}
							/>
						</div>
						<div className="form-group row">
							<div className="col-sm-12 btnCot">
								<button className="btn btn-primary" type="submit">
									Agendar cita
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Citas;*/

/*import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { render } from 'react-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ServicesData from './ServicesData.json';
import './citas.css';

const Citas = ({ history }) => {
	const [date, setDate] = useState(new Date());

	const onChange = (date) => {
		setDate(date);
	};

	return (
		<div className="FormCitas">
			<Form>
				<Row className="container justify-content-md-center">
					<Col sm={6}>
						<div className="form-group">
							<label htmlFor="inputName">Nombre Completo</label>
							<input name="nombre" className="form-control" id="inputName" />
						</div>
						<div className="form-group">
							<label htmlFor="inputEmail">Correo Electrónico</label>
							<input name="correo" type="email" className="form-control" id="inputEmail" />
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputPhone">Teléfono</label>
								<input name="telefono" type="text" className="form-control" id="inputPhone" />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPlate">Placas</label>
								<input name="placas" type="text" className="form-control" id="inputPlate" />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputDescription">Descripción de Servicio o Falla</label>
							<textarea
								name="descripcion"
								className="form-control"
								id="inputDescription"
								rows="3"
							></textarea>
						</div>
						<div className="form-group">
							<label htmlFor="inputEmail">Selecciona Fecha</label>
							<input name="correo" type="email" placeholder={date} className="form-control" id="inputEmail" />
						</div>
						<div className="form-group">
							<label htmlFor="inputEmail">Selecciona Horario</label>
							<input name="correo" type="email" className="form-control" id="inputEmail" />
						</div>
					</Col>
					<Col sm={6}>
						<div className="divCalendar">
						<Calendar onChange={onChange} value={date} className="calendar" />
							
						</div>
						
					</Col>
				</Row>
			</Form>
		</div>
	);
};*/