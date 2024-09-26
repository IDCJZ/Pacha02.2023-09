//25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.

function calcularFactorial(numero)
 {
    if (numero === 0)
     {
      return 1; 
    } else
    {
      return numero * calcularFactorial(numero - 1);
    }
  }
  
  const numero = parseInt(prompt('Ingrese un número para calcular su factorial:'));
  
  const resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es: ${resultado}`);
  