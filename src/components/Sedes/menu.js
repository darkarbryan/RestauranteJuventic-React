import React, {useEffect, useState, } from 'react'
import '../NavBar/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
 
import { NavBar } from "../NavBar/Navbar.js";
import axios from 'axios';
 

 


export const menu = () => {

    
     
    const [platillos,updateUser] = useState([]);
    const [carro,updateCarro] = useState([]);
    const [estadoeffect, updatestado] = useState(false);
    const ConsultarApi = async(e)=>{
        const url =`http://lacasita.somee.com/Api/Plato`;
        const Listuser = await axios.get(url);
        updateUser(Listuser.data);
        console.log(Listuser.data);
      
      } 
    
    const datos = (e) =>{
      updateCarro(e);
     
    }
    
   useEffect(() => {
        ConsultarApi();
    }, []);
 
 
 
      
  

 
   
  return ( 

    <>
     <NavBar/>
       
 <nav>
  <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown">
                                <img src="assets/img/carrito.png" align="left" class="derecha" height="50px"
                                    width="50px" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"></img>
                                <div id="carrito" class="dropdown-menu" aria-labelledby="navbarCollapse">
                                    <table id="lista-carrito" class="table"  height="110px"
                                    width="190px">
                                        <thead>
                                           <a href="#" id="vaciar-carrito" class="btn btn-secondary  "> <b>Vaciar Carrito</b> </a>
                                    <a href="#" id="procesar-pedido" class="btn btn-success  "><b> Facturar pedido </b></a>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody></tbody>
                                    </table>

                                 
                                </div>
                            </li>
                        </ul>
 </nav>


    <div class="container-fluid">

      <div class="section-title">
        <h2>Nuestros <span>platillos</span></h2>
          <div class="descargar-menu">
                <p>
                 <a href="pdf/Menu.pdf" class="btn-outline-danger" download="Menu.pdf"><i class="bi bi-download"></i>DESCARGAR MEN??</a>
                   
                </p>
             </div>
        <p>Disponemos de multiples platos a nivel nacional, estamos mas cerca de ti. </p>
      </div>

    <div class="row no-gutters">
          {platillos.legth === 0 ? (
             <p className="text-center blockquote">No hay empleados</p>
                ) :(
               platillos.map((e)=>(
       
         <div class=" " id="lista-productos">
                    <div class="card text-center">
                     <img src={e.imagen} alt="Imagen Menu Plato 1" class="DiagonalRedonda" id="imgCuadro"/>
                       
                    </div>
                    <div class="card-body">
                      <h4 class="my-0 font-weight-bold">{e.nombre}</h4>
                        <h3 class="card-title pricing-card-title precio">$ <span class="">12000.00</span></h3>

                        <div class="list-unstyled mt-3 mb-4">
                              <button type="button" class="btn btn-outline-secundary mx-auto d-block mt-5 btn-lg" onclick="mostrarModal(1)"/>
        
                                <div class="modal fade" id="modalForm1"   aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <img src={e.Imagen} alt="Imagen Menu Plato 1" class="DiagonalRedonda1"    id="imgCuadro"/>   
                                          <p>{e.descripcion}</p>
                                            </div>
                                        </div>
                                    </div>
 
                    <input type="number" class="input" min="1" value="1" placeholder="Cantidad" required/> <br/>
                        <button  class="btn btn-block btn-primary agregar-carrito" data-toggle="modal" data-target="#exampleModal">Comprar</button>
                    </div>
                </div><div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Carrito de comprs</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
               <div className="row">
                  <div className="col-6"><img src={e.imagen}  alt="Imagen Menu Plato 1" class="DiagonalRedonda" id="imgCuadro" src={e.imagen} /></div>
                  <div className="col-3"><p>{e.nombre}</p></div>
               </div>
               
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" >Comprar</button>
            </div>
          </div>
        </div>
      </div>
      </div>
                   
              )) )}
         </div>
        </div>
        </>
   
  );


}

      
