import getImagenes from './api.js';

// Variables globales
const form = document.querySelector('form');
const seccionImg = document.querySelector('.imagenes');
const palabraBusq = document.querySelector('.palabra');
const imgCarga = document.querySelector('#img-carga');
imgCarga.style.display = 'none';

// Eventos con <script type="module"></script>
form.addEventListener('submit', formEnviado);

async function formEnviado(e) {
  e.preventDefault();
  
  const formData = new FormData(form);
  const termBusqueda = formData.get('term-busqueda');
  imgCarga.style.display = '';
  palabraBusq.textContent = `Has buscado: ${termBusqueda}`;

  try {
    const imagenes = await getImagenes(termBusqueda);
    mostrarImagenes(imagenes);
  } catch(error) {
    // Mostrar error
  }

  form.reset();
}

// Funciones
function mostrarImagenes(imagenes) {
  seccionImg.innerHTML = '';

  // Con map y join
  // seccionImg.innerHTML  =imagenes.map((imagen) => {
  //   return `<img src="${imagen.image}">`;
  // }).join('');

  // Con reduce
  // seccionImg.innerHTML = imagenes.reduce((html, imagen) => {
  //   return html + `<img src="${imagen.image}">`;
  // }, '');

  imagenes.forEach((item) => {
    const elemImg = document.createElement('img');
    elemImg.src = item.image;
    seccionImg.append(elemImg);
  });

  imgCarga.style.display = 'none';
}