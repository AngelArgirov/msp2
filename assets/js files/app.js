let menu = document.querySelector('#mobile-menu');
let menuLinks = document.querySelector('.navbar__menu');
let navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
let mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
let highlightMenu = () => {
  let velm = document.querySelector('.highlight');
  let homeMenu = document.querySelector('#home-page');
  let aboutMenu = document.querySelector('#about-page');
  let servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 800 && scrollPos < 400) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 800 && scrollPos < 1200) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 800 && scrollPos < 2100) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((velm && window.innerWIdth < 800 && scrollPos < 400) || velm) {
    velm.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
let hideMobileMenu = () => {
  let menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 2400 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);



