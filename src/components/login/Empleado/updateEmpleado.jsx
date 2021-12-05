 
import React,{useState} from 'react';
 
const UpdateUser = () => {
   
    const [user,updateUser] = useState([]);
    const [estadoeffect, updatestado] = useState(false);
    const ConsultarApi = async(e)=>{
        const url =`http://localhost:5000/Api/Empleado/${2}`;
        const Listuser = await axios.put(url);
        updateUser(Listuser.data);
        console.log(Listuser.data);
      
      } 
     
        ConsultarApi();
    
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
                       <a  onClick={() => eliminarEmpleado(e)}>
                                  Eliminar
                                </a>
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
 
export default UpdateUser;