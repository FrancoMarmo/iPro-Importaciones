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

  // Si el menú móvil está oculto ('none' o vacío), lo muestra cambiando a 'flex'.
  // Si el menú móvil ya está visible ('flex'), lo oculta cambiando a 'none'.
  const toggleMenu = () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "none" || mobileMenu.style.display === ""
        ? "flex"
        : "none";
  };

  // Ocultar la lista desplegable
  const hideMenuOnResize = () => {
    mobileMenu.style.display = "none";
  };

  // Event listeners
  toggleButton.addEventListener("click", toggleMenu);
  window.addEventListener("resize", hideMenuOnResize);
  window.addEventListener("load", hideMenuOnResize);

  // Cerrar el menú cuando se hace clic en un enlace del menú móvil
  const mobileLinks = document.querySelectorAll(".nav__link-mobile");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });
  });
});

// jQuery para el slider
$(document).ready(function() {
  $('#autoWidth').lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function() {
      $('#autoWidth').removeClass('cS-hidden');
    }
  });
});
