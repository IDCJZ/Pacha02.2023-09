//35. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

function calcularMCD(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  const num1 = parseInt(prompt('Ingrese el primer número:'));
  const num2 = parseInt(prompt('Ingrese el segundo número:'));
  
  const mcd = calcularMCD(num1, num2);
  console.log(`El MCD de ${num1} y ${num2} es: ${mcd}`);
  