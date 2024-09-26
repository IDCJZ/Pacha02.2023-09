//Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

// 1. Solicita al usuario que ingrese la hora en formato HH:MM:SS.
const horaActual = prompt("Ingresa la hora en formato HH:MM:SS:");

// 2. Divide la hora ingresada en horas, minutos y segundos.
const partesHora = horaActual.split(':');
const horas = parseInt(partesHora[0]);
const minutos = parseInt(partesHora[1]);
const segundos = parseInt(partesHora[2]);

// 3. Calcula la hora un segundo después.
let nuevaHora, nuevoMinuto, nuevoSegundo;

if (segundos < 59) {
  nuevoSegundo = segundos + 1;
  nuevoMinuto = minutos;
  nuevaHora = horas;
} else if (minutos < 59) {
  nuevoSegundo = 0;
  nuevoMinuto = minutos + 1;
  nuevaHora = horas;
} else if (horas < 23) {
  nuevoSegundo = 0;
  nuevoMinuto = 0;
  nuevaHora = horas + 1;
} else {
  nuevoSegundo = 0;
  nuevoMinuto = 0;
  nuevaHora = 0;
}

// 4. Formatea la nueva hora en HH:MM:SS.
const horaNuevaFormateada = `${nuevaHora.toString().padStart(2, '0')}:${nuevoMinuto.toString().padStart(2, '0')}:${nuevoSegundo.toString().padStart(2, '0')}`;

// 5. Muestra la hora un segundo después.
console.log(`La hora un segundo después de ${horaActual} es ${horaNuevaFormateada}.`);