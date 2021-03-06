import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';


export const CarouselSlide = () => {

    return (
     
    <Carousel>
      <Carousel.Item>
      
          <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">
        
        <img
            className="carousel-item active" 
            height="600"
            
            
      
     src="./images/gallery-3.jpg"
            alt="First slide"
        />
     
           <div class="carousel-container">
              <div class="carousel-content">
             <div class="carousel-caption">
             
           <h1 class="animate__animated animate__fadeInDown"><h1  style={{ color: '#ffc56e' }}>La Casita</h1>sabe a hogar, 35 % desc.</h1>
            <p>APROVECHA NUESTRO DESCUENTO EN TODOS NUESTROS PLATOS <br />
VALIDO SOLO HASTA EL 4 DE OCTUBRE, PILAS ! </p>
           
            <div>
                        <Link to="/contacto" class="btn btn-outline-warning bi-telephone-plus" > Reservate aqui</Link>

                </div>
                </div>     </div></div></div>
        
    </Carousel.Item>
    <Carousel.Item>
     
          <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">
        
        <img
            className="carousel-item active" 
            height="600"
            
      
     src="./images/gallery-3.jpg"
            alt="First slide"
        />
     
           <div class="carousel-container">
              <div class="carousel-content">
             <div class="carousel-caption">
             
             <h1 class="animate__animated animate__fadeInDown">Especialidades de la casa</h1>
            <p> PLATOS MAS EXOTICOS E INIGUALABLES <br />
CONOCELOS Y HAZ TU PEDIDO</p>
           
            <div>
            <Link to="/menu" class="btn btn-outline-warning bi bi-card-list" > Mira nuestros platos</Link>
                </div>
                </div>     </div></div></div>
        
    </Carousel.Item>
     <Carousel.Item> 
          <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">
        
        <img
            className="carousel-item active" 
            height="600"
            
      
     src="./images/gallery-3.jpg"
            alt="First slide"
        />
     
           <div class="carousel-container">
              <div class="carousel-content">
             <div class="carousel-caption">
             
           <h1 class="animate__animated animate__fadeInDown">Organizamos tus eventos</h1>
            <p>
TE BRINDAMOS LA MEJOR ATENCION Y UNA DIGUSTACION IRREPETIBLE

  <br />
  </p>
           
            <div>
                        <Link to="/contacto" class="btn btn-outline-warning bi-telephone-plus" > Contactenos</Link>

                </div>
                </div>     </div></div></div>
    </Carousel.Item>
    
    
</Carousel>
 
    );
}
