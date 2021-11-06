import React, {useEffect, useState, } from 'react'
import '../../NavBar/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

 

export const Email = () => {


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
    <div class="container">

      <div class="section-title">
        
    
     
            
      <div class="row">
        <div class="col-lg-3">
          <ul class="nav nav-tabs flex-column">
            <li class="nav-item">
              <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1"> Envio de email</a>
            </li>
         
        
          </ul>
        </div>
        <div class="col-lg-9 mt-4 mt-lg-0">
          <div class="tab-content">
            <div class="tab-pane active show" id="tab-1">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>Contactenos</h3>
                  
                           
                     Cuentanos tus dudas, preguntas, solicitudes o peticiones <br /> <b> te responderemos en el mejor tiempo posible</b>  
        
		 
    <form id="form"> 
              
                         
                          <div class="row mb-1">
                          
                   
                          <label for="fromName">Nombre Completo</label>
                          <div class="row mb-1">
                              <div class="col-lg-12">
                                    <input type="text" name="destinatario"    class="form-control" data-toggle="tooltip" data-placement="left" title="Este es el nombre de la persona quien nos contactara" required />
                              </div>
                          </div>     
                          <label for="fromMail">Correo</label>
                          <div class="row mb-1">
                              <div class="col-lg-12">
                                      <input type="email" name="cc_to"  class="form-control" data-toggle="tooltip" data-placement="left" title="Aqui va su correo" required />
                              </div>
                          </div>
                          <label for="fromName">Numero de contacto</label>
                          <div class="row mb-1">
                              <div class="col-lg-12">
                                    <input type="number" name="numero"    class="form-control" data-toggle="tooltip" data-placement="left" title="Este es el Numero de la persona quien nos contactara" required />
                              </div>
                          </div> <label>Mensaje </label>
                       
           
                           <div class="row mb-1">
                              <div class="col-lg-12">
   
                        
                                  <ul class="nav nav-tabs" role="tablist">
                                   
                                    <li class="nav-item">
                                      <a class="nav-link active" data-toggle="tab" href="#raw-text" role="tab">Mensaje</a>
                                    </li>
                                  </ul>
    
                                  <div class="tab-content">
                                      
                                       <div class="tab-pane active" id="rich-text" role="tabpanel">
                                         
                                           <textarea id="editor" name="dato" rows="6" cols="20" class="form-control"></textarea>
                                       </div>
       
                                  
                      
                          
   <button type="submit" class="btn btn-success btn-sm mt-3" id="button" name="submit"    enable>ENVIAR EMAIL</button>
                          
    
                  
                   </div>            
                  </div> </div>            
                  </div>
       
 
    
</form>
       
     </div>     
     </div>     
     </div>     
     </div>     
     </div>     
     </div>   </div>     
     </div>  
     </section>
   
   
 
 
             
             </>
 
              
    )
    
     
 
 

  const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_f5lc8pb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
  
    
			 
				setTimeout(function() {
				swal({
						title: "Perfecto!",
						text: "Hemos enviado el correo, recibiras una copia como constancia, Revisa en SPAM si no aparece en tu bandeja de recibidos.",
						type: "success",
						showConfirmButton: false,
						timer: 3500
					}, function() {
					 		window.location = "index.php";
				});
				}, 1000);
			 
			 
    }, (err) => {
      btn.value = 'Send Email';
       
       swal({
						title: "Error!",
						text: "Ha ocurrido un error",
						type: "error",
						showConfirmButton: false,
						timer: 2000
					}, function() {
					 		window.location = "contactenos.php";
				});
				}, 1000);
});
 
<script src="https://code.jquery.com/jquery-2.1.3.min.js" />
		 
}
