//Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.

// 1. Solicita al usuario que ingrese dos números.
const numero1 = parseFloat(prompt("Ingresa el primer número:"));
const numero2 = parseFloat(prompt("Ingresa el segundo número:"));

// 2. Compara los números para encontrar el mayor.
let mayor;

if (numero1 > numero2) {
  mayor = numero1;
} else if (numero2 > numero1) {
  mayor = numero2;
} else {
  mayor = "Los números son iguales";
}

// 3. Muestra el número mayor o un mensaje si son iguales.
console.log(`El número mayor es: ${mayor}`);