//33. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del un ol  nueve.

function tablaMultiplicar() {
    for (let i = 1; i <= 9; i++) {
      console.log(`tabla de multiplicar para ${i}`);
      console.log();
  
      for (let j = 0; j <= 12; j++) {
        const result = i * j;
        console.log(`${i} x ${j} = ${result}`);
      }
      console.log();
    }
  }
  
  tablaMultiplicar();