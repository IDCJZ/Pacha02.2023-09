//Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
const numero = parseInt(prompt("Ingresa un número del 1 al 7:"));

// 2. Define un arreglo con los nombres de los días de la semana.
const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado"
];

// 3. Verifica si el número está en el rango válido (1 al 7).
if (numero >= 1 && numero <= 7) {
  // 4. Muestra el día correspondiente al número ingresado.
  const diaCorrespondiente = diasSemana[numero - 1];
  console.log(`El número ${numero} corresponde a ${diaCorrespondiente}.`);
} else {
  console.log("Número fuera de rango. Ingresa un número del 1 al 7.");
}