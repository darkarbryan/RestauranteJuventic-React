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
    
    <br/><br/><br/>
         
   
      <br/>
      <hr/>
  

      <br/>
      <hr/>

  <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>
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
