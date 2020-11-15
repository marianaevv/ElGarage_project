import React from "react";

import BombasAgua from "./assets/bombasAgua.jpg";
import ABS from "./assets/ABS.jpg";
import CambiosAceite from "./assets/cambiosAceite.jpg";
import Frenos from "./assets/frenos.jpg";
import FugasAceite from "./assets/fugasAceite.jpg";
import SistemaElectrico from "./assets/sistemaElectrico.png";
import SistemaCarga from "./assets/sistemasCarga.jpg";
import FuelInjection from "./assets/fuelInjection.jpg";
import diagnostico from "./assets/diagnosticoPorComp.jpg";
import Suspension from "./assets/suspension.jpg";
import afinacion from "./assets/afinacion.jpg";
import aire from "./assets/aire.jpeg";
import calefaccion from "./assets/calefaccion.jpg";
import fugasrefrigerante from "./assets/fugasrefrigerante.jpg";
import ponchaduras from "./assets/ponchaduras.jpg";
import sistemaenfriamiento from "./assets/sistemaenfriamiento.jpg";
import vibraciones from "./assets/vibraciones.jpg";
import Image from "react-bootstrap/Image";
import checkEngine from "./assets/checkEngine.jpg";
import bombasgasolina from "./assets/bombasgasolina.png";

import "./Servicios.css";

function Servicios() {
  return (
    <body className="bod">
      <h1 class="titleServicios">SERVICIOS</h1>
      <div class="container py-5">   
         <div class="row text-center">
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={BombasAgua} className="imgServicio" roundedCircle />
              <h5 class="mb-0 serv">Bombas de agua</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={Frenos} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Frenos</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={ABS} className="imgServicio" rounded />
              <h5 class="serv">ABS</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={CambiosAceite} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Cambios de Aceite</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={FugasAceite} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Fugas de Aceite</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={SistemaElectrico} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Sistema Electrico</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={SistemaCarga} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Sistema de carga</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={FuelInjection} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Fuel Injection</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={diagnostico} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Diagnóstico por computadora</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={Suspension} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Suspensión</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={checkEngine} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Check Engine</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={afinacion} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Afinación</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={vibraciones} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Vibraciones o Ruidos</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={aire} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Aire Acondicionado</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={calefaccion} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Calefacción</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={sistemaenfriamiento} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Sistema de Enfriamiento</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={fugasrefrigerante} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Fugas de refrigerante</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={ponchaduras} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Ponchaduras</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={bombasgasolina} className="imgServicio" rounded />
              <h5 class="mb-0 serv">Bombas de gasolina</h5>
            </div>
          </div>
        </div>
      </div>
    </body>

  );
}

export default Servicios;
