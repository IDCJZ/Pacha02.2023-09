//Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.

let suma = 0;
let numero = 1;
let contador = 0;

while (contador < 100) {
  suma += numero;
  numero++;
  contador++;
}

console.log(`La suma de los primeros cien números es: ${suma}`);