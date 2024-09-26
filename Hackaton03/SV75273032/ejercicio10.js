//Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.


// 1. Solicita al usuario que ingrese tres números.
const numero1 = parseFloat(prompt("Ingresa el primer número:"));
const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
const numero3 = parseFloat(prompt("Ingresa el tercer número:"));

// 2. Compara los números para encontrar el mayor.
let mayor = numero1;

if (numero2 > mayor) {
  mayor = numero2;
}

if (numero3 > mayor) {
  mayor = numero3;
}

// 3. Muestra el número mayor al usuario.
console.log(`El número mayor es: ${mayor}`);