//34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.

for (let multiplicando = 1; multiplicando <= 9; multiplicando++)
 {
    console.log(`Tabla de multiplicar del ${multiplicando}:`);
    
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
      const resultado = multiplicando * multiplicador;
      console.log(`${multiplicando} x ${multiplicador} = ${resultado}`);
    }
    
    console.log(""); 
  }
  