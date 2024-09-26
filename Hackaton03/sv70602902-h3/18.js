//19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de 
//empleados ordenados de la siguiente forma con su número identificador y salario 
//diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números 
//enteros que representen al número identificador del empleado y la cantidad de 
//días que trabajó en la semana (6 días máximos). Y el programa le mostrará 
//por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que 
//ingresó

let identificador = parseInt(prompt("Ingrese el número identificador del empleado: "));
let dias_trabajados = parseInt(prompt("Ingrese la cantidad de días que trabajó el empleado (máximo 6 días): "));

let salario_diario;

switch (identificador) {
  case 1:
    salario_diario = 56;
    break;
  case 2:
    salario_diario = 64;
    break;
  case 3:
    salario_diario = 80;
    break;
  case 4:
    salario_diario = 48;
    break;
  default:
    console.log("El número identificador ingresado no es válido.");
}

if (dias_trabajados > 6) {
  console.log("La cantidad de días ingresada es mayor a 6.");
} else {
  let salario_semanal = dias_trabajados * salario_diario;
  console.log("El dueño de la tienda debe pagar $" + salario_semanal + " al empleado.");
}

