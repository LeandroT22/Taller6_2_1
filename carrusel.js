const imagenes = ["img1.jpg", "img2.jpg"];
let indiceActual = 0;

const imagenCarrusel = document.getElementById("imagen-carrusel");
const botonAnterior = document.getElementById("boton-anterior");
const botonSiguiente = document.getElementById("boton-siguiente");

function mostrarImagen(indice) {
    imagenCarrusel.src = imagenes[indice];
}

botonAnterior.addEventListener("click", () => {
    indiceActual = (indiceActual === 0) ? imagenes.length - 1 : indiceActual - 1;
    mostrarImagen(indiceActual);
});

botonSiguiente.addEventListener("click", () => {
    indiceActual = (indiceActual === imagenes.length - 1) ? 0 : indiceActual + 1;
    mostrarImagen(indiceActual);
});
