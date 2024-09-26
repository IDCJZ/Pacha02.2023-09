//Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.

// Pedir al usuario que ingrese un número entero
var numero = parseInt(prompt("Ingrese un número entero:"));

// Verificar si el número es negativo
if (numero < 0) {
    console.log("El número ingresado es negativo.");
} else if (numero === 0) {
    console.log("El número ingresado es igual a cero.");
} else {
    console.log("El número ingresado es positivo.");
}