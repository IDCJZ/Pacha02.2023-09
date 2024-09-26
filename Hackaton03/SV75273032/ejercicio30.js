// Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
let sumaPares = 0;
let sumaImpares = 0;
let contadorPares = 0;
let contadorImpares = 0;

for (let i = 1; i <= 10; i++) {
  const numero = parseInt(prompt(`Ingresa el número ${i}:`));

  if (numero % 2 === 0) {
    sumaPares += numero;
    contadorPares++;
  } else {
    sumaImpares += numero;
    contadorImpares++;
  }
}

if (contadorPares > 0) {
  const mediaPares = sumaPares / contadorPares;
  console.log(`La media de los números pares es: ${mediaPares}`);
} else {
  console.log("No se ingresaron números pares.");
}

if (contadorImpares > 0) {
  const mediaImpares = sumaImpares / contadorImpares;
  console.log(`La media de los números impares es: ${mediaImpares}`);
} else {
  console.log("No se ingresaron números impares.");
}