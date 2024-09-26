//Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

let suma = 0;
let cantidad = 0;

while (true) {
  // Solicita al usuario que ingrese un número.
  const numero = parseInt(prompt("Ingresa un número positivo (ingresa un número negativo para terminar):"));

  // Verifica si el número ingresado es negativo.
  if (numero < 0) {
    break; // Termina el bucle si se ingresa un número negativo.
  }

  // Verifica que el número ingresado sea positivo.
  if (numero >= 0) {
    suma += numero;
    cantidad++;
  }
}

// Calcula la media.
if (cantidad > 0) {
  const media = suma / cantidad;
  console.log(`La media de los números ingresados es: ${media}`);
} else {
  console.log("No se ingresaron números positivos.");
}