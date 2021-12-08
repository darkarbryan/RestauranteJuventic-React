import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
 

const Getplatos = () => {
    const [user,updateUser] = useState([]);
    const [estadoeffect, updatestado] = useState(false);
    const ConsultarApi = async(e)=>{
        const url =`http://lacasita.somee.com/Api/Plato`;
        const Listuser = await axios.get(url);
        updateUser(Listuser.data);
        console.log(Listuser.data);
      
      } 
     
        ConsultarApi();
   
    const eliminarEmpleado = async (e)=>{
      axios.delete(`http://lacasita.somee.com/Api/Plato/${e.id}`).then(res => {
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
                    <p className="text-center blockquote">No hay platos</p>
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
                                  className="redonda"
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
 
export default Getplatos;
