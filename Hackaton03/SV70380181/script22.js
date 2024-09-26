//22.Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n

const sumaImparesHastaN = (valor = 0) => {
    let suma = 0;
  
    for (let i = 1; i <= valor; i++) {
      if (i % 2 !== 0) {
        //   suma = suma + i;
        suma += i;
      }
    }
    return suma;
  };
  
  const resultado = sumaImparesHastaN(10);
  
  console.log(`La suma de los impares hasta 10 es: ${resultado}`);