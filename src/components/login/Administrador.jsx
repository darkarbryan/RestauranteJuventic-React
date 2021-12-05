import React, {useState,Fragment} from 'react';
import UpdateEmpleado from './Empleado/updateEmpleado';
import InsertEmpleado from './Empleado/insertarEmpleado';
import GetEmpleado from './Empleado/getEmpleado';
import { NavBar } from "../NavBar/Navbar.js";
import Registerplatos from './Platos/insertarPlatos.jsx'; 
import GetPlatos from './Platos/getPlatos'; 

export const Admin = () => {
    const [estado,updateEstado] = useState("");
    console.log(estado);
    return ( 
        <Fragment>
            <NavBar/>
            <div className="container">
            <div className="row">
            <div className="col-md-8 ">
            <label className= "mt-5 blockquote">Empleados</label>
                <div className="form-group ">
                        <button className="btn btn-outline-secondary ml" onClick={()=>updateEstado("Insertar")}>Insertar</button>
                        <button className="btn btn-outline-success ml" onClick={()=>updateEstado("Actualizar")}>Actualizar</button>
                        <button className="btn btn-outline-primary ml" onClick={()=>updateEstado("Consultar")}>Consultar</button>
                </div>
            </div>
            <label className= "mt-5 blockquote">Platos</label>
                <div className="form-group ">
                        <button className="btn btn-outline-secondary ml" onClick={()=>updateEstado("Insertar-Plato")}>Insertar</button>
                        <button className="btn btn-outline-success ml" onClick={()=>updateEstado("Actualizar")}>Actualizar</button>
                        <button className="btn btn-outline-primary ml" onClick={()=>updateEstado("Consultar-Plato")}>Consultar</button>
                </div>
          
                </div>
                {
                 estado === "Actualizar"?<UpdateEmpleado/>:
                 estado === "Insertar"?<InsertEmpleado/>:
                 estado === "Insertar-Plato"?<Registerplatos/>:
                 estado === "Consultar-Plato"?<GetPlatos/>:
                 estado === "Consultar"?<GetEmpleado/>:null
                }
                 </div>
        </Fragment>
    
    
    );
}
 
 