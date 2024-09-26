//Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

function calcularAumentoSalario(salarioActual)
 {
    let aumento = 0;
  
    if (salarioActual > 2000) 
    {
      aumento = salarioActual * 0.05; 
    } else {
      aumento = salarioActual * 0.10; 
    }
  
    return aumento;
  }
  
  const salarioActual = parseFloat(prompt('Ingrese el salario actual del trabajador:'));
  
  const aumento = calcularAumentoSalario(salarioActual);
  
  const nuevoSalario = salarioActual + aumento;

  console.log(`Aumento salarial: $${aumento.toFixed(2)}`);
  console.log(`Nuevo salario: $${nuevoSalario.toFixed(2)}`);
  