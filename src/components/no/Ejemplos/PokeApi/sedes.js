import React, {useEffect, useState, } from 'react'
import '../../NavBar/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

 

export const sedes = () => {
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });
   
    return (
    
      
       
        
        <div>
        <br /><br /><br /><br /><br />
                <center> <h1 style={{ color: '#ffc56e' }}>  Organizamos tus eventos </h1> 
               
                <p>
                     Tenemos una variedad de servicios contamos con los mejores profesionales en culinario y decoracion. <br />
                     Elige, nosotros nos encargamos del resto <i class="bi bi-heart-fill"></i>
                </p>

            </center>
            < br /> <br />
            
              <div class="row contact-info">
            <nav id="navbar" class="navbar">
          
            
        < td />      <a class="nav-link active" data-bs-toggle="tab">   
        <img
             
             width="40" height="40"
            
      
     src="./images/2.png"
            alt="First slide"
        /> <b>ANIVERSARIO </b></a>
         
          < td />    <a class="nav-link active" data-bs-toggle="tab">    <img
             
             width="40" height="40"
            
      
     src="./images/nina.png"
            alt="First slide"
        />  <b>FIESTAS INFANTILES</b></a>
           
            
              <a class="nav-link active" data-bs-toggle="tab" >   <img
             
             width="40" height="40"
            
      
     src="./images/propuesta.png"
            alt="First slide"
        />  <b> DECLARACION/PROPUESTA </b></a> < td />
           
            
           </nav>
                 
        </div>
        </div>
 
        <div class="container-fluid">

      <div class="section-title">
        <h2>Algunas fotos de <span>Nuestro Restaurante</span></h2>
        <p>Disponemos de multiples sedes a nivel nacional, estamos mas cerca de ti. </p>
      </div>

    <div class="row no-gutters">
 
       
        <div class="col-lg-4 col-md-4">
          <div class="gallery-item">
            <a href="./images/gallery-3.jpg" class="gallery-lightbox">
              <img src="./images/gallery-3.jpg" alt="" class="frame" />
            </a>
                 <center> <p><i class="bi bi-geo-alt-fill"></i> BOGOTA, CLL 44 AV 23 AB</p></center>
          </div>
        </div>
        </div>
        </div>
              
    )
}
