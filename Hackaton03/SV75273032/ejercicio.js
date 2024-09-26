//Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

const numero = prompt("Por favor, ingrese un número:");

// Verificar si el número tiene tres dígitos
if (numero.length === 3 && !isNaN(numero)) {
  console.log(`El número ${numero} tiene tres dígitos.`);
} else {
  console.log(`El número ${numero} no tiene tres dígitos.`);
}

