//Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

// 1. Solicita al usuario que ingrese una letra.
const letra = prompt("Ingresa una letra:").toLowerCase();

// 2. Comprueba si la letra es una vocal.
let esVocal = false;

switch (letra) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    esVocal = true;
    break;
}

// 3. Muestra el resultado al usuario.
if (esVocal) {
  console.log(`La letra "${letra}" es una vocal.`);
} else {
  console.log(`La letra "${letra}" no es una vocal.`);
}