//Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

// 1. Solicita al usuario que ingrese un número entero no negativo.
const numero = parseInt(prompt("Ingresa un número entero no negativo para calcular su factorial:"));

// 2. Verifica que el número ingresado sea válido (no negativo).
if (numero >= 0) {
  let factorial = 1;

  // 3. Calcula el factorial utilizando un bucle for.
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  // 4. Muestra el resultado del factorial.
  console.log(`El factorial de ${numero} es ${factorial}`);
} else {
  console.log("Por favor, ingresa un número entero no negativo.");
}