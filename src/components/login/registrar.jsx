import React,{useState} from 'react';
import { NavBar } from "../NavBar/Navbar.js";
import axios from 'axios';
import { Link } from "react-router-dom";

export const Register = () => {

  const [cliente,updateCliente] = useState({
     
    nombre: "",
    apellido: "",
     
    user: "",
    pass:"",
});
const [error, UpdateError] = useState(false);
      const {
        
        nombre,
        apellido,
       
        user,
        pass,
        } = cliente;
  const handleChangeCliente = (e) => {
          updateCliente({
            ...cliente,
            [e.target.name]: e.target.value,
          });
        };

  const registrarCliente = async ()=>{

    const url = `http://lacasita.somee.com/Api/Cliente`;
    axios.post(url,cliente).then(res => {
      console.log(res.data)
    })
    .catch(error => {
      console.log(error.message)
    })
  }
  const SubmitForm = (e) => {
    e.preventDefault();
    if (
       
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      user.trim() === "" ||
      pass.trim()===""
    ) {
        UpdateError(true);
      return;
    }
    UpdateError(false);
    //Registramos cliente
    registrarCliente();
    updateCliente({
       
      nombre: "",
      apellido: "",
      user: "",
      pass: "",
      
    });
    swal({
        title: "Perfecto!",
        text: "Realizado el resgistro",
        type: "success",
        showConfirmButton: false,
        timer: 3500
    }, function() {
             window.location = "/";
});
    
  }; 
  return (
    <div>
    {error ? (
   <p className="alert alert-danger text-center">
     Todos lo campos son obligatorios
   </p>
 ) : null}
 <NavBar/>
 <br/><br/>
   <div className="container getuser mb-5">
     <div className="row">
       <form
         className="col card text-dark bg-transparent mb-5 pt-5 pb-2"
         onSubmit={SubmitForm}
       >
            
         <fieldset>
           Registrarte  
           <div className="row">
           
             <div className="col-md-4">
               <div className="form-group">
                 <label className="m-4">Nombre</label>
                 <input
                   type="text"
                   className="form-control"
                   name="nombre"
                   placeholder="Nombre"
                   onChange={handleChangeCliente}
                   value={nombre}
                 />
               </div>
             </div>
             <div className="col-md-4">
             <div className="form-group">
               <label className="m-4">Apellido</label>
               <input
                 type="text"
                 className="form-control"
                 name="apellido"
                 placeholder="Apellido"
                 onChange={handleChangeCliente}
                 value={apellido}
               />
             </div>
           </div>
           <div className="col-md-4">
               <div className="form-group">
                 <label className="m-4">Usuario</label>
                 <input
                   type="text"
                   className="form-control"
                   name="user"
                   placeholder="Usuario"
                   onChange={handleChangeCliente}
                   value={user}
                 />
               </div>
               </div>
               <div className="col-md-4">
               <div className="form-group">
                 <label className="m-4">Password</label>
                 <input
                   type="password"
                   className="form-control"
                   name="pass"
                   placeholder="Contraseña"
                   onChange={handleChangeCliente}
                   value={pass}
                 />
               </div>
               </div>
              
                </div>
           <button type="submit" className=" btn  btn-outline-success m-4">
             Registrar
           </button>
           <Link to={"/Login"} className="btn btn-outline-danger">
                Volver
              </Link>
         </fieldset>
       </form>
     </div>
     </div>
   </div>
  );
};

 
