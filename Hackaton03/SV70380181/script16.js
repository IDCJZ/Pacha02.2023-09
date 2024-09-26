//16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.

const numero = parseInt(prompt('Ingrese un número del 1 al 7:'));

let diaSemana;

switch (numero) 
{
  case 1:
    diaSemana = 'Lunes';
    break;
  case 2:
    diaSemana = 'Martes';
    break;
  case 3:
    diaSemana = 'Miércoles';
    break;
  case 4:
    diaSemana = 'Jueves';
    break;
  case 5:
    diaSemana = 'Viernes';
    break;
  case 6:
    diaSemana = 'Sábado';
    break;
  case 7:
    diaSemana = 'Domingo';
    break;
  default:
    diaSemana = 'Número no válido';
}


console.log(`El número ${numero} corresponde a ${diaSemana}.`);
