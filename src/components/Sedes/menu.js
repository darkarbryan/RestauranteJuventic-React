import React, {useEffect, useState, } from 'react'
import '../NavBar/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
 
import { NavBar } from "../NavBar/Navbar.js";
 

export const menu = () => {
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

const titulos = ["Costillares silvestres con calabacin asado y guisantes variados", "Bandeja parmessiana con seleccion de verduras", "Corona de ensalada mixta Cesar-Silvestre con buñuelos", "Pulpo encurtido con salsa de mar y dulces aderezos", "Copa de camarones asados encurtidos con salsa agridulce", "Costillares silvestres con calabacin asado y guisantes variados", ];
const imagenes = ["assets/img/platillos/menu1@2x.png", "assets/img/platillos/menu2@2x.png", "assets/img/platillos/menu3@2x.png", "assets/img/platillos/menu4@2x.png", "assets/img/platillos/menu5@2x.png", "assets/img/platillos/menu1@2x.png"];
const descripcion = ["Disfruta de nuestra especilidad, costillares ahumados acompañado con calabacin silvestre. Ademas, como acompañamiento guisantes variados con salsa agridulce.", "Para disfrutar en acompañamiento, deleitate con el clasico saber de nuestra lasagna con relleno de pavo acompañado con una cuidadosa seleccion de condimentos y granos como acompañantes.", "Plato recomendado de nuestra casa para aquellos amantes de la ensalada. Saborea lo mejor de la ensalada cesar y silvestre en una sola, acompañado de unos buñuelos con masa 100% artesanal.", "Amante de la comida de mar, este platillo es el idea para ti. Disfruta de nuestro pulpo asado enrollado con salsa de mar. Viene acompañado con dulces aderezos para complementar y brindar un sabor agridulce a tu paladar.", "Amaras estos camarones que tenemos para ti. Asados y bañados en salsa agridulce, este manjar despertara todos tus sentidos.", "Disfruta de nuestra especilidad, costillares ahumados acompañado con calabacin silvestre. Ademas, como acompañamiento guisantes variados con salsa agridulce.", "Disfruta de nuestra especilidad, costillares ahumados acompañado con calabacin silvestre. Ademas, como acompañamiento guisantes variados con salsa agridulce."];
const precios = [12000.00, 15000.00, 21000.00, 16000.00, 9000.00, 12000.00];


function mostrarModal(numeroMenu) {

    var numero = numeroMenu - 1; //las pocisiones de array empiezan desde 0, por ende se resta 1 ya que se empieza a contar desde e 1 de lado del front-end

    Swal.fire({
        title: titulos[numero],
        html: "<h5>" + descripcion[numero] + "<br/><br/><b>Precio: $" + precios[numero] + "</b></h5>",
        imageUrl: imagenes[numero],
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        
    })

}
    return (
    
        
        <div>
      <NavBar />
    
      
 <nav>
  <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown">
                                <img src="assets/img/carrito.png" align="left" class="derecha" height="50px"
                                    width="50px" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"></img>
                                <div id="carrito" class="dropdown-menu" aria-labelledby="navbarCollapse">
                                    <table id="lista-carrito" class="table"  height="110px"
                                    width="190px">
                                        <thead>
                                           <a href="#" id="vaciar-carrito" class="btn btn-secondary  "> <b>Vaciar Carrito</b> </a>
                                    <a href="#" id="procesar-pedido" class="btn btn-success  "><b> Facturar pedido </b></a>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody></tbody>
                                    </table>

                                 
                                </div>
                            </li>
                        </ul>
 </nav>


 <main>
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 my-4 mx-auto text-center">
            <h1 class="display-4 mt-4">Lista de Productos</h1>
          
        </div>
   <div class="descargar-menu">
                <p>
                  <center> <a href="pdf/Menu.pdf" class="btn-outline-danger" download="Menu.pdf"><i class="bi bi-download"></i>DESCARGAR MENÚ</a>
                    <br/><br/></center>
                </p>
             </div>
        <div class="container" id="lista-productos">
            
            <div class="card-deck mb-3 text-center">
                
                <div class="card mb-2 shadow-sm">
            
                     
           <div class="fila">
            <div class="row">

               <div class="col col-lg-4 col-md-4 col-sm-4 col-xs-8" id="lista-productos">
                    <div class="card text-center">
                     <img src="assets/img/platillos/menu1@2x.png" alt="Imagen Menu Plato 1" class="DiagonalRedonda" id="imgCuadro"/>
                       
                    </div>
                    <div class="card-body">
                      <h4 class="my-0 font-weight-bold">Costillares silvestres con calabacin asado </h4>
                        <h3 class="card-title pricing-card-title precio">$ <span class="">12000.00</span></h3>

                        <div class="list-unstyled mt-3 mb-4">
                              <button type="button" class="btn btn-outline-secundary mx-auto d-block mt-5 btn-lg" onclick="mostrarModal(1)"><i class="bi bi-plus-circle-fill"></i></button>
                              
         <div class="modal fade" id="modalForm1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <p>   <img src="assets/img/platillos/menu1@2x.png" alt="Imagen Menu Plato 1" class="DiagonalRedonda1"    id="imgCuadro"/>   Disfruta de nuestra especilidad <br/> costillares ahumados acompañado con calabacin silvestre. Ademas, como acompañamiento guisantes variados con salsa agridulce.</p>  
                    </div>
                </div>
                
                    
            </div>
 <script>
   
   </script>
                    <input type="number" class="input" min="1" value="1" placeholder="Cantidad" required/> <br/>
                        <a href="" class="btn btn-block btn-primary agregar-carrito" data-id="1">Comprar</a>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
              </main>

        <div class="container-fluid">

      <div class="section-title">
        <h2>Algunas fotos de <span>Nuestro Restaurante</span></h2>
        <p>Disponemos de multiples sedes a nivel nacional, estamos mas cerca de ti. </p>
      </div>

    <div class="row no-gutters">
 
       
        <div class="col-lg-3 col-md-4">
          <div class="gallery-item">
            <a href="./images/gallery-3.jpg" class="gallery-lightbox">
              <img src="./images/gallery-3.jpg" alt="" class="frame" />
            </a>
                 <center> <p><i class="bi bi-geo-alt-fill"></i> BOGOTA, CLL 44 AV 23 AB</p></center>
          </div>
        </div>
          <div class="col-lg-3 col-md-4">
          <div class="gallery-item">
            <a href="./images/gallery-3.jpg" class="gallery-lightbox">
              <img src="./images/gallery-3.jpg" alt="" class="frame" />
            </a>
                 <center> <p><i class="bi bi-geo-alt-fill"></i> BOGOTA, CLL 44 AV 23 AB</p></center>
          </div>
        </div>
          <div class="col-lg-3 col-md-4">
          <div class="gallery-item">
            <a href="./images/gallery-3.jpg" class="gallery-lightbox">
              <img src="./images/gallery-3.jpg" alt="" class="frame" />
            </a>
                 <center> <p><i class="bi bi-geo-alt-fill"></i> BOGOTA, CLL 44 AV 23 AB</p></center>
          </div>
        </div>  <div class="col-lg-3 col-md-4">
          <div class="gallery-item">
            <a href="./images/gallery-3.jpg" class="gallery-lightbox">
              <img src="./images/gallery-3.jpg" alt="" class="frame" />
            </a>
                 <center> <p><i class="bi bi-geo-alt-fill"></i> BOGOTA, CLL 44 AV 23 AB</p></center>
          </div>
        </div>
          <div class="col-lg-3 col-md-4">
          <div class="gallery-item">
            <a href="./images/gallery-3.jpg" class="gallery-lightbox">
              <img src="./images/gallery-3.jpg" alt="" class="frame" />
            </a>
                 <center> <p><i class="bi bi-geo-alt-fill"></i> BOGOTA, CLL 44 AV 23 AB</p></center>
          </div>
        </div>
          <div class="col-lg-3 col-md-4">
          <div class="gallery-item">
            <a href="./images/gallery-3.jpg" class="gallery-lightbox">
              <img src="./images/gallery-3.jpg" alt="" class="frame" />
            </a>
                 <center> <p><i class="bi bi-geo-alt-fill"></i> BOGOTA, CLL 44 AV 23 AB</p></center>
          </div>
        </div>
          <div class="col-lg-3 col-md-4">
          <div class="gallery-item">
            <a href="./images/gallery-3.jpg" class="gallery-lightbox">
              <img src="./images/gallery-3.jpg" alt="" class="frame" />
            </a>
                 <center> <p><i class="bi bi-geo-alt-fill"></i> BOGOTA, CLL 44 AV 23 AB</p></center>
          </div>
        </div>
          <div class="col-lg-3 col-md-4">
          <div class="gallery-item">
            <a href="./images/gallery-3.jpg" class="gallery-lightbox">
              <img src="./images/gallery-3.jpg" alt="" class="frame" />
            </a>
                 <center> <p><i class="bi bi-geo-alt-fill"></i> BOGOTA, CLL 44 AV 23 AB</p></center>
          </div>
        </div>
        </div>
        </div>
        
        </div>
      
        
 
              
    )
}
