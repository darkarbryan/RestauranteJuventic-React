import React, {useEffect, useState, } from 'react'
import '../NavBar/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

 

export const Info = () => {

   

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
    )
}
