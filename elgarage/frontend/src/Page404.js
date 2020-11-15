import React from 'react';

import './Page404.css'
import image from './assets/carros404.png'
const Page404 = () => (
    <div id="main">
    	<div class="fof">
                <img src={image}/>
                <br></br>
        		<h1>Error 404</h1>
                <h2>Regresa a la pagina principal</h2>
                <h2><a href="/">Inicio</a></h2>
    	</div>
</div>
);


export default Page404;