//20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos 
//y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta 
//comprendido entre los valores 50 y 700. Si cumple se cumple la segunda 
//condición, calcular la suma de los 4 números.
let numeros = [];

for (let i = 1; i <= 4; i++) {
  let numero = parseInt(prompt("Ingrese el número " + i + ": "));
  if (numero > 0) {
    numeros.push(numero);
  } else {
    console.log("El número ingresado no es positivo.");
    break;
  }
}

let pares = 0;
let mayor = numeros[0];
let cuadrado = 0;
let media = 0;
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    pares++;
  }
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
  if (i == 1 && numeros[2] % 2 == 0) {
    cuadrado = numeros[1] * numeros[1];
  }
  if (numeros[0] < numeros[3]) {
    media = (numeros[0] + numeros[1] + numeros[2] + numeros[3]) / 4;
  }
  if (numeros[1] > numeros[2] && numeros[2] >= 50 && numeros[2] <= 700) {
    suma = numeros[0] + numeros[1] + numeros[2] + numeros[3];
  }
}

console.log("Cantidad de números pares: " + pares);
console.log("El número mayor es: " + mayor);

if (cuadrado != 0) {
  console.log("El cuadrado del segundo número es: " + cuadrado);
}

if (media != 0) {
  console.log("La media de los cuatro números es: " + media);
}

if (suma != 0) {
  console.log("La suma de los cuatro números es: " + suma);
}
