import React,{useState,useEffect} from 'react';
 
import axios from 'axios';
 

export const LoginPage = () => {
    const [user,updateUser] = useState([]);
    const [estadoeffect, updatestado] = useState(false);
    const ConsultarApi = async()=>{
        const url =`http://localhost:5000/Api/Empleados`;
        const Listuser = await axios.get(url);
        updateUser(Listuser.data);
        console.log(Listuser.data);
      } 
      useEffect(()=>{
        ConsultarApi();
      },estadoeffect);
      
    const eliminarEmpleado = async (e)=>{
      axios.delete(`http://localhost:5000/Api/Empleados/${e.id}`).then(res => {
        updatestado(true);
        console.log(res.data)
      })
      .catch(error => {
        console.log(error.message)
      })
      updatestado(false);
    }
    return ( 
        
        <div className="container  mb-5">
        <div className="row">
              
              {user.length === 0 ? (
                    <p className="text-center blockquote">No hay elementos</p>
                  ) :(
                    user.map((e)=>(
                <div key={e.id}>
                   <table className="table">
                   <thead>  
                   
                         <tr>
                         <th >
                         <p >
                           {" "}
                           {e.id} 
                         </p>
                       </th>
                       <th >
                         <p
                    
                         >
                           {" "}
                           {e.nombre}
                           <br /> 
                         </p>
                       </th>
                       <th >
                         <p
                         >
                           {" "}
                           {e.descripcion}
                           <br /> 
                         </p>
                       </th>
                       <th >
                                <img
                                  src={e.imagen}
                                  height="70px"
                                  width="70px"
                                  className="mr"
                                ></img>{" "}
                              </th>
                       <th >
                       <Button  onClick={() => eliminarEmpleado(e)}>
                                  X
                                </Button>
                       </th>
                     </tr>
                     </thead>
                 </table>
                 </div>
              
                    ))
                  )}
        </div>
      </div>
        );
}
 
 