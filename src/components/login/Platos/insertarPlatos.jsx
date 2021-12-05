import React,{useState} from 'react';
 
import axios from 'axios';
import { Link } from "react-router-dom";
 const Registerplatos = () => {
  const [empleado,updateEmpleado] = useState({
    
        nombre: "",
        descripcion: "",
        restaurante_id: 1,
        imagen: "",
  });
  const [error, UpdateError] = useState(false);
    const {
     
      nombre,
      descripcion,
      imagen,
      } = empleado; 
    const handleChangeUser = (e) => {
      updateEmpleado({
        ...empleado,
        [e.target.name]: e.target.value,
      });
    };
  const insertarEmpleado = async ()=>{
      axios.post("http://localhost:5000/Api/Plato",empleado).then(res => {
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
        imagen.trim() === "" ||
        descripcion.trim() === "" 
      ) {
          UpdateError(true);
        return;
      }
      UpdateError(false);
      //Insertamos
      insertarEmpleado();
      updateEmpleado({
         
        nombre: "",
        descripcion: "",
        restaurante_id: 1,
        imagen: "",
      });
      swal({
        title: "Perfecto!",
        text: "Realizado el resgistro del plato",
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
   
      <div className="container getuser mb-5">
        <div className="row">
          <form
            className="col card text-dark bg-transparent mb-5 pt-5 pb-2"
            onSubmit={SubmitForm}
          >
            <fieldset>
               <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="m-4">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      placeholder="Nombre"
                      onChange={handleChangeUser}
                      value={nombre}
                    />
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="m-4">Imagen</label>
                    <input
                      type="text"
                      className="form-control"
                      name="imagen"
                      placeholder="URL"
                      onChange={handleChangeUser}
                      value={imagen}
                    />
                  </div>
                </div>
              
                <div className="col-md-8">
                  <div className="form-group">
                    <label className="m-4">Descripcion</label>
                    <textarea
                      onChange={handleChangeUser}
                      value={descripcion}
                      className="form-control "
                      placeholder="descripcion"
                      name="descripcion"
                    ></textarea>
                  </div>
                </div>
              </div>
      
              <button type="submit" className=" btn  btn-outline-success m-4">
                Registrar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div> );
}

export default Registerplatos;
