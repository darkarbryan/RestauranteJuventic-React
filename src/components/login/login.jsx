import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import { NavBar } from "../NavBar/Navbar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from "axios";
 

export const Login = () => {
    
  var miStorage = window.localStorage;

    
  const [response,updateresponse]=useState([]);
  const comprobarusu = async()=>{
    if (miStorage.length > 0 ){
      location.replace("/menu");
    }
  }
  const ConsultarApi = async()=>{
    const url =`http://lacasita.somee.com/Api/Cliente`;
    const Listuser = await axios.get(url);
    updateresponse(Listuser.data);
    response.map(e=>(console.log(e.usuario + ' ' + e.pass )));
     
  
  } 
  useEffect(() => {
    comprobarusu();
    ConsultarApi();
}, []);
     

    const [error, UpdateError] = useState(false);
    const [Sesion, UpdateSesion] = useState({
      Usuario: "",
      Password: "",
    });
    const { Usuario, Password } = Sesion;
    const handleChangeLogin = (e) => {

      
      UpdateSesion({
        ...Sesion,
        [e.target.name]: e.target.value,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
     
  
      // Validar que no haya campos vacios
      if (Usuario.trim() === "" || Password.trim() === "") {
        UpdateError(true);
        return;
      }else{
               response.map(e=>{ if (e.usuario==Usuario && e.pass==Password){
               
              localStorage.setItem("usu", e.usuario);
              localStorage.setItem("id", e.id);
              location.replace("/inicio");
               }}
               );
      }
      console.log(localStorage.getItem("usu"));
      console.log(localStorage.getItem("id"));
      
      
      if (Usuario.trim() === "admin" || Password.trim() === "admin") {
         
         location.replace("/administrador");
      }
      UpdateError(false);
    };
 
  


      

    
  
    return (

       
      
      <div className="form-usuario">

        {error ? (

          
          <p className="alert alert-danger text-center">
            Todos lo campos son obligatorios
          </p>
        ) : null}
  <NavBar />

 
  <section id="specials" class="specials">
        <div class=" ">

          <div class="section-title">
            <h2> <span>Login Administrativo</span></h2>
             
                  
                           
                  Sistema de control, solo personas autorizadas! <br/> <b>Sistema de acceso en dos pasos</b>  
                  <br /> <br /> <br /> <br />  
            <div class="row">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                <li class="nav-item">
              <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1"> Login </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-2"> Administrar </a>
            </li>

                </ul>
              </div>

              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                      <div class="col-lg-8">
                       
               <br />
            
               <form onSubmit={handleSubmit}>
            <div className="campo-form">
              
              <input
                type="text"
                name="Usuario"
                placeholder="Tu Usuario"
                value={Usuario}
                onChange={handleChangeLogin}
              />
            </div>
   <br/>
            <div className="campo-form">
              
              <input
                type="password"
                name="Password"
                placeholder="Tu Password"
                value={Password}
                onChange={handleChangeLogin}
              />
            </div>
            <br /> 
            <div className="campo-form">
              <input
                type="submit"
                className="btn btn-outline-success btn-block"
                value="Iniciar Sesión"
              />           <Link to="/register"  className="btn btn-outline-danger">Registrar</Link>

            </div>

          </form>

 
				
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                  
                </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">


                       </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-2">
                    <div class="row">
                      <div class="col-lg-8">

                        
                      <form onSubmit={handleSubmit}>
            <div className="campo-form">
             
              <input
                type="text"
                name="Usuario"
                placeholder="Tu Usuario"
                value={Usuario}
                onChange={handleChangeLogin}
              />
            </div>
  <br/>
            <div className="campo-form">
              
              <input
                type="password"
                name="Password"
                placeholder="Tu Password"
                value={Password}
                onChange={handleChangeLogin}
              />
            </div>
            <br /> 
            <div className="campo-form">
              <input
                type="submit"
                className="btn btn-outline-success btn-block"
                value="Iniciar Sesión"
              />
            </div>
          </form>
             
                        </div> </div> </div> </div> </div> 
                         </div> </div> </div> 
                      
      </section> 
         
   
        
      </div>
    );
  };
  
 
  
