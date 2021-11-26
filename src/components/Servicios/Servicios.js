import React, { useEffect, useState, } from 'react'
import '../NavBar/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavBar } from "../NavBar/Navbar.js";
import { Router, Route, Switch, Redirect, Link } from 'react-router-dom';



export const Servicios = () => {
  /**
  * Template Name: Delicious - v4.4.0
  * Template URL: https://bootstrapmade.com/delicious-free-restaurant-bootstrap-theme/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  */
  (function () {
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
    on('click', '.mobile-nav-toggle', function (e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function (e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function (e) {
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
        heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>" :
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

        on('click', '#menu-flters li', function (e) {
          e.preventDefault();
          menuFilters.forEach(function (el) {
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
            <h2>Organizamos <span>tus eventos</span></h2>
            <p>Tenemos una variedad de servicios contamos con los mejores profesionales en culinario y decoracion.  <br /> Elige, nosotros nos encargamos del resto  <i class="bi bi-heart-fill"></i></p>  <br /> <br />

            <div class="row">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1"><img src="assets/img/1.png" width="40" height="40" /> CUMPLEAÑOS</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-2"><img src="assets/img/2.png" width="30" height="30" /> ANIVERSARIO</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-3"><img src="assets/img/nina.png" width="40" height="40" /> FIESTAS INFANTILES</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-4"><img src="assets/img/propuesta.png" width="34" height="34" /> DECLARACION / PROPUESTA</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-5"><img src="assets/img/diciendo-adios.png" width="34" height="34" />DESPEDIDAS</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-6"><img src="assets/img/cena.png" width="34" height="34" />CENA CON AMIGOS</a>
                  </li>


                </ul>
              </div>

              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                      <div class="col-lg-8">
                        <h3>El mejor cumpleaños de tu vida</h3>
                        <p>  ¿No sabes como celebrar tu cumpleaños?  <br /> Que esperas? haz tu reservacion para que disfrutes de la mejor fiesta de cumpleaños junto a tus amigos y familiares.</p>
                        <br /> <br /> <div>
                         <li><Link to="/contacto" class="nav-link scrolltobi bi-telephone-plus" >Contactenos</Link></li>
                        </div>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">


                      <img src="assets/img/1.jpg" width="350" height="350" class="DiagonalRedonda centrado"/>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-2">
                    <div class="row">
                      <div class="col-lg-8">
                        <h3>Aniversario</h3>
                        <p>      <br />proponemos sorprender a tu pareja  <br />
                          El mejor aniversario junto a tu pareja, lo vives en nuestro restaurante. </p> <br /> <br />    <br /> <br /> <div>
                         <li><Link to="/contacto" class="nav-link scrolltobi bi-telephone-plus" >Contactenos</Link></li>
                        </div>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">

                      <img src="assets/img/2.jpg" width="350" height="350" class="DiagonalRedonda centrado" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-3">
                    <div class="row">
                      <div class="col-lg-8">
                        <h3>Fiesta para tu pequeñ@</h3>
                        <p> Tenemos expertos en decoracion, ambientacion y un increible espacio recreativo en nuestro restaurante.
                          <br /> Dale una sorpresa a tu pequeñ@</p><br /> <br /> <div>
                         <li><Link to="/contacto" class="nav-link scrolltobi bi-telephone-plus" >Contactenos</Link></li>
                        </div>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">


                      <img src="assets/img/3.jpg" width="350" height="350" class="DiagonalRedonda centrado" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-4">
                    <div class="row">
                      <div class="col-lg-8">
                        <h3>Declaracion y/o propuesta</h3>
                        <p> Sabemos lo lindo que es tener una relacion mas alla de lo personal <br /> <br /> En la conquista no se trata solamente del fisico sino también de los detalles, el trato, la atencion y la fidelidad.
                          <br />
                          te ayudamos hacer tu declaracion mas emotiva.</p><br /> <br /> <div>
                         <li><Link to="/contacto" class="nav-link scrolltobi bi-telephone-plus" >Contactenos</Link></li>
                        </div>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">


                      <img src="assets/img/4.jpg" width="350" height="350" class="DiagonalRedonda centrado" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-5">
                    <div class="row">
                      <div class="col-lg-8">
                        <h3>Despedidas</h3>  <br />
                        <p>  El mejor recuerdo de una despedida es la ultima experiencia en la que demuestras lo gran e importante que es esa persona, y mejor aún en nuestro restaurante </p>  <br /> <br /> <div>
                         <li><Link to="/contacto" class="nav-link scrolltobi bi-telephone-plus" >Contactenos</Link></li>
                        </div>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">


                      <img src="assets/img/5.jpg" width="350" height="350" class="DiagonalRedonda centrado" />
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
      </section></>


  )
}
