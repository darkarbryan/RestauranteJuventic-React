import React from 'react'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

import { Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import './NavBar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';




export const NavBar2 = () => {
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

  })
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

    })

  return (

    <header id="header" class="fixed-top d-flex align-items-center header-transparent">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

        <img
          src="./images/icon.png"
          width="35"
          height="40"
          className="d-inline-block align-top"
          alt="logo"
        />
        <div class="logo me-auto">
          <h1> La Casita</h1>

          <div style={{ color: '#ffc56e' }} class="bi bi-clock ms-4 d-none d-lg-flex align-items-center" ><span style={{ color: '#ffc56e' }}>Atenci??n 24 horas</span></div>
        </div>


        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><Link to="/" className="nav-link bi bi-house">Inicio</Link></li>
            <li> <Link to="/info" class="nav-link scrollto bi bi-person-circle">??Quienes somos?</Link></li>
            <li><Link to="/menu" class="nav-link scrollto bi bi-receipt-cutoff" >Platos</Link></li>
            <li><Link to="/servicios" class="nav-link scrollto  bi bi-ui-checks-grid" >Servicios</Link></li>
            <li><Link to="/contacto" class="nav-link scrolltobi bi-telephone-plus" >Contactenos</Link></li>
            <li><Link to="/login" className="nav-link bi bi-key-fill">Ingresar</Link></li>

          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>






      </div>

    </header>

  )
}



