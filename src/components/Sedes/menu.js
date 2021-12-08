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

  const remove = async()=>{
    localStorage.removeItem("usu");
    localStorage.removeItem("id");

    }
  


 class Carrito  {
 
    //Añadir producto al carrito
    comprarProducto(e){
        e.preventDefault();
        //Delegado para agregar al carrito
  
   if(e.target.classList.contains('agregar-carrito')){
        
            const producto = e.target.parentElement.parentElement;
            //Enviamos el producto seleccionado para tomar sus datos
            this.leerDatosProducto(producto);
             
        }
    }
    

    //Leer datos del producto
    leerDatosProducto(producto){
        const infoProducto = {
        
            imagen : producto.querySelector('img').src,
            titulo: producto.querySelector('h4').textContent,
            precio: producto.querySelector('.precio span').textContent,
            id: producto.querySelector('a').getAttribute('data-id'),
            cantidad: producto.querySelector('input').value,
            
        }
        
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (productoLS){
            if(productoLS.id === infoProducto.id){
                productosLS = productoLS.id;
            }
        });
 
        if(productosLS === infoProducto.id){
            Swal.fire({
                type: 'info',
                title: 'Lo sentimos!',
                text: 'El producto ya está agregado',
                showConfirmButton: false,
                timer: 1000
            })
        }
        else {
        
            this.insertarCarrito(infoProducto);
            
                 Swal.fire({
                 type: 'success',
                title: 'producto agregado',
                text: 'Se agrego al carrito',
                showConfirmButton: false,
                timer: 1000
            })
            
        }
        
    }

    //muestra producto seleccionado en carrito
    insertarCarrito(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
            </td>
        `;
        listaProductos.appendChild(row);
        this.guardarProductosLocalStorage(producto);
        

    }

    //Eliminar el producto del carrito en el DOM
    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains('borrar-producto')){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector('a').getAttribute('data-id');
        }
        this.eliminarProductoLocalStorage(productoID);
        this.calcularTotal();

    }

    //Elimina todos los productos
    vaciarCarrito(e){
        e.preventDefault();
        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild);
        }
        this.vaciarLocalStorage();

        return false;
    }

    //Almacenar en el LS
    guardarProductosLocalStorage(producto){
        let productos;
        //Toma valor de un arreglo con datos del LS
        productos = this.obtenerProductosLocalStorage();
        //Agregar el producto al carrito
        productos.push(producto);
        //Agregamos al LS
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    //Comprobar que hay elementos en el LS
    obtenerProductosLocalStorage(){
        let productoLS;

        //Comprobar si hay algo en LS
        if(localStorage.getItem('productos') === null){
            productoLS = [];
        }
        else {
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

    //Mostrar los productos guardados en el LS
    leerLocalStorage(){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (producto){
            //Construir plantilla
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
                </td>
            `;
            listaProductos.appendChild(row);
        });
    }

    //Mostrar los productos guardados en el LS en compra.html
    leerLocalStorageCompra(){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (producto){
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                    <input type="number" class="form-control cantidad" min="1" value=${producto.cantidad}>
                </td>
                <td id='subtotales'>${producto.precio * producto.cantidad}</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle" style="font-size:30px" data-id="${producto.id}"></a>
                </td>
            `;
            listaCompra.appendChild(row);
        });
    }

    //Eliminar producto por ID del LS
    eliminarProductoLocalStorage(productoID){
        let productosLS;
        //Obtenemos el arreglo de productos
        productosLS = this.obtenerProductosLocalStorage();
        //Comparar el id del producto borrado con LS
        productosLS.forEach(function(productoLS, index){
            if(productoLS.id === productoID){
                productosLS.splice(index, 1);
            }
        });

        //Añadimos el arreglo actual al LS
        localStorage.setItem('productos', JSON.stringify(productosLS));
    }

    //Eliminar todos los datos del LS
    vaciarLocalStorage(){
        localStorage.clear();
    }

    //Procesar pedido
    procesarPedido(e){
        e.preventDefault();

        if(this.obtenerProductosLocalStorage().length === 0){
            Swal.fire({
                type: 'error',
                title: 'Lo sentimos!',
                text: 'El carrito está vacío, agrega algún producto',
                showConfirmButton: false,
                timer: 2000
            })
        }
        else {
            location.href = "carrito.html";
        }
    }

    //Calcular montos
    calcularTotal(){
        let productosLS;
        let total = 0, igv = 0, subtotal = 0;
        productosLS = this.obtenerProductosLocalStorage();
        for(let i = 0; i < productosLS.length; i++){
            let element = Number(productosLS[i].precio * productosLS[i].cantidad);
            total = total + element;
            
        }
        
      
        subtotal = parseFloat(total).toFixed(2);
 
        document.getElementById('total').value = "$" + total.toFixed(2);
    }

    obtenerEvento(e) {
        e.preventDefault();
        let id, cantidad, producto, productosLS;
        if (e.target.classList.contains('cantidad')) {
            producto = e.target.parentElement.parentElement;
            id = producto.querySelector('a').getAttribute('data-id');
            cantidad = producto.querySelector('input').value;
            let actualizarMontos = document.querySelectorAll('#subtotales');
            productosLS = this.obtenerProductosLocalStorage();
            productosLS.forEach(function (productoLS, index) {
                if (productoLS.id === id) {
                    productoLS.cantidad = cantidad;                    
                    actualizarMontos[index].innerHTML = Number(cantidad * productosLS[index].precio);
                }    
            });
            localStorage.setItem('productos', JSON.stringify(productosLS));
            
        }
        else {
            console.log("click afuera");
        }
    }
}
 
 
const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');

 

function cargarEventos(){
 
    //Cuando se elimina productos del carrito
    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    //Al vaciar carrito
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    //Al cargar documento se muestra lo almacenado en LS
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    //Enviar pedido a otra pagina
    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}
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
              <button type="button" class="btn btn-primary">Comprar</button>
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

      
