import React, { useState} from 'react'
import { Button } from 'react-bootstrap';
import { Offers } from './Offers';



export const OffersList = () => {
    
    const [montar, setMontar] = useState (false)


   const productsView = () => {
    setMontar (!montar) //con el click creo un valor contrario al original de montar, lo paso a false

   }
  

    return (
    < div className="container text-center">
      <Button className="my-5" variant="danger" onClick={productsView}>Mostrar Ofertas</Button>
      <br/>
     {  montar && <Offers/>}
    </div> //renderizado condicional donde indico que si montar cambio su estado, muestre el componente offers
  )

};

export const OffersLis = () => {
    
    const [montar, setMontar] = useState (false)


   const productsView = () => {
    setMontar (!montar) //con el click creo un valor contrario al original de montar, lo paso a false

   }
  

    return (
    < div className="container text-center">
      <Button className="my-5" variant="danger" onClick={productsView}>Mostrar Oferta</Button>
      <br/>
     {  montar && <Offers/>}
    </div> //renderizado condicional donde indico que si montar cambio su estado, muestre el componente offers
  )

};
