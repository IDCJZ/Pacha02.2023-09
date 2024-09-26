//Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
// 1. Solicita al usuario que ingrese el valor de "n" (cantidad de números a sumar).
const n = parseInt(prompt("Ingresa el valor de 'n' (cantidad de números a sumar):"));

// 2. Verifica que "n" sea un número positivo.
if (n >= 0) {
  // 3. Calcula la suma de los primeros "n" números utilizando la fórmula matemática.
  const suma = (n * (n + 1)) / 2;

  // 4. Muestra el resultado de la suma.
  console.log(`La suma de los primeros ${n} números es ${suma}`);
} else {
  console.log("Por favor, ingresa un número entero no negativo.");
}