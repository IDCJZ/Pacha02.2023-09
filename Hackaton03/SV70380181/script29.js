//29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.

let contador = 1;
let suma = 0;


while (contador <= 100) 
{
  suma += contador;
  contador++;
}

alert(`La suma de los primeros cien números es: ${suma}`);
