//Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.
// Itera a través de los números del 1 al 9.
for (let multiplicador = 1; multiplicador <= 9; multiplicador++) {
    console.log(`Tabla de multiplicar del ${multiplicador}:`);
    
    // Itera a través de los números del 1 al 10 para cada multiplicador.
    for (let multiplicando = 1; multiplicando <= 10; multiplicando++) {
      const resultado = multiplicador * multiplicando;
      console.log(`${multiplicador} x ${multiplicando} = ${resultado}`);
    }
    
    console.log(); // Agrega una línea en blanco para separar las tablas.
  }