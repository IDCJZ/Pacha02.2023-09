//36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.

function calcularFibonacci(n)
 {
    const fibonacci = [0, 1]; 
  
    for (let i = 2; i <= n; i++) 
    {
      const siguiente = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(siguiente);
    }
  
    return fibonacci;
  }
  
  const n = parseInt(prompt('Ingrese el número de términos de la serie de Fibonacci que desea calcular:'));
  
  if (n <= 0) {
    console.log('Por favor, ingrese un número mayor que cero.');
  } else
   {
    const resultado = calcularFibonacci(n);
    console.log(`Los primeros ${n} términos de la serie de Fibonacci son: ${resultado.join(', ')}`);
  }
  