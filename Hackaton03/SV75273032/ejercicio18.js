//Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

//Cajero (56$/día).

//Servidor (64$/día).

//Preparador de mezclas (80$/día).

//Mantenimiento (48$/día).

//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

// 1. Solicita al usuario que ingrese el número identificador del empleado y la cantidad de días trabajados.
const numeroEmpleado = parseInt(prompt("Ingresa el número identificador del empleado (1 - 4):"));
const diasTrabajados = parseInt(prompt("Ingresa la cantidad de días trabajados (1 - 6):"));

// 2. Define los salarios diarios por tipo de empleado.
const salarioCajero = 56;
const salarioServidor = 64;
const salarioPreparador = 80;
const salarioMantenimiento = 48;

// 3. Valida que los valores ingresados sean válidos.
if (numeroEmpleado >= 1 && numeroEmpleado <= 4 && diasTrabajados >= 1 && diasTrabajados <= 6) {
  let salarioTotal = 0;

  // 4. Calcula el salario total en función del tipo de empleado.
  switch (numeroEmpleado) {
    case 1:
      salarioTotal = salarioCajero * diasTrabajados;
      break;
    case 2:
      salarioTotal = salarioServidor * diasTrabajados;
      break;
    case 3:
      salarioTotal = salarioPreparador * diasTrabajados;
      break;
    case 4:
      salarioTotal = salarioMantenimiento * diasTrabajados;
      break;
  }

  // 5. Muestra el salario total al empleado.
  console.log(`El empleado con número identificador ${numeroEmpleado} debe recibir $${salarioTotal} por trabajar ${diasTrabajados} días.`);
} else {
  console.log("Los valores ingresados no son válidos. Asegúrate de ingresar un número de empleado entre 1 y 4, y una cantidad de días trabajados entre 1 y 6.");
}