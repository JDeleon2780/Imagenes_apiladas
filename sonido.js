
const imagenes = document.querySelectorAll('.imagen');

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', () => {
    const personaje = imagen.getAttribute('data-personaje');
    const sonido = document.getElementById(`${personaje}-sound`);
    
    if (sonido) {
      sonido.currentTime = 0; 
      sonido.play();
    }
    
  });
});
