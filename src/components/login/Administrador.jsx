import React, {useState,Fragment} from 'react';
import UpdateEmpleado from './Empleado/updateEmpleado';
import InsertEmpleado from './Empleado/insertarEmpleado';
import GetEmpleado from './Empleado/getEmpleado';
import { NavBar } from "../NavBar/Navbar.js";
import Registerplatos from './Platos/insertarPlatos.jsx'; 
import GetPlatos from './Platos/getPlatos'; 
import GetServicio from './Servicios/getServicios.jsx'; 
import Reservaadmin from './Reserva/Reservaadmin.jsx'; 
import InsertarServicios from './Servicios/insertarServicios.jsx'; 
import { Link } from 'react-router-dom';
import axios from "axios";
export const Admin = () => {
  
    const [estado,updateEstado] = useState("admin");
    console.log(estado);
 
      window.onload = function(){ 
 // Tome la imagen cargada, convierta el resultado del código y muestre el dom de la imagen
 var img_upload=document.getElementById("img_upload");
 var base64_code=document.getElementById("base64_code");
 var img_area=document.getElementById("img_area"); //  Agregar función para comenzar a escuchar el evento
 img_upload.addEventListener('change',readFile,false);}
function readFile(){
var file=this.files[0];
 if(!/image\/\w+/.test(file.type)){ 
 alert("Asegúrese de que el archivo sea de un tipo de imagen"); 
return false; 
 } var reader=new FileReader();
 reader.readAsDataURL(file);
reader.onload=function(){
base64_code.innerHTML = this.result; 
 
 }
 }          

 

            
            return (
            
     <>
       <NavBar/>
        <section id="specials" class="specials">
        <div class=" ">
    
          <div class="section-title">
           <h2>Panel Administrativo </h2>
         <p>   Bienvenido  <i class="bi bi-heart-fill"></i></p> <br /><br />
    
         <Fragment>
         
            <div className="container">
            <div className="row">
            <div className="col-md-8 ">
             
               <div className="form-group ">

                <label className= "mt-5 blockquote"><h2>Empleados   </h2></label>
               
               <button className="btn btn-outline-success ml" onClick={()=>updateEstado("Actualizar")}>Cerrar</button>
              <button className="btn btn-outline-primary ml" onClick={()=>updateEstado("Consultar")}>Ver</button>
     
  <label className= "mt-5 blockquote"><h2>Platos</h2></label>  
      

              <button className="btn btn-outline-success ml" onClick={()=>updateEstado("Actualizar")}>Cerrar</button>
              <button className="btn btn-outline-primary ml" onClick={()=>updateEstado("Consultar-Plato")}>Ver</button>
     
      <label className= "mt-5 blockquote"><h2>Servicios</h2></label>
     
               <button className="btn btn-outline-success ml" onClick={()=>updateEstado("Actualizar")}>Cerrar</button>
              <button className="btn btn-outline-primary ml" onClick={()=>updateEstado("Consultar-ser")}>Ver</button>
       
 
                </div>
            </div> 
          
                </div>
                {
                  
                 estado === "Insertar-Plato"?<Registerplatos/>:
                 estado === "Consultar-Plato"?<GetPlatos/>:
                 estado === "Actualizar"?<UpdateEmpleado/>:
                 estado === "Insertar"?<InsertEmpleado/>:
                 estado === "Consultar"?<GetEmpleado/>:
                 estado === "Insertar-ser"?<InsertarServicios/>:
                 estado === "Consultar-ser"?<GetServicio/>:null

                  
                }
                 </div>
        </Fragment>
        <br/> <br/> <br/>
          <div class="row">
            <div class="col-lg-3">
              <ul class="nav nav-tabs flex-column">
               <input type="file" id="img_upload"/> 
<p>Codigo de imagen</p>
 
     <textarea id="base64_code" className="btn-outline-warning" rows="2" cols="20"></textarea>
   
    
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#tab-1"><i class="bi bi-person-plus-fill"></i>Agregar empleados</a>
                </li>
              <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#tab-2"><i class="bi bi-receipt-cutoff"></i> Agregar platos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active show" data-bs-toggle="tab" href="#tab-3"> <i class="bi bi-ui-checks-grid"></i> Agregar servicios </a>
                </li>
    
                 <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#tab-5"> <i class="bi bi-calendar2-event"></i> Administrar reservas</a>
                </li>
                  <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#tab-6"><i class="bi bi-info-circle"></i> Administrar comentarios</a>
                </li>
                  
                <li class="nav-item">
                 <Link to="/login">  <i class="bi bi-arrow-left-square"></i> Cerrar Sesion</Link>
                </li>
                 
              </ul>
            </div>
          
            <div class="col-lg-9 mt-4 mt-lg-0">
              <div class="tab-content">
                <div class="tab-pane active show" id="tab-1">
                  <div class="row">
                    <div class=" ">
                      <h3>panel empleado</h3>
                        
                 <InsertEmpleado/> 
                 

                   <br /> <div>
                     </div>
                    </div>
                    
                  </div>
                </div>
                <div class="tab-pane" id="tab-2">
                  <div class="row">
                    <div class=" ">
                      <h3>panel platos</h3>
                                     <br /><Registerplatos/> <br />    <br /> <br /> <div>
                     </div>
                    </div>
                    
                  </div>
                </div>
                <div class="tab-pane" id="tab-3">
                  <div class="row">
                    <div class=" ">
                      <h3>panel servicios</h3>
                                    
                      <InsertarServicios/>  <br /> <br /> <div>
                     </div>
                    </div>
                    
                  </div>
                </div>
                 
                <div class="tab-pane" id="tab-5">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                      <h3> Solicitud de reservas</h3>  <br />

                      <Reservaadmin/>
                   
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
 
