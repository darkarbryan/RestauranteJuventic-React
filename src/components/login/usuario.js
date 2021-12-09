import React, {useState,Fragment} from 'react';
import UpdateEmpleado from './Empleado/updateEmpleado';
import InsertEmpleado from './Empleado/insertarEmpleado';
import GetEmpleado from './Empleado/getEmpleado';
import { NavBar } from "../NavBar/Navbar.js";
import { Email } from "../Contactar/Email.js";
import Registerplatos from './Platos/insertarPlatos.jsx'; 
import GetPlatos from './Platos/getPlatos'; 
import GetServicio from './Servicios/getServicios.jsx'; 
import Reservaadmin from './Reserva/Reservaadmin.jsx'; 
import Reservacliente from './Reserva/Reservacliente.js';
import Reservar from './Reserva/Reservas.jsx';

import InsertarServicios from './Servicios/insertarServicios.jsx'; 
import { Link } from 'react-router-dom';
import axios from "axios";



export const Usuario = () => {
  var miStorage = window.localStorage;
  if ( miStorage.length === 0 ) {
      swal({
        title: "eror!",
        text: "no inicio sesion",
        type: "error",
        showConfirmButton: false,
        timer: 3500
    }).then(function() {
      location.replace("/inicio");  
});
  
  }      
            return (
            
     <>
       <NavBar/>
        <section id="specials" class="specials">
        <div class=" ">
    
          <div class="section-title">
           <h2>Panel Administrativo </h2>
         <p>   Bienvenido  {localStorage.getItem("usu")} <i class="bi bi-heart-fill"></i></p> <br /><br />
    
          
        <br/> <br/> <br/>
          <div class="row">
            <div class="col-lg-3">
              <ul class="nav nav-tabs flex-column">

                <li class="nav-item">

                  <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1"><i class="bi bi-ui-checks-grid"></i> Reservar servicios</a>
                </li>
              <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#tab-2"><i class="bi bi-receipt-cutoff"></i> Comprar platos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#tab-3"> <i class="bi bi-ui-checks"></i> Administrar reservas </a>
                </li>
    
                  
                  
                <li class="nav-item">
                 <Link to="/login">  <i class="bi bi-arrow-left-square"></i> Cerrar Sesion</Link>
                </li>
                 
              </ul>
            </div>
          
            <div class="col-lg-9 mt-4 mt-lg-0">
              <div class="tab-content">
                <div class="tab-pane active show" id="tab-1">
                  <div class="">
                    <div class=" ">
                       
                        
                    <Reservar/>
                 

                   <br /> <div>
                     </div>
                    </div>
                    
                  </div>
                </div>
                <div class="tab-pane" id="tab-2">
                  <div class="row">
                    <div class=" ">
                      
                                     <br /><Registerplatos/> <br />    <br /> <br /> <div>
                     </div>
                    </div>
                    
                  </div>
                </div>
                <div class="tab-pane" id="tab-3">
                  <div class="row">
                    <div class=" ">
                      
                              <Reservacliente/>      
                        <br /> <br /> <div>
                     </div>
                    </div>
                    
                  </div>
                </div>
                 
                <div class="tab-pane" id="tab-5">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                      <h3> Solicitud de reservas</h3>  <br />

                    
                   
                    </div>
                    
                  </div>
                </div>
                      <div class="tab-pane" id="tab-6">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                    <label className= "mt-5 blockquote">Administrar comentarios</label>
                 
                                   </div>
                    <div class="col-lg-4 text-center order-1 order-lg-2">
                     
         
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                     </div>
    
        </div>
      </section></>
     
     
            );
        
        
        
    } 
 