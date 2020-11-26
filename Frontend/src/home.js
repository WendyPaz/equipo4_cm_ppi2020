import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import boton from "./plus.png";
export default class Home extends React.Component {
  render() {
    function confirmExit() {
     alert("Acabas de salir de Physco");
    }
    
    return(
      <div className="color">
       <div className="container">
          <div className="bg-light text-center">
            <h2 class="float-center">PHYSCO</h2>
            <Link to="" 
            class="btn btn-outline-dark float-right"
              onClick={confirmExit}>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-box-arrow-in-left"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                />
              </svg>
              Salir
         </Link>
          </div>
          <h3> Mi placa: ABC123</h3>
          <br />
          <Link to="/registroVehiculo" class="btn float-right btn-lg">
            <img src={boton} width="40px" height="40px" />
          </Link>
          <h6> La medida de pico y placa seguirá siendo de 7:00 a 8:30 de la mañana y de 5:30 de la tarde a 7:00 de la noche.</h6>

          <ul>
          <li>Lunes: vehículos de placa terminada en: 8-9-0-1</li>
 

          <li>Martes: vehículos de placa terminada en: 2-3-4-5</li>
  
 
          <li>Miércoles: vehículos de placa terminada en: 6-7-8-9</li>
  
 
          <li>Jueves: vehículos de placa terminada en: 0-1-2-3</li>
  
 
           <li>Viernes: vehículos de placa terminada en: 4-5-6-7</li>
          </ul>
          <p class="text-center font-weight-bold">
            ¡Recuerda, los días que tengas pico y placa puedes acceder a los
            sistemas de transporte limpio como el Metro o Encicla!
          </p>
          <br />
          <br />
          <br />
          <div class="clearfix">
            <Link to="/MisVehiculos" class="btn btn-dark btn-lg float-left">
              Mis Vehículos
            </Link>
            <Link to="/MiSoat" class="btn btn-dark btn-lg float-right">
              Mi soat
            </Link>
          </div>
        </div>
      </div>
    );
    }
    }
