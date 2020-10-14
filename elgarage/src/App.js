import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Inicio from './Inicio';
import Servicios from './Servicios';
import Citas from './Citas';
import Cotizacion from './Cotizacion';
import Contacto from './Contacto';
import Nosotros from './Nosotros';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Inicio}/>
        <Route path="/servicios" component={Servicios}/>
        <Route path="/citas" component={Citas}/>
        <Route path="/cotizacion" component={Cotizacion}/>
        <Route path="/contacto" component={Contacto}/>
        <Route path="/nosotros" component={Nosotros}/>
      </Switch>
    </Router>
  );
}

export default App;
