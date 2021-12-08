import React, {useEffect, useState, } from 'react'
import '../NavBar/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
 
import { NavBar } from "../NavBar/Navbar.js";
import axios from 'axios';
 

 


export const menu = () => {
 
    const [platillos,updateUser] = useState([]);
    const [estadoeffect, updatestado] = useState(false);
    const ConsultarApi = async(e)=>{
        const url =`http://lacasita.somee.com/Api/Plato`;
        const Listuser = await axios.get(url);
        updateUser(Listuser.data);
        console.log(Listuser.data);
      
      } 
  

 useEffect(() => {
        ConsultarApi();
    }, []);

  const remove = async()=>{
    localStorage.removeItem("usu");
    localStorage.removeItem("id");

    }
  

  return ( 

    <>
     <NavBar/>
    <div className="container">

      <div className="row">
          {platillos.legth === 0 ? (
             <p className="text-center blockquote">No hay empleados</p>
                ) :(
               platillos.map((e)=>(
                <div classname="col-4">

                  <img src={e.imagen} heigth="100px" width="100px" classname=" "></img>
                  <h3>{e.nombre}</h3>
                  <p>{e.descripcion}</p>

                </div> 
                   
              )) )}
         </div>
        </div>
        </>
   
  );


}

      
