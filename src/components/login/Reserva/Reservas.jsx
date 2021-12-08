  import React, {useEffect, useState,useRef } from 'react'
import '../../../components/NavBar/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import emailjs from 'emailjs-com';
import { Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import axios from 'axios';

  
import { NavBar } from "../../NavBar/Navbar.js";

export const Reservar = () => {
   const [servicios,updateUser] = useState([]);

       const [Error, UpdateError] = useState(false);
    const [Reserva,UpdateReserva] = useState({
        cliente:localStorage.getItem("id"),
        Nombre: "",
        Telefono: "",
        Email: "",
        Servicio: "",
        Numper: "",
        Fecha:"",
        Hora:"",
        Indicaciones:"",
      });
     
      const {Nombre,Telefono,Email,Servicio,Numper,Fecha,Hora,Indicaciones} = Reserva;
      const form = useRef();
      const handleChangeReserva = (e) =>{
          UpdateReserva({
              ...Reserva,
              [e.target.name]:e.target.value,
          });
      }
     const SubmitForm = e =>{

          e.preventDefault();

          if (localStorage.getItem("id") === null ) { 
            alert("inicie sesion!",  "/login");
            UpdateError(true);
            return; 
          } 
  

          if(Nombre.trim()==='' || Telefono.trim()==='' || Email.trim()==='' || Servicio.trim()==='' || 
          Numper.trim()==='' || Fecha.trim()==='' || Hora.trim()==='' || Indicaciones.trim()===''){

            alert("Campos vacios, por favor completarlos",  "/login");
            UpdateError(true);
            return;

        }


             UpdateError(false);
             insertarreserva(); 
              
      


             emailjs.sendForm('default_service', 'template_ieclegs', form.current, 'user_mI3KQGEeqhQex6wF9em3e')
             .then((result) => {
                 success();
             }, (error) => {
                alert(error.message);
                 });
                 e.target.reset();
      }
    
      
      const success = ()=>{
      swal({
            title: "Perfecto!",
            text: "Su reserva ha sido registraba, recibiras una copia al correo como constabcia, Revisa en SPAM si no aparece en tu bandeja de recibidos.",
            type: "success",
            showConfirmButton: false,
            timer: 3500
          }, function() {
              window.location = "/home";
        });
}
     
    
const ConsultarApi = async(e)=>{
  const url =`http://lacasita.somee.com/Api/Servicio `;
  const Listuser = await axios.get(url);
  updateUser(Listuser.data);
  console.log(Listuser.data);

} 

    useEffect(() => {
        ConsultarApi();
    }, []);

 const insertarreserva = async ()=>{
  axios.post("http://lacasita.somee.com/Api/Reservas",Reserva).then(res => {
    console.log(res.data)
  })
  .catch(error => {
    console.log(error.message)
  })
}


const alert = async (x,v)=>{

   swal({
    title: "error!",
    text: x,
    type: "error",
    showConfirmButton: false,
    timer: 3500 }, 
    function() {
         window.location = v; });

}
 
   
    return (
    
     
    
       <>
          <NavBar />
      <section id="specials" class="specials">
        <div class=" ">

          <div class="section-title">
         <h3>Contactenos</h3>
                  
                           
                   <p>  Cuentanos tus dudas, preguntas, solicitudes o peticiones<br /> <b> te responderemos en el mejor tiempo posible</b><br /><br />
       <i class="bi bi-heart-fill"></i></p>  <br /> <br />

            <div class="row">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1"><img src="assets/img/logo_correo.png" width="70" height="40" /> EMAIL</a>
                  </li>
                 
                </ul>
              </div>

              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                      <div class="col-lg-8">
                      
       
        
               <form 
                ref={form} 
                className ="col-lg-12"
                onSubmit={SubmitForm}
              >
                    
                

                       <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label className="m-4">cliente</label>
                <input
                  type="text"
                  className="form-control"
                  name="cliente"
                  placeholder="cliente"
                   value={localStorage.getItem("usu")}
                   disabled
                

                />
              </div>
            </div> 
                           <div className="col-md-12">
                               <div className="form-group">
                                   <label className="m-1">Nombre</label>
                                   <input 
                                   type="text"
                                   className="form-control"
                                   name="Nombre"
                                   placeholder="Nombre"
                                   onChange={handleChangeReserva}
                                   value={Nombre}
                                   />
                               </div>
                           </div>
                           <div className="col-md-12">
                           <div className="form-group">
                                   <label className="m-1">Telefono</label>
                                   <input 
                                   type="number"
                                   className="form-control"
                                   name="Telefono"
                                   placeholder="Telefono"
                                   onChange={handleChangeReserva}
                                   value={Telefono}
                                   />
                               </div>
                           </div>
                           <div className="col-md-12">
                           <div className="form-group">
                                   <label htmlFor="email" className="m-1">Email</label>
                                   <input 
                                   type="email"
                                   className="form-control"
                                   name="Email"
                                   placeholder="Tu Email"
                                   onChange={handleChangeReserva}
                                   value={Email}
                                   />
                               </div>
                           </div>
                           <div className="col-md-12">
                           <div className="form-group">
                                   <label className="m-1" >Numero de personas</label>
                                   <input 
                                   type="number"
                                   className="form-control"
                                   name="Numper"
                                   placeholder="Cantidad"
                                   onChange={handleChangeReserva}
                                   value={Numper}
                                   />
                               </div>
                           </div>
                           <div className="col-md-12">
                           <div className="form-group">
                           <label htmlFor="exampleFormControlSelect1" className="m-1">Seleccione servicio</label>
                         <select className="form-control"
                  name="Servicio"
                    
                  onChange={handleChangeReserva}
                  value={Servicio}> 
                   {servicios.map((e)=>(
                     <option  value={e.id}>{e.nombre} </option>
                    
                   ))}
                       
                  </select>
                               </div>
                           </div>
                           <div className="col-md-12">
                            <div className="form-group">
                                    <label className="m-1">Fecha</label>
                                    <input
                                            onChange={handleChangeReserva}
                                            value={Fecha}
                                            type="date"
                                            name="Fecha"
                                            className="form-control"
                                            />
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-group">
                                    <label className="m-1">Hora</label>
                                            <input
                                            onChange={handleChangeReserva}
                                            value={Hora}
                                            type="time"
                                            name="Hora"
                                            className="form-control mb-4"
                                            />
               
                                </div>
                            </div>
                            
                            <div className="col-md-12">
                            <div className="form-group">
                                    <label className="m-1">Mensaje</label>
                                    <textarea 
                                    onChange={handleChangeReserva}
                                    value={Indicaciones}
                                     className="form-control " 
                                     placeholder="ingresa una indicación" 
                                     name="Indicaciones"
                                    ></textarea>
               
                                </div>
                            </div>
                 </div>
                    
                        <button type="submit" className=" btn  btn-success m-1" >Reservar</button>
                         
               </form>
                      </div>
                       
                    </div>
                  </div>
                   
              </div>
            </div>
          </div>

        </div>        </div>
      </section>
      </>
      
      
    
    
    );  
         
}
