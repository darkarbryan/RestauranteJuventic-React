import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { NavBar } from "../NavBar/Navbar.js";

export const Login = () => {
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
      }
      UpdateError(false);
    };
  
    return (

       
      
      <div className="form-usuario">

        {error ? (

          
          <p className="alert alert-danger text-center">
            Todos lo campos som obligatorios
          </p>
        ) : null}
  <NavBar />
        <div className="contenedor-form ">
          <h1 className="">Iniciar Sesión</h1>
  
          <form onSubmit={handleSubmit}>
            <div className="campo-form">
              <label className="">Usuario</label>
              <input
                type="text"
                name="Usuario"
                placeholder="Tu Email"
                value={Usuario}
                onChange={handleChangeLogin}
              />
            </div>
  
            <div className="campo-form">
              <label htmlFor="password" className="m-lg-3">
                Password
              </label>
              <input
                type="password"
                name="Password"
                placeholder="Tu Password"
                value={Password}
                onChange={handleChangeLogin}
              />
            </div>
  
            <div className="campo-form">
              <input
                type="submit"
                className="btn btn-success btn-block"
                value="Iniciar Sesión"
              />
            </div>
          </form>
  
          <Link to={"/registro"} className="enlace-cuenta">
            Obtener Cuenta
          </Link>
        </div>
      </div>
    );
  };
  
