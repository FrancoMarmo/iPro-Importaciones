// document.addEventListener("DOMContentLoaded", () => {
//   // Seleccion de elementos del DOM
//   const toggleButton = document.querySelector(".navbar__toggle-btn");
//   const mobileMenu = document.querySelector(".navbar__mobile-menu");

//   // Si el menú móvil está oculto ('none' o vacío), lo muestra cambiando a 'flex'.
//   // Si el menú móvil ya está visible ('flex'), lo oculta cambiando a 'none'.
//   const toggleMenu = () => {
//     mobileMenu.style.display =
//       mobileMenu.style.display === "none" || mobileMenu.style.display === ""
//         ? "flex"
//         : "none";
//   };

//   // ocultar la lista desplegable
//   const hideMenuOnResize = () => {
//     mobileMenu.style.display = "none";
//   };

//   // event listeners
//   toggleButton.addEventListener("click", toggleMenu);
//   window.addEventListener("resize", hideMenuOnResize);
//   window.addEventListener("load", hideMenuOnResize);
// });







// $(document).ready(function() {
//   $ ('#autoWidth').lightSlider({
//       autoWidth:true,
//       loop:true,
//       onSliderLoad: function() {
//           $('#autoWidth').removeClass('cS-hidden');
//       } 
//   });  
// });


document.addEventListener("DOMContentLoaded", () => {
  // Seleccion de elementos del DOM
  const toggleButton = document.querySelector(".navbar__toggle-btn");
  const mobileMenu = document.querySelector(".navbar__mobile-menu");

  // Función para alternar la visibilidad del menú móvil
  const toggleMenu = () => {
    mobileMenu.classList.toggle("show-menu");
  };

  // Ocultar la lista desplegable
  const hideMenuOnResize = () => {
    mobileMenu.classList.remove("show-menu");
  };

  // Event listeners
  toggleButton.addEventListener("click", toggleMenu);
  window.addEventListener("resize", hideMenuOnResize);
  window.addEventListener("load", hideMenuOnResize);

  // Cerrar el menú cuando se hace clic en un enlace del menú móvil
  const mobileLinks = document.querySelectorAll(".nav__link-mobile");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show-menu");
    });
  });
});



// jQuery para el slider
$(document).ready(function() {
  $('#autoWidth').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000, // Ajusta la velocidad de reproducción automática
     prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
     nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
  });
});

