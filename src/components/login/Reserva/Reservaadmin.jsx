import axios from 'axios';
import React,{useState,useEffect} from 'react';
 
function Reservaadmin() {
    const [user,updateUser] = useState([]);
    const [estadoeffect, updatestado] = useState(false);
    const ConsultarApi = async(e)=>{
        const url =`http://lacasita.somee.com/Api/Reservas`;
        const Listuser = await axios.get(url);
        updateUser(Listuser.data);
        console.log(Listuser.data);
      
      } 
     
        ConsultarApi();
   
    const eliminarEmpleado = async (e)=>{
      axios.delete(`http://lacasita.somee.com/Api/Reservas/${e.id}`).then(res => {
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
            <p>  fecha    --- id cliente --- id del servicio    </p> <br/>
              {user.length === 0 ? (
                    <p className="text-center blockquote">No hay reservas</p>
                  ) :(
                      
                    user.map((e)=>(
                        
                <div key={e.id}>
                    
                   <table className="table">
                       
                   <thead>  
                         
                         <tr>
                              
                         
              
                       <th >
                                <p
                         >
                           {" "}
                           
                           {e.fecha}
                           <br /> 
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
                       <th>
                       </th>
                       <th ></th>
                       <th ></th>
                       <th ></th>
                       <th >
                         <p
                         >
                           {" "}
                           
                           {e.nombre1}
                           <br /> 
                         </p>
                       </th>
                       <th></th>
                         <th></th>  <th></th>
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

export default Reservaadmin
