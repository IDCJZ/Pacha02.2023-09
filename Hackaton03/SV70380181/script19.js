//19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos).
//Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

function calcularSalario(identificador, diasTrabajados)
 {
    let salarioDiario = 0;
  
    switch (identificador)
     {
      case 1:
        salarioDiario = 56; 
        break;
      case 2:
        salarioDiario = 64; 
        break;
      case 3:
        salarioDiario = 80; 
        break;
      case 4:
        salarioDiario = 48;
        break;
      default:
        return 0; 
    }
  
    const salarioTotal = salarioDiario * diasTrabajados;
    return salarioTotal;
  }
  
  const identificador = parseInt(prompt('Ingrese el número identificador del empleado (1, 2, 3 o 4):'));
  const diasTrabajados = parseInt(prompt('Ingrese la cantidad de días trabajados en la semana (máximo 6 días):'));

  const salarioPagar = calcularSalario(identificador, diasTrabajados);

  if (salarioPagar > 0) {
    console.log(`El salario a pagar al empleado es: $${salarioPagar}`);
  } else {
    console.log('Identificador o cantidad de días no válidos.');
  }
  