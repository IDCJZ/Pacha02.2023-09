//Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.

// 1. Solicita al usuario que ingrese el valor de "n".
const n = parseInt(prompt("Ingresa el valor de 'n':"));

// 2. Verifica que "n" sea un número positivo.
if (n >= 0) {
  let suma = 0;

  // 3. Calcula la suma de los números impares menores o iguales a "n".
  for (let i = 1; i <= n; i += 2) {
    suma += i;
  }

  // 4. Muestra el resultado de la suma.
  console.log(`La suma de los números impares menores o iguales a ${n} es ${suma}`);
} else {
  console.log("Por favor, ingresa un número entero no negativo.");
}