// Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

const horasTrabajadas = parseFloat(prompt("Ingresa la cantidad de horas trabajadas en la semana:"));

// 2. Define la tarifa por hora regular y la tarifa por hora extra.
const tarifaHoraRegular = 20; // $20 por hora regular
const tarifaHoraExtra = 25;   // $25 por hora extra

// 3. Calcula el sueldo semanal.
let sueldoSemanal;

if (horasTrabajadas <= 40) {
  // Si trabajó 40 horas o menos, calcula el sueldo sin horas extras.
  sueldoSemanal = horasTrabajadas * tarifaHoraRegular;
} else {
  // Si trabajó más de 40 horas, calcula el sueldo con horas extras.
  const horasNormales = 40; // Primeras 40 horas se pagan como regulares.
  const horasExtras = horasTrabajadas - horasNormales;
  sueldoSemanal = (horasNormales * tarifaHoraRegular) + (horasExtras * tarifaHoraExtra);
}

// 4. Muestra el sueldo semanal al trabajador.
console.log(`El sueldo semanal es: $${sueldoSemanal}`);