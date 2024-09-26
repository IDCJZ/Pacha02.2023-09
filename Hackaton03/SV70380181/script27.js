//27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

let suma = 0;
let contador = 0;

while (true)
 {
  const numero = parseFloat(prompt('Ingrese un número positivo (o un número negativo para finalizar):'));

  if (numero < 0) 
  {
    break; 
  }

  if (isNaN(numero) || numero < 0)
 {
    console.log('Por favor, ingrese un número positivo válido.');
    continue; 
  }

  suma += numero;
  contador++;
}


if (contador > 0) {
  const media = suma / contador;
  console.log(`La media de los números ingresados es: ${media.toFixed(2)}`);
} else {
  console.log('No se ingresaron números positivos.');
}

