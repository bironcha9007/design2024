function setupGallery(containerg) {
  const preview = containerg.querySelector('.prev');
  const active = containerg.querySelectorAll('.thumb');

  containerg.addEventListener('click', function (e) {
    if (e.target.classList.contains('thumb')) {
      preview.src = e.target.src;
      preview.p = e.target.p;
      preview.classList.add('effect');

      setTimeout(function () {
        preview.classList.remove('effect');
      }, 100);

      active.forEach(function (thumb) {
        if (thumb.classList.contains('active')) {
          thumb.classList.remove('active');
        }
      });

      e.target.classList.add('active');
    }
  });
}

// Obtener todos los contenedores de galerías y configurarlos
const containers = document.querySelectorAll('.containerg');
containers.forEach(function (containerg) {
  setupGallery(containerg);
});

function playVideo() {
  const video = document.getElementById('background-video');
  video.play();
}