//6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

function calcularSueldoSemanal(horasTrabajadas)
 {
    const tarifaPorHora = 20;
    const tarifaHoraExtra = 25; 
    const horasNormales = 40;
  
    let sueldo = 0;
  
    if (horasTrabajadas <= horasNormales)
     {
      sueldo = horasTrabajadas * tarifaPorHora;
    } 
    else
     {
      const horasExtras = horasTrabajadas - horasNormales;
      sueldo = (horasNormales * tarifaPorHora) + (horasExtras * tarifaHoraExtra);
    }
  
    return sueldo;
  }
  
  const horasTrabajadas = parseFloat(prompt('Ingrese el número de horas trabajadas en la semana:'));
  
  const sueldoSemanal = calcularSueldoSemanal(horasTrabajadas);
  console.log(`El sueldo semanal del trabajador es: $${sueldoSemanal}`);
  