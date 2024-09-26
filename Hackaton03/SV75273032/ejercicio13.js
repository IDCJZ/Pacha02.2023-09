//Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

// 1. Solicita al usuario que ingrese un número entero positivo del 1 al 10 (excluyendo el 9).
const numero = parseInt(prompt("Ingresa un número entero positivo del 1 al 10 (excluyendo el 9):"));

// 2. Verifica si el número es un número primo.
let esPrimo = false;

if (numero >= 1 && numero <= 10 && numero !== 9) {
  if (numero === 1) {
    // El 1 no se considera un número primo.
    esPrimo = false;
  } else {
    esPrimo = true; // Suponemos que es primo y luego verificamos.
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        // Si es divisible por otro número que no sea 1 o sí mismo, no es primo.
        esPrimo = false;
        break;
      }
    }
  }
}

// 3. Muestra el resultado al usuario.
if (esPrimo) {
  console.log(`El número ${numero} es un número primo.`);
} else {
  console.log(`El número ${numero} no es un número primo.`);
}