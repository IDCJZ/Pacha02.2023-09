//31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.

let sumaPares = 0;
let sumaImpares = 0;
let contadorPares = 0;
let contadorImpares = 0;

for (let i = 1; i <= 10; i++) 
{
  const numero = parseFloat(prompt(`Ingrese el número ${i}:`));

  if (isNaN(numero))
 {
    console.log('Entrada no válida. Ingrese un número válido.');
    i--; 
    continue;
  }

  if (numero % 2 === 0)
 {
    sumaPares += numero;
    contadorPares++;
  } else
  {
    sumaImpares += numero;
    contadorImpares++;
  }
}

const mediaPares = contadorPares > 0 ? sumaPares / contadorPares : 0;
const mediaImpares = contadorImpares > 0 ? sumaImpares / contadorImpares : 0;

console.log(`La media de los números pares ingresados es: ${mediaPares}`);
console.log(`La media de los números impares ingresados es: ${mediaImpares}`);
