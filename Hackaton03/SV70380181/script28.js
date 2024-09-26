//28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.

let contador = 1;
let suma = 0;

do {
  suma += contador;
  contador++;
} while (contador <= 100);

alert(`La suma de los primeros cien números es: ${suma}`);
