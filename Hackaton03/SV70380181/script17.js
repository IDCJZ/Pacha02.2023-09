//17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

const horaUsuario = prompt('Ingrese la hora en formato HH:MM:SS:');

const partesHora = horaUsuario.split(':');

const hora = parseInt(partesHora[0]);
const minutos = parseInt(partesHora[1]);
const segundos = parseInt(partesHora[2]);

let nuevaHora = hora;
let nuevosMinutos = minutos;
let nuevosSegundos = segundos + 1;

if (nuevosSegundos >= 60) 
{
  nuevosSegundos = 0;
  nuevosMinutos += 1;

  if (nuevosMinutos >= 60) 
  {
    nuevosMinutos = 0;
    nuevaHora += 1;

    if (nuevaHora >= 24)
     {
      nuevaHora = 0; 
    }
  }
}


const horaFormateada = hora.toString().padStart(2, '0');
const minutosFormateados = nuevosMinutos.toString().padStart(2, '0');
const segundosFormateados = nuevosSegundos.toString().padStart(2, '0');

console.log(`La hora un segundo después es: ${horaFormateada}:${minutosFormateados}:${segundosFormateados}`);
