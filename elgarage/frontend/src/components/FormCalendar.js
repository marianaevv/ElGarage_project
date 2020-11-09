import React, { useEffect } from 'react';
import DayPicker from 'react-day-picker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'react-day-picker/lib/style.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class FormCalendar extends React.Component {
	constructor(props) {
		super(props);
		this.handleDayClick = this.handleDayClick.bind(this);
		this.state = {
			selectedDay: null,
		};
	}
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	handleDayClick(day, { selected }) {
		this.setState({
			selectedDay: selected ? undefined : day,
		});
	}

	render() {
		const { values, handleChange } = this.props;

		return (
			<div className="d-md-flex h-md-100 leftside align-items-center">
				<div className="col-md-6 p-0 leftside h-md-100">
					<div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
						<div className="logoarea pt-5 pb-5">
							<h1>¿Desea agendar una cita?</h1>
						</div>
					</div>
				</div>
				<div className="col-md-6 p-0 bg-white h-md-100 ">
					<div className=" align-items-center  h-md-100 p-5 justify-content-center">
						<div className="formCalendar">
							<h1 className="mb-0 cotheader">SELECCIONA FECHA</h1>
						<MuiThemeProvider>
							<React.Fragment>
								<div className="Container">
									<div class="form-group row">
										<label for="example-date-input" class="col-2 col-form-label">
											Día
										</label>
										<div class="col-10">
											<input
												class="form-control"
												type="date"
												onChange={handleChange('fecha')}
												defaultValue={values.fecha}
												id="example-date-input"
											/>
										</div>
									</div>
								</div>
								<div className="form-group row">
									<div className="col-sm-12 btnCot">
										<button className="btn btn-primary" onClick={this.continue} type="submit">
											CONTINUAR
										</button>
									</div>
								</div>
							</React.Fragment>
						</MuiThemeProvider>
						</div>
						
					</div>
				</div>
			</div>
		);
	}
}
/*render() {
		const { values, handleChange } = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<Navbar bg="dark" variant="dark" className="text-center">
						<Navbar.Brand href="#home">Enter User Details</Navbar.Brand>
					</Navbar>
					<div className="divCalendar">
						<Calendar  defaultValue={values.fecha} className="calendar" />
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Fecha</Form.Label>
							<Form.Control type="password" defaultValue={values.city} placeholder="Password" />
						</Form.Group>
					</div>

					<RaisedButton label="Continue" primary={true} style={styles.button} onClick={this.continue} />
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}*/

const styles = {
	button: {
		margin: 15,
	},
};

/*import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from 'react-bootstrap/NavBar';
import Form from 'react-bootstrap/Form';
import Calendar from 'react-calendar';
export class FormCalendar extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	/*handleChange = () => (e) => {
        this.setState({ [input]: e.target.value });
        console.log(e.target.value);
	};*/
//LATEST FORM -----------------------------------------------------------------------------------------------
/*import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from 'react-bootstrap/NavBar';

const FormCalendar = ({ nextStep, handleChange, values }) => {
	console.log(values);
	const [date, setDate] = useState(new Date());
	const onChange = (date, slot) => {
		setDate(date);
	};
	/*   const next = (e) =>{
        e.preventDefault();
		this.props.nextStep();
    }*/
/*
	return (
		<MuiThemeProvider>
			<React.Fragment>
				<Navbar bg="dark" variant="dark" className="text-center">
					<Navbar.Brand href="#home">Enter User Details</Navbar.Brand>
				</Navbar>
				<div className="divCalendar">
					<Calendar onChange={onChange} value={date} className="calendar" />
					<div className="form-group col-md-6">
						<label htmlFor="inputPlate">Fecha</label>
						<input
							name="fecha"
							value={date.toLocaleDateString()}
							defaultValue={values.fecha}
							type="text"
							className="form-control"
							id="inputPlate"
							
						/>
					</div>
				</div>
				<RaisedButton label="Continue" primary={true} style={styles.button} onClick={nextStep} />
			</React.Fragment>
		</MuiThemeProvider>
	);
};
const styles = {
	button: {
		margin: 15,
	},
};

export default FormCalendar;*/
//-------------------------------------------------------------------------------------------------------------------------
/*
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export class FormCalendar extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
    };

	render() {
		const { values, handleChange } = this.props;

            return (
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Enter INFO" />
                        <TextField
                        hintText="Enter Your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                        />
                        <br/>
                        <TextField
                        hintText="Enter Your City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                        />
                    <br/>
                    <TextField
                        hintText="Enter Your Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                        />
                        <br/>
    
                        <RaisedButton
                        label="Continue"
                       primary ={true}
                        style={styles.button}
                        onClick={this.continue}
                        />
                    </React.Fragment>
                </MuiThemeProvider>
            );
	}
}



const styles = {
    button:{
        
        margin: 15,
        
    }
}
export default FormCalendar;
¨*/
