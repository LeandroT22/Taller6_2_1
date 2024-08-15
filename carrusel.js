let diapositivaActual = 0;
const diapositivas = document.querySelectorAll('.diapositiva-carrusel');

function mostrarDiapositiva(indice) {
    diapositivas[diapositivaActual].classList.remove('activa');
    diapositivaActual = (indice + diapositivas.length) % diapositivas.length;
    diapositivas[diapositivaActual].classList.add('activa');
}

function diapositivaSiguiente() {
    mostrarDiapositiva(diapositivaActual + 1);
}

function diapositivaAnterior() {
    mostrarDiapositiva(diapositivaActual - 1);
}

// Iniciar con la primera diapositiva visible
document.addEventListener('DOMContentLoaded', () => {
    mostrarDiapositiva(diapositivaActual);
});
