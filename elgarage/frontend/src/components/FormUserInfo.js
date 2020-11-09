import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Form, Button } from 'react-bootstrap';
export class FormUserInfo extends Component {
	continue = (e) => {
		e.preventDefault();
		//PROCESS FORM
		this.props.nextStep();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};
	render() {
		const { values, handleChange } = this.props;

            return (
                <div className="d-md-flex h-md-100 leftside align-items-center">
			<div className="col-md-6 p-0 leftside h-md-100">
				<div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
					<div className="logoarea pt-5 pb-5">
						<h1>PASO 3</h1>
					</div>
				</div>
			</div>
			<div className="col-md-6 p-0 bg-white h-md-100 ">
				<div className=" align-items-center h-md-100 p-5 justify-content-center">
                <MuiThemeProvider>
                    <React.Fragment>
                    <h1 className="mb-0 cotheader">Ingresa datos de cita</h1>
                    <Form >
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Nombre</Form.Label>
							<Form.Control type="text" name="nombre" onChange={handleChange('nombre')}
                        defaultValue={values.nombre}/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Correo</Form.Label>
							<Form.Control type="text" name="correo" onChange={handleChange('correo')}
                        defaultValue={values.correo}/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Teléfono</Form.Label>
							<Form.Control type="text" name="telefono" onChange={handleChange('telefono')}
                        defaultValue={values.telefono}/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Placas</Form.Label>
							<Form.Control type="text" name="placas" onChange={handleChange('placas')}
                        defaultValue={values.placas}/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Descripción</Form.Label>
							<Form.Control type="text" name="descripcion" onChange={handleChange('descripcion')}
                        defaultValue={values.descripcion}/>
						</Form.Group>
						
					</Form>
{     /*                   <TextField
                        hintText="Nombre Completo"
                        floatingLabelText="Nombre Completo"
                        onChange={handleChange('nombre')}
                        defaultValue={values.nombre}
                        />
                        <br/>
                        <TextField
                        hintText="Correo"
                        floatingLabelText="Correo"
                        onChange={handleChange('correo')}
                        defaultValue={values.correo}
                        />
                    <br/>
                    <TextField
                        hintText="Teléfono"
                        floatingLabelText="Teléfono"
                        onChange={handleChange('telefono')}
                        defaultValue={values.telefono}
                        />
                        <br/>
                        <TextField
                        hintText="Placas"
                        floatingLabelText="Placas"
                        onChange={handleChange('placas')}
                        defaultValue={values.placas}
                        />
                        <br/>
                        <TextField
                        hintText="Descripción de Servicio o Falla"
                        floatingLabelText="Descripción de Servicio o Falla"
                        onChange={handleChange('descripcion')}
                        defaultValue={values.descripcion}
                        />
                        <br/>*/}
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
                </MuiThemeProvider>
                </div>
			</div>
		</div>
            );
	}
}



const styles = {
    button:{
        
        margin: 15,
        
    }
}
export default FormUserInfo;