
  
    // Muestra el botón flotante cuando se desplaza hacia abajo
  // Muestra el botón flotante cuando se desplaza hacia abajo
  window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });
  
  // Desplazamiento suave hacia arriba cuando se hace clic en el botón
  document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  