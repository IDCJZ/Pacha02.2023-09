//Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
function mcdEuclides(a, b) {
    // Itera hasta que "b" sea igual a 0.
    while (b !== 0) {
      // Calcula el residuo de a dividido por b.
      const residuo = a % b;
      
      // Actualiza "a" con el valor de "b" y "b" con el valor del residuo.
      a = b;
      b = residuo;
    }
    
    // El valor de "a" será el MCD.
    return a;
  }
  
  // Solicita al usuario que ingrese dos números para calcular su MCD.
  const numero1 = parseInt(prompt("Ingresa el primer número:"));
  const numero2 = parseInt(prompt("Ingresa el segundo número:"));
  
  // Calcula el MCD utilizando el algoritmo de Euclides.
  const resultado = mcdEuclides(numero1, numero2);
  
  console.log(`El MCD de ${numero1} y ${numero2} es: ${resultado}`);