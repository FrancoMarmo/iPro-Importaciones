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

document.addEventListener("DOMContentLoaded", () => {
  // Seleccion de elementos del DOM
  const toggleButton = document.querySelector(".navbar__toggle-btn");
  const mobileMenu = document.querySelector(".navbar__mobile-menu");

  // event listeners
  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  // ocultar la lista desplegable al hacer clic en un enlace en el menú móvil
  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });

  // ocultar la lista desplegable al hacer clic en cualquier lugar fuera del menú móvil
  document.addEventListener("click", (event) => {
    if (!toggleButton.contains(event.target) && !mobileMenu.contains(event.target)) {
      mobileMenu.classList.remove("show");
    }
  });

  // ocultar la lista desplegable en cambios de tamaño de pantalla
  window.addEventListener("resize", () => {
    mobileMenu.classList.remove("show");
  });
});





$(document).ready(function() {
  $ ('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});