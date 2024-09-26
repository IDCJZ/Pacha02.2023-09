3.
//Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.

function terminaCuatro(valor = 0, valorUltimo) {
  const valorString = valor.toString();

  const array2 = valorString.split("");

  const ultimoValor = array2[array2.length - 1];

  if (ultimoValor == valorUltimo) {
    console.log(`el numero ${valor} termina en ${valorUltimo}`);
  } else {
    console.log(`el numero ${valor}  no termina en ${valorUltimo}`);
  }
}

terminaCuatro(2382384, 4);