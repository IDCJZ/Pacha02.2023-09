// Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.

const numero = prompt("Ingresa un número:");

// 2. Convierte la entrada del usuario a un número entero
const numeroEntero = parseInt(numero);

// 3. Verifica si el número termina en 4
if (!isNaN(numeroEntero) && numeroEntero % 10 === 4) {
  console.log(`El número ${numeroEntero} termina en 4.`);
} else {
  console.log(`El número ${numeroEntero} no termina en 4 o no es un número válido.`);
}