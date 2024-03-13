const main = document.getElementById("main-page");
const video = document.getElementById("invitacion");
const btnStart = document.getElementById("btn-start");
const btnRegalos = document.getElementById("regalo");



// Obtener el idioma del dispositivo
const idioma = navigator.language || navigator.userLanguage;

// Verificar si el idioma está en inglés
if (idioma.startsWith("en")) {
  console.log("El idioma del dispositivo es inglés");
  video.src = "invitacion_en.mp4";
} 




// Define las funciones de los event listeners
function cargarVideo() {
  console.log("Video cargado");

  btnStart.addEventListener("click", iniciarReproduccion);
}

function iniciarReproduccion() {
  // Reproducir el video
  video.play();
  
  // Ocultar el elemento principal después de un tiempo
  main.classList.add("desaparecer");
  setTimeout(() => {
    main.style.display = "none";
  }, 500);

  // Mostrar el botón de regalos después de un tiempo específico
  setTimeout(() => {
    btnRegalos.classList.add("show");
  }, video.duration * 1000 - 9500);

  // Eliminar los event listeners después de la reproducción
  btnStart.removeEventListener("click", iniciarReproduccion);
}

function videoTerminado() {
  console.log("Video terminado");
  // Realizar acciones después de que el video haya terminado de reproducirse
}

// Agregar event listeners una vez que todo el código ha cargado
window.onload = () => {
  cargarVideo();
  video.addEventListener("ended", videoTerminado);
};
