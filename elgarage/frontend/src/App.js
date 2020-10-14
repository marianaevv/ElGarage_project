import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Inicio from './Inicio';
import Servicios from './Servicios';
import Citas from './Citas';
import Cotizacion from './Cotizacion';
import Contacto from './Contacto';
import Nosotros from './Nosotros';
import Weather from './weather';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
     </Switch>
     
    </div>
    </Router>
  );
}

export default App;
