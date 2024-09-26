//Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.

// 1. Solicita al usuario que ingrese una cantidad en centímetros.
const centimetros = parseFloat(prompt("Ingresa una cantidad en centímetros:"));

// 2. Define la tasa de conversión de centímetros a pulgadas.
const pulgadasPorCentimetro = 0.393701;

// 3. Realiza la conversión de centímetros a pulgadas.
const pulgadas = centimetros * pulgadasPorCentimetro;

// 4. Muestra el resultado de la conversión en pulgadas.
console.log(`${centimetros} centímetros equivalen a ${pulgadas.toFixed(2)} pulgadas.`);

// 5. Solicita al usuario que ingrese una cantidad en libras.
const libras = parseFloat(prompt("Ingresa una cantidad en libras:"));

// 6. Define la tasa de conversión de libras a kilogramos.
const kilogramosPorLibra = 0.453592;

// 7. Realiza la conversión de libras a kilogramos.
const kilogramos = libras * kilogramosPorLibra;

// 8. Muestra el resultado de la conversión en kilogramos.
console.log(`${libras} libras equivalen a ${kilogramos.toFixed(2)} kilogramos.`);