import React, {useEffect, useState, } from 'react'
import '../NavBar/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
 
import { NavBar } from "../NavBar/Navbar.js";
import axios from 'axios';
 

 


export const menu = () => {
    
    const [carro,updateCarro] = useState([]);
    
    const [platillos,updateUser] = useState([]);
    const [estadoeffect, updatestado] = useState(false);
    const ConsultarApi = async(e)=>{
        const url =`http://lacasita.somee.com/Api/Plato`;
        const Listuser = await axios.get(url);
        updateUser(Listuser.data);
        console.log(Listuser.data);
      
      } 
    
    const datos = (c) =>{

      
      updateCarro(c);
      console.log("carro");
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
    <div class="container-fluid">

      <div class="section-title">
        <h2>Nuestros <span>platillos</span></h2>
        <p>Disponemos de multiples platos a nivel nacional, estamos mas cerca de ti. </p>
      </div>

    <div class="row no-gutters">
          {platillos.legth === 0 ? (
             <p className="text-center blockquote">No hay empleados</p>
                ) :(
               platillos.map((e)=>(
       
         <div class="col col-lg-4 col-md-4 col-sm-4 col-xs-8" id="lista-productos">
                    <div class="card text-center">
                     <img src={e.imagen} alt="Imagen Menu Plato 1" class="DiagonalRedonda" id="imgCuadro"/>
                       
                    </div>
                    <div class="card-body">
                      <h4 class="my-0 font-weight-bold">{e.nombre}</h4>
                        <h3 class="card-title pricing-card-title precio">$ <span class="">12000.00</span></h3>

                        <div class="list-unstyled mt-3 mb-4">
                              <button type="button" class="btn btn-outline-secundary mx-auto d-block mt-5 btn-lg" onclick="mostrarModal(1)"/>
                              
        
        <div class="modal fade" id="modalForm1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                 <img src={e.Imagen} alt="Imagen Menu Plato 1" class="DiagonalRedonda1"    id="imgCuadro"/>   
                   <p>{e.descripcion}</p>
                    </div>
                </div>
                
                    
            </div>
 
                    <input type="number" class="input" min="1" value="1" placeholder="Cantidad" required/> <br/>
                        <button  class="btn btn-block btn-primary agregar-carrito" onclick="datos({e})" >Comprar</button>
                    </div>
                </div>
                </div>
                   
              )) )}
         </div>
        </div>
        </>
   
  );


}

      
