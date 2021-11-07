import React, {useEffect, useState,useRef } from 'react'
import '../../components/NavBar/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import emailjs from 'emailjs-com';
import { Router, Route, Switch, Redirect, Link } from 'react-router-dom';


  
import { NavBar } from "../NavBar/Navbar.js";

export const Email = () => {

       const [Error, UpdateError] = useState(false);
    const [Reserva,UpdateReserva] = useState({
        Nombre: "",
        Telefono: "",
        Email: "",
        Servicio: "",
        NumPer: "",
        Fecha:"",
        Hora:"",
        Indicaciones:"",
      });
     
      const {Nombre,Telefono,Email,Servicio,NumPer,Fecha,Hora,Indicaciones} = Reserva;
      const form = useRef();
      const handleChangeReserva = (e) =>{
          UpdateReserva({
              ...Reserva,
              [e.target.name]:e.target.value,
          });
      }
     const SubmitForm = e =>{
          e.preventDefault();
          if(Nombre.trim()==='' || Telefono.trim()==='' || Email.trim()==='' || Servicio.trim()==='' || 
          NumPer.trim()==='' || Fecha.trim()==='' || Hora.trim()==='' || Indicaciones.trim()===''){
            UpdateError(true);
            return;
        }
             UpdateError(false);
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
						text: "Hemos enviado el correo, recibiras una copia como constancia, Revisa en SPAM si no aparece en tu bandeja de recibidos.",
						type: "success",
						showConfirmButton: false,
						timer: 3500
					}, function() {
					 		window.location = "/home";
				});
}
		 
		 
/**
* Template Name: Delicious - v4.4.0
* Template URL: https://bootstrapmade.com/delicious-free-restaurant-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Menu isotope and filter
   */
  window.addEventListener('load', () => {
    let menuContainer = select('.menu-container');
    if (menuContainer) {
      let menuIsotope = new Isotope(menuContainer, {
        itemSelector: '.menu-item',
        layoutMode: 'fitRows'
      });

      let menuFilters = select('#menu-flters li', true);

      on('click', '#menu-flters li', function(e) {
        e.preventDefault();
        menuFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        menuIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  new Swiper('.events-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

})()
   
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
                    
               
                       <div className="so row">
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
                                   name="NumPer"
                                   placeholder="Cantidad"
                                   onChange={handleChangeReserva}
                                   value={NumPer}
                                   />
                               </div>
                           </div>
                           <div className="col-md-12">
                           <div className="form-group">
                           <label htmlFor="exampleFormControlSelect1" className="m-1">Seleccione servicio</label>
                            <select 
                            className="form-control" 
                            onChange={handleChangeReserva}
                            value={Servicio}
                            name="Servicio"
                            >
                            <option selected disabled value="">Selecciona tu servicio</option>
                                <option>Celebracion de cumpleaños</option>
                                <option>Aniversario</option>
                                <option>Fiesta infantil</option>
                                <option>Declaracion o propuesta</option>
                                <option>Despedida</option>
                                <option>Cena con amigos</option>
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
