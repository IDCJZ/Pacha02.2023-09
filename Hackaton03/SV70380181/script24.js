//24. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.

const factorialNumero = (valor) => {
    if (valor == 0) {
      return 1;
    }
  
    let valorRetornar = valor * factorialNumero(valor - 1);
  
    return valorRetornar;
  };
  
  const resultado = factorialNumero(5);
  console.log("el factorial de 5 es:", resultado);