import React from 'react';
import logo from './Paz.png';
import {Link}from 'react-router-dom';
import './styles.css';
import boton from './plus.png';
import Check from './comprobado.png';

class Soat extends React.Component{
  render() {
    function confirmExit() {
      var respuesta = alert("Acabas de salir de Physco");
    }
    return (
      <div className="color">
  <div className="container">
     <div className="bg-light text-center">
       <h2 class="float-center">PHYSCO</h2>
       <Link to="/" class="btn btn-outline-dark float-right" onClick={confirmExit}>
       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box-arrow-in-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
  <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>

    </svg>
      Salir
       </Link>
        
       </div>
       <br/>
       <br/>
       <Link to="/registrovehiculo" class="btn float-right btn-lg">
        <img src= {boton} width="40px" height="40px"/> 
       </Link>

      <button class="circulo text-center display-3">CLICK</button>
      <br/>
      <div class="text-center">
   
          <br />
          <div class ="text-center">
            <p>El soat oscila entre $174.150 y $545.550 para Motos</p>
            <p>El soat oscila entre $320.850 y $540.750 para Carros</p>
            <p>El soat oscila entre $397.200 y $747.000 para Taxis</p>
          </div>
        <br/>
        <br/>
        <br/>
        <div className = "text-center">
        <Link to="/Home" class ="btn btn-dark btn-lg">Inicio</Link>

        </div>
      </div>
       </div>
       </div>
    )
  }
}
export default Soat;
