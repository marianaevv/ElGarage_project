import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Inicio from './Inicio';
import Servicios from './Servicios';
import Citas from './Citas';
import CitasAdmin from './CitasAdmin';
import Cotizacion from './Cotizacion';
import CotizacionAdmin from './CotizacionAdmin';
import Contacto from './Contacto';
import Nosotros from './Nosotros';
import Weather from './weather';
import LoginAdmin from './LoginAdmin'

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <div >
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Inicio}/>
          <Route path="/Servicios" component={Servicios}/>
          <Route path="/Citas" component={Citas}/>
          <Route path="/Cotizacion" component={Cotizacion}/>
          <Route path="/Contacto" component={Contacto}/>
          <Route path="/Nosotros" component={Nosotros}/>

          {/* Admin routes */}
          <Route path="/login" component={LoginAdmin}/>
          <Route path="/admin/citas" component={CitasAdmin}/>
          <Route path="/admin/cotizaciones" component={CotizacionAdmin}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
