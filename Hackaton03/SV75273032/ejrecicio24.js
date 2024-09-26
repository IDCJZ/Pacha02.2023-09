//Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.

// Función recursiva de cola para calcular el factorial.
function factorial(numero, resultado = 1) {
    if (numero === 0) {
      return resultado;
    } else {
      return factorial(numero - 1, resultado * numero);
    }
  }
  
  // Solicita al usuario que ingrese el número para calcular su factorial.
  const numero = parseInt(prompt("Ingresa un número entero no negativo para calcular su factorial:"));
  
  if (numero >= 0) {
    const resultado = factorial(numero);
    console.log(`El factorial de ${numero} es ${resultado}`);
  } else {
    console.log("Por favor, ingresa un número entero no negativo.");
  }