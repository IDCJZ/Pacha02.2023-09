//34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.
for (let i = 1; i <= 9; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
      row += `${i} x ${j} = ${i * j}\t`;
    }
    console.log(row);
  }
  