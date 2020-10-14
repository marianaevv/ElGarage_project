import React, { Component } from "react";

import "./Cotizacion.css";

class Cotizacion extends Component {
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
           <h1>Cotización</h1>
            </div>
          </div>
        </div>

        <div class="col-md-6 p-0 bg-white h-md-100 ">
          <div class=" align-items-center h-md-100 p-5 justify-content-center">
          <h1 class="mb-0 cotheader">¿Necesita una cotización?</h1>
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
                  <label for="inputEmail4">Marca del auto</label>
                  <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Año del auto</label>
                  <input type="password" class="form-control" id="inputPassword4"/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Kilometraje</label>
                  <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Tamaño del motor</label>
                  <input type="password" class="form-control" id="inputPassword4"/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputState">Servicio</label>
                <select id="inputState" class="form-control">
                <option selected>Escoge...</option>
                <option>ABS</option>
                <option>Bombas de agua</option>
                <option>Diagnóstico por computadora</option>
                <option>Frenos</option>
                <option>Cambios de aceite</option>
                <option>Fuel Injection</option>
                <option>Check engine</option>
                <option>Afinación</option>
                <option>Sistema Eléctrico</option>
                <option>Vibraciones o ruidos</option>
                <option>Aire acondicionado</option>
                <option>Calefacción</option>
                <option>Sistema de carga</option>
                <option>Sistema de enfriamiento</option>
                <option>Suspensión</option>
                <option>Fugas de aceite</option>
                <option>Fugas de refrigerante</option>
                <option>Ponchaduras</option>
                <option>Bombas de gasolina</option>
                </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Otro</label>
                  <input type="password" class="form-control" id="inputPassword4"/>
                </div>
              </div>
              <div class="form-group row">
    <div class="col-sm-12 btnCot">
      <button type="submit" class="btn btn-primary">Enviar Cotización</button>
    </div>
  </div>
            </form>
           </div>
        </div>
   </div>
    );
  }
}
{/* <div class="form-group col-md-6">
                      <select
                        class="form-control inputRegistro"
                        id="inputGenero"
                        required
                      >
                        <option>Género</option>
                        <option>Femenino</option>
                        <option>Masculino</option>
                        <option>Otro</option>
                      </select>{" "}
                    </div> */}
export default Cotizacion;
