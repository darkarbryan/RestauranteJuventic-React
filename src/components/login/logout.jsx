
    import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import { NavBar } from "../NavBar/Navbar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from "axios";
 

export const Logout = () => {

  var miStorage = window.localStorage;

   
    if (miStorage.length > 0 ){

      localStorage.removeItem("usu");
    localStorage.removeItem("id");
    localStorage.removeItem("admin");
     
    swal({
        title: "Cerrando sesion",
        text: "Volviendo a inicio",
        type: "info",
        showConfirmButton: false,
        timer: 3500
     }).then(function() {
      location.replace("/inicio"); 
              
});
     }else {
    swal({
        title: "x",
        text: "Volviendo a inicio",
        type: "info",
        showConfirmButton: false,
        timer: 3500
     }).then(function() {
      location.replace("/inicio"); 


     });
  }

  
    return (

       
      <div className="form-usuario">
  
       <NavBar/>
       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    );
  };
  
 
  
