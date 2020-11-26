import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
class Rsoat extends React.Component {
  render() {
    function confirmExit() {
      alert("Acabas de Salir de Physco");
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
       
      
      <h4 class="text-center">Registra un Vehículo nuevo!</h4>
     <form>
     <div class="form-group">
    <label for="exampleFormControlSelect1">Tipo de Vehículo</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Carro</option>
      <option>Moto</option>
      <option>Taxi</option>
    </select>
  </div>

  <div class="form-group">
  <label for="formGroupExampleInput2">Placa del Vehículo</label>
    <input type="text" class="form-control text-uppercase" id="formGroupExampleInput2" required/>
  </div>
  <div class="form-group">
  <label for="formGroupExampleInput2">Fecha de Caducidad</label>
    <input type="date" class="form-control" id="formGroupExampleInput2" required/>
  </div>
  <div className = "text-center">
        <Link to="Home" class="btn btn-dark btn-lg">Registrar</Link>

        </div>
        </form> 
     
      

  </div>
  </div>

    );
  }
}
export default Rsoat;
