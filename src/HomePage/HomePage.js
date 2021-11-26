import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../administrar/_actions';
import { RegisterPage } from '../administrar/RegisterPage';
 import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss'
import { NavBar2 } from "../components/NavBar/Navbar2";
import { CarouselSlide } from "../components/Carousel/Carousel"
import { main } from "../components/Carousel/main.js"
import { Informacion } from '../components/Servicios/Info-servicios.js';
 
import { Sedes } from '../components/Sedes/Sedes';
import { Email } from '../components/Contactar/Email.js';
import { Servicios } from '../components/Servicios/Servicios.js';
import { Info } from '../components/Sedes/info.js';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
        
          <div className="jumbotron">
                <div className=" ">
             <main/>
 <NavBar2 />
             <CarouselSlide/>
   
      
      <Informacion/>
       <br/>
         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
         <Sedes/>
    <br/><br/><br/>
         
   
      <br/>
      <hr/>
  

      <br/>
      <hr/>

  <br/><br/> <br/><br/>
      <section id="specials" class="specials">
        <div class=" ">

          <div class="section-title">
          <h2>Los Recomendados <span>del Chef</span></h2>
     <p>Tenemos los recomendados de esta semana, elige tu favorita <i class="bi bi-heart-fill"></i></p>  <br /> <br />

            <div class="row">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                <li class="nav-item">
              <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">Especial 1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-2">Especial 2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-3">Especial 3</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-4">Especial 4</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-5">Especial 5</a>
            </li>


                </ul>
              </div>

              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                      <div class="col-lg-8">
                      <h3>Bibimbap vegano con tofu y arroz</h3>
                  <p>¿No sabes que es un bibimbap? <br/> Es uno de los platos más representativos de la gastronomía coreana. <br/><br/> Pura tendencia, Consiste en un bol de arroz blanco cubierto de un mix de verduras.<br/> </p><div>
                         <li><Link to="/contacto" class="nav-link scrolltobi bi-telephone-plus" >Contactenos</Link></li>
                        </div>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">


                      <img src="assets/img/specials-1.jpg" width="350" height="350" class="DiagonalRedonda centrado"/>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-2">
                    <div class="row">
                      <div class="col-lg-8">
                      <h3>Gnocchettis de garbanzo con kiwi, naranja y calabacín</h3>
                        <p>      <br />proponemos una receta deliciosa de gnocchetti de cúrcuma   <br />
                        -¡sin gluten!- con diferentes tipos de kiwi, naranjas, calabacin y uvas. <br/><br/> ¿Sabías que la naranja aporta numerosos beneficios para tu salud?</p> <br /> <br />    <br /> <br /> <div>
                         <li><Link to="/contacto" class="nav-link scrolltobi bi-telephone-plus" >Contactenos</Link></li>
                        </div>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">

                      <img src="assets/img/specials-2.jpg" width="350" height="350" class="DiagonalRedonda centrado" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-3">
                    <div class="row">
                      <div class="col-lg-8">
                      <h3>espaguetis con kale, pasas y salsa de tahín</h3>
                        <p>   Si te encanta la pasta, pero te aburres de comerla siempre de la misma manera, te vamos a proponer una salsa diferente a la vez que muy nutritiva. 
                          <br /> </p><br /> <br /> <div>
                         <li><Link to="/contacto" class="nav-link scrolltobi bi-telephone-plus" >Contactenos</Link></li>
                        </div>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">


                      <img src="assets/img/specials-3.jpg" width="350" height="350" class="DiagonalRedonda centrado" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-4">
                    <div class="row">
                      <div class="col-lg-8">
                      <h3>super tris paella vegetal</h3>
                        <p>                 Pocas recetas hay más canónicas que la paella.<br/> No se trata solamente del método de preparación, sino también de los ingredientes utilizados. 
                          <br />
                 </p><br /> <br /> <div>
                         <li><Link to="/contacto" class="nav-link scrolltobi bi-telephone-plus" >Contactenos</Link></li>
                        </div>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">


                      <img src="assets/img/specials-4.jpg" width="350" height="350" class="DiagonalRedonda centrado" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-5">
                    <div class="row">
                      <div class="col-lg-8">
                      <h3>postre de banano,uvas y papaya</h3> <br />
                        <p>   Disfruta de una deliciosa y nutritiva reseta <br/>
                Esta elaborada con las mejores frutas, nutrientes y aderezos exoticos. </p>  <br /> <br /> <div>
                         <li><Link to="/contacto" class="nav-link scrolltobi bi-telephone-plus" >Contactenos</Link></li>
                        </div>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">


                      <img src="assets/img/specials-5.jpg" width="350" height="350" class="DiagonalRedonda centrado" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-6">
                    <div class="row">
                      <div class="col-lg-8">
                        <h3>Cenas con amigos</h3>  <br />
                        <p> Los mejores recuerdos que se tiene de los amigos, son las grandes experiencias que se viven y que mejor lugar para esos recuerdos que nuestro restaurante.
                          <br />
                          te ayudamos hacer tu declaracion mas emotiva. </p>  <br /> <br /> <div>
                         <li><Link to="/contacto" class="nav-link scrolltobi bi-telephone-plus" >Contactenos</Link></li>
                        </div>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">


                      <img src="assets/img/6.jpg" width="350" height="350" class="DiagonalRedonda centrado" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

 <br/><br/> <br/><br/> <br/><br/>
       <h3>Algunos Comentarios</h3>
            <div class="container position-relative">
      
              <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                <div class="swiper-wrapper">
      
                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <img src="assets/img/testimonials/testimonials-1.jpg" class="rounded-circle" width="100" height="100" alt=""/>
                      <h3>Jorge Luis </h3>
                      <h4>Cliente</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Excelente servicio, buena atencion y todo muy organizado
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div> 
      
                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <img src="assets/img/testimonials/testimonials-3.jpg" class="rounded-circle" width="100" height="100" alt=""/>
                      <h3>Diani Luz</h3>
                      <h4>Cliente</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Fue una experiencia maravillosa, 100% recomendado.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                    </div>    </div>    </div>    
      
                    
      
</div>


       
            </div>   </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
