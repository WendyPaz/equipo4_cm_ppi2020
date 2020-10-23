import React from 'react';
import './styles.css';
import Eliminar from './bote-de-basura.png';
import Editar from './editar.png'
import { Link } from 'react-router-dom';



class Misv extends React.Component {
  render() {
     function confirmDelete() {
        var respuesta = confirm("¿Estás seguro de que quieres eliminar éste Vehículo?");

        if (respuesta == true) {
          return true;
        }
        else{
          return false;
        }
      }


  return (
    <div className="bg-primary">
    <div className="container">
       <div className="bg-light text-center">
         <h2 class="float-center">PHYSCO</h2>
         </div>
         <br/>
         <h3 class="text-center">Mis Vehículos</h3>
         <br/>
         <br/>
         <div class="row">
         <Link to="/Home" class="btn btn-dark d-block">ABC123</Link> <button  class="btn float-right btn-lg" onClick={confirmDelete}>
        <img src= {Eliminar} width="35px" height="30px"/> 
       </button> 
</div>
         <br/>
         <div class="row">
         <Link to="/Home" class="btn btn-dark d-block">DEF156</Link> <button  class="btn float-right btn-lg" onClick={confirmDelete}>
        <img src= {Eliminar} width="35px" height="30px"/> 
       </button> 
</div>
         <br/>
         <div class="row">
         <Link to="/Home" class="btn btn-dark d-block">KDX361</Link> <button  class="btn float-right btn-lg" onClick={confirmDelete}>
        <img src= {Eliminar} width="35px" height="30px"/> 
       </button>
</div>
<br/>

    <br/>
<div className = "text-center">
        <Link to="/Home" class="btn btn-dark btn-lg">Inicio</Link>

        </div>
  </div>
</div>
  )
}
}
export default Misv;