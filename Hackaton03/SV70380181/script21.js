//21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

function calcularFactorial(numero)
 {
    let factorial = 1;
    if (numero < 0)
    {
      return "No se puede calcular el factorial de un número negativo.";
    }
    
    for (let i = 2; i <= numero; i++) 
    {
      factorial *= i;
    }
  
    return factorial;
  }
  
  const numero = parseInt(prompt('Ingrese un número para calcular su factorial:'));
  
  const resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es: ${resultado}`);
  