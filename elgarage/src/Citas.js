import React, { Component } from "react";
import "./Cotizacion.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Citas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      showRegister: false,
      value: "hide",
    };
  }
  

  render() {
    return (
      <div class="d-md-flex h-md-100 align-items-center">
        <div class="col-md-6 p-0 bg-dark h-md-100">
          <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
            <div class="logoarea pt-5 pb-5">
           <h1>CITAS</h1> 
            </div>
          </div>
        </div>

        <div class="col-md-6 p-0 bg-white h-md-100 ">
          <div class=" align-items-center h-md-100 p-5 justify-content-center">
          <h1 class="mb-0 cotheader">¿Necesita hacer una cita?</h1>
            <form>
            <div class="form-group">
              <label for="inputAddress">Nombre Completo</label>
              <input type="text" class="form-control" id="inputAddress"/>
            </div>
            <div class="form-group">
              <label for="inputAddress">Correo Electrónico</label>
              <input type="text" class="form-control" id="inputAddress"/>
            </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Teléfono</label>
                  <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Placas</label>
                  <input type="password" class="form-control" id="inputPassword4"/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Fecha</label>
                  <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Hora</label>
                  <input type="password" class="form-control" id="inputPassword4"/>
                </div>
              </div>
              <div class="form-group">
    <label for="exampleFormControlTextarea1">Descripción de Servicio o Falla</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
              <div class="form-group row">
    <div class="col-sm-12 btnCot">
      <button type="submit" class="btn btn-primary">Agendar cita</button>
    </div>
  </div>
            </form>
           </div>
        </div>
   </div>
    );
  }
}
export default Citas;
