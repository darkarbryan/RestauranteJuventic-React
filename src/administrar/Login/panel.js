 import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

   
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
 
import { LoginPage } from './LoginPage';
import { RegisterPage } from '../RegisterPage';
 import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.scss'
import { NavBar } from "../../components/NavBar/Navbar2";
import { CarouselSlide } from "../../components/Carousel/Carousel"
import { main } from "../../components/Carousel/main.js"
  

import { Info } from '../../components/Servicios/Info-servicios.js';
import { Sedes } from '../../components/Sedes/Sedes';
import { Email } from '../../components/Contactar/Email.js';
import { Servicios } from '../../components/Servicios/Servicios.js';
 

export const Panel = () => {
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
   
    <section id="specials" class="specials">
    <div class=" ">

      <div class="section-title">
       <h2>Panel Administrativo </h2>
     <p>   Bienvenido  <i class="bi bi-heart-fill"></i></p> <br /><br />

      <div class="row">
        <div class="col-lg-3">
          <ul class="nav nav-tabs flex-column">
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-7"><i class="bi bi-file-pdf"></i>Agregar documentos</a>
            </li>
          <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-6"><i class="bi bi-person-plus"></i> Agregar usuario</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1"> <i class="bi bi-images"></i> Panel de anuncios </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-2"> <i class="bi bi-person-bounding-box"></i> Representante </a>
            </li>
             <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-3"> <i class="bi bi-calendar2-event"></i> Ultimos eventos</a>
            </li>
              <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-4"><i class="bi bi-info-circle"></i> Informacion representativa</a>
            </li>
             <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-5"><i class="bi bi-lock"></i> Cambio de contrase??a</a>
            </li>
            <li class="nav-item">
             <Link to="/login">  <i class="bi bi-arrow-left-square"></i> Cerrar Sesion</Link>
            </li>
             
          </ul>
        </div>
      
        <div class="col-lg-9 mt-4 mt-lg-0">
          <div class="tab-content">
            <div class="tab-pane active show" id="tab-1">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>El mejor cumplea??os de tu vida</h3>
                  ??No sabes como celebrar tu cumplea??os?  <br /> Que esperas? haz tu reservacion para que disfrutes de la mejor fiesta de cumplea??os junto a tus amigos y familiares.
                   <br /> <br /> <div>
                  <a href="contactenos.html" class="btn-menu animate__animated animate__fadeInUp scrollto"><i class="bi bi-calendar2-check"></i> <td />Reservate Aqui</a>
                </div>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                 
     
              <img src="./images/gallery-3.jpg" alt="" class="frame" />
                </div>
              </div>
            </div>
            <div class="tab-pane" id="tab-2">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>Aniversario</h3>
                                 <br />proponemos sorprender a tu pareja  <br />
                                El mejor aniversario junto a tu pareja, lo vives en nuestro restaurante.  <br /> <br />    <br /> <br /> <div>
                  <a href="contactenos.html" class="btn-menu animate__animated animate__fadeInUp scrollto"><i class="bi bi-calendar2-check"></i> <td />Reservate Aqui</a>
                </div>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                
     
              <img src="./images/gallery-3.jpg" alt="" class="frame" />
                </div>
              </div>
            </div>
            <div class="tab-pane" id="tab-3">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>Fiesta para tu peque??@</h3>
                 Tenemos expertos en decoracion, ambientacion y un increible espacio recreativo en nuestro restaurante.
                  <br /> Dale una sorpresa a tu peque??@    <br /> <br /> <div>
                  <a href="contactenos.html" class="btn-menu animate__animated animate__fadeInUp scrollto"><i class="bi bi-calendar2-check"></i> <td />Reservate Aqui</a>
                </div>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                 
     
              <img src="./images/gallery-3.jpg" alt="" class="frame" />
                </div>
              </div>
            </div>
            <div class="tab-pane" id="tab-4">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>Declaracion y/o propuesta</h3>
                Sabemos lo lindo que es tener una relacion mas alla de lo personal <br /> <br /> En la conquista no se trata solamente del fisico sino tambi??n de los detalles, el trato, la atencion y la fidelidad.
                 <br />
                te ayudamos hacer tu declaracion mas emotiva.   <br /> <br /> <div>
                  <a href="contactenos.html" class="btn-menu animate__animated animate__fadeInUp scrollto"><i class="bi bi-calendar2-check"></i> <td />Reservate Aqui</a>
                </div>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                 
     
              <img src="./images/gallery-3.jpg" alt="" class="frame" />
                </div>
              </div>
            </div>
            <div class="tab-pane" id="tab-5">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>Despedidas</h3>  <br />
              El mejor recuerdo de una despedida es la ultima experiencia en la que demuestras lo gran e importante que es esa persona, y mejor a??n en nuestro restaurante   <br /> <br /> <div>
                  <a href="contactenos.html" class="btn-menu animate__animated animate__fadeInUp scrollto"><i class="bi bi-calendar2-check"></i> <td />Reservate Aqui</a>
                </div>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                
     
              <img src="./images/gallery-3.jpg" alt="" class="frame" />
                </div>
              </div>
            </div>
                  <div class="tab-pane" id="tab-6">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                <RegisterPage/>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                 
     
              <img src="./images/gallery-3.jpg" alt="" class="frame" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                 </div>

    </div>
  </section></>
 
 
        );
    
    
    
} 
