//Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.

let suma = 0;
let numero = 1;
let contador = 0;

do {
  suma += numero;
  numero++;
  contador++;
} while (contador < 100);

console.log(`La suma de los primeros cien números es: ${suma}`);
