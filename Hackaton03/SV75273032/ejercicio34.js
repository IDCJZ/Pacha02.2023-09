//Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
function fibonacciIterativo(n) {
    let fib = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return fib;
  }
  
  const n = parseInt(prompt("Ingresa la cantidad de términos de la serie de Fibonacci que deseas calcular:"));
  const serieFibonacci = fibonacciIterativo(n);
  
  console.log(`Los primeros ${n} términos de la serie de Fibonacci son: ${serieFibonacci.join(", ")}`);