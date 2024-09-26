//Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

// 1. Solicita al usuario que ingrese el salario actual del trabajador.
const salarioActual = parseFloat(prompt("Ingresa el salario actual del trabajador:"));

// 2. Define los porcentajes de aumento.
const aumentoMayor2000 = 0.05; // 5% de aumento para salarios mayores a $2000
const aumentoMenor2000 = 0.10; // 10% de aumento para salarios menores o iguales a $2000

// 3. Calcula el aumento salarial.
let aumento = 0;

if (salarioActual > 2000) {
  aumento = salarioActual * aumentoMayor2000;
} else {
  aumento = salarioActual * aumentoMenor2000;
}

// 4. Calcula el nuevo salario después del aumento.
const nuevoSalario = salarioActual + aumento;

// 5. Muestra el aumento y el nuevo salario al trabajador.
console.log(`Salario actual: $${salarioActual.toFixed(2)}`);
console.log(`Aumento salarial: $${aumento.toFixed(2)}`);
console.log(`Nuevo salario: $${nuevoSalario.toFixed(2)}`);