//Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.

function esNumeroPerfecto(numero) {
    if (numero <= 0) {
      return false; // Los números negativos y cero no pueden ser perfectos.
    }
  
    let sumaDivisores = 0;
  
    // Itera a través de los posibles divisores desde 1 hasta la mitad del número.
    for (let divisor = 1; divisor <= numero / 2; divisor++) {
      if (numero % divisor === 0) {
        sumaDivisores += divisor;
      }
    }
  
    // Comprueba si la suma de los divisores es igual al número.
    return sumaDivisores === numero;
  }
  
  // Solicita al usuario que ingrese un número para verificar si es perfecto.
  const numero = parseInt(prompt("Ingresa un número para verificar si es un número perfecto:"));
  
  if (esNumeroPerfecto(numero)) {
    console.log(`${numero} es un número perfecto.`);
  } else {
    console.log(`${numero} no es un número perfecto.`);
  }