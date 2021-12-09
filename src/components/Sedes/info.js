import React, {useEffect, useState, } from 'react'
import '../NavBar/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
 
import { NavBar } from "../NavBar/Navbar.js";
 

export const Info = () => {
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
  console.log(localStorage.getItem("usu"));

})()
   
    return (
    
        
        <div>
      <NavBar />
      

      <br/> <div class="noticia">
  <img class="izquierda" src="assets/img/gallery/gallery-6.jpg"  width="300" height="400"/>
  <p style={{ color: 'black' }}> <br/><h3  style={{ color: 'black' }}>¿Quienes somos?</h3><br/> <br/>El restaurante la casita, ubicado en bogota, abrió sus puertas en el año de 1984 para acompañar a todas aquellas familias, turistas, empresarios y amigos amantes de la cocina típica y de tradición; del delicioso sabor de un sancocho de gallina hecho en leña, de unos exquisitos fríjoles, de un chorizo hecho en casa, o de una rica arepa de chócolo. Pero sobre todo, el Restaurante abrió sus puertas para todas las personas que aman vivir experiencias únicas, maravillosas y que perduren en el tiempo. <br/>

   <br/> Con el devenir del tiempo la cima se ha convertido en una gran familia, con un talento humano que desempeña su labor con amor, respeto y pasión; transmitiendo experiencias inolvidables a las personas que desde hace 32 años nos visitan, y que regresan para recordar su niñez, pero esta vez en compañía de sus hijos, nietos y gratos amigos.
  <br/><br/>Durante estos años, la cima se ha ido posicionando como uno de los mejores restaurantes gracias a su excelente comida, a su hermoso ambiente y acogedor espacio, y al esmerado servicio y atención al cliente de parte de nuestro talento humano.</p> <div class="reset"></div>
</div>

<br/><br/><br/>
<div class="container" data-aos="fade-up"/>

<div class="row"/>
  <div class="section-header">
    <h3>Equipo organizacional</h3>
    <p></p>
    <br/>


  </div>

 <div class="container">
  <div class="row">
    <div class="col">
      
    <div class="col-lg-4 col-md-6">
      <div class="member" data-aos="fade-up" data-aos-delay="200">
        <img src="assets/img/testimonials/testimonials-3.jpg" class="DiagonalRedonda" width="200" height="160" alt=""/>
        <div class="member-info">
          <div class="member-info-content">
             
            <div class="social">
            <br/>
               <p><b>DIANIS</b></p>
              <p> Sub Gerente</p>

              
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    <div class="col">
    <div class="col-lg-4 col-md-6">
      <div class="member" data-aos="fade-up" data-aos-delay="300">
        <img src="assets/img/testimonials/testimonials-4.jpg"  class="DiagonalRedonda" width="200" height="160" alt=""/>
        <div class="member-info">
          <div class="member-info-content">
          
            <div class="social"><br/>
               <p><b>DANIEL</b></p>
                <p>Manager Princial</p>
  
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    
    <div class="col">
      
    <div class="col-lg-4 col-md-6">
      <div class="member" data-aos="fade-up" data-aos-delay="400">
        <img src="assets/img/testimonials/testimonials-1.jpg"  class="DiagonalRedonda" width="200" height="160" alt=""/>
        <div class="member-info">
          <div class="member-info-content">
           
            <div class="social">
            <br/>
               <p><b>JORGE</b></p>
                <p>Coordinador General</p>
    
             
            </div>
          </div>
        </div>
        </div> </div>
    </div>
  </div>
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

   
  

    

      
    
</div>     
    
    </div>     
    
    
 
              
    )
}
