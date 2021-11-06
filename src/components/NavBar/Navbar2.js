import React from 'react'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
 
import { Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import './NavBar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { RegisterPage } from '../../administrar/RegisterPage';

  

export const NavBar2 = () => {
    return (  
   
                <header id="header" class="  d-flex align-items-center header-transparent">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

 <img
            src="./images/icon.png"
            width="35"
            height="40"
            className="d-inline-block align-top"
            alt="logo"
          /> 
      <div class="logo me-auto">
        <h1> La Casita</h1> 
        
        <div  style={{ color: '#ffc56e' }} class="bi bi-clock ms-4 d-none d-lg-flex align-items-center" ><span  style={{ color: '#ffc56e' }}>Atención 24 horas</span></div>
      </div>
       
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
        
              <li><a class="nav-link scrollto active bi bi-house" href="index.html">Inicio</a></li>
              <li>
        
                    </li>
              <li><a class="nav-link scrollto bi bi-person-circle" href="informacion.html">¿Quienes somos?</a></li> 
                 <li>
       
          </li>
 
              <li><a class="nav-link scrollto  bi bi-ui-checks-grid" href="">Servicios</a></li>
              <li><a class="nav-link scrolltobi bi-telephone-plus" href="/login">Contactanos</a></li>
              <li><a class="nav-link scrollto bi bi-chat-dots-fill" href="/register">Testimonios</a></li> 
              
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>  
    </div> 
 
   </header> 
   
    )
}



