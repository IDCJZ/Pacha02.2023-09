//15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.

function centimetrosAPulgadas(centimetros) {
    const pulgadas = centimetros / 2.54;
    return pulgadas;
  }
  
  function librasAKilogramos(libras) {
    const kilogramos = libras * 0.453592;
    return kilogramos;
  }
  
  const centimetros = parseFloat(prompt('Ingrese la cantidad en centímetros:'));
  const libras = parseFloat(prompt('Ingrese la cantidad en libras:'));
  
  const pulgadas = centimetrosAPulgadas(centimetros);
  const kilogramos = librasAKilogramos(libras);
  
  console.log(`${centimetros} centímetros son equivalentes a ${pulgadas.toFixed(2)} pulgadas.`);
  console.log(`${libras} libras son equivalentes a ${kilogramos.toFixed(2)} kilogramos.`);
  